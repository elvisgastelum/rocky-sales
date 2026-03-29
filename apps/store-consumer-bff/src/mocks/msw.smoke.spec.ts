import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  http.get('http://msw.local/api/consumer/home', () =>
    HttpResponse.json({
      title: 'Welcome to Rocky Store',
      message: 'Shop featured products from trusted local stores.',
    }),
  ),
);

describe('store-consumer-bff msw smoke', () => {
  beforeAll(() => {
    server.listen({ onUnhandledRequest: 'error' });
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('intercepts a node runtime request in jest', async () => {
    const response = await fetch('http://msw.local/api/consumer/home');
    const body = (await response.json()) as { title: string; message: string };

    expect(response.status).toBe(200);
    expect(body).toEqual({
      title: 'Welcome to Rocky Store',
      message: 'Shop featured products from trusted local stores.',
    });
  });
});
