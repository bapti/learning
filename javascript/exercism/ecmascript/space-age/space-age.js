const round = (value, decimals=2) => {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

const EARTH_DAYS_IN_YEAR = 365.25
const MERCURY_DAYS_IN_YEAR = 87.969
const VENUS_DAYS_IN_YEAR = 224.701
const MARS_DAYS_IN_YEAR = 686.971
const JUPITER_DAYS_IN_YEAR = 4332.59
const SATURN_DAYS_IN_YEAR = 10759.22
const URANUS_DAYS_IN_YEAR = 30688.5
const NEPTUNE_DAYS_IN_YEAR = 60182

class SpaceAge {
  constructor(earthSeconds){
    this._seconds = earthSeconds
    let planetYears = (orbitalEarthDays) =>
      () => round( earthSeconds / (60*60*24*orbitalEarthDays) )

    this.onEarth =  planetYears(EARTH_DAYS_IN_YEAR)
    this.onMercury = planetYears(MERCURY_DAYS_IN_YEAR)
    this.onVenus = planetYears(VENUS_DAYS_IN_YEAR)
    this.onMars = planetYears(MARS_DAYS_IN_YEAR)
    this.onJupiter = planetYears(JUPITER_DAYS_IN_YEAR)
    this.onSaturn = planetYears(SATURN_DAYS_IN_YEAR)
    this.onUranus = planetYears(URANUS_DAYS_IN_YEAR)
    this.onNeptune = planetYears(NEPTUNE_DAYS_IN_YEAR)
  }

  get seconds() {
    return this._seconds
  }
}

export default SpaceAge
