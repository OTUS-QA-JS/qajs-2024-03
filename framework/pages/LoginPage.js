import { test, expect } from '@playwright/test'

export function LoginPage ({page}){
    const visit = async () => {
        await page.goto('http://203.31.40.34/login');
        //Войти
        await expect(page.getByRole('button', { name: 'Войти' })).toBeVisible()
        await expect(page).toHaveTitle("CRYSTALPUZZLES")
    }    
    const fillUsername = async (userName) => {
        await page.locator('input[type="email"]').fill(userName);
    }

    const fillPassword = async (password) => {
        await page.locator('input[type="password"]').fill(password);
    }

    const submit = async () => {
        await page.getByLabel('Подтверждая, вы соглашаетесь на обработку персональных данных и c').check();
        await page.getByRole('button', { name: 'Войти' }).click();
    }

    const login = async ({userName, password}) => {
        await visit();
        await fillUsername(userName);
        await fillPassword(password);
        await submit();
    }

   
    
    return{
        visit,
        fillUsername,
        fillPassword,
        submit,
        login,
        }
}