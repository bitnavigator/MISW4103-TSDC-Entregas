import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/ghost/#/signin');
  
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill('lwilches@gmail.com');
  await page.getByPlaceholder('•••••••••••••••').click();
  await page.getByPlaceholder('•••••••••••••••').fill('LEwima123456');
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await expect(page).toHaveURL('http://localhost:3001/ghost/#/dashboard');
  await page.screenshot({path: './result/post/create_post/screenshot/dashboard.png'})
  await page.getByRole('link', { name: 'New post' }).click();
  await expect(page).toHaveURL('http://localhost:3001/ghost/#/editor/post');
  await page.getByPlaceholder('Post title').click();
  await page.getByPlaceholder('Post title').fill('post de pruebas automatizado con  playwrigth');
  
    
  
  await page.locator('.koenig-editor__editor').click();
  //await page.getByPlaceholder('Begin writing your post...').fill('Este es un post de puebas')
  await page.waitForTimeout(5000);
  await page.getByText('Draft - Saved').click();
  await page.screenshot({path: './result/post/create_post/screenshot/post.png'})
  await page.goto('http://localhost:3001/ghost/#/dashboard');
});