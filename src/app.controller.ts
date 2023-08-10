import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequest } from './dto/createUserRequest.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  creatUser(createUserRequest: CreateUserRequest) {
    return this.appService.createUserRequest(createUserRequest);
  }
}
