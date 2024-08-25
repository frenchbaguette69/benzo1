import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { PrismaClient } from "@prisma/client";

export const createContext = async ({ req, res }: CreateNextContextOptions) => {

    const client = new PrismaClient();

    return {
        req,
        res,
        client
    };
}

export type Context = Awaited<ReturnType<typeof createContext>>;