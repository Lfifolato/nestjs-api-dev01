import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    const data = {
      mensagem: 'Hello world!',
    };

    return data;
  }
}
