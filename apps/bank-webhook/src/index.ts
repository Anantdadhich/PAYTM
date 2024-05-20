import express from "express";
import db from "@repo/db/client";

const app=express();
app.use(express.json())

app.post("/hdfcWebhook",async (req,res)=>{
  //we check the request actually came from hdfc bank,use a hdfc webhook here
    const paymentinfomartion:{
        token:string,
        userId:string,
        amount:string
    }={
    token:req.body.token,
    userId:req.body.user_identifier,
    amount:req.body.amount
   }
    try {
   await db.$transaction([
   db.balance.updateMany({
    where:{
        userId:Number(paymentinfomartion.userId)
    },
    data:{
        amount:{
            increment:Number(paymentinfomartion.amount)
        }
    }
   }),
    db.onRampTransaction.updateMany({
    where:{
        token:paymentinfomartion.token
    },
    data:{
        status:"Success"
    }
   })
   
])
     res.json({
       message:"captured"
   })
    } catch (error) {
         console.log(error)
         res.status(411).json({
            mesage:"internal server error"
         })
    }
})
app.listen(3003)