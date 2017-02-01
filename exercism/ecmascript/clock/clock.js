const padZero = n => n < 10 ? ("0" + n) : n
const adjustMins = n => n > 59 ? n % 60 : n
const adjustHours = n => n > 23 ? n % 24 : n
const adjustNegativeHours = n => n < 0 ? (n % 24) + 24 : n
const adjustNegativeMinutes = n => n < 0 ? (n % 60) + 60 : n

const at = (hours = 0, minutes = 0) => {
  const minutesAfterHour = adjustMins(adjustNegativeMinutes(minutes))
  const hoursAfterDay = adjustHours(adjustNegativeHours(hours + Math.floor(minutes/60)))
  const formattedTime = `${padZero(hoursAfterDay)}:${padZero(minutesAfterHour)}`
  return {
    toString: () => formattedTime,
    plus: mins => at(hoursAfterDay, minutesAfterHour + mins),
    minus: mins => at(hoursAfterDay, minutesAfterHour - mins),
    equals: time => formattedTime === time.toString()
  }
}

export default at
