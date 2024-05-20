import { getServerSession } from "next-auth"
import { authoptions } from "../../lib/auth"
import { NextResponse } from "next/server"


export const GET =async ()=>{
    const session=await getServerSession(authoptions)  //user session 
    if(session.user){
        return NextResponse.json({
        user:session.user
        })
    }

    return NextResponse.json({
        message:"not loged in"
    },
{status:403})
}