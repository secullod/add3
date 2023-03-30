import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  address: { type: String, required: true, index: true },
  loginBalances: {
    type: [{ loginTime: Date, balance: Number }],
    default: [],
  },
  mintedAmounts: {
    type: [{ mintAmount: Number, mintTime: Date, toAddress: String }],
    default: [],
  },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});
