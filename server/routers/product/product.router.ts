import { ProductCategory } from '@prisma/client';
import { router, publicProcedure } from '../../trpc';
import z from 'zod';

export const productRouter = router({
    insert: publicProcedure.input(z.object({ name: z.string().max(70, { message: "Exceeded character limitation" }), description: z.string(), price: z.number(), stock: z.number(), category: z.nativeEnum(ProductCategory) }))
    .mutation(async ({ ctx: { client }, input }) => {

        const data = await client.product.create({
            data: {
                ...input
            }
        })

        return data;
    })
})
