import { router, publicProcedure } from '../../trpc';
import z from 'zod'

export const orderProductRouter = router({
    insert: publicProcedure.input(z.object({ email: z.string() })).mutation(async ({ ctx: { client }, input }) => {
    })
})
