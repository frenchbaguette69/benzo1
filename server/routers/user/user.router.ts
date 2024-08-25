import { router, publicProcedure } from '../../trpc';
import z from 'zod'

export const userRouter = router({
    register: publicProcedure.input(z.object({ email: z.string(), name: z.string(), shopId: z.number().nullish() })).mutation(async () => {

        return 'Hello World';
    })
})
