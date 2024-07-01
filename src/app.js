const scores = {
  Anna: 10,
  Olga: 1,
  Ivan: 5,
}

function getScore(obj) {
  return Object.values(obj).reduce((a, b) => a + b, 0)
}

const summ = getScore(scores)

console.log('summ = ', summ)
