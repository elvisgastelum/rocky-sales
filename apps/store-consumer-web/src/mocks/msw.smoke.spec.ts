describe('store-consumer-web msw smoke', () => {
  it('intercepts /api/consumer/home', async () => {
    const response = await fetch('/api/consumer/home');
    const body = (await response.json()) as { title: string; message: string };

    expect(response.status).toBe(200);
    expect(body).toEqual({
      title: 'Welcome to Rocky Store',
      message: 'Shop featured products from trusted local stores.',
    });
  });
});
