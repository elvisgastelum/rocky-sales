import { http, HttpResponse } from 'msw';

export const adminWebMswHandlers = [
  http.get('/api/admin/home', () => {
    return HttpResponse.json({
      title: 'Rocky Admin Home',
      message: 'MSW is intercepting admin API requests.',
    });
  }),
];
