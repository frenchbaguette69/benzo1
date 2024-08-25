import { router, publicProcedure } from '../../trpc';
import z from 'zod'

export const userRouter = router({
    login: publicProcedure.input(z.object({ email: z.string(), password: z.string() })).mutation(async ({ctx: { client }, input}) => {

        const user = await client.user.findUnique({
            where: { email: input.email }
        })

        if (!user) {
            throw new Error("User not found")
        }

        if (user.password !== input.password) {
            throw new Error("Invalid password")
        }

        return user;
    })
})
