import { router, publicProcedure } from '../../trpc';
import z from 'zod'

export const orderRouter = router({
    insert: publicProcedure.input(z.object({ email: z.string() })).mutation(async ({ ctx: { client }, input }) => {

        const timestamp = Date.now().toString(); // Current timestamp
        const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0'); // Random 3-digit number
        
        await client.order.create({
            data: {
                orderNumber: `ORD-${timestamp}-${randomNum}`,
                user: {connect: { email: input.email }},
            }
        })
    })
})
