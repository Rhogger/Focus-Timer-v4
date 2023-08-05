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

}

function resetTimer() {
  if (state.isRunning) {
    timer.stop()
    state.isRunning = appState.classList.toggle('running')
  }
}

function addMinutes() {
  const totalSeconds = timer.totalSecondsCountdown()

  if (!totalSeconds && (time.minutes * 60 + time.seconds <= 3300)) {
    timer.addMinutes()
    timer.updateCountdownDisplay(time.minutes, time.seconds)
  } else if (totalSeconds <= 3300) {
    timer.addMinutes()
    timer.updateCountdownDisplay(timer.getMinutes(), timer.getSeconds())
  }
}

function removeMinutes() {
  const totalSeconds = timer.totalSecondsCountdown()

  if (!totalSeconds && (time.minutes * 60 + time.seconds > 300)) {
    timer.removeMinutes()
    timer.updateCountdownDisplay(time.minutes, time.seconds)
  } else if (timer.getMinutes() * 60 + timer.getSeconds() > 300) {
    timer.removeMinutes()
    timer.updateCountdownDisplay(timer.getMinutes(), timer.getSeconds())
  }
}

function playMusic() {
  const musicClass = event.target.classList.length === 1 ? event.target.classList[0] : event.target.classList[1]
  const card = document.getElementById(musicClass)

  sounds.pauseAudio()
  removeSelectedStyle()

  if (!state.isMusicOn) {
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
  } else {
    sounds.pauseAudio()
    removeSelectedStyle()
  }

  state.isMusicOn = !state.isMusicOn
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