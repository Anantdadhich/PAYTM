"use client"


import Appbar from "@repo/ui/appbar"
import { useSession,signIn,signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

const AppBarClient = () => {
    const session=useSession()
    const router =useRouter()

  return (
    <div>
      <Appbar onSignin={signIn} onSignout={async()=>{
        await signOut()
        router.push("/api/auth/signin")
      }} user={session.data?.user}></Appbar>
    </div>
  )
}

export default AppBarClient
