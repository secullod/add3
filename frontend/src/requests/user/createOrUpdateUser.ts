import {User} from "../../types";
import {instance} from "../config";

export const createOrUpdateUser = async (address: string, balance: number): Promise<User | null> => {
    try {
        const {data} = await instance.post(`user/${address}`, {balance})

        return (data as User)
    } catch (error) {
        console.log('error:', error);
        return null
    }
}
