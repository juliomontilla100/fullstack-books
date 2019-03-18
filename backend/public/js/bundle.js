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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/app.js":
/*!*************************!*\
  !*** ./frontend/app.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./frontend/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./frontend/ui.js");


let ui = new _ui__WEBPACK_IMPORTED_MODULE_1__["default"]

let byId = function( id ) { return document.getElementById( id ); };

byId('book-form').addEventListener('submit', function(e){
    e.preventDefault()

    let bookFormData = new FormData()
    bookFormData.append('title',  byId('title').value)
    bookFormData.append('author', byId('author').value)
    bookFormData.append('isbn',   byId('isbn').value)
    bookFormData.append('image',  byId('image').files[0])

    ui.addNewBook(bookFormData)

    this.reset()
})

byId('books-cards').addEventListener('click', (e)=>{
    if(e.target.id === 'delete'){
       
        let bookId = e.target.getAttribute('_id') 
        ui.deleteBook(bookId)
        
    }
})

ui.renderBooks()

/***/ }),

/***/ "./frontend/services/bookService.js":
/*!******************************************!*\
  !*** ./frontend/services/bookService.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class BookService{
    constructor(){
        this.URI = 'http://localhost:3000/api/'
    }

    async getBooks(){
        let res = await fetch(this.URI)
        let books = await res.json()
        return books
    }

    async newBook(book){
        let res = await fetch(this.URI, {
            method: 'POST', 
            body: book
        })
        let newBook = await res.json()
        return newBook
    }

    async deleteBook(id){
        let res = await fetch(`${this.URI}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        let deleteBook = await res.json()
        return deleteBook
    }
}

/* harmony default export */ __webpack_exports__["default"] = (BookService);

/***/ }),

/***/ "./frontend/styles/style.scss":
/*!************************************!*\
  !*** ./frontend/styles/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/ui.js":
/*!************************!*\
  !*** ./frontend/ui.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! timeago.js */ "./node_modules/timeago.js/lib/index.js");
/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(timeago_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_bookService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/bookService */ "./frontend/services/bookService.js");



let bookService = new _services_bookService__WEBPACK_IMPORTED_MODULE_2__["default"]()

class Ui {
    
    async renderBooks(){
        let books = await bookService.getBooks()
        let booksList = document.getElementById('books-cards')
        booksList.innerHTML = ''
        
        for( let book of books ){
            let element = document.createElement('div')
            element.innerHTML = `
                <div class="card mb-4 p-4">
                    <div class="card-boy">
                        <p><strong>Titulo:</strong> ${book.title} </p>
                        <p><strong>Autor:</strong> ${book.author} </p>
                        <p><strong>isbn:</strong> ${book.isbn} </p>
                        <p><strong>creado:</strong> ${Object(timeago_js__WEBPACK_IMPORTED_MODULE_1__["format"])(book.created_at)} </p>
                        ${book.imgPath ? `<img class="img-fluid" src="http://localhost:3000/${book.imgPath}">` : ''}
                        <br>
                        <a class="btn btn-danger text-white mt-3" id="delete" _id="${book._id}">Borrar</a>
                    </div>
                </div>
            `
            booksList.appendChild(element)
        }
    }
    
    async addNewBook(book){
        await bookService.newBook(book)
        this.renderBooks()
        this.renderMessage('Libro creado', 'success')
    }
    
    async deleteBook(id){
        await bookService.deleteBook(id)
        this.renderBooks()
        this.renderMessage('Libro eliminado', 'danger')
    }
    
    renderMessage(message, cssClass){
        let element = document.createElement('div')
        element.className = `mt-4 alert alert-${cssClass}`
        element.appendChild(document.createTextNode(message))
        
        let container = document.getElementById('container')
        container.insertAdjacentElement('afterbegin', element)

        setTimeout(() =>{
            document.querySelector('.alert').remove()
        },3000)
    }
    
}

/* harmony default export */ __webpack_exports__["default"] = (Ui);

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/timeago.js/lib/format.js":
/*!***********************************************!*\
  !*** ./node_modules/timeago.js/lib/format.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.format = void 0;

var _date = __webpack_require__(/*! ./utils/date */ "./node_modules/timeago.js/lib/utils/date.js");

var _locales = __webpack_require__(/*! ./locales.js */ "./node_modules/timeago.js/lib/locales.js");

var format = function format(date, locale, nowDate) {
  // diff seconds
  var sec = (0, _date.diffSec)(date, nowDate); // format it with locale

  return (0, _date.formatDiff)(sec, (0, _locales.getLocale)(locale));
};

exports.format = format;

/***/ }),

/***/ "./node_modules/timeago.js/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/timeago.js/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "format", {
  enumerable: true,
  get: function get() {
    return _format.format;
  }
});
Object.defineProperty(exports, "render", {
  enumerable: true,
  get: function get() {
    return _realtime.render;
  }
});
Object.defineProperty(exports, "cancel", {
  enumerable: true,
  get: function get() {
    return _realtime.cancel;
  }
});
Object.defineProperty(exports, "register", {
  enumerable: true,
  get: function get() {
    return _locales.register;
  }
});
exports.version = void 0;

var _format = __webpack_require__(/*! ./format */ "./node_modules/timeago.js/lib/format.js");

var _realtime = __webpack_require__(/*! ./realtime */ "./node_modules/timeago.js/lib/realtime.js");

var _locales = __webpack_require__(/*! ./locales */ "./node_modules/timeago.js/lib/locales.js");

/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */
var version = "4.0.0-beta.2";
exports.version = version;

/***/ }),

/***/ "./node_modules/timeago.js/lib/locales.js":
/*!************************************************!*\
  !*** ./node_modules/timeago.js/lib/locales.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocale = exports.register = void 0;

/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */
var EN = 'second_minute_hour_day_week_month_year'.split('_');
var ZH = '秒_分钟_小时_天_周_个月_年'.split('_');

var zh_CN = function zh_CN(number, index) {
  if (index === 0) return ['刚刚', '片刻后'];
  var unit = ZH[parseInt(index / 2)];
  return ["".concat(number, " ").concat(unit, "\u524D"), "".concat(number, " ").concat(unit, "\u540E")];
};

var en_US = function en_US(number, index) {
  if (index === 0) return ['just now', 'right now'];
  var unit = EN[parseInt(index / 2)];
  if (number > 1) unit += 's';
  return ["".concat(number, " ").concat(unit, " ago"), "in ".concat(number, " ").concat(unit)];
};
/**
 * 所有的语言
 * @type {{en: function(*, *), zh_CN: function(*, *)}}
 */


var Locales = {
  en_US: en_US,
  zh_CN: zh_CN
};
/**
 * 注册语言
 * @param locale
 * @param func
 */

var register = function register(locale, func) {
  Locales[locale] = func;
};
/**
 * 获取语言函数
 * @param locale
 * @returns {*}
 */


exports.register = register;

var getLocale = function getLocale(locale) {
  return Locales[locale] || en_US;
};

exports.getLocale = getLocale;

/***/ }),

/***/ "./node_modules/timeago.js/lib/realtime.js":
/*!*************************************************!*\
  !*** ./node_modules/timeago.js/lib/realtime.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = exports.cancel = void 0;

var _dom = __webpack_require__(/*! ./utils/dom */ "./node_modules/timeago.js/lib/utils/dom.js");

var _date = __webpack_require__(/*! ./utils/date */ "./node_modules/timeago.js/lib/utils/date.js");

var _locales = __webpack_require__(/*! ./locales */ "./node_modules/timeago.js/lib/locales.js");

// 所有的 timer
var TimerPool = {};

var clear = function clear(tid) {
  clearTimeout(tid);
  delete TimerPool[tid];
}; // 定时运行


var run = function run(node, date, localeFunc, nowDate) {
  // 先清理掉之前的
  clear((0, _dom.getTimerId)(node)); // get diff seconds

  var diff = (0, _date.diffSec)(date, nowDate); // render

  node.innerHTML = (0, _date.formatDiff)(diff, localeFunc);
  var tid = setTimeout(function () {
    run(node, date, localeFunc, nowDate);
  }, (0, _date.nextInterval)(diff) * 1000, 0x7FFFFFFF); // there is no need to save node in object. Just save the key

  TimerPool[tid] = 0;
  (0, _dom.saveTimerId)(node, tid);
}; // 取消一个 node 的实时渲染


var cancel = function cancel(node) {
  if (node) clear((0, _dom.getTimerId)(node)); // get the timer of DOM node(native / jq).
  else for (var tid in TimerPool) {
      clear(tid);
    }
}; // 实时渲染一系列节点


exports.cancel = cancel;

var render = function render(nodes, locale, nowDate) {
  // by .length
  if (nodes.length === undefined) nodes = [nodes];
  var node;

  for (var i = 0; i < nodes.length; i++) {
    node = nodes[i];
    var date = (0, _dom.getDateAttribute)(node);
    var localeFunc = (0, _locales.getLocale)(locale);
    run(node, date, localeFunc, nowDate);
  }

  return nodes;
};

exports.render = render;

/***/ }),

/***/ "./node_modules/timeago.js/lib/utils/date.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/lib/utils/date.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextInterval = exports.diffSec = exports.formatDiff = exports.toDate = exports.toInt = void 0;

/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */
var SEC_ARRAY = [60, 60, 24, 7, 365 / 7 / 12, 12];
/**
 * change f into int, remove decimal. Just for code compression
 * @param f
 * @returns {number}
 */

var toInt = function toInt(f) {
  return parseInt(f);
};
/**
 * format Date / string / timestamp to Date instance.
 * @param input
 * @returns {*}
 */


exports.toInt = toInt;

var toDate = function toDate(input) {
  if (input instanceof Date) return input;
  if (!isNaN(input) || /^\d+$/.test(input)) return new Date(toInt(input));
  input = (input || '').trim().replace(/\.\d+/, '') // remove milliseconds
  .replace(/-/, '/').replace(/-/, '/').replace(/(\d)T(\d)/, '$1 $2').replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
  .replace(/([\+\-]\d\d)\:?(\d\d)/, ' $1$2'); // -04:00 -> -0400

  return new Date(input);
};
/**
 * format the diff second to *** time ago, with setting locale
 * @param diff
 * @param localeFunc
 * @returns {string | void | *}
 */


exports.toDate = toDate;

var formatDiff = function formatDiff(diff, localeFunc) {
  // if locale is not exist, use defaultLocale.
  // if defaultLocale is not exist, use build-in `en`.
  // be sure of no error when locale is not exist.
  var i = 0,
      agoin = diff < 0 ? 1 : 0,
      // timein or timeago
  total_sec = diff = Math.abs(diff);

  for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY.length; i++) {
    diff /= SEC_ARRAY[i];
  }

  diff = toInt(diff);
  i *= 2;
  if (diff > (i === 0 ? 9 : 1)) i += 1;
  return localeFunc(diff, i, total_sec)[agoin].replace('%s', diff);
};
/**
 * calculate the diff second between date to be formatted an now date.
 * @param date
 * @param nowDate
 * @returns {number}
 */


exports.formatDiff = formatDiff;

var diffSec = function diffSec(date, nowDate) {
  nowDate = nowDate ? toDate(nowDate) : new Date();
  return (nowDate - toDate(date)) / 1000;
};
/**
 * nextInterval: calculate the next interval time.
 * - diff: the diff sec between now and date to be formatted.
 *
 * What's the meaning?
 * diff = 61 then return 59
 * diff = 3601 (an hour + 1 second), then return 3599
 * make the interval with high performance.
 **/


exports.diffSec = diffSec;

var nextInterval = function nextInterval(diff) {
  var rst = 1,
      i = 0,
      d = Math.abs(diff);

  for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY.length; i++) {
    diff /= SEC_ARRAY[i];
    rst *= SEC_ARRAY[i];
  }

  d = d % rst;
  d = d ? rst - d : rst;
  return Math.ceil(d);
};

exports.nextInterval = nextInterval;

/***/ }),

/***/ "./node_modules/timeago.js/lib/utils/dom.js":
/*!**************************************************!*\
  !*** ./node_modules/timeago.js/lib/utils/dom.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimerId = exports.saveTimerId = exports.getDateAttribute = void 0;
var ATTR_TIMEAGO_TID = 'timeago-tid';
var ATTR_DATETIME = 'datetime';
/**
 * get the node attribute, native DOM and jquery supported.
 * @param node
 * @param name
 * @returns {*}
 */

var getAttribute = function getAttribute(node, name) {
  if (node.getAttribute) return node.getAttribute(name); // native dom

  if (node.attr) return node.attr(name); // jquery dom
};
/**
 * get the datetime attribute, `data-timeagp` / `datetime` are supported.
 * @param node
 * @returns {*}
 */


var getDateAttribute = function getDateAttribute(node) {
  return getAttribute(node, ATTR_DATETIME);
};
/**
 * set the node attribute, native DOM and jquery supported.
 * @param node
 * @param timerId
 * @returns {*}
 */


exports.getDateAttribute = getDateAttribute;

var saveTimerId = function saveTimerId(node, timerId) {
  if (node.setAttribute) return node.setAttribute(ATTR_TIMEAGO_TID, timerId);
  if (node.attr) return node.attr(ATTR_TIMEAGO_TID, timerId);
};

exports.saveTimerId = saveTimerId;

var getTimerId = function getTimerId(node) {
  return getAttribute(node, ATTR_TIMEAGO_TID);
};

exports.getTimerId = getTimerId;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map