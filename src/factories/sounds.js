export default function Sounds({
  forestAudio,
  rainAudio,
  coffeeStoreAudio,
  fireplaceAudio,
}) {
  function pauseAudio() {
    forestAudio.pause()
    rainAudio.pause()
    coffeeStoreAudio.pause()
    fireplaceAudio.pause()
  }

  function isSelected(card, audio) {
    card.classList.add('selected')
    audio.play()
  }

  return {
    pauseAudio,
    isSelected,
  }
}