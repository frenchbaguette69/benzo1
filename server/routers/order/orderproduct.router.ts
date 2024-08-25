import { router, publicProcedure } from '../../trpc';
import z from 'zod'

export const orderProductRouter = router({
    insert: publicProcedure.input(z.object({ quantity: z.number(), productId: z.number(), orderId: z.number() })).mutation(async ({ ctx: { client }, input }) => {

        await client.orderProduct.create({
            data: {quantity: input.quantity, product: { connect: { id: input.productId } }, order: { connect: {id: input.orderId}}}
        })

    })
})
