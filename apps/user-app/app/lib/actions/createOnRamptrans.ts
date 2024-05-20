"use server"
import prisma from "@repo/db/client";
import { getServerSession } from "next-auth"
import { authoptions } from "../auth"


export const  createOnRamptransaction=async(amount:number,provider:string)=>{
   const session =await getServerSession(authoptions)
   const token=(Math.random()*1000).toString();
   const userId=session?.user?.id;

   if(!userId){
    return {
        message:"not looged in"
    }
   }
   await prisma.onRampTransaction.create({
    data:{
       userId:Number(userId),
       amount:amount*100,
       status:"Processing",
       startTime:new Date,
       provider,
       token:token
    }
   })
   return {
    message:"onramptransaction added"
   }
}