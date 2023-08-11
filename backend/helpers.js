const people = require('./data/people')
const planets = require('./data/planets')

const getPeople = () => people
const getPlanets = () => planets

module.exports = {
  getPeople,
  getPlanets,
}
