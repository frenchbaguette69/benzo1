import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

export const createContext = async ({ req, res }: CreateNextContextOptions) => {

    const session = await getSession({ req })

    const client = new PrismaClient();

    return {
        req,
        res,
        client,
        user: session?.user
    };
}

export type Context = Awaited<ReturnType<typeof createContext>>;