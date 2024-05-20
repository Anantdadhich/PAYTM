import {PrismaClient} from "@prisma/client"
import bcrypt from "bcrypt"
const prisma=new PrismaClient()

async function main(){
    const alice=await prisma.user.upsert({  //upsert can create and update the functionalities 
        where:{number:"1111111111"}, //to find the existing user with phone number 
        update:{},  //no update criteria we provided 
        create:{
            number:'1111111111',
            password:await bcrypt.hash('alice',10),
            name:'alice',
            Balance:{
                create:{
                    amount:20000,
                    locked:0
                }
            },
            onRampTransaction:{
                create:{
                    startTime:new Date(),
                    status:"Success",
                    amount:20000,
                    token:"token__1",
                    provider:"HDFC BANK"
                }
            }
        }
    })

    const bob=await prisma.user.upsert({
        where:{number:'2222222222'},
        update:{},
        create:{
            number:'2222222222',
            password:await bcrypt.hash('bob',10),
            name:'bob',
            Balance:{
                create:{
                    amount:200,
                    locked:0
                }
            },
            onRampTransaction:{
                create:{
                    startTime: new Date(),
                    status:"Failure",
                    amount:2000,
                    provider:"HDFC BANK",
                    token:"token__2"
                }
            }
        }
    })
    console.log({alice,bob})
}
main().then(async()=>{
    await prisma.$disconnect
})
.catch(async(e)=>{
  console.log(e)
  await prisma.$disconnect
  process.exit(1)
})
