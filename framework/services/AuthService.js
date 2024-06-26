import config from '../config/config.js'

const addUser = async (userName, password) => {
  const response = await fetch(`${config.baseURL}/Account/v1/User`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userName, password),
  })

  return {
    headers: response.headers,
    status: response.status,
    data: await response.json(),
  }
}

const loginUser = async (userName, password) => {
  const response = await fetch(`${config.baseURL}/Account/v1/Login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userName, password),
  })

  return {
    headers: response.headers,
    status: response.status,
    data: await response.json(),
  }
}
// console.log('userName, password = ' + config.username + config.password)
// const responseLoginUser = loginUser(config.username, config.password)
// console.log('responseLoginUser = ' + responseLoginUser)

const generateToken = async (userName, password) => {
  const response = await fetch(`${config.baseURL}/Account/v1/GenerateToken`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userName, password),
  })
  return {
    headers: response.headers,
    status: response.status,
    data: await response.json(),
  }
}

const authorized = async ( userName, password) => {
  const response = await fetch(`${config.baseURL}/Account/v1/Authorized`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: await JSON.stringify(userName, password),
  })

  return {
    headers: response.headers,
    status: response.status,
    data: await response.json(),
  }
}

const deletUser = async ({ uuid }) => {
  const response = await fetch(`${config.baseURL}/v1/User/${uuid}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic VXNlcjpBYXNkYXNkXyEyMzEyMzE=',
    },
    body: 'false',
  })
  return {
    status: response.status,
  }
}




export default {
  addUser,
  loginUser,
  generateToken,
  authorized,
  deletUser,
}
