import {
  time,
  minutesDisplay,
  secondsDisplay,
  forestCard,
  rainCard,
  coffeeCard,
  fireplaceCard,
  forestAudio,
  rainAudio,
  coffeeStoreAudio,
  fireplaceAudio,
} from './src/modules/elements.js'
import Timer from './src/factories/timer.js'
import Sounds from './src/factories/sounds.js'
import * as events from './src/modules/events.js'

export const timer = Timer({
  time,
  minutesDisplay,
  secondsDisplay,
})

export const sounds = Sounds({
  forestAudio,
  rainAudio,
  coffeeStoreAudio,
  fireplaceAudio,
})

export function removeSelectedStyle() {
  forestCard.classList.remove('selected')
  rainCard.classList.remove('selected')
  coffeeCard.classList.remove('selected')
  fireplaceCard.classList.remove('selected')
}

export function nonSelectCards(card1, card2, card3, opacity) {
  card1 = opacity === '1' ? increaseCardSize(card1, opacity) : decreaseCardSize(card1, opacity)
  card2 = opacity === '1' ? increaseCardSize(card2, opacity) : decreaseCardSize(card2, opacity)
  card3 = opacity === '1' ? increaseCardSize(card3, opacity) : decreaseCardSize(card3, opacity)
}

function decreaseCardSize(card, opacity) {
  card.style.transform = 'scale(0.8)'
  card.style.transition = 'transform .3s'
  card.style.opacity = opacity
}

function increaseCardSize(card, opacity) {
  card.style.transform = 'scale(1)'
  card.style.transition = 'transform .3s'
  card.style.opacity = opacity
}

function start() {
  events.registerControls()
  events.registerSounds()
  events.controlThemes()
}

start()