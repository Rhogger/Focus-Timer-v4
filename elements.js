const appState = document.documentElement

const controls = document.querySelector('.controls')

const themes = document.querySelector('.themes')

const time = {
  minutes: 25,
  seconds: 0,
  idCountdown: null,
}

const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')

const soundCards = document.querySelector('.sounds')
const forestCard = document.querySelector('#forest')
const rainCard = document.querySelector('#rain')
const coffeeCard = document.querySelector('#coffee')
const fireplaceCard = document.querySelector('#fireplace')
const forestAudio = new Audio('../assets/audios/Forest.wav')
const rainAudio = new Audio('../assets/audios/Rain.wav')
const coffeeStoreAudio = new Audio('../assets/audios/CoffeeStore.wav')
const forestVolume = document.querySelector('#forest-volume')
const rainVolume = document.querySelector('#rain-volume')
const coffeeVolume = document.querySelector('#coffee-volume')
const fireplaceVolume = document.querySelector('#fireplace-volume')
const fireplaceAudio = new Audio('../assets/audios/Fireplace.wav')
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const finishTimerAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

forestAudio.loop = true
rainAudio.loop = true
coffeeStoreAudio.loop = true
fireplaceAudio.loop = true

export {
  appState,
  controls,
  themes,
  time,
  minutesDisplay,
  secondsDisplay,
  soundCards,
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
  buttonPressAudio,
  finishTimerAudio,
}