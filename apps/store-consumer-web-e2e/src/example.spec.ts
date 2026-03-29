import { test, expect } from '@playwright/test';

test('loads and displays consumer home content without route mocking', async ({
  page,
}) => {
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
