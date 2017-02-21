var api =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var bind = __webpack_require__(9);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["setToken"] = setToken;
/* harmony export (immutable) */ exports["delToken"] = delToken;
/* harmony export (immutable) */ exports["getToken"] = getToken;
/* harmony export (immutable) */ exports["initial"] = initial;
/**
 * token管理模块
 * @module token
 * @author initial-wu
 */
var token;
/**
 * 设置token，同时缓存到 localStorage 和 cookie
 * 
 * @export
 * @param {any} aToken
 */
function setToken(aToken, type) {
    if (true) console.log('[token.setToken]', aToken);
    token = aToken;
    if (aToken) {
        localStorage.setItem('t' + type, aToken);
        CookieUtil.set('t' + type, aToken);
    } else {
        delToken();
    }
}

/**
 * 删除token
 * 
 * @export
 */
function delToken(type) {
    localStorage.removeItem('t' + type);
    CookieUtil.unset('t' + type);
}

/**
 * 取token
 * 
 * @export
 * @returns token
 */
function getToken() {
    return token;
}

/**
 * 初始化token
 * - 在 localStorage 和 cookie 中查找 token
 * - token 存在，调用 setToken
 * 
 * @export
 * @returns 是否有 token
 */
function initial(type) {
    setToken(localStorage.getItem('t' + type) || CookieUtil.get('t' + type));
    return getToken();
}

var CookieUtil = {
    get: function get(name) {
        var cookieName = encodeURIComponent(name) + '=',
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(';', cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    },
    set: function set(name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        if (expires instanceof Date) {
            cookieText += '; expires=' + expires.toGMTString();
        }

        if (path) {
            cookieText += '; path=' + path;
        }

        if (domain) {
            cookieText += '; domain=' + domain;
        }

        if (secure) {
            cookieText += '; secure';
        }

        document.cookie = cookieText;
    },
    unset: function unset(name, path, domain, secure) {
        this.set(name, '', new Date(0), path, domain, secure);
    }
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony export (immutable) */ exports["a"] = post;
/**
 * http请求封装
 * @module http
 * @author initial-wu
 */


/**
 * post请求
 * 
 * @export
 * @param {string} url 完整url
 * @param {string|FormData} data 请求体
 * @returns 已抛出底层错误（包括4xx，5xx），需要在then()的回调中分析并抛出自定义错误
 */
function post(url, data) {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(url, data).then(function (response) {
        {
            console.group('[http] success', url);
            console.dir(data);
            console.dir(response);
            console.groupEnd();
        }
        return response.data;
    }).catch(function (err) {
        {
            console.group('[http] fail', url);
            console.dir(data);
            console.error(err);
            console.groupEnd();
        }

        console.log(err.message);
        var response = err.response;
        if (response) {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            if (response.status >= 500) throw new Error('SERVER_ERROR');
            if (response.status >= 400) throw new Error('CLIENT_ERROR');
        } else {
            // Something happened in setting up the request that triggered an Error
            if (err.message === 'Network Error') throw new Error('NETWORK_ERROR');
            throw new Error('UNKNOWN_ERROR');
        }
    });
}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var stringify = __webpack_require__(35);
var parse = __webpack_require__(34);
var formats = __webpack_require__(10);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var utils = __webpack_require__(0);
var settle = __webpack_require__(22);
var buildURL = __webpack_require__(25);
var parseHeaders = __webpack_require__(31);
var isURLSameOrigin = __webpack_require__(29);
var createError = __webpack_require__(7);
var btoa = (typeof window !== 'undefined' && window.btoa) || __webpack_require__(24);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("devlopment" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(27);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ },
/* 5 */
/***/ function(module, exports) {

"use strict";
'use strict';

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ },
/* 6 */
/***/ function(module, exports) {

"use strict";
'use strict';

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var enhanceError = __webpack_require__(21);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {'use strict';

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(30);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(4);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(4);
  }
  return adapter;
}

module.exports = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    },
    patch: utils.merge(DEFAULT_CONTENT_TYPE),
    post: utils.merge(DEFAULT_CONTENT_TYPE),
    put: utils.merge(DEFAULT_CONTENT_TYPE)
  },

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 9 */
/***/ function(module, exports) {

"use strict";
'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ },
/* 10 */
/***/ function(module, exports) {

"use strict";
'use strict';

var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ },
/* 11 */
/***/ function(module, exports) {

"use strict";
'use strict';

var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

exports.arrayToObject = function (source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

exports.merge = function (target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            target[source] = true;
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = exports.arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = exports.merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (Object.prototype.hasOwnProperty.call(acc, key)) {
            acc[key] = exports.merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

exports.decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function (str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D || // -
            c === 0x2E || // .
            c === 0x5F || // _
            c === 0x7E || // ~
            (c >= 0x30 && c <= 0x39) || // 0-9
            (c >= 0x41 && c <= 0x5A) || // a-z
            (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)] + hexTable[0x80 | ((c >> 12) & 0x3F)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

exports.compact = function (obj, references) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    var refs = references || [];
    var lookup = refs.indexOf(obj);
    if (lookup !== -1) {
        return refs[lookup];
    }

    refs.push(obj);

    if (Array.isArray(obj)) {
        var compacted = [];

        for (var i = 0; i < obj.length; ++i) {
            if (obj[i] && typeof obj[i] === 'object') {
                compacted.push(exports.compact(obj[i], refs));
            } else if (typeof obj[i] !== 'undefined') {
                compacted.push(obj[i]);
            }
        }

        return compacted;
    }

    var keys = Object.keys(obj);
    keys.forEach(function (key) {
        obj[key] = exports.compact(obj[key], refs);
    });

    return obj;
};

exports.isRegExp = function (obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

exports.isBuffer = function (obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__token_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_qs__);
/* harmony export (immutable) */ exports["login"] = login;
/* harmony export (immutable) */ exports["logout"] = logout;
/**
 * 用户认证api
 * @module api-auth
 * @author initial-wu
 */




var urlBase = 'http://www.yml666.com/stumanager';

/**
 * 登录
 * 
 * @export
 * @param {string} uid 学生学号，辅导员导入账号
 * @param {string} pswd 密码
 * @param {string} type 用户类型，只能为 guide/student
 */
function login(uid, pswd, type) {
    var url = urlBase + '/user/login.do';
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__http_js__["a" /* post */])(url, __WEBPACK_IMPORTED_MODULE_2_qs___default.a.stringify({ uid: uid, pswd: pswd, type: type })).then(function (res) {
        switch (res.status) {
            case 0:
                return res.data.token;
            case 1001:
            case 1002:
                throw new Error('PSWD_ERROR');
            default:
                throw new Error('UNKNOWN_ERROR');
        }
    });
}

/**
 * 登出
 * 
 * @export
 */
function logout() {
    var url = urlBase + '/user/logout.do';
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__http_js__["a" /* post */])(url, __WEBPACK_IMPORTED_MODULE_2_qs___default.a.stringify({ token: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__token_js__["getToken"])() })).then(function (res) {
        switch (res.status) {
            case 0:
            case 1003:
                return;
            default:
                throw new Error('UNKNOWN_ERROR');
        }
    });
}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__token_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_qs__);
/* harmony export (immutable) */ exports["getBetween"] = getBetween;
/* harmony export (immutable) */ exports["getByName"] = getByName;
/* harmony export (immutable) */ exports["bindByUids"] = bindByUids;
/* harmony export (immutable) */ exports["unbindByUids"] = unbindByUids;
/* harmony export (immutable) */ exports["postInfo"] = postInfo;
/* harmony export (immutable) */ exports["importNbind"] = importNbind;
/* harmony export (immutable) */ exports["exportBound"] = exportBound;
/* harmony export (immutable) */ exports["exportByUids"] = exportByUids;
/* harmony export (immutable) */ exports["getNotes"] = getNotes;
/* harmony export (immutable) */ exports["updateState"] = updateState;
/* harmony export (immutable) */ exports["addSignForm"] = addSignForm;
/* harmony export (immutable) */ exports["getSignForms"] = getSignForms;
/* harmony export (immutable) */ exports["getSignData"] = getSignData;
/* harmony export (immutable) */ exports["getUnsigned"] = getUnsigned;
/* harmony export (immutable) */ exports["getByUids"] = getByUids;
/**
 * 辅导员用户api
 * @module api-guide
 * @author initial-wu
 */

/**
 * 业务api最终返回的Promise的then回调
 * @callback finalThenCallback
 * @param {Object} data 业务数据
 */

/**
 * 业务api最终返回的Promise的catch回调
 * @callback finalCatchCallback
 * @param {Error} err 错误，包含错误信息
 * @param {string} err.message 错误信息
 */

/**
 * http中间件返回的Promise的catch回调
 * @callback middleCatchCallback
 * @param {Object} res http返回
 * @param {number} res.status 状态码
 * @param {Object} res.data 业务数据
 */





var urlBase = 'http://www.yml666.com/stumanager';

/**
 * http中间件
 * - 在请求数据中混入token
 * - 捕获返回数据中的全局错误
 * 
 * @param {string} path 路径
 * @param {Object} params 参数包装成对象
 * @returns  Promise 需要在then()的回调中分析并抛出业务级错误
 */
function postJSON(path, params) {
    params.token = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__token_js__["getToken"])();
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__http_js__["a" /* post */])(urlBase + path, __WEBPACK_IMPORTED_MODULE_2_qs___default.a.stringify(params)).then(function (res) {
        switch (res.status) {
            case 1003:
                throw new Error('INVALID_TOKEN');
            case 1004:
                throw new Error('FORBIDDEN');
            default:
                return res;
        }
    });
}

/**
 * http中间件
 * - 在请求数据中混入token
 * - 捕获返回数据中的全局错误
 * 
 * @param {string} path 路径
 * @param {FormData} formData 参数包装成FormData
 * @returns  Promise 需要在then()的回调中分析并抛出业务级错误
 */
function postForm(path, formData) {
    formData.append('token', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__token_js__["getToken"])());
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__http_js__["a" /* post */])(urlBase + path, formData).then(function (res) {
        switch (res.status) {
            case 1003:
                throw new Error('INVALID_TOKEN');
            case 1004:
                throw new Error('FORBIDDEN');
            default:
                return res;
        }
    });
}

/**
 * 通过学号区间搜索学生
 * 
 * @export
 * @param {string} bound - 只能为bound/unbound
 * @param {string} beginUid 开始学号，可以不完整
 * @param {string} endUid 结束学号，可以不完整
 * @param {number} pageNum 页码，从 1 开始
 * @param {number} pageSize 页面大小，最小为 1
 * @returns {Function} promise.catch 传入回调 catch(function(err){}) err.message:错误信息
 * @returns {Function} promise.then 传入回调 then(function(data){}) data.total:总数，data.list:学生数组
 */
function getBetween(bound, beginUid, endUid, pageNum, pageSize) {
    var path = '/guide/getStudentsByUidBetween.do';
    return postJSON(path, {
        bound: bound === 'bound',
        beginUid: beginUid,
        endUid: endUid,
        page: typeof pageNum === 'number' ? pageNum - 1 : 0,
        num: typeof pageSize === 'number' ? pageSize : 10
    }).then(function (res) {
        switch (res.status) {
            case 0:
                return { list: res.data.contents, total: res.data.totalElements };
            case 2002:
                return { list: [], total: 0 };
            default:
                throw new Error('UNKNOWN_ERROR');
        }
    });
}

/**
 * 通过学生姓名搜索学生
 * 
 * @export
 * @param {string} bound - 只能为bound/unbound
 * @param {string} name 学生姓名
 * @param {number} pageNum 页码，从 1 开始
 * @param {number} pageSize 页面大小，最小为 1
 * @returns {Promise}
 */
function getByName(bound, name, pageNum, pageSize) {
    var path = '/guide/getStudentsByName.do';
    return postJSON(path, {
        bound: bound === 'bound',
        name: name ? name : '%',
        page: typeof pageNum === 'number' ? pageNum - 1 : 0,
        num: typeof pageSize === 'number' ? pageSize : 10,
        fuzzy: true
    }).then(function (res) {
        switch (res.status) {
            case 0:
                return { list: res.data.contents, total: res.data.totalElements };
            case 2002:
                return { list: [], total: 0 };
            default:
                throw new Error('UNKNOWN_ERROR');
        }
    });
}

/**
 * 通过学号数组绑定学生
 * 
 * @export
 * @param {string[]} uids 学号数组
 */
function bindByUids(uids) {
    var path = '/guide/bindStudents.do';
    var str = '';
    uids.forEach(function (uid) {
        return str += ',' + uid;
    });
    return postJSON(path, { uids: str.substring(1) }).then(function (res) {
        if (res.status === 0) {
            return res.data;
        } else {
            throw new Error('UNKNOWN_ERROR');
        }
    });
}

/**
 * 通过学号数组解绑学生
 * 
 * @export
 * @param {string[]} uids 学号数组
 */
function unbindByUids(uids) {
    var path = '/guide/unbindStudents.do';
    var str = '';
    uids.forEach(function (uid) {
        return str += ',' + uid;
    });
    return postJSON(path, { uids: str.substring(1) }).then(function (res) {
        if (res.status === 0) {
            return res.data;
        } else {
            throw new Error('UNKNOWN_ERROR');
        }
    });
}

/**
 * 更新学生信息
 * 
 * @export
 * @param {Object} info
 */
function postInfo(info) {
    var path = '/guide/modifyStudentInfo.do';
    return postJSON(path, info).then(function (res) {
        if (res.status == 0) {
            return res.data;
        } else {
            throw new Error('UNKNOWN_ERROR');
        }
    });
}

/**
 * 导入学生信息
 * 
 * @export
 * @param {FormData} formData 包含excel文件
 */
function importNbind(formData) {
    var path = '/guide/importStudentInfos.do';
    postForm(path, formData).then(function (res) {
        if (res.status === 0) {
            return res.data;
        } else {
            throw new Error('UNKNOWN_ERROR');
        }
    });
}

/**
 * 导出学生信息
 * 
 * @export
 * @param {any} cb
 */
function exportBound() {
    console.log('api-exportBoundStudents');
    var form = document.createElement('form');
    form.setAttribute('style', 'display:none');
    form.setAttribute('action', urlBase + '/guide/getMyStudents.do');
    form.setAttribute('method', 'POST');

    var tokenInput = document.createElement('input');
    tokenInput.setAttribute('name', 'token');
    tokenInput.setAttribute('value', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__token_js__["getToken"])());

    var toExcelInput = document.createElement('input');
    toExcelInput.setAttribute('name', 'toexcel');
    toExcelInput.setAttribute('value', 'true');

    form.appendChild(tokenInput);
    form.appendChild(toExcelInput);

    form.submit();
}
/**
 * 导出学生信息
 * 
 * @export
 * @param {any} cb
 */
function exportByUids(uids) {
    console.log('api-exportBoundStudents');
    var form = document.createElement('form');
    form.setAttribute('style', 'display:none');
    form.setAttribute('action', urlBase + '/guide/getStudentsByUids.do');
    form.setAttribute('method', 'POST');

    var tokenInput = document.createElement('input');
    tokenInput.setAttribute('name', 'token');
    tokenInput.setAttribute('value', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__token_js__["getToken"])());

    var toExcelInput = document.createElement('input');
    toExcelInput.setAttribute('name', 'toexcel');
    toExcelInput.setAttribute('value', 'true');

    var str = '';
    uids.forEach(function (uid) {
        return str += ',' + uid;
    });
    var uidsInput = document.createElement('input');
    uidsInput.setAttribute('name', 'uids');
    uidsInput.setAttribute('value', str.substring(1));

    console.log(toExcelInput);
    form.appendChild(toExcelInput);
    form.appendChild(uidsInput);
    form.appendChild(tokenInput);

    form.submit();
}

/**
 * 获取假条
 * 
 * @export
 * @param {string} state 状态，只能为all/pending/approved/forbidden/finished
 * @param {Object} limits 限制条件
 * @param {string} limits.type 假别，只能为affair/sick/meeting/practice
 * @param {string} limits.out 是否离校，只能为TRUE/FALSE
 * @param {number} pageNum 页码，从 1 开始
 * @param {number} pageSize 页面大小，最小为 1
 */
function getNotes(state, _ref, pageNum, pageSize) {
    var type = _ref.type,
        out = _ref.out;

    var path = '/guide/getLeaveNotes.do';
    var params = {};
    if (state && state !== 'all') params.state = state;
    if (type) params.type = type;
    if (out) params.leaveSchool = out === 'TRUE';
    params.page = typeof pageNum === 'number' ? pageNum - 1 : 0;
    params.num = typeof pageSize === 'number' ? pageSize : 10;
    return postJSON(path, params).then(function (res) {
        switch (res.status) {
            case 0:
                return { list: res.data.contents, total: res.data.totalElements };
            case 2002:
                return { list: [], total: 0 };
            default:
                throw new Error('UNKNOWN_ERROR');
        }
    });
}

/**
 * 根据假条 lid 修改假条状态
 * 
 * @export
 * @param {string} lid 假条id
 * @param {string} state 状态，只能为approved/forbidden/finished
 */
function updateState(lid, state) {
    var path = '/guide/setLeaveNoteState.do';
    var params = { lid: lid, state: state };
    return postJSON(path, params).then(function (res) {
        if (res.status === 0) {
            return res.data;
        } else {
            throw new Error('UNKNOWN_ERROR');
        }
    });
}

/**
 * 增加签到
 * 
 * @export
 * @param {Object} signForm
 */
function addSignForm(signForm) {
    var path = '/guide/launchSignIn.do';
    return postJSON(path, signForm).then(function (res) {
        if (res.status === 0) {
            return res.data;
        } else {
            throw new Error('UNKNOWN_ERROR');
        }
    });
}

/**
 * 获取已发布的签到 signForm
 * 
 * @export
 * @param {number} pageNum 页码，从 1 开始
 * @param {number} pageSize 页面大小，最小为 1
 */
function getSignForms(pageNum, pageSize) {
    var path = '/guide/getMySignInForms.do';
    return postJSON(path, {
        page: typeof pageNum === 'number' ? pageNum - 1 : 0,
        num: typeof pageSize === 'number' ? pageSize : 10
    }).then(function (res) {
        switch (res.status) {
            case 0:
                return { list: res.data.contents, total: res.data.totalElements };
            case 2002:
                return { list: [], total: 0 };
            default:
                throw new Error('UNKNOWN_ERROR');
        }
    });
}

/**
 * 根据 sfid 获取签到数据 signData
 * 
 * @export
 * @param {string} sfid signForm id
 * @param {number} pageNum 页码，从 1 开始
 * @param {number} pageSize 页面大小，最小为 1
 */
function getSignData(sfid, pageNum, pageSize) {
    var path = '/guide/getSignInDatas.do';
    return postJSON(path, {
        sfid: sfid,
        page: typeof pageNum === 'number' ? pageNum - 1 : 0,
        num: typeof pageSize === 'number' ? pageSize : 10
    }).then(function (res) {
        switch (res.status) {
            case 0:
                return { list: res.data.contents, total: res.data.totalElements };
            case 2002:
                return { list: [], total: 0 };
            default:
                throw new Error('UNKNOWN_ERROR');
        }
    });
}

/**
 * 根据 sfid 获取未签到学生的 uid 数组
 * 
 * @export
 * @param {string} sfid signForm id
 */
function getUnsigned(sfid) {
    var path = '/guide/getUnsignedStudents.do';
    return postJSON(path, { sfid: sfid }).then(function (res) {
        if (res.status === 0) {
            return res.data;
        } else {
            throw new Error('UNKOWN_ERROR');
        }
    });
}

/**
 * 根据学生 uid 数组获取学生信息
 * 
 * @export
 * @param {string[]} uids 学号数组
 */
function getByUids(uids) {
    var path = '/guide/getStudentsByUids.do';
    var str = '';
    uids.forEach(function (uid) {
        return str += ',' + uid;
    });
    return postJSON(path, { uids: str.substring(1) }).then(function (res) {
        switch (res.status) {
            case 0:
                return res.data;
            case 2002:
                return [];
            default:
                throw new Error('UNKNOWN_ERROR');
        }
    });
}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__token_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_qs__);
/* harmony export (immutable) */ exports["getNotes"] = getNotes;
/* harmony export (immutable) */ exports["postNote"] = postNote;
/* harmony export (immutable) */ exports["deleteNote"] = deleteNote;
/* harmony export (immutable) */ exports["getInfo"] = getInfo;
/* harmony export (immutable) */ exports["postInfo"] = postInfo;
/* harmony export (immutable) */ exports["getSignForm"] = getSignForm;
/* harmony export (immutable) */ exports["postSignData"] = postSignData;
/**
 * 辅导员用户api
 * @module api-student
 * @author initial-wu
 */

/**
 * 业务api最终返回的Promise的then回调
 * @callback finalThenCallback
 * @param {Object} data 业务数据
 */

/**
 * 业务api最终返回的Promise的catch回调
 * @callback finalCatchCallback
 * @param {Error} err 错误，包含错误信息
 * @param {string} err.message 错误信息
 */

/**
 * http中间件返回的Promise的catch回调
 * @callback middleCatchCallback
 * @param {Object} res http返回
 * @param {number} res.status 状态码
 * @param {Object} res.data 业务数据
 */





var urlBase = 'http://www.yml666.com/stumanager';

/**
 * http中间件
 * - 在请求数据中混入token
 * - 捕获返回数据中的全局错误
 * 
 * @param {string} path 路径
 * @param {Object} params 参数包装成对象
 * @returns  Promise 需要在then()的回调中分析并抛出业务级错误
 */
function postJSON(path, params) {
    params.token = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__token_js__["getToken"])();
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__http_js__["a" /* post */])(urlBase + path, __WEBPACK_IMPORTED_MODULE_2_qs___default.a.stringify(params)).then(function (res) {
        switch (res.status) {
            case 1003:
                throw new Error('INVALID_TOKEN');
            case 1004:
                throw new Error('FORBIDDEN');
            default:
                return res;
        }
    });
}

/**
 * 获取假条
 * 
 * @export
 * @param {string} state 状态，只能为all/pending/approved/forbidden/finished
 * @param {Object} limits 限制条件
 * @param {string} limits.type 假别，只能为affair/sick/meeting/practice
 * @param {string} limits.out 是否离校，只能为TRUE/FALSE
 * @param {number} pageNum 页码，从 1 开始
 * @param {number} pageSize 页面大小，最小为 1
 */
function getNotes(state, _ref, pageNum, pageSize) {
    var type = _ref.type,
        out = _ref.out;

    var path = '/student/getMyLeaveNotes.do';
    var params = {};
    if (state && state !== 'all') params.state = state;
    if (type) params.type = type;
    if (out) params.leaveSchool = out === 'TRUE';
    params.page = pageNum - 1;
    params.num = pageSize;
    return postJSON(path, params).then(function (res) {
        switch (res.status) {
            case 0:
                return { list: res.data.contents, total: res.data.totalElements };
            case 2002:
                return { list: [], total: 0 };
            default:
                throw new Error('UNKNOWN_ERROR');
        }
    });
}

/**
 * 新假条或更改假条
 * - 更改假条时note需包含lid
 * - 只能对未处理的假条调用
 * - 返回新假条
 * @param {Object} note - 假条对象
 */
function postNote(note) {
    var path = '/student/saveOrUpdateLeaveNote.do';
    return postJSON(path, note).then(function (res) {
        if (res.status === 0) {
            return res.data;
        } else {
            throw new Error('UNKNOWN_ERROR');
        }
    });
}

/**
 * 撤销请假申请，只能对未知错误的假条调用
 * @param {number} lid - 假条id
 */
function deleteNote(lid) {
    var path = '/student/closeLeaveNote.do';
    return postJSON(path, { lid: lid }).then(function (res) {
        if (res.status === 0) {
            return res.data;
        } else {
            throw new Error('UNKNOWN_ERROR');
        }
    });
}

/**
 * 获取本人信息
 * 
 * @export
 */
function getInfo() {
    var path = '/student/getMyInfo.do';
    return postJSON(path, {}).then(function (res) {
        if (res.status === 0) {
            return res.data;
        } else {
            throw new Error('UNKNOWN_ERROR');
        }
    });
}

/**
 * 提交个人信息
 * 
 * @export
 * @param {Object} info
 */
function postInfo(info) {
    var path = '/student/updateMyInfo.do';
    return postJSON(path, info).then(function (res) {
        if (res.status === 0) {
            return res.data;
        } else {
            throw new Error('UNKNOWN_ERROR');
        }
    });
}

/**
 * 获取最新的 signForm
 * 
 * @export
 */
function getSignForm() {
    var path = '/student/getCurrentSignInForm.do';
    return postJSON(path, {}).then(function (res) {
        if (res.status === 0) {
            return res.data;
        } else {
            throw new Error('UNKNOWN_ERROR');
        }
    });
}

/**
 * 提交 signData
 * 
 * @export
 * @param {Object} signData
 */
function postSignData(signData) {
    var path = '/student/signIn.do';
    return postJSON(path, signData).then(function (res) {
        if (res.status === 0) {
            return res.data;
        } else {
            throw new Error('UNKNOWN_ERROR');
        }
    });
}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var utils = __webpack_require__(0);
var bind = __webpack_require__(9);
var Axios = __webpack_require__(18);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance();

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(defaultConfig) {
  return createInstance(defaultConfig);
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(5);
axios.CancelToken = __webpack_require__(17);
axios.isCancel = __webpack_require__(6);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(32);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var Cancel = __webpack_require__(5);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var defaults = __webpack_require__(8);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(19);
var dispatchRequest = __webpack_require__(20);
var isAbsoluteURL = __webpack_require__(28);
var combineURLs = __webpack_require__(26);

/**
 * Create a new instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 */
function Axios(defaultConfig) {
  this.defaults = utils.merge(defaults, defaultConfig);
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var utils = __webpack_require__(0);
var transformData = __webpack_require__(23);
var isCancel = __webpack_require__(6);
var defaults = __webpack_require__(8);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ },
/* 21 */
/***/ function(module, exports) {

"use strict";
'use strict';

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var createError = __webpack_require__(7);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ },
/* 24 */
/***/ function(module, exports) {

"use strict";
'use strict';

// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ },
/* 26 */
/***/ function(module, exports) {

"use strict";
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ },
/* 28 */
/***/ function(module, exports) {

"use strict";
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ },
/* 32 */
/***/ function(module, exports) {

"use strict";
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ },
/* 33 */
/***/ function(module, exports) {

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

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var utils = __webpack_require__(11);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseValues(str, options) {
    var obj = {};
    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];
        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos));
            val = options.decoder(part.slice(pos + 1));
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function parseObject(chain, val, options) {
    if (!chain.length) {
        return val;
    }

    var root = chain.shift();

    var obj;
    if (root === '[]') {
        obj = [];
        obj = obj.concat(parseObject(chain, val, options));
    } else {
        obj = options.plainObjects ? Object.create(null) : {};
        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
        var index = parseInt(cleanRoot, 10);
        if (
            !isNaN(index) &&
            root !== cleanRoot &&
            String(index) === cleanRoot &&
            index >= 0 &&
            (options.parseArrays && index <= options.arrayLimit)
        ) {
            obj = [];
            obj[index] = parseObject(chain, val, options);
        } else {
            obj[cleanRoot] = parseObject(chain, val, options);
        }
    }

    return obj;
};

var parseKeys = function parseKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^\.\[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var parent = /^([^\[\]]*)/;
    var child = /(\[[^\[\]]*\])/g;

    // Get the parent

    var segment = parent.exec(key);

    // Stash the parent if it exists

    var keys = [];
    if (segment[1]) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, segment[1])) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(segment[1]);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].replace(/\[|\]/g, ''))) {
            if (!options.allowPrototypes) {
                continue;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts || {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var utils = __webpack_require__(11);
var formats = __webpack_require__(10);

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder ? encoder(prefix) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            return [formatter(encoder(prefix)) + '=' + formatter(encoder(obj))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts || {};
    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = encode ? (typeof options.encoder === 'function' ? options.encoder : defaults.encoder) : null;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    if (typeof options.format === 'undefined') {
        options.format = formats.default;
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter
        ));
    }

    return keys.join(delimiter);
};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__token__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_guide__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_student__ = __webpack_require__(14);




/* harmony reexport (module object) */ __webpack_require__.d(exports, "token", function() { return __WEBPACK_IMPORTED_MODULE_0__token__; });
/* harmony reexport (module object) */ __webpack_require__.d(exports, "auth", function() { return __WEBPACK_IMPORTED_MODULE_1__api_auth__; });
/* harmony reexport (module object) */ __webpack_require__.d(exports, "guide", function() { return __WEBPACK_IMPORTED_MODULE_2__api_guide__; });
/* harmony reexport (module object) */ __webpack_require__.d(exports, "student", function() { return __WEBPACK_IMPORTED_MODULE_3__api_student__; });


/***/ }
/******/ ]);