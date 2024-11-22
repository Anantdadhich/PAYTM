"use client";

import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { Textinput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2ptransfer";

export const Sendcard = () => {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="h-[90vh]  flex items-center justify-center">
      <Center>
        <Card title="Send Money">
          <div className="min-w-72 p-4">
      
            <Textinput
              placeholder="Enter Phone Number"
              label="Recipient Number"
              onChange={(value) => {
                setNumber(value);
              }}
            />
      
            <Textinput
              placeholder="Enter Amount"
              label="Amount "
              onChange={(value) => {
                setAmount(value);
              }}
           
            />
          
            <div className="pt-6 flex justify-center">
              <Button
               
                onClick={async () => {
                  await p2pTransfer(number, Number(amount) * 100);
                }}
              >
                Send Money
              </Button>
            </div>
          </div>
        </Card>
      </Center>
    </div>
  );
};
