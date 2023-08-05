import state from './state.js'
import {
  appState,
  time,
  forestAudio,
  rainAudio,
  coffeeStoreAudio,
  fireplaceAudio,
} from './elements.js'
import {
  sounds,
  timer,
  removeSelectedStyle
} from '../../script.js'

function toggleRunning() {
  state.isRunning = appState.classList.toggle('running')

  if (state.isRunning) timer.countdown()
  else clearTimeout(time.idCountdown)

  sounds.buttonPress()
}

function resetTimer() {
  timer.stop()
  if (state.isRunning) appState.classList.toggle('running')
  sounds.buttonPress()
}

function addMinutes() {
  const totalSeconds = timer.totalSecondsCountdown()

  if (!totalSeconds && (time.minutes * 60 + time.seconds <= 3300)) {
    timer.addMinutes()
    timer.updateDisplay()
  } else if (totalSeconds <= 3300) {
    timer.addMinutes()
    timer.updateDisplay(timer.getMinutes(), timer.getSeconds())
  }
}

function removeMinutes() {
  const totalSeconds = timer.totalSecondsCountdown()

  if (!totalSeconds && (time.minutes * 60 + time.seconds > 300)) {
    timer.removeMinutes()
    timer.updateDisplay()
  } else if (timer.getMinutes() * 60 + timer.getSeconds() > 300) {
    timer.removeMinutes()
    timer.updateDisplay(timer.getMinutes(), timer.getSeconds())
  }
}

function playMusic() {
  const musicClass = event.target.classList.length === 1 ? event.target.classList[0] : event.target.classList[1]
  const card = document.getElementById(musicClass)

  sounds.pauseAudio()
  removeSelectedStyle()

  if (!state.isMusicOn || state.isMusicOn && musicClass != state.musicSelected) {
    let audio

    if (musicClass === 'forest') {
      audio = forestAudio
    } else if (musicClass === 'rain') {
      audio = rainAudio
    } else if (musicClass === 'coffee') {
      audio = coffeeStoreAudio
    } else if (musicClass === 'fireplace') {
      audio = fireplaceAudio
    }

    sounds.isSelected(card, audio)
    state.musicSelected = musicClass
    state.isMusicOn = true

  } else if (musicClass === state.musicSelected) {
    sounds.pauseAudio()
    removeSelectedStyle()
    state.isMusicOn = false
    state.musicSelected = null
  }
}

function toggleTheme() {
  state.isLightTheme = !state.isLightTheme
  appState.classList.toggle('dark-theme')
}

export {
  toggleRunning,
  resetTimer,
  addMinutes,
  removeMinutes,
  playMusic,
  toggleTheme
}