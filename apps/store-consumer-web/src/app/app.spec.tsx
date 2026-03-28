import { render, screen } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

afterEach(() => {
  vi.unstubAllGlobals();
  vi.clearAllMocks();
});

describe('App', () => {
  it('renders home data when the API request succeeds', async () => {
    const mockedFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        title: 'Welcome to Rocky Store',
        message: 'Shop featured products from trusted local stores.',
      }),
    });
    vi.stubGlobal('fetch', mockedFetch);

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    expect(screen.getByText('Loading store home data...')).toBeTruthy();

    expect(
      await screen.findByRole('heading', { name: 'Welcome to Rocky Store' }),
    ).toBeTruthy();
    expect(
      screen.getByText('Shop featured products from trusted local stores.'),
    ).toBeTruthy();
    expect(mockedFetch).toHaveBeenCalledWith('/api/consumer/home');
  });

  it('renders a fallback message when the API request fails', async () => {
    const mockedFetch = vi.fn().mockRejectedValue(new Error('Network error'));
    vi.stubGlobal('fetch', mockedFetch);

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    expect(await screen.findByRole('alert')).toBeTruthy();
    expect(
      screen.getByText('We could not load home content. Please try again.'),
    ).toBeTruthy();
  });
});
