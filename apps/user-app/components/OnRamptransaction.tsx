import { Card } from '@repo/ui/card'
import React from 'react'

export const OnrampTransactions = ({transactions}:{
    transactions:{
        time:Date,
         provider:string,
         amount:number,
         status:string
    }[]
}
) => {
    
    if(!transactions.length){
        return <Card title="Recent Transactions">
            <div className='py-8 text-center'>
                No recent Transactions
            </div>
        </Card>
    }



  return  <Card title="Recent Transactions">
      <div className='pt-2'>
        {transactions.map(t=> <div className='flex justify-between'> 
          <div>
            <div className='text-sm'>
                Recieved INR
            </div>
            <div className='text-slate-600 text-xs'>
                {t.time.toDateString()}
            </div>
          </div>
          <div className='flex flex-col justify-center'>
        + Rs{t.amount/100} 
          </div>
        
        
        </div>)}

       </div>
    </Card>
  
}

