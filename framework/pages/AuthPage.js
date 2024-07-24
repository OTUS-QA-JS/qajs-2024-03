import { test, expect } from '@playwright/test'

export function AuthPage ({page}){
    const visit = async () => {
        await page.goto('http://203.31.40.34/registration');
        //Войти
        await expect(page.getByRole('button', { name: 'Зарегистрироваться' })).toBeVisible()
        await expect(page).toHaveTitle("CRYSTALPUZZLES")
    }
    
    const fillFIO = async (userFIO) => {
        await page.locator('div').filter({ hasText: /^ФИО$/ }).getByRole('textbox').fill(userFIO);
    }
    
    const fillBersday = async (userBersday) => {
        await  page.locator('input[type="date"]').fill(userBersday);
    }

    const fillGroup = async (userGroup) => {
        await page.locator('div').filter({ hasText: /^Введите номер вашей группы или имя тренера$/ }).getByRole('textbox').fill(userGroup);
    }

    const fillUsername = async (userName) => {
        await page.locator('input[type="email"]').fill(userName);
    }

    const fillPassword = async (password) => {
        await page.locator('input[type="password"]').fill(password);
    }

    const submit = async () => {
        await page.getByLabel('Подтверждая, вы соглашаетесь на обработку персональных данных и c').check();
        await page.getByRole('button', { name: 'Зарегистрироваться' }).click();
    }

    const auth = async ({userFIO,userBersday,userGroup,userName, password}) => {
        await visit();
        await fillFIO(userFIO);
        await fillBersday(userBersday);
        await fillGroup(userGroup);
        await fillUsername(userName);
        await fillPassword(password);
        await submit();
    }

   
    
    return{
        visit,
        fillFIO,
        fillBersday,
        fillGroup,
        fillUsername,
        fillPassword,
        submit,
        auth,
        }
}