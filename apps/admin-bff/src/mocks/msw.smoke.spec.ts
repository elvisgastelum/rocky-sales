import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  http.get('http://msw.local/api/admin/home', () =>
    HttpResponse.json({
      title: 'Rocky Admin Home',
      message: 'MSW is intercepting admin API requests.',
    }),
  ),
);

describe('admin-bff msw smoke', () => {
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
    const response = await fetch('http://msw.local/api/admin/home');
    const body = (await response.json()) as { title: string; message: string };

    expect(response.status).toBe(200);
    expect(body).toEqual({
      title: 'Rocky Admin Home',
      message: 'MSW is intercepting admin API requests.',
    });
  });
});
