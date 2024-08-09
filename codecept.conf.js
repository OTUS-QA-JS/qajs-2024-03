/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './bdd/output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://87.242.86.42:8080/',
      show: false
    }
  },
  include: {
    'Я': './steps_file.js'
  },
  name: 'qajs-2024-03',
  translation: 'ru-RU'
}