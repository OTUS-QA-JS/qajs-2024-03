import AuthService from '../framework/services/AuthService.js'
import BookService from '../framework/services/BookService.js'
import UserBookService from '../framework/services/UserBookService.js'
import config from '../framework/config/config.js'
import books from '../framework/fixtures/books.json'
import { addMsg } from 'jest-html-reporters/helper'

describe('Книги', () => {
  const userId = config.userId
  const isbn = books.books[0].isbn
  const book2 = books.books[1]
  let token

  beforeAll(async () => {
    const { data } = await AuthService.generateToken({
      userName: config.username,
      password: config.password,
    })

    token = data.token
  })

  it('Список книг', async () => {
    const response = await BookService.getAll()
    expect(response.status).toBe(200)
  })

  it('Получение информации о книге', async () => {
    const response = await BookService.getBook({ isbn })
    expect(response.status).toBe(200)
    expect(response.data.title).toEqual('Git Pocket Guide')
    addMsg({ message: `Книга имеется : ${response.data.title}` })
  })

  it('Добавление книги в коллекцию к пользователю', async () => {
    const response = await UserBookService.addBook({
      userId,
      isbns: [isbn],
    })
    expect(response.data).toEqual({ books: [{ isbn }] })
  })

  it('Заменить книгу в коллекции пользователя', async () => {
    const responseAddBook = await UserBookService.replace({
      userId,
      fromIsbn: isbn,
      toIsbn: book2.isbn,
    })
    expect(responseAddBook.status).toBe(200)
  })

  it('Удалить книгу', async () => {
    console.log(isbn)
    const response = await UserBookService.removeBook({
      userId,
      isbn: book2.isbn,
    })
    expect(response.data).toEqual({})
  })
})
