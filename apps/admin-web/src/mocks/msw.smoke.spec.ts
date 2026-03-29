describe('admin-web msw smoke', () => {
  it('intercepts /api/admin/home', async () => {
    const response = await fetch('/api/admin/home');
    const body = (await response.json()) as { title: string; message: string };

    expect(response.status).toBe(200);
    expect(body).toEqual({
      title: 'Rocky Admin Home',
      message: 'MSW is intercepting admin API requests.',
    });
  });
});
