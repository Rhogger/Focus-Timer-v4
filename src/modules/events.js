import {
  controls,
  themes,
  forestCard,
  rainCard,
  coffeeCard,
  fireplaceCard,
  soundCards
} from './elements.js'
import * as actions from './actions.js'
import { nonSelectCards } from '../../script.js'

function registerControls() {
  controls.addEventListener('click', (event) => {
    executeAction(event)
  })
}

function registerSounds() {
  soundCards.addEventListener('click', (event) => {
    executeAction(event)
  })
}

function controlThemes() {
  themes.addEventListener('click', (event) => {
    executeAction(event)
  })
}

function executeAction(event) {
  const action = event.target.dataset.action

  if (typeof actions[action] != 'function') return

  actions[action]()
}

forestCard.addEventListener('mouseenter', () => {
  nonSelectCards(rainCard, coffeeCard, fireplaceCard, '0.8')
})

forestCard.addEventListener('mouseleave', () => {
  nonSelectCards(rainCard, coffeeCard, fireplaceCard, '1')
})

rainCard.addEventListener('mouseleave', () => {
  nonSelectCards(forestCard, coffeeCard, fireplaceCard, '1')
})

rainCard.addEventListener('mouseenter', () => {
  nonSelectCards(forestCard, coffeeCard, fireplaceCard, '0.8')
})

coffeeCard.addEventListener('mouseenter', () => {
  nonSelectCards(rainCard, forestCard, fireplaceCard, '0.8')
})

coffeeCard.addEventListener('mouseleave', () => {
  nonSelectCards(rainCard, forestCard, fireplaceCard, '1')
})

fireplaceCard.addEventListener('mouseenter', () => {
  nonSelectCards(rainCard, coffeeCard, forestCard, '0.8')
})

fireplaceCard.addEventListener('mouseleave', () => {
  nonSelectCards(rainCard, coffeeCard, forestCard, '1')
})

export {
  registerControls,
  registerSounds,
  controlThemes
}