import { get } from 'http';
import { router, publicProcedure } from '../../trpc';
import z from 'zod'

export const faqRouter = router({
    getall: publicProcedure.query(async ({ctx: { client }, input}) => {

        const data = await client.faqItem.findMany();
        
        return data;
    })
})
