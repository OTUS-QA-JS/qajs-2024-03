import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'

test('Успешная регистрация', async ({ page }) => {
  await page.goto('https://rwa-194.87.102.103.sslip.io/register')
  await page.getByTestId('input-username').fill(faker.person.firstName())
  await page.getByTestId('input-email').fill(faker.internet.email())
  await page.getByTestId('input-password').fill('12345678')
  await page.getByTestId('btn-submit').click()
  await expect(page.getByText('No articles are here... yet.')).toBeVisible()
})

test('Успешная авторизация', async ({ page }) => {
  await page.goto('https://rwa-194.87.102.103.sslip.io/login')
  await page.getByTestId('input-email').fill('testUser')
  await page.getByTestId('input-password').fill('12345678')
  await page.getByTestId('btn-submit').click()
  await page.getByRole('button', { name: 'Return Home' }).click()

  await expect(page.getByText('A place to share your')).toBeVisible()
})

test('Авторизация без пароля', async ({ page }) => {
  await page.goto('https://rwa-194.87.102.103.sslip.io/login')
  await page.getByTestId('input-email').fill('testUser')
  await page.getByTestId('input-password').fill('')
  await page.getByTestId('btn-submit').click()
  await page.getByRole('button', { name: 'Return Home' }).click()
  await expect(page.getByText('A place to share your')).toBeVisible()
})

//'testUser'
//'testEmal@mail.ru'
//`12345678`
