import User from "../../models/User";

export const createOrUpdateUser = async (userAddress: string, userBalance: number) => {
    try {
        const user = await User.findOneAndUpdate({address: userAddress.toLowerCase()}, {
            address: userAddress.toLowerCase(),
            $push: {loginBalances: {loginTime: new Date(Date.now()), balance: userBalance}},
            updated: new Date(Date.now()),
        }, {upsert: true, strict: true, new: true})

        return {data: user}
    } catch (error: any) {
        return {error: error.message};
    }
}
