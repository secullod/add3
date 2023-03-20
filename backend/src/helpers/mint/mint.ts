import User from "../../models/User";

export const mint = async (fromAddress: string, toAddress: string, mintAmount: number) => {
    try {
        const user = await User.findOneAndUpdate({address: fromAddress.toLowerCase()}, {
            $push: {mintedAmounts: {mintTime: new Date(Date.now()), mintAmount, toAddress: toAddress.toLowerCase()}},
            updated: new Date(Date.now()),
        }, {new: true})

        return {data: user};
    } catch (error: any) {
        return {error: error.message};
    }
};
