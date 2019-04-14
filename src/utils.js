/**
 *
 * @param options
 */
export const poll = (options = {}) => {
  const interval = options.interval || 5000
  fetch(options.url, { mode: 'cors' })
    .then((response) => response.json())
    .then((items) => {
      if (options.success) {
        options.success(items)
        setTimeout(() => poll(options), interval)
      }
    })
    .catch(() => setTimeout(poll(options), interval))
}

/**
 *
 * @param element
 * @return {null}
 */
export const removeHTMLElement = (element) => {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element)
  }
  return null
}

/**
 *
 * @param v
 * @return {number}
 */
export const ktsToKmh = (v = 0) => v * 1.852

/**
 *
 * @param v
 * @return {number}
 */
export const feetToMeter = (v = 0) => v * 0.3048

/**
 *
 * @param v
 * @return {number}
 */
export const toRadians = (v) => v * Math.PI / 180
