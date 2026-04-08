import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(): Promise<User> {
    return this.usersService.create();
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}