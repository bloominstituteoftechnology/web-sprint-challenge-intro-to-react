const { setupServer } = require('msw/node')
const { rest } = require('msw')
const StarWars = require('./helpers')

function getPeople(req, res, ctx) {
  return res(
    ctx.json(StarWars.getPeople()),
  )
}

function getPlanets(req, res, ctx) {
  return res(
    ctx.json(StarWars.getPlanets()),
  )
}

const handlers = [
  rest.get('http://localhost:9009/api/people', getPeople),
  rest.get('http://localhost:9009/api/planets', getPlanets),
]

module.exports = setupServer(...handlers)
