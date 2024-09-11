"use client"
import { signIn, useSession } from "next-auth/react"
import { SecondaryButton } from "./Button"
import { useRouter } from "next/navigation";

export const Hero = () => {
    const session = useSession();
    const router = useRouter()
    return <div className="m-100">
        <div className="text-6xl font-medium">
            <div className="flex justify-center text-center">
                {/* TODO : Make Revolution font-colour blue without running the responsivness of HERO */}
                    The Indian Cryptocurrency <span className="text-blue-400 ml-1">Revolution</span>
            </div>
            <div className="flex justify-center pt-4 text-2xl text-slate-500 text-center">
                Create a fictional wallet from india with just google account
            </div>
            <div className="flex justify-center text-2xl text-slate-500 text-center">
                Convert the INR into Cryptocurrency
            </div>
            <div className="flex justify-center p-7 m-7">
                {session.data?.user ? <SecondaryButton onClick={()=>{router.push('/dashbord')}}>go to dashbord</SecondaryButton> : <SecondaryButton onClick={()=>{signIn("google")}}>Sign In with google</SecondaryButton>}
            </div>
        </div>
    </div>
}