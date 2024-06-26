import supertest from 'supertest'
import config from '../config/config.js'

const getBooks = async () => {
  const response = await supertest(config.baseURL).get('/BookStore/v1/Books')
  return {
    headers: response.headers,
    status: response.status,
    data: response.body,
  }
}

const getBook = async ({ isbn }) => {
  const response = await supertest(config.baseURL).get(
    `/BookStore/v1/Book?ISBN=${isbn}`,
  )
  // console.log('url  = ' + config.baseURL + `/BookStore/v1/Book?ISBN=${isbn}`)
  return {
    headers: response.headers,
    status: response.status,
    data: response.body,
  }
}

const createBook = ({ token }) => {
  const response = supertest(config.baseURL)
    .post(`/BookStore/v1/Books`)
    .set('Authorization', `Bearer ${token}`)
    .set('Accept', 'application/json')
    .send(payload)
  return {
    headers: response.headers,
    status: response.status,
    data: response.body,
  }
}

// const getBook = async () => {
//   const response = await fetch(
//     `${config.baseURL}/BookStore/v1/Book?ISBN=9781449325862`,
//     {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },

//     },
//   )

//   return {
//     headers: response.headers,
//     status: response.status,
//     data: await response.json(),
//   }
// }

export default {
  getAll: getBooks,
  createBook,
  getBook,
}
