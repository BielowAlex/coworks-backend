import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':id')
  async getUserById() {}

  @Get()
  async getAllUsers() {}
  @Post()
  async createUser() {}

  @Post(':id')
  async updateUser() {}
}
