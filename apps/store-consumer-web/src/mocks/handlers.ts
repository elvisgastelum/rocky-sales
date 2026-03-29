import { http, HttpResponse } from 'msw';

export const storeConsumerWebMswHandlers = [
  http.get('/api/consumer/home', () => {
    return HttpResponse.json({
      title: 'Welcome to Rocky Store',
      message: 'Shop featured products from trusted local stores.',
    });
  }),
];
