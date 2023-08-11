const express = require('express')
const StarWars = require('../helpers')

const router = express.Router()

router.get('/people', (req, res) => {
  res.json(StarWars.getPeople())
})

router.get('/planets', (req, res) => {
  res.json(StarWars.getPlanets())
})

module.exports = router
