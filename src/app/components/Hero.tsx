"use client"
import { signIn, useSession } from "next-auth/react"
import { SecondaryButton } from "./Button"

export const Hero = () => {
    const session = useSession();

    return <div className="m-100">
        <div className="text-6xl font-medium">
            <div className="flex justify-center ">
                <span>
                    The Indian Cryptocurrency
                </span>
                <span className="text-blue-500 pl-2">
                    Revolution
                </span>
            </div>
            <div className="flex justify-center pt-4 text-2xl text-slate-500">
                Create a fictional wallet from india with just google account
            </div>
            <div className="flex justify-center text-2xl text-slate-500">
                Convert the INR into Cryptocurrency
            </div>
            <div className="flex justify-center p-7 m-7">
                {session.data?.user ? <SecondaryButton onClick={()=>{alert("hello")}}>go to dashbord</SecondaryButton> : <SecondaryButton onClick={()=>{signIn("google")}}>signIn with google</SecondaryButton>}
            </div>
        </div>
    </div>
}