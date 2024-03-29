import {instance} from "../config";
import {User} from "../../types";

export const postMintToUserAccount = async (fromAddress: string, toAddress: string): Promise<User | null> => {
    try {
        const {data} = await instance.post(`user/mint/${fromAddress}`, {
            toAddress: toAddress,
            mintAmount: 5
        })

        return (data as User)
    } catch (error) {
        console.log('error:', error);
        return null
    }
}
