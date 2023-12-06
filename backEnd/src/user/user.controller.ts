import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post('user')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/finduser')
  findByEmail(@Body('email') email: string) {
    return this.userService.findByEmail(email);
  }
}
