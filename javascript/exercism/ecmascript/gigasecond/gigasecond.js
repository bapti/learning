
<<<<<<< HEAD

class Gigasecond {
  var inputDate = null;
  constructor(date){
    inputDate = date
  }

  date(){
    return inputDate;
=======
const getDateFromEpochWithUtcSeconds = utcSeconds =>
  new Date(new Date(0).setUTCSeconds(utcSeconds))

class Gigasecond {

  constructor(date){
    this.secondsSinceEpoch = Math.floor(date.getTime() / 1000)
  }

  date(){
    const oneGigasecond = 1000000000
    const utcSeconds = this.secondsSinceEpoch + oneGigasecond
    return getDateFromEpochWithUtcSeconds(utcSeconds)
>>>>>>> 5cd39ee40e8eabc94d865df10433dc108240d7f3
  }
}

export default Gigasecond
