import { Button } from "./button";

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  onSignin: () => void;
  onSignout: () => void;
}

const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  return (
    <div className="flex justify-between items-center px-6 py-3 border-b shadow-md">
      
      <div className="text-2xl font-bold text-purple-500">
        Pay<span className="text-purple-700">Bank</span>
      </div>

     
      <div>
        <Button
         
          onClick={user ? onSignout : onSignin}
        >
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};

export default Appbar;
