import { removeHTMLElement } from './utils'
import { feetToMeter, ktsToKmh } from './utils'

const rowNames = [{
  title: 'Координаты самолета',
  /** @param {Flight} f */
  renderToValue: (f) => `${f.coordinate.lat}, ${f.coordinate.long}`,
}, {
  title: 'Скорость(км/ч)',
  /** @param {Flight} f */
  renderToValue: (f) => ktsToKmh(f.speed).toFixed(2),
}, {
  title: 'Курс (&deg;)',
  /** @param {Flight} f */
  renderToValue: (f) => f.track,
}, {
  title: 'Высота полета(м)',
  /** @param {Flight} f */
  renderToValue: (f) => feetToMeter(f.altitude).toFixed(2),
}, {
  title: 'Начальны->Конечный',
  /** @param {Flight} f */
  renderToValue: (f) => `${f.startAirport || '??'}->${f.endAirport || '??'}`,
}, {
  title: 'Номер рейса',
  /** @param {Flight} f */
  renderToValue: (f) => f.name || '??',
}]

/**
 *
 * @param {FlightsStore} store
 * @param {HTMLElement} parent
 */
export default ({ store, parent }) => {
  const table = document.createElement('table')
  const thead = document.createElement('thead')
  thead.innerHTML = `<tr>
    ${rowNames.map(({ title }) => `<td>${title}</td>`).join(' ')}
  </tr>`
  table.appendChild(thead)
  store.subscribe((flights) => {
    removeHTMLElement(table.querySelector('tbody'))
    const tbody = document.createElement('tbody')
    tbody.innerHTML = flights.map((flight) =>
      `<tr>${rowNames.map(({ renderToValue }) => 
        `<td>${renderToValue(flight)}</td>`)
        .join(' ')}</tr>`)
      .join(' ')
    table.appendChild(tbody)
  }, 'FLIGHT_LOADED')
  parent.appendChild(table)
}
