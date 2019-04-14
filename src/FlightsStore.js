import { poll } from './utils'
import Flight from './Flight'

/**
 *
 * @param {Object} data
 * @return {Flight[]}
 */
function parseFlight(data) {
  const result = []
  Object.keys(data).forEach((id) => {
    if (Array.isArray(data[id])) {
      result.push(new Flight(data[id]))
    }
  })
  result.sort((a, b) => {
    if (a.distanceToDME < b.distanceToDME) {
      return -1
    }
    if (a.distanceToDME > b.distanceToDME) {
      return 1
    }
    return 0
  })
  return result
}

class FlightsStore {
  constructor() {
    /**
     *
     * @type {Flight[]}
     * @private
     */
    this._flights = []
    /**
     *
     * @type {{}}
     * @private
     */
    this._eventListeners = {}
  }

  startPooling() {
    poll({
      url: 'https://data-live.flightradar24.com/zones/fcgi/feed.js?bounds=56.84,55.27,33.48,41.48',
      success: (data) => {
        this._flights = parseFlight(data)
        this.trigger('FLIGHT_LOADED', this._flights)
      }
    })
  }

  /**
   *
   * @param {Function} handler
   * @param {String} type
   * @param {Object|null} context
   */
  subscribe(handler, type, context = null) {
    handler = context && handler.bind(context) || handler
    this._eventListeners[type] = [].concat(this._eventListeners[type] || [], handler)
  }

  /**
   *
   * @param {String} type
   * @param {Object} args
   */
  trigger(type, args) {
    (this._eventListeners[type] || []).forEach((eventListener) => eventListener.call(this, args))
  }
}

export default FlightsStore
