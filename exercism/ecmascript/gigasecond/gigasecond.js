
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
  }
}

export default Gigasecond
