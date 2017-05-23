const offsetBetweenDays = (day1, day2) => {
  return day1 > day2
    ? day2 - day1 + 7
    : day2 - day1
}

const offsetDayForWeek = weeks => (y, m, d) => {
  const firstDayOfMonth = (new Date(y, m, 1)).getDay()
  const indexOfDay = days.indexOf(d) + 1
  return 1 + offsetBetweenDays(firstDayOfMonth, indexOfDay) + weeks * 7
}

const lastDayOfMonth = (y, m, d) => {
  const lastDayOfMonth = new Date(y, m+1, 0)
  const dayOflastDayOfMonth = lastDayOfMonth.getDay()
  const indexOfDay = days.indexOf(d) + 1
  return lastDayOfMonth.getDate() - offsetBetweenDays(dayOflastDayOfMonth, indexOfDay)
}

const days = [
  "Monday", "Tuesday", "Wednesday", "Thursday",
  "Friday", "Saturday", "Sunday"
]

const occurrences = {
  '1st': offsetDayForWeek(0),
  '2nd': offsetDayForWeek(1),
  '3rd': offsetDayForWeek(2),
  '4th': offsetDayForWeek(3),
  '5th': offsetDayForWeek(4),
  'last': lastDayOfMonth
  // 'teenth': (y, m, d) => adf,
}

const teenths = [ 13, 14, 15, 16, 17, 18, 19 ]


const meetup = (year, month, day, occurrence) => {
  const computedDay = occurrences[occurrence](year, month, day)
  return new Date(year, month, computedDay)
}

export default meetup
