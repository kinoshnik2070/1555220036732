/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Flight.js":
/*!***********************!*\
  !*** ./src/Flight.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ \"./src/Point.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n // TODO: нужно ли было учитывать высоту полета, при подсчете расстояния между самолетом и аэропортом?\n\nvar DME_COORDINATE = new _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"](55.410307, 37.902451);\nvar LAN = 1;\nvar LNG = 2;\nvar TRACK = 3;\nvar ALTITUDE = 4; // // in feet\n\nvar SPEED = 5; // in knots\n\nvar START_AIRPORT = 11;\nvar END_AIRPORT = 12;\nvar FLIGHT_NUMBER = 13;\n\nvar Flight = function Flight(data) {\n  _classCallCheck(this, Flight);\n\n  /**@type {Point} */\n  this.coordinate = new _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data[LAN], data[LNG]);\n  /** @type Number */\n\n  this.track = data[TRACK] || 0;\n  /** @type Number */\n\n  this.altitude = data[ALTITUDE] || 0;\n  /** @type Number */\n\n  this.speed = data[SPEED] || 0;\n  /** @type String */\n\n  this.startAirport = data[START_AIRPORT];\n  /** @type String */\n\n  this.endAirport = data[END_AIRPORT];\n  /** @type String */\n\n  this.name = data[FLIGHT_NUMBER];\n  /** @type Number */\n\n  this.distanceToDME = this.coordinate.distance(DME_COORDINATE);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flight);\n\n//# sourceURL=webpack:///./src/Flight.js?");

/***/ }),

/***/ "./src/FlightsStore.js":
/*!*****************************!*\
  !*** ./src/FlightsStore.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _Flight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Flight */ \"./src/Flight.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n/**\n *\n * @param {Object} data\n * @return {Flight[]}\n */\n\nfunction parseFlight(data) {\n  var result = [];\n  Object.keys(data).forEach(function (id) {\n    if (Array.isArray(data[id])) {\n      result.push(new _Flight__WEBPACK_IMPORTED_MODULE_1__[\"default\"](data[id]));\n    }\n  });\n  result.sort(function (a, b) {\n    if (a.distanceToDME < b.distanceToDME) {\n      return -1;\n    }\n\n    if (a.distanceToDME > b.distanceToDME) {\n      return 1;\n    }\n\n    return 0;\n  });\n  return result;\n}\n\nvar FlightsStore =\n/*#__PURE__*/\nfunction () {\n  function FlightsStore() {\n    _classCallCheck(this, FlightsStore);\n\n    /**\n     *\n     * @type {Flight[]}\n     * @private\n     */\n    this._flights = [];\n    /**\n     *\n     * @type {{}}\n     * @private\n     */\n\n    this._eventListeners = {};\n  }\n\n  _createClass(FlightsStore, [{\n    key: \"startPooling\",\n    value: function startPooling() {\n      var _this = this;\n\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"poll\"])({\n        url: 'https://data-live.flightradar24.com/zones/fcgi/feed.js?bounds=56.84,55.27,33.48,41.48',\n        success: function success(data) {\n          _this._flights = parseFlight(data);\n\n          _this.trigger('FLIGHT_LOADED', _this._flights);\n        }\n      });\n    }\n    /**\n     *\n     * @param {Function} handler\n     * @param {String} type\n     * @param {Object|null} context\n     */\n\n  }, {\n    key: \"subscribe\",\n    value: function subscribe(handler, type) {\n      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n      handler = context && handler.bind(context) || handler;\n      this._eventListeners[type] = [].concat(this._eventListeners[type] || [], handler);\n    }\n    /**\n     *\n     * @param {String} type\n     * @param {Object} args\n     */\n\n  }, {\n    key: \"trigger\",\n    value: function trigger(type, args) {\n      var _this2 = this;\n\n      (this._eventListeners[type] || []).forEach(function (eventListener) {\n        return eventListener.call(_this2, args);\n      });\n    }\n  }]);\n\n  return FlightsStore;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlightsStore);\n\n//# sourceURL=webpack:///./src/FlightsStore.js?");

/***/ }),

/***/ "./src/Point.js":
/*!**********************!*\
  !*** ./src/Point.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar R = 6371;\n\nvar Point =\n/*#__PURE__*/\nfunction () {\n  /**\n   *\n   * @param {Number} x\n   * @param {Number} y\n   */\n  function Point(x, y) {\n    _classCallCheck(this, Point);\n\n    /** @type {Number} */\n    this.lat = x;\n    /** @type {Number} */\n\n    this[\"long\"] = y;\n  }\n  /**\n   *\n   * @param {Point} p\n   * @return {Number}\n   */\n\n\n  _createClass(Point, [{\n    key: \"distance\",\n    value: function distance(p) {\n      var x = (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"toRadians\"])(this[\"long\"]) - Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"toRadians\"])(p[\"long\"])) * Math.cos((Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"toRadians\"])(this.lat) + Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"toRadians\"])(p.lat)) / 2);\n      var y = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"toRadians\"])(this.lat) - Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"toRadians\"])(p.lat);\n      return Math.sqrt(x * x + y * y) * R;\n    }\n  }]);\n\n  return Point;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Point);\n\n//# sourceURL=webpack:///./src/Point.js?");

/***/ }),

/***/ "./src/createTable.js":
/*!****************************!*\
  !*** ./src/createTable.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nvar rowNames = [{\n  title: 'Координаты самолета',\n\n  /** @param {Flight} f */\n  renderToValue: function renderToValue(f) {\n    return \"\".concat(f.coordinate.lat, \", \").concat(f.coordinate[\"long\"]);\n  }\n}, {\n  title: 'Скорость(км/ч)',\n\n  /** @param {Flight} f */\n  renderToValue: function renderToValue(f) {\n    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"ktsToKmh\"])(f.speed).toFixed(2);\n  }\n}, {\n  title: 'Курс (&deg;)',\n\n  /** @param {Flight} f */\n  renderToValue: function renderToValue(f) {\n    return f.track;\n  }\n}, {\n  title: 'Высота полета(м)',\n\n  /** @param {Flight} f */\n  renderToValue: function renderToValue(f) {\n    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"feetToMeter\"])(f.altitude).toFixed(2);\n  }\n}, {\n  title: 'Начальны->Конечный',\n\n  /** @param {Flight} f */\n  renderToValue: function renderToValue(f) {\n    return \"\".concat(f.startAirport || '??', \"->\").concat(f.endAirport || '??');\n  }\n}, {\n  title: 'Номер рейса',\n\n  /** @param {Flight} f */\n  renderToValue: function renderToValue(f) {\n    return f.name || '??';\n  }\n}];\n/**\n *\n * @param {FlightsStore} store\n * @param {HTMLElement} parent\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var store = _ref.store,\n      parent = _ref.parent;\n  var table = document.createElement('table');\n  var thead = document.createElement('thead');\n  thead.innerHTML = \"<tr>\\n    \".concat(rowNames.map(function (_ref2) {\n    var title = _ref2.title;\n    return \"<td>\".concat(title, \"</td>\");\n  }).join(' '), \"\\n  </tr>\");\n  table.appendChild(thead);\n  store.subscribe(function (flights) {\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"removeHTMLElement\"])(table.querySelector('tbody'));\n    var tbody = document.createElement('tbody');\n    tbody.innerHTML = flights.map(function (flight) {\n      return \"<tr>\".concat(rowNames.map(function (_ref3) {\n        var renderToValue = _ref3.renderToValue;\n        return \"<td>\".concat(renderToValue(flight), \"</td>\");\n      }).join(' '), \"</tr>\");\n    }).join(' ');\n    table.appendChild(tbody);\n  }, 'FLIGHT_LOADED');\n  parent.appendChild(table);\n});\n\n//# sourceURL=webpack:///./src/createTable.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FlightsStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlightsStore */ \"./src/FlightsStore.js\");\n/* harmony import */ var _createTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTable */ \"./src/createTable.js\");\n\n\n/**\n *\n * @param {HTMLElement} el\n */\n\nvar createApplication = function createApplication() {\n  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;\n\n  /** @type {FlightsStore} */\n  var store = new _FlightsStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  Object(_createTable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    store: store,\n    parent: el\n  });\n  store.startPooling();\n};\n\nwindow.createApplication = createApplication;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: poll, removeHTMLElement, ktsToKmh, feetToMeter, toRadians */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"poll\", function() { return poll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeHTMLElement\", function() { return removeHTMLElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ktsToKmh\", function() { return ktsToKmh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"feetToMeter\", function() { return feetToMeter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toRadians\", function() { return toRadians; });\n/**\n *\n * @param options\n */\nvar poll = function poll() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var interval = options.interval || 5000;\n  fetch(options.url, {\n    mode: 'cors'\n  }).then(function (response) {\n    return response.json();\n  }).then(function (items) {\n    if (options.success) {\n      options.success(items);\n      setTimeout(function () {\n        return poll(options);\n      }, interval);\n    }\n  })[\"catch\"](function () {\n    return setTimeout(poll(options), interval);\n  });\n};\n/**\n *\n * @param element\n * @return {null}\n */\n\nvar removeHTMLElement = function removeHTMLElement(element) {\n  if (element && element.parentNode) {\n    element.parentNode.removeChild(element);\n  }\n\n  return null;\n};\n/**\n *\n * @param v\n * @return {number}\n */\n\nvar ktsToKmh = function ktsToKmh() {\n  var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  return v * 1.852;\n};\n/**\n *\n * @param v\n * @return {number}\n */\n\nvar feetToMeter = function feetToMeter() {\n  var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  return v * 0.3048;\n};\n/**\n *\n * @param v\n * @return {number}\n */\n\nvar toRadians = function toRadians(v) {\n  return v * Math.PI / 180;\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });