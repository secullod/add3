import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { MintDto } from './dto/mint.dto';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  get(@Param('id') id): Promise<User> {
    return this.userService.get(id);
  }

  @Post('/mint/:id')
  mint(
    @Body() mintDto: MintDto,
    @Param('id')
    id,
  ): Promise<User> {
    return this.userService.mint(id, mintDto.toAddress, mintDto.mintAmount);
  }

  @Post(':id')
  createorUpdate(
    @Body() createUserDto: CreateUserDto,
    @Param('id')
    id,
  ): Promise<User> {
    return this.userService.createOrUpdate(id, createUserDto.balance);
  }
}
