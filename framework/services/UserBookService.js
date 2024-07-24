import supertest from 'supertest'
import config from '../config/config.js'

const replaceBook = async ({ userId, fromIsbn, toIsbn }) => {
  const response = await supertest(config.baseURL)
    .put(`/BookStore/v1/Books/${fromIsbn}`)
    .auth(config.username, config.password)
    .send({
      userId,
      isbn: toIsbn,
    })
  return {
    headers: response.headers,
    status: response.status,
    data: response.body,
  }
}

const addBook = async ({ userId, isbns }) => {
  const payload = {
    userId,
    collectionOfIsbns: isbns.map(isbn => ({ isbn })),
  }

  const response = await supertest(config.baseURL)
    .post('/BookStore/v1/Books')
    .set('Accept', 'application/json')
    .auth(config.username, config.password)
    .send(payload)

  return {
    headers: response.headers,
    status: response.status,
    data: response.body,
  }
}
const removeAllBooks = async ({ userId, token }) => {
  const response = await supertest(config.baseURL)
    .delete(`/BookStore/v1/Books?UserId=${userId}`)
    .auth(config.username, config.password)

  return {
    headers: response.headers,
    status: response.status,
    data: response.body,
  }
}
const removeBook = async ({ userId, isbn }) => {
  const payload = {
    isbn,
    userId,
  }
  const response = await supertest(config.baseURL)
    .delete(`/BookStore/v1/Book?ISBN=${isbn}`)
    // .set('Authorization', 'Basic VXNlcjpBYXNkYXNkXyEyMzEyMzE=')
    .auth(config.username, config.password)
    .send(payload)
  return {
    headers: response.headers,
    status: response.status,
    data: response.body,
  }
}

export default {
  replace: replaceBook,
  addBook: addBook,
  removeAll: removeAllBooks,
  removeBook,
}
