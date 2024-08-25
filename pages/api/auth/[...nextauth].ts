import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(cred: any) {
                const client = new PrismaClient();

                const user = await client.user.findUnique({
                    where: {
                        email: cred.email
                    }
                });

                if (!user) {
                    return null;
                }

                if(bcrypt.compareSync(cred.password, user.password)){
                    return {
                        id: user.id.toString(),
                        email: user.email,
                        password: user.password,
                        isAdmin: user.isAdmin,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt
                    };
                }

                return null;
            }
        })
    ],
    callbacks: {
        async session({session, newSession, token}) {

            const client = new PrismaClient();

            const user = await client.user.findUnique({
                where: {
                    email: session.user.email ?? ""
                } 
            });

            if(!user) {
                throw new Error("No User Found!");
            }

            session.user.isAdmin = user?.isAdmin;

            return session;
        }
    }    
});