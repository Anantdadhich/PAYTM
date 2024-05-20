import  prisma  from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

export const authoptions={
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                phone:{label:"Phone number", type:"text" ,placeholder:"123123123",required:true},
                password:{label:"password",type:"password",required:true}
            },
            async authorize(credentials:any){
                const hashed_password=await bcrypt.hash(credentials.password,10)
                const existinguser=await prisma.user.findFirst({
                    where:{
                        number:credentials.phone
                    }
                })
                if(existinguser){
                    const passwordvalidation=await bcrypt.compare(credentials.password,existinguser.password);
                    if(passwordvalidation){
                        return {
                            id:existinguser.id.toString(),
                            name:existinguser.name,
                            number:existinguser.number
                        }
                    }
                    return null;

                }
            // if no user is found then we make new user 
                try {
                    const user =await prisma.user.create({
                        data:{
                            number:credentials.phone,
                            password:hashed_password
                        }
                    })
                    return {
                        id:user.id.toString(),
                        name:user.name,
                        email:user.number
                    }
                } catch (error) {
                    console.log(error)
                    
                }
                return null
            }
        })
    ],
    secret:process.env.JWT_SECRET ||"secret",
    callbacks:{
        async session({token,session}:any){
            session.user.id=token.sub

            return session
        }
    }
}