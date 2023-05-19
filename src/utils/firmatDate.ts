export function formatTime(date: Date) {
  const hours = date.getHours().toString().padStart(2, "0")
  const minutes = date.getMinutes().toString().padStart(2, "0")
  return `${hours}:${minutes}`
}

export function formatMilliseconds(milliseconds: number) {
  const hours = Math.floor(milliseconds / (1000 * 60 * 60))
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60))
  const formattedHours = String(hours).padStart(2, "0")
  const formattedMinutes = String(minutes).padStart(2, "0")
  return `${formattedHours}Ч ${formattedMinutes}М`
}
