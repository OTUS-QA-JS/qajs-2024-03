const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './BDD/*.test.js',
  output: './BDD/output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://203.31.40.34',
      show: true
    }
  },
  include: {
    'Я': './BDD/trener.test.js'
  },
  name: 'qajs-2024-03',
  translation: 'ru-RU'
}