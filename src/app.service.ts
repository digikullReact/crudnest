import { Injectable } from '@nestjs/common';

@Injectable() // dependency injection 
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
