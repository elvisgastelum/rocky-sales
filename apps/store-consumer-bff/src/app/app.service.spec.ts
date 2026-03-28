import { Test } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getConsumerHomeData', () => {
    it('should return consumer home data', () => {
      expect(service.getConsumerHomeData()).toEqual({
        title: 'Welcome to Rocky Store',
        message: 'Shop featured products from trusted local stores.',
      });
    });
  });
});
