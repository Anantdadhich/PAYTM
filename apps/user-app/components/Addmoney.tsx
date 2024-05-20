"use client"
import { Button } from "@repo/ui/button"
import {Textinput} from "@repo/ui/textinput"
import { Select } from "@repo/ui/select"
import { Card } from "@repo/ui/card"
import { useState } from "react"
import { createOnRamptransaction } from "../app/lib/actions/createOnRamptrans"




const SUPPORTED_BANKS=[{
    name:"HDFC Bank",
    redirectUrl:"https://netbanking.hdfcbank.com"
},{
    name: "AXIS Bank",
    redirectUrl: "https://www.axisbank.com/"
}
]

export const Addmoney = () => {
    const [redirectUrl,setredirectUrl]=useState(SUPPORTED_BANKS[0]?.redirectUrl)
    const [amount,setamount]=useState(0)
    const [provider,setprovider]=useState(SUPPORTED_BANKS[0]?.name ||"")
    return   <Card title="Add Money">
      <div className="w-full"  >
         <Textinput label={"Amount"} placeholder={"Amount"} onChange={(value)=>{
            setamount(Number(value))
         }}></Textinput>
   
      <div className=" py-4 text-left">
         Bank
      </div>
     <Select onSelect={(value)=>{
        setredirectUrl(SUPPORTED_BANKS.find(x=>x.name ===value)?.redirectUrl ||"")
        setprovider(SUPPORTED_BANKS.find(x=>x.name===value)?.name ||"")
     }} options={SUPPORTED_BANKS.map(x=>({
        key:x.name,
        value:x.name
     }))}>

        
     </Select>
     <div className="flex justify-center pt-4">
        <Button onClick={async()=>{
         await createOnRamptransaction(amount*100,provider)
            window.location.href=redirectUrl ||""
        }}>
            Add Money

        </Button>

     </div>
 </div>
   </Card>
  
}

