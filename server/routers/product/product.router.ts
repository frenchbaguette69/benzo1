import { ProductCategory } from '@prisma/client';
import { router, publicProcedure } from '../../trpc';
import z from 'zod';
import fs from 'fs';
import path from 'path';
import { TRPCError } from '@trpc/server';
import { get } from 'http';
import { adminProcedure } from '@/server/middleware/procedures/user.procedure';


export const productRouter = router({
    insert: publicProcedure.input(z.object({ name: z.string().max(70, { message: "Exceeded character limitation" }), description: z.string(), imageBase64: z.string().nullish(), price: z.number(), stock: z.number(), category: z.nativeEnum(ProductCategory) }))
        .mutation(async ({ ctx: { client }, input }) => {


            const b64Sanitized = input.imageBase64?.replace(/^data:([A-Za-z-+/]+);base64,/, "");

            const date = new Date().toISOString().replace(/[-:.]/g, '').slice(0, 15);

            const filePath = path.join(process.cwd(), "uploads", `${date}_${input.name}.png`);

            fs.writeFileSync(filePath, b64Sanitized ?? "", "base64");

            try {
                const data = await client.product.create({
                    data: {
                        category: input.category,
                        description: input.description,
                        name: input.name,
                        price: input.price,
                        stock: input.stock,
                        imageSrc: filePath
                    }
                });
                return data;
            } catch (e: any) {
                throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to insert product" + e.message });
            }

        }),
    getSome: publicProcedure.input(z.object({ take: z.number().default(4) })).query(async ({ ctx: { client }, input }) => {
        const data = await client.product.findMany({
            take: input.take
        });

        return data;
    }),
    getOne: publicProcedure.input(z.object({ name: z.string() })).query(async ({ ctx: { client }, input }) => {

        const data = await client.product.findFirst({
            where: {
                name: input.name
            }
        });

        if (!data) {
            throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to get product" });
        }

        return data;
    }),
    getAllByPaginate: publicProcedure.input(z.object({ skip: z.number().default(1), take: z.number().default(4), cursor: z.number().nullish() })).query(async ({ ctx: { client }, input }) => {
        const productData = await client.product.findMany({
            skip: input.skip,
            take: input.take,
        });

        const productCount = await client.product.count();

        return { productData, productCount };
    })
})
