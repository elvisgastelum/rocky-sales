import { Injectable } from '@nestjs/common';

export interface ConsumerHomeResponse {
  title: string;
  message: string;
}

@Injectable()
export class AppService {
  getConsumerHomeData(): ConsumerHomeResponse {
    return {
      title: 'Welcome to Rocky Store',
      message: 'Shop featured products from trusted local stores.',
    };
  }
}
