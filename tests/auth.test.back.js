import AuthService from '../framework/services/AuthService.js'
import config from '../framework/config/config.js'

let uuidUser
describe('Создание пользователя', () => {
  it('Пользователь существует', async () => {
    const response = await AuthService.addUser({
      userName: config.username,
      password: config.password,
    })
    expect(response.status).toBe(406)
  })
})

describe('Логин', () => {
  it('Пользователь залогинет', async () => {
    const response = await AuthService.loginUser({
      userName: config.username,
      password: config.password,
    })
    expect(response.status).toBe(200)
    uuidUser = response.data.userId
  })
})

describe('Авторизация', () => {
  it('Успешная авторизация', async () => {
    const response = await AuthService.authorized({
      userName: config.username,
      password: config.password,
    })
    expect(response.status).toBe(200)
    expect(response.data).toBe(true)
  })
})
describe('Удаление пользователя', () => {
  it('Пользователь удален', async () => {
    const response = await AuthService.deletUser({
      uuid: uuidUser,
    })
    expect(response.status).toBe(200)
    expect(response.status).toBe(200)
  })
})
