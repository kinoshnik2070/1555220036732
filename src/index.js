import FlightsStore from './FlightsStore'
import createTable from './createTable'

/**
 *
 * @param {HTMLElement} el
 */
const createApplication = (el = document.body) => {
  /** @type {FlightsStore} */
  const store = new FlightsStore
  createTable({ store, parent: el })
  store.startPooling()
}

window.createApplication = createApplication
