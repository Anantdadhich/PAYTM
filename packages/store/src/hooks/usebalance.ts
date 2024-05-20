import {useRecoilValue} from "recoil"
import { balanceatom } from "../atoms/balance"

export function Usebalance(){
const value=useRecoilValue(balanceatom)
return value
}
