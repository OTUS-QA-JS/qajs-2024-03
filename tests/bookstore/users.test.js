import { AuthService, UserService, UserFixture } from '../../framework'
import { addMsg } from 'jest-html-reporters/helper'

describe('Users', () => {
  let token
  let userId
  let newUser

  beforeAll(async () => {
    newUser = UserFixture.generateUserCredentials()
  })

  it('Авторизован ли пользователь?', async () => {
    await addMsg({ message: JSON.stringify(newUser, null, 2) })

    const responseCreateUser = await UserService.create(newUser)
    userId = responseCreateUser.data.userID

    const { data: authorizedBeforeLogin } =
      await AuthService.authorized(newUser)

    const responseToken = await AuthService.generateToken(newUser)
    token = responseToken.data.token

    const { data: authorizedAfterLogin } = await AuthService.authorized(newUser)

    expect(authorizedBeforeLogin).toBe(false)
    expect(authorizedAfterLogin).toBe(true)
  })

  it('Удаление юзера', async () => {
    const response = await UserService.remove({ userId, token })
    expect(response.status).toBe(204)
    expect(response.data).toBe('')
  })
})
