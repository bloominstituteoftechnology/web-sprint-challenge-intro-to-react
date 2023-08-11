const React = require('react')
const { render, fireEvent, screen, within } = require('@testing-library/react')
require('@testing-library/jest-dom/extend-expect')
const server = require('./backend/mock-server')
const App = require('./frontend/components/App')
const people = require('./backend/data/people')
const planets = require('./backend/data/planets')

jest.setTimeout(750)
const waitForOptions = { timeout: 100 }
const queryOptions = { exact: false }

const renderApp = ui => {
  window.localStorage.clear()
  window.history.pushState({}, 'Test page', '/')
  return render(ui)
}

beforeAll(() => { server.listen() })
afterAll(() => { server.close() })
beforeEach(() => { renderApp(<App />) })
afterEach(() => { server.resetHandlers() })

describe('Sprint 6 Challenge', () => {
  test('[1] Luke Skywalker\'s name is not in the DOM after first render', async () => {
    expect(screen.queryByText('Luke Skywalker', queryOptions, waitForOptions)).not.toBeInTheDocument()
    await screen.findByText('Luke Skywalker', queryOptions, waitForOptions)
  })
  test('[2] Luke Skywalker\'s name renders to the DOM eventually', async () => {
    expect(await screen.findByText('Luke Skywalker', queryOptions, waitForOptions)).toBeInTheDocument()
  })
  test('[3] All character cards are rendered with a class of "character-card"', async () => {
    await screen.findByText('Luke Skywalker', queryOptions, waitForOptions)
    const characters = document.querySelectorAll('.character-card')
    expect(characters).toHaveLength(9)
  })
  test('[4] Character cards have the correct character name', async () => {
    await screen.findByText('Luke Skywalker', queryOptions, waitForOptions)
    const characters = document.querySelectorAll('.character-card')
    characters.forEach((charElement, idx) => {
      within(charElement).getByText(people[idx].name, queryOptions)
    })
  })
  test('[5] Character names are rendered with a class of "character-name"', async () => {
    await screen.findByText('Luke Skywalker', queryOptions, waitForOptions)
    const nameHeadings = document.querySelectorAll('.character-name')
    expect(nameHeadings).toHaveLength(9)
  })
  test('[6] Character cards do not render the planets by default', async () => {
    await screen.findByText('Luke Skywalker', queryOptions, waitForOptions)
    const characters = document.querySelectorAll('.character-card')
    characters.forEach((charElement, idx) => {
      const pl = planets.find(p => p.id == people[idx].homeworld).name
      expect(within(charElement).queryByText(pl, queryOptions)).not.toBeInTheDocument()
    })
  })
  test('[7] Character cards will render their planet after clicking on the card', async () => {
    await screen.findByText('Luke Skywalker', queryOptions, waitForOptions)
    const characters = document.querySelectorAll('.character-card')
    const luke = characters[0]
    const leia = characters[4]
    fireEvent.click(luke)
    fireEvent.click(leia)
    characters.forEach((charElement, idx) => {
      const pl = planets.find(p => p.id == people[idx].homeworld).name
      if (charElement === luke || charElement === leia) {
        within(charElement).getByText(pl, queryOptions)
      } else {
        expect(within(charElement).queryByText(pl, queryOptions)).not.toBeInTheDocument()
      }
    })
  })
  test('[8] Character cards will hide their planet after clicking again on the card', async () => {
    await screen.findByText('Luke Skywalker', queryOptions, waitForOptions)
    const characters = document.querySelectorAll('.character-card')
    const luke = characters[0]
    const leia = characters[4]
    fireEvent.click(luke)
    fireEvent.click(leia)
    characters.forEach((charElement) => {
      fireEvent.click(charElement)
    })
    characters.forEach((charElement, idx) => {
      const pl = planets.find(p => p.id == people[idx].homeworld).name
      if (charElement === luke || charElement === leia) {
        expect(within(charElement).queryByText(pl, queryOptions)).not.toBeInTheDocument()
      } else {
        within(charElement).getByText(pl, queryOptions)
      }
    })
  })
  test('[9] Character planets are rendered with a class of "character-planet"', async () => {
    await screen.findByText('Luke Skywalker', queryOptions, waitForOptions)
    const characters = document.querySelectorAll('.character-card')
    characters.forEach((charElement) => {
      fireEvent.click(charElement)
    })
    const planets = document.querySelectorAll('.character-planet')
    expect(planets).toHaveLength(9)
  })
})
