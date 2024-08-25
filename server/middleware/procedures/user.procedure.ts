import { publicProcedure } from "@/server/trpc";
import { TRPCError } from "@trpc/server";


export const adminProcedure = publicProcedure.use(async (opts) => {
    const { ctx } = opts;
    if (!ctx.user?.isAdmin) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    return opts.next({
      ctx: {
        user: ctx.user,
      },
    });
});