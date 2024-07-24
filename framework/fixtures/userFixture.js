import faker from '@faker-js/faker'

export default function generateUserCredentials() {
  return {
    userName: 'example@example.com', //faker.internet.email(),
    password: 'P@ssw0rd',
  }
}

// console.log(generateUserCredentials())
