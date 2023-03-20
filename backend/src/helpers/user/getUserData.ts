import User from "../../models/User";

export const getUserData = async (address: string) => {
    try {
        const user = await User.findOne({address: address.toLowerCase()})

        return {data: user};
    } catch (error: any) {
        return {error: error.message};
    }
};
