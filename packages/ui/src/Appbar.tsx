import { Button } from "./button"

interface Appbarprops{
    user?:{
        name?:string|null;
    },
    onSignin:any,
    onSignout:any
}

const Appbar = ({user,onSignin,onSignout}:Appbarprops) => {
  return (
    <div className="flex justify-between border-b px-4">
        <div className="text-lg flex flex-col justify-center">
          Paytm
        </div>
        <div className="flex flex-col justify-center pt-2">
       <Button onClick={user ? onSignout : onSignin}>{user ? "logout":"login"}</Button>
        </div>
      
    </div>
  )
}

export default Appbar
