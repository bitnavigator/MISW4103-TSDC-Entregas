import { test, expect } from '@playwright/test';
test('creacion de usuario', async ({ page }) => {
  
  await page.goto('http://localhost:3001/ghost/#/setup');
  await page.screenshot({path: 'result/create_user/screenshot/login.png'})
  await page.getByPlaceholder('The Daily Awesome').click();
  await page.getByPlaceholder('The Daily Awesome').fill('PruebasAutomatizacion');
  await page.getByPlaceholder('Jamie Larson').click();
  await page.getByPlaceholder('Jamie Larson').fill('Leonardo Wilches');
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill('lwilches@gmail.com');
  await page.getByPlaceholder('At least 10 characters').click();
  await page.getByPlaceholder('At least 10 characters').fill('LEwima123456');
  await page.getByRole('button', { name: 'Create account & start publishing →' }).click();
  await page.goto('http://localhost:3001/ghost/#/setup/done');
  await page.screenshot({path: 'result/create_user/screenshot/dashboard.png'})
});