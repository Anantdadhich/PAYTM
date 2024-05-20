import {atom} from "recoil"

export const balanceatom=atom<number>({
    key:"balance",
    default:0
})