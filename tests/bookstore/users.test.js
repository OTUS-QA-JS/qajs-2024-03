import { AuthService, UserService, UserFixture } from '../../framework'

describe('Users', () => {
  let token
  let userId
  let newUser
  const userGhostService = new UserService()
  let userAuthService

  beforeAll(async () => {
    newUser = UserFixture.generateUserCredentials()
  })

  it('Авторизован ли пользователь?', async () => {
    const responseCreateUser = await userGhostService.create(newUser)
    userId = responseCreateUser.data.userID

    const { data: authorizedBeforeLogin } =
      await AuthService.authorized(newUser)

    const responseToken = await AuthService.generateToken(newUser)
    token = responseToken.data.token

    userAuthService = new UserService(token)

    const { data: authorizedAfterLogin } = await AuthService.authorized(newUser)

    expect(authorizedBeforeLogin).toBe(false)
    expect(authorizedAfterLogin).toBe(true)
  })

  it('Удаление юзера', async () => {
    const response = await userAuthService.remove(userId)
    expect(response.status).toBe(204)
    expect(response.data).toBe('')
  })
})
