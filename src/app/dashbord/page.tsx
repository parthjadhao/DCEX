import { getServerSession } from "next-auth";
import ProfileCard from "../components/ProfileCard";
import db from "@/app/db";
import { authConfig } from "../lib/auth";


async function getUserWallet(){
    const session = await getServerSession(authConfig)

    const userWallet = await db.solWallet.findFirst({
        where:{
            userId:session?.user?.uid
        },
        select:{
            publicKey:true
        }
    })

    if (!userWallet) {
        return{
            error: "No solana wallet found associated to the user"
        }
    }
    return {error:null,userWallet}
   
}
export default async function () {
    const userWallet = getUserWallet()
    const publicKey = (await userWallet).userWallet?.publicKey
    if (publicKey===undefined) {
        return <></>;
    }
    return <div>
        
        <ProfileCard publicKey={publicKey}></ProfileCard>
    </div>
}