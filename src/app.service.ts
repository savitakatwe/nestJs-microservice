import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRequest } from './dto/createUserRequest.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './files/createUser.event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];
  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  createUserRequest(createUserRequest: CreateUserRequest) {
    this.users.push(createUserRequest);
    this.communicationClient.emit<string>(
      'user_created',
      new CreateUserEvent(createUserRequest.email),
    );
  }
}
