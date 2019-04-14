import { toRadians } from './utils'

const R = 6371

class Point {
  /**
   *
   * @param {Number} x
   * @param {Number} y
   */
  constructor(x, y) {
    /** @type {Number} */
    this.lat = x
    /** @type {Number} */
    this.long = y
  }

  /**
   *
   * @param {Point} p
   * @return {Number}
   */
  distance(p) {
    let x = (toRadians(this.long) - toRadians(p.long)) * Math.cos((toRadians(this.lat) + toRadians(p.lat)) / 2)
    let y = (toRadians(this.lat) - toRadians(p.lat))
    return Math.sqrt(x * x + y * y) * R
  }
}

export default Point
