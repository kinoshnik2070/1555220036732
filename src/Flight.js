import Points from './Point'

// TODO: нужно ли было учитывать высоту полета, при подсчете расстояния между самолетом и аэропортом?
const DME_COORDINATE = new Points(55.410307, 37.902451)
const LAN = 1
const LNG = 2
const TRACK = 3
const ALTITUDE = 4 // // in feet
const SPEED = 5 // in knots
const START_AIRPORT = 11
const END_AIRPORT = 12
const FLIGHT_NUMBER = 13

class Flight {
  constructor(data) {
    /**@type {Point} */
    this.coordinate = new Points(data[LAN], data[LNG])
    /** @type Number */
    this.track = data[TRACK] || 0
    /** @type Number */
    this.altitude = data[ALTITUDE] || 0
    /** @type Number */
    this.speed = data[SPEED] || 0
    /** @type String */
    this.startAirport = data[START_AIRPORT]
    /** @type String */
    this.endAirport = data[END_AIRPORT]
    /** @type String */
    this.name = data[FLIGHT_NUMBER]
    /** @type Number */
    this.distanceToDME = this.coordinate.distance(DME_COORDINATE)
  }
}

export default Flight
