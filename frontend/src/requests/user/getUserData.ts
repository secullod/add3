import {instance} from "../config";
import {User} from "../../types";

export const getUserData = async (address: string): Promise<User | null> => {
    try {
        const {data} = await instance.get(`user/${address}`,)

        return (data as User)
    } catch (error) {
        console.log('error:', error);
        return null
    }
}



