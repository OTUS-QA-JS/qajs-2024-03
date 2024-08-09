import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { AuthPage } from '../framework/pages/AuthPage';
import { LoginPage } from '../framework/pages/LoginPage';

test('Успешная регистрация с произвольными данными, пароль статичен', async ({ page }) => {
  const authPage = AuthPage ({ page });
  page.pause();
  await authPage.auth({
    userFIO: (faker.person.fullName()),
    userBersday: '2001-02-01',
    userGroup: '1',
    userName: faker.internet.email(),
    password: '12345678'
  })
await expect(page.getByRole('heading', { name: 'Главная страница' })).toBeVisible();
});

test('Не успешная регистрация c уже зарегистрированным юзером', async ({ page }) => {
  const authPage = AuthPage ({ page });
  page.pause();
  await authPage.auth({
    userFIO: (faker.person.fullName()),
    userBersday: '2001-02-01',
    userGroup: '1',
    userName: ('yubelik@mail.ru'),
    password: '12345678'
  })
  await page.goto('/registration');
  let fullName = faker.person.fullName()
  await expect(page.getByRole('heading', { name: 'Главная страница' })).toBeEmpty();
  });

test('Успешная авторизация ученика', async ({ page }) => {
  const loginPage = LoginPage ({ page });

  await loginPage.login({
    userName: 'yubelik@mail.ru',
    password: '12345678'
  })
  await expect(page.locator('#root')).toContainText('Главная страница');
});
test('Открытие окна Мои награды', async ({ page }) => {
  const loginPage = LoginPage ({ page });
  await loginPage.login({
    userName: 'yubelik@mail.ru',
    password: '12345678'
  })
  await page.locator('div').filter({ hasText: /^Мои награды$/ }).click();
  await expect(page.getByText('Коллекция наград')).toBeVisible();
});
test('Открытие окна Мои тренировки - Оставить комментарий тренеру', async ({ page }) => {
  const loginPage = LoginPage ({ page });
  await loginPage.login({
    userName: 'yubelik@mail.ru',
    password: '12345678'
  })
  await page.getByRole('link', { name: 'Мои тренировки тренер оценил вашу тренировку' }).click();
  await page.getByRole('link', { name: 'Дмитриева Анастасия Алексеевна Тренер:Анастасия Комбинация 1(жетон 1) 12/11/' }).first().click();
  await expect(page.getByText('Мои занятия')).toBeVisible();
});
test('Смена аватарки для ученика', async ({ page }) => {
  const loginPage = LoginPage ({ page });
  await loginPage.login({
    userName: 'yubelik@mail.ru',
    password: '12345678'
  })
  await page.getByText('Изменить аватарку').click();
  //<img class="Avatar_img__2Urzq" src="/static/media/2.1ea44c21870e3369cffd.png"/>
  await page.locator('img:nth-child(2)').click();
  await page.getByRole('button', { name: 'Сохранить' }).click();
  await expect(page.locator('img').first()).toBeVisible();
  await page.getByText('Изменить аватарку').click();
  await page.locator('img:nth-child(5)').click();
  await page.getByRole('button', { name: 'Сохранить' }).click();
  await expect(page.locator('img src="/static/media/3.7032a059cd5ba41090ba.png').first()).toBeVisible();

});
test('Успешная авторизация тренера', async ({ page }) => {
  const loginPage = LoginPage ({ page });
  await loginPage.login({
    userName: 'trainer@crystal.com',
    password: 'trainerpass'
  })
  await expect(page.locator('#root')).toContainText('Главная страница');
});








