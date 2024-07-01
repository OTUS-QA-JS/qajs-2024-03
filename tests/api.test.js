//test
describe('User test', () => {
  it('User exist', async () => {
    const response = await fetch(
      'https://bookstore.demoqa.com/Account/v1/User',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/9.1.1',
        },
        body: '{"userName":"User","password":"Aasdasd_!231231"}',
      },
    )

    expect(response.status).toBe(406)
  })
  it('Password must have!', async () => {
    const response = await fetch(
      'https://bookstore.demoqa.com/Account/v1/User',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/9.1.1',
        },
        body: '{"userName":"User","password":"Aasdasd"}',
      },
    )
    const data = await response.json()
    expect(data.code).toBe('1300')
  })

  it('Success login', async () => {
    const response = await fetch(
      'https://bookstore.demoqa.com/Account/v1/Authorized',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/9.1',
        },
        body: '{"userName":"User","password":"Aasdasd_!23123"}',
      },
    )
    expect(response.status).toBe(200)
  })
  // it('GenerateToken status', async () => {
  //   const response = await fetch(
  //     'https://bookstore.demoqa.com/Account/v1/GenerateToken',
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'User-Agent': 'insomnia/9.1',
  //       },
  //       body: '{"userName":"User","password":"Aasdasd_!23123"}',
  //     },
  //   )
  //   const data = await response.json()
  //   expect(data.status).toBe('Success')
  // })
  it('GenerateToken Failed!', async () => {
    const response = await fetch(
      'https://bookstore.demoqa.com/Account/v1/GenerateToken',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/9.1',
        },
        body: '{"userName":"User","password":"Aasdasd"}',
      },
    )
    const data = await response.json()
    expect(data.status).toBe('Failed')
  })
})
