class Gigasecond {

  constructor(date){
    this.inputUtcEpochSeconds = Math.floor(date.getTime() / 1000)
  }

  date(){
    const oneGigasecond = 1000000000
    const utcSeconds = this.inputUtcEpochSeconds + oneGigasecond
    return new Date(new Date(0).setUTCSeconds(utcSeconds))
  }
}

export default Gigasecond
