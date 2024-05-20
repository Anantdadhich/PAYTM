import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { Addmoney } from "../../../components/Addmoney";
import { authoptions } from "../../lib/auth";
import { OnrampTransactions } from "../../../components/OnRamptransaction";
import { BalanceCard } from "../../../components/Balancecard";




async function getBalance() {
    const session = await getServerSession(authoptions);
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

async function getOnRampTransactions() {
    const session = await getServerSession(authoptions);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}


export default async function(){
     const balance=await getBalance()
     const transactions=await getOnRampTransactions()

    return <div className="w-full">
         <div className="text-4xl font-bold text-[#6a51a6] pt-8 mt-8">
           Transfer
         </div>
         <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
            <div>
                <Addmoney></Addmoney>
            </div>
            <div>
                <BalanceCard amount={balance.amount} locked={balance.locked}></BalanceCard>
                <div className="pt-4">
                    <OnrampTransactions transactions={transactions} ></OnrampTransactions>
                </div>
            </div>
         </div>

    </div>
}