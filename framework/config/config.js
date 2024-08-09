// import 'dotenv/config'
// require('dotenv').config()

const dotenv = require('dotenv')
dotenv.config({ path: '../.env' })

const config = {
  baseURL: process.env.TEST_BASE_API_URL ?? 'https://bookstore.demoqa.com',
  userId: process.env.TEST_USER_ID,
  username: process.env.TEST_USERNAME,
  password: process.env.TEST_PASSWORD,
  browser: process.env.BROWSER,
}

export default Object.freeze(config)
