import { resetTimer } from "../modules/actions.js"
import state from "../modules/state.js"

export default function Timer({
  sounds,
  time,
  minutesDisplay,
  secondsDisplay,
}) {

  let minutes
  let seconds

  function countdown() {
    time.idCountdown = setTimeout(function () {
      if (!state.isRunning) return

      minutes = Number(minutesDisplay.textContent)
      seconds = Number(secondsDisplay.textContent)

      if (seconds <= 0) {
        seconds = 60
        minutes--
      }

      if (minutes < 0) {
        resetTimer()
        sounds.finishTimer()
        return
      }

      seconds--

      updateDisplay(minutes, seconds)
      countdown()
    }, 1000)
  }

  function updateDisplay(minutes, seconds) {
    minutes = minutes ?? time.minutes
    seconds = seconds ?? time.seconds

    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
    updateTitlePage(minutesDisplay.textContent, secondsDisplay.textContent)
  }

  function updateTitlePage(minutes, seconds) {
    document.title = `Timer - ${minutes}:${seconds}`
  }

  function getMinutes() {
    return minutes
  }

  function setMinutes() {
    minutes = time.minutes
  }

  function addMinutes() {
    minutes += 5
    time.minutes += 5
  }

  function removeMinutes() {
    minutes -= 5
    time.minutes -= 5
  }

  function getSeconds() {
    return seconds
  }

  function setSeconds() {
    seconds = time.seconds
  }

  function totalSecondsCountdown() {
    return getMinutes() * 60 + getSeconds()
  }

  function stop() {
    clearTimeout(time.idCountdown)
    updateDisplay(time.minutes, time.seconds)
    setMinutes()
    setSeconds()
  }

  return {
    countdown,
    updateDisplay,
    getMinutes,
    getSeconds,
    addMinutes,
    removeMinutes,
    totalSecondsCountdown,
    setMinutes,
    setSeconds,
    stop,
  }
}