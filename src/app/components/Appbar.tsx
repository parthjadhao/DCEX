"use client"
import { signIn, useSession } from "next-auth/react"
import { PrimaryButton } from "./Button"


export const Appbar = () => {
    const session = useSession();
    const signout = () => { }
    const signin = () => { }
    return <div className="px-2 py-2 flex border-b justify-between">
        <div className="flex text-xl font-bold flex-col justify-center">
            DCEX
        </div>
        <div>
            {session.data?.user ? 
                <PrimaryButton onClick={()=>{signout()}}>Logout</PrimaryButton> : <PrimaryButton onClick={()=>signIn}>SignIn</PrimaryButton>}
        </div>
    </div>
}