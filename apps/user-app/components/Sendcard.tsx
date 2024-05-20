"use client"
import { Button } from "@repo/ui/button"
import { Card } from "@repo/ui/card"
import { Center } from "@repo/ui/center"
import {Textinput} from "@repo/ui/textinput"
import {useState} from "react"
import { p2pTransfer } from "../app/lib/actions/p2ptransfer"


export const Sendcard = () => {
    const [number,setnumber]=useState("")
    const [amount,setamount]=useState("")
  return (
    <div className="h-[90-vh]">
        <Center>
            <Card title="send">
          <div className="min-w-72 pt-2">
             <Textinput placeholder={"Number"} label="number" onChange={(value)=>{
                setnumber(value)
             }}></Textinput>
             <Textinput placeholder={"Amount"} label="amount" onChange={(value)=>{
                setamount(value)
             }}></Textinput>
             <div className="pt-4 flex justify-center">
                <Button onClick={async()=>{
          await p2pTransfer(number,Number(amount)*100)
                }}>Send</Button>
             </div>
          </div>
            </Card>
        </Center>
      
    </div>
  )
}


