// @ts-check
import { expect } from '@playwright/test'
import { BasicPage } from './BasicPage'

export class LoginPage extends BasicPage {
  url = '/login'

  async afterVisit() {
    await expect(this.page.locator('h1')).toHaveText('Sign in')
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

  async login({ email, password }) {
    await this.visit()
    await this.fillEmail(email)
    await this.fillPassword(password)
    await this.submitForm()
  }
}
