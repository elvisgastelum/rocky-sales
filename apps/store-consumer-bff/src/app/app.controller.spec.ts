import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getConsumerHomeData', () => {
    it('should return consumer home data', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getConsumerHomeData()).toEqual({
        title: 'Welcome to Rocky Store',
        message: 'Shop featured products from trusted local stores.',
      });
    });
  });
});
