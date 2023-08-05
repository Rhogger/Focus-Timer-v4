export default function Timer({
  time,
  minutesDisplay,
  secondsDisplay,
}) {

  let minutes
  let seconds

  function countdown() {
    time.idCountdown = setTimeout(function () {
      minutes = Number(minutesDisplay.textContent)
      seconds = Number(secondsDisplay.textContent)

      const timeOver = minutes === 0 && seconds === 0

      if (timeOver) {
        stop()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        minutes--
      }

      seconds--

      if (minutes < 0) {
        return
      }

      updateCountdownDisplay(minutes, seconds)
      countdown()
    }, 1000)
  }

  function updateCountdownDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
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
    updateCountdownDisplay(time.minutes, time.seconds)
    setMinutes()
    setSeconds()
  }

  return {
    countdown,
    updateCountdownDisplay,
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