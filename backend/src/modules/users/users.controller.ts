import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':id')
  getUserById(@Param('id') id: string): Promise<User> {
    return;
  }

  @Get()
  getAllUsers(): Promise<User[]> {
    return;
  }

  @Post()
  createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.userService.createUser(body);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() body: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateUser(id, body);
  }
}
