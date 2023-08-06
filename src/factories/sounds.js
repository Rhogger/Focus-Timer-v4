export default function Sounds({
  buttonPressAudio,
  finishTimerAudio,
  forestAudio,
  rainAudio,
  coffeeStoreAudio,
  fireplaceAudio,
}) {
  function buttonPress() {
    buttonPressAudio.play()
  }

  function finishTimer() {
    finishTimerAudio.play()
  }

  function pauseAudio() {
    forestAudio.pause()
    rainAudio.pause()
    coffeeStoreAudio.pause()
    fireplaceAudio.pause()
  }

  function isSelected(card, audio) {
    card.classList.add('selected')
    audio.play()
    audio.volume = 0.5
  }

  return {
    pauseAudio,
    isSelected,
    buttonPress,
    finishTimer,
  }
}