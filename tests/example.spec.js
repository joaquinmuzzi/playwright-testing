// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://armory.warmane.com/character/Frodouwu/Lordaeron/profile');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Warmane/);
});



test('get started link', async ({ page }) => {
  await page.goto('https://armory.warmane.com/character/Frodouwu/Lordaeron/profile');

  const talentsLink = page.getByRole('link', { name: 'Talents' });

  await expect(talentsLink).toBeVisible();

  await Promise.all([
    page.waitForURL('https://armory.warmane.com/character/Frodouwu/Lordaeron/talents'),
    talentsLink.click(),
  ]);

  await expect(page).toHaveURL('https://armory.warmane.com/character/Frodouwu/Lordaeron/talents');
  await expect(page.getByRole('heading', { name: 'Frodouwu' })).toBeVisible();
});
