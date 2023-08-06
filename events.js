import {
  controls,
  themes,
  forestCard,
  rainCard,
  coffeeCard,
  fireplaceCard,
  forestAudio,
  rainAudio,
  coffeeStoreAudio,
  fireplaceAudio,
  forestVolume,
  rainVolume,
  coffeeVolume,
  fireplaceVolume,
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

  soundCards.addEventListener('keypress', (event) => {
    if (event.key == ' ') {
      executeAction(event)
    }
  })

  forestVolume.addEventListener('input', () => {
    forestAudio.volume = Number(forestVolume.value) / 100
  })

  rainVolume.addEventListener('input', () => {
    rainAudio.volume = Number(rainVolume.value) / 100
  })

  coffeeVolume.addEventListener('input', () => {
    coffeeStoreAudio.volume = Number(coffeeVolume.value) / 100
  })

  fireplaceVolume.addEventListener('input', () => {
    fireplaceAudio.volume = Number(fireplaceVolume.value) / 100
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