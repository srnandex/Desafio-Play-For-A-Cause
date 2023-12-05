import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { User } from './user/entities/user.entity';
import { IsPublic } from './auth/decorators/is-public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @IsPublic()
  @Get('/test')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/me')
  getMe(@CurrentUser() currentUser: User) {
    return currentUser;
  }

  @Get('/chat')
  @Render('index')
  Home(): string {
    return;
  }

  @Get('/api/chat')
  async getMessages(@Res() res) {
    const messages = await this.appService.getMessages();
    res.json(messages);
  }
}
