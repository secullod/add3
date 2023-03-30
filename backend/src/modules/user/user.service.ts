import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async get(address: string): Promise<User> {
    try {
      return await this.userModel.findOne({
        address: address.toLowerCase(),
      });
    } catch (error: any) {
      throw new NotFoundException();
    }
  }

  async createOrUpdate(
    userAddress: string,
    userBalance: number,
  ): Promise<User> {
    try {
      return await this.userModel.findOneAndUpdate(
        {
          address: userAddress.toLowerCase(),
        },
        {
          address: userAddress.toLowerCase(),
          $push: {
            loginBalances: {
              loginTime: new Date(Date.now()),
              balance: userBalance,
            },
          },
          updated: new Date(Date.now()),
        },
        { upsert: true, strict: true, new: true },
      );
    } catch (error: any) {
      throw new NotFoundException();
    }
  }

  async mint(fromAddress: string, toAddress: string, mintAmount: number) {
    try {
      return await this.userModel.findOneAndUpdate(
        {
          address: fromAddress.toLowerCase(),
        },
        {
          $push: {
            mintedAmounts: {
              mintTime: new Date(Date.now()),
              mintAmount,
              toAddress: toAddress.toLowerCase(),
            },
          },
          updated: new Date(Date.now()),
        },
        { new: true },
      );
    } catch (error: any) {
      throw new NotFoundException();
    }
  }
}
