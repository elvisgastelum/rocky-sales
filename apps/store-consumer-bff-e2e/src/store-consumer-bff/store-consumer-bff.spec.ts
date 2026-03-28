import axios from 'axios';

describe('GET /api/consumer/home', () => {
  it('should return consumer home data', async () => {
    const res = await axios.get('/api/consumer/home');

    expect(res.status).toBe(200);
    expect(res.data).toEqual({
      title: 'Welcome to Rocky Store',
      message: 'Shop featured products from trusted local stores.',
    });
  });
});
