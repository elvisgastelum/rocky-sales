import { test, expect } from '@playwright/test';

test('loads and displays consumer home content', async ({ page }) => {
  await page.route('**/api/consumer/home', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        title: 'Welcome to Rocky Store',
        message: 'Shop featured products from trusted local stores.',
      }),
    });
  });

  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'Rocky Store Consumer' }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Welcome to Rocky Store' }),
  ).toBeVisible();
  await expect(
    page.getByText('Shop featured products from trusted local stores.'),
  ).toBeVisible();
});
