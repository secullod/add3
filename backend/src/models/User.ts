import mongoose, {Document, Schema} from 'mongoose';

export interface IUser extends Document {
    address: string;
    loginBalances: {loginTime: Date, balance: number}[]
    mintedAmounts: {mintAmount: number, mintTime: Date, toAddress: string}[]
    created: Date;
    updated: Date;
}

const userSchema = new Schema({
    address: { type: String, required: true, index: true },
    loginBalances:{ type: [{loginTime: Date, balance: Number}], default: [] },
    mintedAmounts: { type: [{mintAmount: Number, mintTime: Date, toAddress: String}], default: [] },
    created: {type: Date, default: Date.now },
    updated: {type: Date, default: Date.now }
});

export default mongoose.model<IUser>('User', userSchema);
