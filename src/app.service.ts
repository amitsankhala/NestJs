import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  addingitem(): string {
    return 'you are trying to add an item';
  }
}
