const offsetBetweenDays = (day1, day2) => {
  return day1 > day2
    ? day2 - day1 + 7
    : day2 - day1
}

const getDayAsNum = (day) => [
  "Monday", "Tuesday", "Wednesday", "Thursday",
  "Friday", "Saturday", "Sunday"
].indexOf(day) + 1

const offsetDayForWeek = weeks => (y, m, d) => {
  const firstDayOfMonth = (new Date(y, m, 1)).getDay()
  const indexOfDay = getDayAsNum(d)
  return 1 + offsetBetweenDays(firstDayOfMonth, indexOfDay) + weeks * 7
}

const calculateLast = (y, m, d) => {
  const lastDayOfMonth = new Date(y, m+1, 0)
  const dayOflastDayOfMonth = lastDayOfMonth.getDay()
  const indexOfDay = getDayAsNum(d)
  return lastDayOfMonth.getDate() - offsetBetweenDays(indexOfDay, dayOflastDayOfMonth)
}

const calculateTeenth = (y, m, d) => {
  const firstTeenthOfMonth = (new Date(y, m, 13)).getDay()
  const indexOfDay = getDayAsNum(d)
  return 13 + offsetBetweenDays(firstTeenthOfMonth, indexOfDay)
}

const occurrences = {
  '1st': offsetDayForWeek(0),
  '2nd': offsetDayForWeek(1),
  '3rd': offsetDayForWeek(2),
  '4th': offsetDayForWeek(3),
  '5th': offsetDayForWeek(4),
  'last': calculateLast,
  'teenth': calculateTeenth
}

const meetup = (year, month, day, occurrence) => {
  const computedDay = occurrences[occurrence](year, month, day)
  const meetupDate = new Date(year, month, computedDay)
  if(month !== meetupDate.getMonth()) {
    throw 'Month out of bounds for meetup'
  }
  return meetupDate
}

export default meetup
