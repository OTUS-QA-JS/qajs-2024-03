// @ts-check
import { expect } from '@playwright/test'
import { BasicPage } from './BasicPage'

export default class AuthPage extends BasicPage {
  url = '/register'

  async afterVisit() {
    await expect(this.page.locator('h1')).toHaveText('Sign up')
  }

  async fillUsername(username) {
    await this.get('input-username').fill(username)
  }

  async fillEmail(email) {
    await this.get('input-email').fill(email)
  }

  async fillPassword(password) {
    await this.get('input-password').fill(password)
  }

  async submitForm() {
    await this.get('btn-submit').click()
  }

  async reg({ username, email, password }) {
    await this.visit()
    await this.fillUsername(username)
    await this.fillEmail(email)
    await this.fillPassword(password)
    await this.submitForm()
  }
}
