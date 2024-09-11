"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { PrimaryButton, SecondaryButton,ThridButton } from "../components/Button"
import { useEffect, useState } from "react"

export default function ProfileCard({publicKey}:{
    publicKey : string
}) {
    const session = useSession()
    const username = session.data?.user?.name
    const profilePicture = session.data?.user?.image
    const router = useRouter()

    // TODO : Add perfect loading skelaton
    if(session.status == "loading"){
        return <div>
            Loading .....
        </div>
    }
    if (!username || !profilePicture) {
        router.push("/")  
        return null;
    }
    return <>
        <div>
            <div className="p-10 w-1/2 m-auto mt-24 border-2 bg-slate-100 rounded-lg">
            <Greeting username={username} profilePicture={profilePicture}></Greeting>
            <Asset publicKey = {publicKey}></Asset>
            </div>
        </div>
    </>
    // return <div className="mt">
    {/* </div> */}
}

const Asset = ({publicKey}:{
    publicKey : string
})=>{
    const [copied,setCopeid] = useState(false)
    useEffect(()=>{
        if(copied){
            let timeout = setTimeout(()=>{
                setCopeid(false)
            },3000)
            return()=>{
                clearTimeout(timeout)
            }
        }
    },[copied])
    return <div className="flex-wrap">
        <div className="mt-3 text-slate-500 font-semibold">DCEX Account Assets</div>
        <div className="flex justify-between flex-shrink">
            <div className="text-5xl mt-2">$0.0 <span className="text-slate-500 text-3xl font-semibold">USD</span></div>
            <SecondaryButton onClick={()=>{
                setCopeid(true)
                navigator.clipboard.writeText(publicKey)
            }}>{copied ? "copied" : "Your Wallet Address"}
            </SecondaryButton>
        </div>
        <div className="flex justify-center mt-10">
            <ThridButton onClick={()=>{}}>Send</ThridButton>
            <ThridButton onClick={()=>{}}>Add Fund</ThridButton>
            <ThridButton onClick={()=>{}}>Withdraw</ThridButton>
            <ThridButton onClick={()=>{}}>Swap</ThridButton>
        </div>
    </div>
}

const Greeting = ({username,profilePicture}:{
    username : string,
    profilePicture:string
}) => {
    return <>
        <div className="flex">
            <img src={profilePicture} className="mr-3 rounded-full"/>
            <div className="font-bold flex mt-aut text-2xl text-left items-center">Welcome <span className="text-blue-400 ml-1">{username}</span></div>
        </div>
    </>

}