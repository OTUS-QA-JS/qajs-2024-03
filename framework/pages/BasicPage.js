export class BasicPage {
  url = '/'

  constructor(page) {
    this.page = page
  }

  async visit() {
    await this.page.goto(this.url)
    await this.afterVisit()
  }

  afterVisit() {
    // throw new Error('checkVisit not implemented')
  }

  get(testId, parent) {
    return parent ? parent.getByTestId(testId) : this.page.getByTestId(testId)
  }

  // getHeader
}
