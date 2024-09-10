import GoogleProvider from "next-auth/providers/google";
import db from "@/app/db";
import NextAuth from "next-auth";
// import Keypair from "@solana/web3.js";
import { Keypair } from "@solana/web3.js";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            // Todo : fixed the types of clientId and clientSecret
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email }) {
            if (account?.provider === "google") {
                const email = user.email;
                console.log(email)
                if (!email) {
                    return false;
                }

                const userDb = await db.user.findFirst({
                    where: {
                        username: email
                    }
                })
                
                if (userDb) {
                    console.log("finded userDb");
                    return true;
                }
                console.log("userDb not present")
                const keyparis = Keypair.generate()
                const publicKey = keyparis.publicKey.toBase58();
                const privateKey = keyparis.secretKey;
                await db.user.create({
                    data: {
                        name: "",
                        profiePicture : profile?.image,
                        username: email,
                        solWallet: {
                            create: {
                                publickey: publicKey.toString(),
                                privatekey: privateKey.toString(),
                            }
                        },
                        inrWallet: {
                            create: {
                                balance: 0
                            }
                        }
                    }
                })
                return true
            }
            return false
        }
    }
    
})

export { handler as GET, handler as POST }