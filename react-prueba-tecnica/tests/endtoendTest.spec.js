// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST = 'http://localhost:5173/';

test('app show random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.innerText()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.length).toBeGreaterThanOrEqual(0);
  await expect(imageSrc).toContain('https://cataas.com/cat/says/');
});

