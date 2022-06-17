require('./runtime.js');
require('./remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@remax/apply-runtime-options.js":
/*!******************************************************!*\
  !*** ./node_modules/@remax/apply-runtime-options.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/runtime */ "./node_modules/remax/runtime.js");
/* harmony import */ var _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /__remax_runtime_options__ */ "/__remax_runtime_options__");
/* harmony import */ var _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__);


var pluginDriver = new remax_runtime__WEBPACK_IMPORTED_MODULE_0__["PluginDriver"]([__webpack_require__(/*! @remax/plugin-error-screen/runtime.js */ "./node_modules/@remax/plugin-error-screen/runtime.js")].map(function (p) {
  return p.default || p;
}));
remax_runtime__WEBPACK_IMPORTED_MODULE_0__["RuntimeOptions"].apply({
  platform: "wechat",
  debug: false,
  pxToRpx: true,
  pluginDriver: pluginDriver,
  hostComponents: _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__["hostComponents"],
  pageEvents: _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__["pageEvents"],
  appEvents: _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__["appEvents"]
});

/***/ }),

/***/ "./node_modules/@remax/plugin-error-screen/lib/ErrorBoundary.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@remax/plugin-error-screen/lib/ErrorBoundary.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var ErrorScreen = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorScreen, _React$Component);

  var _super = _createSuper(ErrorScreen);

  function ErrorScreen() {
    var _this;

    _classCallCheck(this, ErrorScreen);

    _this = _super.apply(this, arguments);
    _this.state = {
      error: null
    };
    return _this;
  }

  _createClass(ErrorScreen, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      console.error(error);
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.error;
      var errorScreen = this.props.errorScreen;

      if (error) {
        return React.createElement(errorScreen, {
          error: error
        });
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        error: error
      };
    }
  }]);

  return ErrorScreen;
}(React.Component);

exports.default = ErrorScreen;

/***/ }),

/***/ "./node_modules/@remax/plugin-error-screen/lib/ErrorScreen.development.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@remax/plugin-error-screen/lib/ErrorScreen.development.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var redbox_react_1 = __importDefault(__webpack_require__(/*! @remax/redbox-react */ "./node_modules/@remax/redbox-react/lib/index.js"));

var ErrorScreen = function ErrorScreen(_ref) {
  var error = _ref.error;
  return React.createElement(redbox_react_1.default, {
    error: error
  });
};

exports.default = ErrorScreen;

/***/ }),

/***/ "./node_modules/@remax/plugin-error-screen/runtime.js":
/*!************************************************************!*\
  !*** ./node_modules/@remax/plugin-error-screen/runtime.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var D_account_bill_applets_client_node_modules_remax_plugin_error_screen_lib_ErrorScreen_development_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@remax/plugin-error-screen/lib/ErrorScreen.development.js */ "./node_modules/@remax/plugin-error-screen/lib/ErrorScreen.development.js");
/* harmony import */ var D_account_bill_applets_client_node_modules_remax_plugin_error_screen_lib_ErrorScreen_development_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_account_bill_applets_client_node_modules_remax_plugin_error_screen_lib_ErrorScreen_development_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_account_bill_applets_client_node_modules_remax_plugin_error_screen_lib_ErrorBoundary_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@remax/plugin-error-screen/lib/ErrorBoundary.js */ "./node_modules/@remax/plugin-error-screen/lib/ErrorBoundary.js");
/* harmony import */ var D_account_bill_applets_client_node_modules_remax_plugin_error_screen_lib_ErrorBoundary_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(D_account_bill_applets_client_node_modules_remax_plugin_error_screen_lib_ErrorBoundary_js__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = ({
  onPageComponent: function onPageComponent(_ref) {
    var component = _ref.component;

    function ErrorBoundaryWrap(props, ref) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(D_account_bill_applets_client_node_modules_remax_plugin_error_screen_lib_ErrorBoundary_js__WEBPACK_IMPORTED_MODULE_3___default.a, {
        errorScreen: D_account_bill_applets_client_node_modules_remax_plugin_error_screen_lib_ErrorScreen_development_js__WEBPACK_IMPORTED_MODULE_2___default.a
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component, _objectSpread(_objectSpread({}, props), {}, {
        ref: ref
      })));
    }

    ErrorBoundaryWrap.displayName = 'ErrorBoundary';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(ErrorBoundaryWrap);
  }
});

/***/ }),

/***/ "./node_modules/@remax/redbox-react/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@remax/redbox-react/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = exports.RedBoxError = undefined;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(/*! ./style.js */ "./node_modules/@remax/redbox-react/lib/style.js");

var _style2 = _interopRequireDefault(_style);

var _errorStackParser = __webpack_require__(/*! error-stack-parser */ "./node_modules/error-stack-parser/error-stack-parser.js");

var _errorStackParser2 = _interopRequireDefault(_errorStackParser);

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _lib = __webpack_require__(/*! ./lib */ "./node_modules/@remax/redbox-react/lib/lib.js");

var _sourcemappedStacktrace = __webpack_require__(/*! sourcemapped-stacktrace */ "./node_modules/sourcemapped-stacktrace/dist/sourcemapped-stacktrace.js");

var _one = __webpack_require__(/*! @remax/one */ "./node_modules/@remax/one/esm/index.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof2(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof2(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var RedBoxError = exports.RedBoxError = function (_get__2) {
  _inherits(RedBoxError, _get__2);

  function RedBoxError(props) {
    _classCallCheck(this, RedBoxError);

    var _this = _possibleConstructorReturn(this, (RedBoxError.__proto__ || Object.getPrototypeOf(RedBoxError)).call(this, props));

    _this.state = {
      error: null,
      mapped: false
    };

    _this.mapOnConstruction(props.error);

    return _this;
  } // State is used to store the error mapped to the source map.


  _createClass(RedBoxError, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.state.mapped && typeof window !== 'undefined') this.mapError(this.props.error);
    } // Try to map the error when the component gets constructed, this is possible
    // in some cases like evals.

  }, {
    key: 'mapOnConstruction',
    value: function mapOnConstruction(error) {
      var stackLines = error.stack.split('\n'); // There's no stack, only the error message.

      if (stackLines.length < 2) {
        this.state = {
          error: error,
          mapped: true
        };
        return;
      } // Using the “eval” setting on webpack already gives the correct location.


      var isWebpackEval = stackLines[1].search(/\(webpack:\/{3}/) !== -1;

      if (isWebpackEval) {
        // No changes are needed here.
        this.state = {
          error: error,
          mapped: true
        };
        return;
      } // Other eval follow a specific pattern and can be easily parsed.


      var isEval = stackLines[1].search(/\(eval at/) !== -1;

      if (!isEval) {
        // mapping will be deferred until `componentDidMount`
        this.state = {
          error: error,
          mapped: false
        };
        return;
      } // The first line is the error message.


      var fixedLines = [stackLines.shift()]; // The rest needs to be fixed.

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = stackLines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var stackLine = _step.value;
          var evalStackLine = stackLine.match(/(.+)\(eval at (.+) \(.+?\), .+(\:[0-9]+\:[0-9]+)\)/);

          if (evalStackLine) {
            var _evalStackLine = _slicedToArray(evalStackLine, 4),
                atSomething = _evalStackLine[1],
                file = _evalStackLine[2],
                rowColumn = _evalStackLine[3];

            fixedLines.push(atSomething + ' (' + file + rowColumn + ')');
          } else {
            // TODO: When stack frames of different types are detected, try to load the additional source maps
            fixedLines.push(stackLine);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      error.stack = fixedLines.join('\n');
      this.state = {
        error: error,
        mapped: true
      };
    }
  }, {
    key: 'mapError',
    value: function mapError(error) {
      var _this2 = this;

      _get__('mapStackTrace')(error.stack, function (mappedStack) {
        error.stack = mappedStack.join('\n');

        _this2.setState({
          error: error,
          mapped: true
        });
      });
    }
  }, {
    key: 'renderFrames',
    value: function renderFrames(frames) {
      var _props = this.props,
          filename = _props.filename,
          editorScheme = _props.editorScheme,
          useLines = _props.useLines,
          useColumns = _props.useColumns;

      var _get__3 = _get__('assign')({}, _get__('style'), this.props.style),
          frame = _get__3.frame,
          file = _get__3.file,
          linkToFile = _get__3.linkToFile;

      return frames.map(function (f, index) {
        var text = void 0;
        var url = void 0;

        if (index === 0 && filename && !_get__('isFilenameAbsolute')(f.fileName)) {
          url = _get__('makeUrl')(filename, editorScheme);
          text = _get__('makeLinkText')(filename);
        } else {
          var lines = useLines ? f.lineNumber : null;
          var columns = useColumns ? f.columnNumber : null;
          url = _get__('makeUrl')(f.fileName, editorScheme, lines, columns);
          text = _get__('makeLinkText')(f.fileName, lines, columns);
        }

        return _get__('React').createElement(_get__('View'), {
          style: frame,
          key: index
        }, _get__('React').createElement(_get__('View'), null, f.functionName), _get__('React').createElement(_get__('View'), {
          style: file
        }, _get__('React').createElement(_get__('Text'), {
          style: linkToFile
        }, text)));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // The error is received as a property to initialize state.error, which may
      // be updated when it is mapped to the source map.
      var error = this.state.error;
      var className = this.props.className;

      var _get__4 = _get__('assign')({}, _get__('style'), this.props.style),
          redbox = _get__4.redbox,
          message = _get__4.message,
          stack = _get__4.stack,
          frame = _get__4.frame;

      var frames = void 0;
      var parseError = void 0;

      try {
        frames = _get__('ErrorStackParser').parse(error);
      } catch (e) {
        parseError = new Error('Failed to parse stack trace. Stack trace information unavailable.');
      }

      if (parseError) {
        frames = _get__('React').createElement(_get__('View'), {
          style: frame,
          key: 0
        }, _get__('React').createElement(_get__('View'), null, parseError.message));
      } else {
        frames = this.renderFrames(frames);
      }

      return _get__('React').createElement(_get__('View'), {
        style: redbox,
        className: className
      }, _get__('React').createElement(_get__('View'), {
        style: message
      }, error.name, ': ', error.message), _get__('React').createElement(_get__('View'), {
        style: stack
      }, frames));
    }
  }]);

  return RedBoxError;
}(_get__('Component')); // "Portal" component for actual RedBoxError component to
// render to (directly under body). Prevents bugs as in #27.


RedBoxError.propTypes = {
  error: _get__('PropTypes').instanceOf(Error).isRequired,
  filename: _get__('PropTypes').string,
  editorScheme: _get__('PropTypes').string,
  useLines: _get__('PropTypes').bool,
  useColumns: _get__('PropTypes').bool,
  style: _get__('PropTypes').object,
  className: _get__('PropTypes').string
};
RedBoxError.displayName = 'RedBoxError';
RedBoxError.defaultProps = {
  useLines: true,
  useColumns: true
};

var RedBox = function (_get__5) {
  _inherits(RedBox, _get__5);

  function RedBox() {
    _classCallCheck(this, RedBox);

    return _possibleConstructorReturn(this, (RedBox.__proto__ || Object.getPrototypeOf(RedBox)).apply(this, arguments));
  }

  _createClass(RedBox, [{
    key: 'render',
    value: function render() {
      return _get__('React').createElement(_get__('RedBoxError'), this.props);
    }
  }]);

  return RedBox;
}(_get__('Component'));

RedBox.propTypes = {
  error: _get__('PropTypes').instanceOf(Error).isRequired
};
RedBox.displayName = 'RedBox';
exports.default = RedBox;

var _RewiredData__ = Object.create(null);

var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
var _RewireAPI__ = {};

(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }

  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();

function _get__(variableName) {
  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = _RewiredData__[variableName];

    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}

function _get_original__(variableName) {
  switch (variableName) {
    case 'PropTypes':
      return _propTypes2.default;

    case 'mapStackTrace':
      return _sourcemappedStacktrace.mapStackTrace;

    case 'assign':
      return _objectAssign2.default;

    case 'style':
      return _style2.default;

    case 'isFilenameAbsolute':
      return _lib.isFilenameAbsolute;

    case 'makeUrl':
      return _lib.makeUrl;

    case 'makeLinkText':
      return _lib.makeLinkText;

    case 'ErrorStackParser':
      return _errorStackParser2.default;

    case 'Component':
      return _react.Component;

    case 'React':
      return _react2.default;

    case 'View':
      return _one.View;

    case 'Text':
      return _one.Text;

    case 'RedBoxError':
      return RedBoxError;
  }

  return undefined;
}

function _assign__(variableName, value) {
  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return _RewiredData__[variableName] = value;
  }
}

function _set_original__(variableName, _value) {
  switch (variableName) {}

  return undefined;
}

function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);

  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

  _assign__(variableName, newValue);

  return prefix ? newValue : oldValue;
}

function _set__(variableName, value) {
  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
    Object.keys(variableName).forEach(function (name) {
      _RewiredData__[name] = variableName[name];
    });
  } else {
    if (value === undefined) {
      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      _RewiredData__[variableName] = value;
    }

    return function () {
      _reset__(variableName);
    };
  }
}

function _reset__(variableName) {
  delete _RewiredData__[variableName];
}

function _with__(object) {
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};

  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      _RewiredData__[variableName] = previousValues[variableName];
    });
  }

  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = _RewiredData__[variableName];
      _RewiredData__[variableName] = object[variableName];
    });
    var result = callback();

    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }

    return result;
  };
}

var _typeOfOriginalExport = typeof RedBox === 'undefined' ? 'undefined' : _typeof(RedBox);

function addNonEnumerableProperty(name, value) {
  Object.defineProperty(RedBox, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}

if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(RedBox)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

exports.__get__ = _get__;
exports.__GetDependency__ = _get__;
exports.__Rewire__ = _set__;
exports.__set__ = _set__;
exports.__ResetDependency__ = _reset__;
exports.__RewireAPI__ = _RewireAPI__;

/***/ }),

/***/ "./node_modules/@remax/redbox-react/lib/lib.js":
/*!*****************************************************!*\
  !*** ./node_modules/@remax/redbox-react/lib/lib.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var filenameWithoutLoaders = exports.filenameWithoutLoaders = function filenameWithoutLoaders() {
  var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var index = filename.lastIndexOf('!');
  return index < 0 ? filename : filename.substr(index + 1);
};

var filenameHasLoaders = exports.filenameHasLoaders = function filenameHasLoaders(filename) {
  var actualFilename = _get__('filenameWithoutLoaders')(filename);

  return actualFilename !== filename;
};

var filenameHasSchema = exports.filenameHasSchema = function filenameHasSchema(filename) {
  return /^[\w]+\:/.test(filename);
};

var isFilenameAbsolute = exports.isFilenameAbsolute = function isFilenameAbsolute(filename) {
  var actualFilename = _get__('filenameWithoutLoaders')(filename);

  if (actualFilename.indexOf('/') === 0) {
    return true;
  }

  return false;
};

var makeUrl = exports.makeUrl = function makeUrl(filename, scheme, line, column) {
  var actualFilename = _get__('filenameWithoutLoaders')(filename);

  if (_get__('filenameHasSchema')(filename)) {
    return actualFilename;
  }

  var url = 'file://' + actualFilename;

  if (scheme === 'vscode') {
    url = scheme + '://file/' + url;
    url = url.replace(/file:\/\/\//, ''); // visual studio code does not need file:/// in its scheme

    if (line && actualFilename === filename) {
      url = url + ':' + line;

      if (column) {
        url = url + ':' + column;
      }
    }
  } else if (scheme) {
    url = scheme + '://open?url=' + url;

    if (line && actualFilename === filename) {
      url = url + '&line=' + line;

      if (column) {
        url = url + '&column=' + column;
      }
    }
  }

  return url;
};

var makeLinkText = exports.makeLinkText = function makeLinkText(filename, line, column) {
  var text = _get__('filenameWithoutLoaders')(filename);

  if (line && text === filename) {
    text = text + ':' + line;

    if (column) {
      text = text + ':' + column;
    }
  }

  return text;
};

var _RewiredData__ = Object.create(null);

var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
var _RewireAPI__ = {};

(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }

  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();

function _get__(variableName) {
  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = _RewiredData__[variableName];

    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}

function _get_original__(variableName) {
  switch (variableName) {
    case 'filenameWithoutLoaders':
      return filenameWithoutLoaders;

    case 'filenameHasSchema':
      return filenameHasSchema;
  }

  return undefined;
}

function _assign__(variableName, value) {
  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return _RewiredData__[variableName] = value;
  }
}

function _set_original__(variableName, _value) {
  switch (variableName) {}

  return undefined;
}

function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);

  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

  _assign__(variableName, newValue);

  return prefix ? newValue : oldValue;
}

function _set__(variableName, value) {
  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
    Object.keys(variableName).forEach(function (name) {
      _RewiredData__[name] = variableName[name];
    });
  } else {
    if (value === undefined) {
      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      _RewiredData__[variableName] = value;
    }

    return function () {
      _reset__(variableName);
    };
  }
}

function _reset__(variableName) {
  delete _RewiredData__[variableName];
}

function _with__(object) {
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};

  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      _RewiredData__[variableName] = previousValues[variableName];
    });
  }

  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = _RewiredData__[variableName];
      _RewiredData__[variableName] = object[variableName];
    });
    var result = callback();

    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }

    return result;
  };
}

exports.__get__ = _get__;
exports.__GetDependency__ = _get__;
exports.__Rewire__ = _set__;
exports.__set__ = _set__;
exports.__ResetDependency__ = _reset__;
exports.__RewireAPI__ = _RewireAPI__;
exports.default = _RewireAPI__;

/***/ }),

/***/ "./node_modules/@remax/redbox-react/lib/style.js":
/*!*******************************************************!*\
  !*** ./node_modules/@remax/redbox-react/lib/style.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _DefaultExportValue = {
  redbox: {
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
    position: 'fixed',
    padding: '10px',
    top: '0px',
    left: '0px',
    bottom: '0px',
    right: '0px',
    width: '100%',
    background: 'rgb(204, 0, 0)',
    color: 'white',
    zIndex: 2147483647,
    textAlign: 'left',
    fontSize: '16PX',
    wordBreak: 'break-all',
    lineHeight: 1.2,
    overflow: 'auto'
  },
  message: {
    fontWeight: 'bold'
  },
  stack: {
    fontFamily: 'monospace',
    marginTop: '2em'
  },
  frame: {
    marginTop: '1em'
  },
  file: {
    fontSize: '0.8em',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  linkToFile: {
    textDecoration: 'none',
    color: 'rgba(255, 255, 255, 0.7)'
  }
};
exports.default = _DefaultExportValue;

/***/ }),

/***/ "./node_modules/error-stack-parser/error-stack-parser.js":
/*!***************************************************************!*\
  !*** ./node_modules/error-stack-parser/error-stack-parser.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (root, factory) {
  'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! stackframe */ "./node_modules/stackframe/stackframe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function ErrorStackParser(StackFrame) {
  'use strict';

  var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
  var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
  var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;

  function _map(array, fn, thisArg) {
    if (typeof Array.prototype.map === 'function') {
      return array.map(fn, thisArg);
    } else {
      var output = new Array(array.length);

      for (var i = 0; i < array.length; i++) {
        output[i] = fn.call(thisArg, array[i]);
      }

      return output;
    }
  }

  function _filter(array, fn, thisArg) {
    if (typeof Array.prototype.filter === 'function') {
      return array.filter(fn, thisArg);
    } else {
      var output = [];

      for (var i = 0; i < array.length; i++) {
        if (fn.call(thisArg, array[i])) {
          output.push(array[i]);
        }
      }

      return output;
    }
  }

  function _indexOf(array, target) {
    if (typeof Array.prototype.indexOf === 'function') {
      return array.indexOf(target);
    } else {
      for (var i = 0; i < array.length; i++) {
        if (array[i] === target) {
          return i;
        }
      }

      return -1;
    }
  }

  return {
    /**
     * Given an Error object, extract the most information from it.
     *
     * @param {Error} error object
     * @return {Array} of StackFrames
     */
    parse: function ErrorStackParser$$parse(error) {
      if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
        return this.parseOpera(error);
      } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
        return this.parseV8OrIE(error);
      } else if (error.stack) {
        return this.parseFFOrSafari(error);
      } else {
        throw new Error('Cannot parse given Error object');
      }
    },
    // Separate line and column numbers from a string of the form: (URI:Line:Column)
    extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
      // Fail-fast but return locations like "(native)"
      if (urlLike.indexOf(':') === -1) {
        return [urlLike];
      }

      var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
      var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
      return [parts[1], parts[2] || undefined, parts[3] || undefined];
    },
    parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
      var filtered = _filter(error.stack.split('\n'), function (line) {
        return !!line.match(CHROME_IE_STACK_REGEXP);
      }, this);

      return _map(filtered, function (line) {
        if (line.indexOf('(eval ') > -1) {
          // Throw away eval information until we implement stacktrace.js/stackframe#8
          line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
        }

        var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
        var locationParts = this.extractLocation(tokens.pop());
        var functionName = tokens.join(' ') || undefined;
        var fileName = _indexOf(['eval', '<anonymous>'], locationParts[0]) > -1 ? undefined : locationParts[0];
        return new StackFrame(functionName, undefined, fileName, locationParts[1], locationParts[2], line);
      }, this);
    },
    parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
      var filtered = _filter(error.stack.split('\n'), function (line) {
        return !line.match(SAFARI_NATIVE_CODE_REGEXP);
      }, this);

      return _map(filtered, function (line) {
        // Throw away eval information until we implement stacktrace.js/stackframe#8
        if (line.indexOf(' > eval') > -1) {
          line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
        }

        if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
          // Safari eval frames only have function names and nothing else
          return new StackFrame(line);
        } else {
          var tokens = line.split('@');
          var locationParts = this.extractLocation(tokens.pop());
          var functionName = tokens.join('@') || undefined;
          return new StackFrame(functionName, undefined, locationParts[0], locationParts[1], locationParts[2], line);
        }
      }, this);
    },
    parseOpera: function ErrorStackParser$$parseOpera(e) {
      if (!e.stacktrace || e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
        return this.parseOpera9(e);
      } else if (!e.stack) {
        return this.parseOpera10(e);
      } else {
        return this.parseOpera11(e);
      }
    },
    parseOpera9: function ErrorStackParser$$parseOpera9(e) {
      var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
      var lines = e.message.split('\n');
      var result = [];

      for (var i = 2, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);

        if (match) {
          result.push(new StackFrame(undefined, undefined, match[2], match[1], undefined, lines[i]));
        }
      }

      return result;
    },
    parseOpera10: function ErrorStackParser$$parseOpera10(e) {
      var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
      var lines = e.stacktrace.split('\n');
      var result = [];

      for (var i = 0, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);

        if (match) {
          result.push(new StackFrame(match[3] || undefined, undefined, match[2], match[1], undefined, lines[i]));
        }
      }

      return result;
    },
    // Opera 10.65+ Error.stack very similar to FF/Safari
    parseOpera11: function ErrorStackParser$$parseOpera11(error) {
      var filtered = _filter(error.stack.split('\n'), function (line) {
        return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
      }, this);

      return _map(filtered, function (line) {
        var tokens = line.split('@');
        var locationParts = this.extractLocation(tokens.pop());
        var functionCall = tokens.shift() || '';
        var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^\)]*\)/g, '') || undefined;
        var argsRaw;

        if (functionCall.match(/\(([^\)]*)\)/)) {
          argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
        }

        var args = argsRaw === undefined || argsRaw === '[arguments not available]' ? undefined : argsRaw.split(',');
        return new StackFrame(functionName, args, locationParts[0], locationParts[1], locationParts[2], line);
      }, this);
    }
  };
});

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function printWarning() {};

if (true) {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && _typeof(data) === 'object' ? data : {};
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
          expectedType: expectedType
        });
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);

        if (checkerResult == null) {
          return null;
        }

        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }

      var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = _typeof(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

if (true) {
  (function () {
    'use strict'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (_typeof(object) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "./node_modules/remax/runtime.js":
/*!***************************************!*\
  !*** ./node_modules/remax/runtime.js ***!
  \***************************************/
/*! exports provided: render, createAppConfig, createPageConfig, createComponentConfig, createNativeComponent, createHostComponent, createPortal, RuntimeOptions, PluginDriver, usePageEvent, useAppEvent, usePageInstance, useComponentInstance, useNativeEffect, useQuery, unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAppConfig", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createAppConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComponentConfig", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createComponentConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNativeComponent", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHostComponent", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPortal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RuntimeOptions", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["RuntimeOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginDriver", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["PluginDriver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageEvent", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppEvent", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["useAppEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageInstance", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useComponentInstance", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["useComponentInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNativeEffect", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["useNativeEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["useQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });



/***/ }),

/***/ "./node_modules/sourcemapped-stacktrace/dist/sourcemapped-stacktrace.js":
/*!******************************************************************************!*\
  !*** ./node_modules/sourcemapped-stacktrace/dist/sourcemapped-stacktrace.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId])
          /******/
          return installedModules[moduleId].exports;
        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = installedModules[moduleId] = {
          /******/
          exports: {},

          /******/
          id: moduleId,

          /******/
          loaded: false
          /******/

        };
        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        // Flag the module as loaded

        /******/

        module.loaded = true;
        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/
      // __webpack_public_path__

      /******/

      __webpack_require__.p = "";
      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(0);
      /******/
    }
    /************************************************************************/

    /******/
    ([
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /*
      * sourcemapped-stacktrace.js
      * created by James Salter <iteration@gmail.com> (2014)
      *
      * https://github.com/novocaine/sourcemapped-stacktrace
      *
      * Licensed under the New BSD license. See LICENSE or:
      * http://opensource.org/licenses/BSD-3-Clause
      */

      /*global define */
      // note we only include source-map-consumer, not the whole source-map library,
      // which includes gear for generating source maps that we don't need


      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (source_map_consumer) {
        var global_mapForUri = {};
        /**
         * Re-map entries in a stacktrace using sourcemaps if available.
         *
         * @param {str} stack - The stacktrace from the browser.
         * @param {function} done - Callback invoked with the transformed stacktrace
         *                          (an Array of Strings) passed as the first
         *                          argument
         * @param {Object} [opts] - Optional options object.
         * @param {Function} [opts.filter] - Filter function applied to each stackTrace line.
         *                                   Lines which do not pass the filter won't be processesd.
         * @param {boolean} [opts.cacheGlobally] - Whether to cache sourcemaps globally across multiple calls.
         * @param {boolean} [opts.sync] - Whether to use synchronous ajax to load the sourcemaps.
         * @param {string} [opts.traceFormat] - If `error.stack` is formatted according to chrome or
         *                                      Firefox's style.  Can be either `"chrome"`, `"firefox"`
         *                                      or `undefined` (default).  If `undefined`, this library
         *                                      will guess based on `navigator.userAgent`.
         */

        var mapStackTrace = function mapStackTrace(stack, done, opts) {
          var lines;
          var line;
          var mapForUri = {};
          var rows = {};
          var fields;
          var uri;
          var expected_fields;
          var regex;
          var skip_lines;
          var fetcher = new Fetcher(opts);
          var traceFormat = opts && opts.traceFormat;

          if (traceFormat !== "chrome" && traceFormat !== "firefox") {
            if (traceFormat) {
              throw new Error("unknown traceFormat \"" + traceFormat + "\" :(");
            } else if (isChromeOrEdge() || isIE11Plus()) {
              traceFormat = "chrome";
            } else if (isFirefox() || isSafari()) {
              traceFormat = "firefox";
            } else {
              throw new Error("unknown browser :(");
            }
          }

          if (traceFormat === "chrome") {
            regex = /^ +at.+\((.*):([0-9]+):([0-9]+)/;
            expected_fields = 4; // (skip first line containing exception message)

            skip_lines = 1;
          } else {
            regex = /@(.*):([0-9]+):([0-9]+)/;
            expected_fields = 4;
            skip_lines = 0;
          }

          lines = stack.split("\n").slice(skip_lines);

          for (var i = 0; i < lines.length; i++) {
            line = lines[i];
            if (opts && opts.filter && !opts.filter(line)) continue;
            fields = line.match(regex);

            if (fields && fields.length === expected_fields) {
              rows[i] = fields;
              uri = fields[1];

              if (!uri.match(/<anonymous>/)) {
                fetcher.fetchScript(uri);
              }
            }
          }

          fetcher.sem.whenReady(function () {
            var result = processSourceMaps(lines, rows, fetcher.mapForUri, traceFormat);
            done(result);
          });
        };

        var isChromeOrEdge = function isChromeOrEdge() {
          return navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
        };

        var isFirefox = function isFirefox() {
          return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        };

        var isSafari = function isSafari() {
          return navigator.userAgent.toLowerCase().indexOf('safari') > -1;
        };

        var isIE11Plus = function isIE11Plus() {
          return document.documentMode && document.documentMode >= 11;
        };

        var Semaphore = function Semaphore() {
          this.count = 0;
          this.pending = [];
        };

        Semaphore.prototype.incr = function () {
          this.count++;
        };

        Semaphore.prototype.decr = function () {
          this.count--;
          this.flush();
        };

        Semaphore.prototype.whenReady = function (fn) {
          this.pending.push(fn);
          this.flush();
        };

        Semaphore.prototype.flush = function () {
          if (this.count === 0) {
            this.pending.forEach(function (fn) {
              fn();
            });
            this.pending = [];
          }
        };

        var Fetcher = function Fetcher(opts) {
          this.sem = new Semaphore();
          this.sync = opts && opts.sync;
          this.mapForUri = opts && opts.cacheGlobally ? global_mapForUri : {};
        };

        Fetcher.prototype.ajax = function (uri, callback) {
          var xhr = createXMLHTTPObject();
          var that = this;

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              callback.call(that, xhr, uri);
            }
          };

          xhr.open("GET", uri, !this.sync);
          xhr.send();
        };

        Fetcher.prototype.fetchScript = function (uri) {
          if (!(uri in this.mapForUri)) {
            this.sem.incr();
            this.mapForUri[uri] = null;
          } else {
            return;
          }

          this.ajax(uri, this.onScriptLoad);
        };

        var absUrlRegex = new RegExp('^(?:[a-z]+:)?//', 'i');

        Fetcher.prototype.onScriptLoad = function (xhr, uri) {
          if (xhr.status === 200 || uri.slice(0, 7) === "file://" && xhr.status === 0) {
            // find .map in file.
            //
            // attempt to find it at the very end of the file, but tolerate trailing
            // whitespace inserted by some packers.
            var match = xhr.responseText.match("//# [s]ourceMappingURL=(.*)[\\s]*$", "m");

            if (match && match.length === 2) {
              // get the map
              var mapUri = match[1];
              var embeddedSourceMap = mapUri.match("data:application/json;(charset=[^;]+;)?base64,(.*)");

              if (embeddedSourceMap && embeddedSourceMap[2]) {
                this.mapForUri[uri] = new source_map_consumer.SourceMapConsumer(atob(embeddedSourceMap[2]));
                this.sem.decr();
              } else {
                if (!absUrlRegex.test(mapUri)) {
                  // relative url; according to sourcemaps spec is 'source origin'
                  var origin;
                  var lastSlash = uri.lastIndexOf('/');

                  if (lastSlash !== -1) {
                    origin = uri.slice(0, lastSlash + 1);
                    mapUri = origin + mapUri; // note if lastSlash === -1, actual script uri has no slash
                    // somehow, so no way to use it as a prefix... we give up and try
                    // as absolute
                  }
                }

                this.ajax(mapUri, function (xhr) {
                  if (xhr.status === 200 || mapUri.slice(0, 7) === "file://" && xhr.status === 0) {
                    this.mapForUri[uri] = new source_map_consumer.SourceMapConsumer(xhr.responseText);
                  }

                  this.sem.decr();
                });
              }
            } else {
              // no map
              this.sem.decr();
            }
          } else {
            // HTTP error fetching uri of the script
            this.sem.decr();
          }
        };

        var processSourceMaps = function processSourceMaps(lines, rows, mapForUri, traceFormat) {
          var result = [];
          var map;
          var origName = traceFormat === "chrome" ? origNameChrome : origNameFirefox;

          for (var i = 0; i < lines.length; i++) {
            var row = rows[i];

            if (row) {
              var uri = row[1];
              var line = parseInt(row[2], 10);
              var column = parseInt(row[3], 10);
              map = mapForUri[uri];

              if (map) {
                // we think we have a map for that uri. call source-map library
                var origPos = map.originalPositionFor({
                  line: line,
                  column: column
                });
                result.push(formatOriginalPosition(origPos.source, origPos.line, origPos.column, origPos.name || origName(lines[i])));
              } else {
                // we can't find a map for that url, but we parsed the row.
                // reformat unchanged line for consistency with the sourcemapped
                // lines.
                result.push(formatOriginalPosition(uri, line, column, origName(lines[i])));
              }
            } else {
              // we weren't able to parse the row, push back what we were given
              result.push(lines[i]);
            }
          }

          return result;
        };

        function origNameChrome(origLine) {
          var match = / +at +([^ ]*).*/.exec(origLine);
          return match && match[1];
        }

        function origNameFirefox(origLine) {
          var match = /([^@]*)@.*/.exec(origLine);
          return match && match[1];
        }

        var formatOriginalPosition = function formatOriginalPosition(source, line, column, name) {
          // mimic chrome's format
          return "    at " + (name ? name : "(unknown)") + " (" + source + ":" + line + ":" + column + ")";
        }; // xmlhttprequest boilerplate


        var XMLHttpFactories = [function () {
          return new XMLHttpRequest();
        }, function () {
          return new ActiveXObject("Msxml2.XMLHTTP");
        }, function () {
          return new ActiveXObject("Msxml3.XMLHTTP");
        }, function () {
          return new ActiveXObject("Microsoft.XMLHTTP");
        }];

        function createXMLHTTPObject() {
          var xmlhttp = false;

          for (var i = 0; i < XMLHttpFactories.length; i++) {
            try {
              xmlhttp = XMLHttpFactories[i]();
            } catch (e) {
              continue;
            }

            break;
          }

          return xmlhttp;
        }

        return {
          mapStackTrace: mapStackTrace
        };
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      /* -*- Mode: js; js-indent-level: 2; -*- */

      /*
       * Copyright 2011 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       */
      var util = __webpack_require__(2);

      var binarySearch = __webpack_require__(3);

      var ArraySet = __webpack_require__(4).ArraySet;

      var base64VLQ = __webpack_require__(5);

      var quickSort = __webpack_require__(7).quickSort;

      function SourceMapConsumer(aSourceMap) {
        var sourceMap = aSourceMap;

        if (typeof aSourceMap === 'string') {
          sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
        }

        return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap) : new BasicSourceMapConsumer(sourceMap);
      }

      SourceMapConsumer.fromSourceMap = function (aSourceMap) {
        return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
      };
      /**
       * The version of the source mapping spec that we are consuming.
       */


      SourceMapConsumer.prototype._version = 3; // `__generatedMappings` and `__originalMappings` are arrays that hold the
      // parsed mapping coordinates from the source map's "mappings" attribute. They
      // are lazily instantiated, accessed via the `_generatedMappings` and
      // `_originalMappings` getters respectively, and we only parse the mappings
      // and create these arrays once queried for a source location. We jump through
      // these hoops because there can be many thousands of mappings, and parsing
      // them is expensive, so we only want to do it if we must.
      //
      // Each object in the arrays is of the form:
      //
      //     {
      //       generatedLine: The line number in the generated code,
      //       generatedColumn: The column number in the generated code,
      //       source: The path to the original source file that generated this
      //               chunk of code,
      //       originalLine: The line number in the original source that
      //                     corresponds to this chunk of generated code,
      //       originalColumn: The column number in the original source that
      //                       corresponds to this chunk of generated code,
      //       name: The name of the original symbol which generated this chunk of
      //             code.
      //     }
      //
      // All properties except for `generatedLine` and `generatedColumn` can be
      // `null`.
      //
      // `_generatedMappings` is ordered by the generated positions.
      //
      // `_originalMappings` is ordered by the original positions.

      SourceMapConsumer.prototype.__generatedMappings = null;
      Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
        get: function get() {
          if (!this.__generatedMappings) {
            this._parseMappings(this._mappings, this.sourceRoot);
          }

          return this.__generatedMappings;
        }
      });
      SourceMapConsumer.prototype.__originalMappings = null;
      Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
        get: function get() {
          if (!this.__originalMappings) {
            this._parseMappings(this._mappings, this.sourceRoot);
          }

          return this.__originalMappings;
        }
      });

      SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
        var c = aStr.charAt(index);
        return c === ";" || c === ",";
      };
      /**
       * Parse the mappings in a string in to a data structure which we can easily
       * query (the ordered arrays in the `this.__generatedMappings` and
       * `this.__originalMappings` properties).
       */


      SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
        throw new Error("Subclasses must implement _parseMappings");
      };

      SourceMapConsumer.GENERATED_ORDER = 1;
      SourceMapConsumer.ORIGINAL_ORDER = 2;
      SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
      SourceMapConsumer.LEAST_UPPER_BOUND = 2;
      /**
       * Iterate over each mapping between an original source/line/column and a
       * generated line/column in this source map.
       *
       * @param Function aCallback
       *        The function that is called with each mapping.
       * @param Object aContext
       *        Optional. If specified, this object will be the value of `this` every
       *        time that `aCallback` is called.
       * @param aOrder
       *        Either `SourceMapConsumer.GENERATED_ORDER` or
       *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
       *        iterate over the mappings sorted by the generated file's line/column
       *        order or the original's source/line/column order, respectively. Defaults to
       *        `SourceMapConsumer.GENERATED_ORDER`.
       */

      SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
        var context = aContext || null;
        var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
        var mappings;

        switch (order) {
          case SourceMapConsumer.GENERATED_ORDER:
            mappings = this._generatedMappings;
            break;

          case SourceMapConsumer.ORIGINAL_ORDER:
            mappings = this._originalMappings;
            break;

          default:
            throw new Error("Unknown order of iteration.");
        }

        var sourceRoot = this.sourceRoot;
        mappings.map(function (mapping) {
          var source = mapping.source === null ? null : this._sources.at(mapping.source);

          if (source != null && sourceRoot != null) {
            source = util.join(sourceRoot, source);
          }

          return {
            source: source,
            generatedLine: mapping.generatedLine,
            generatedColumn: mapping.generatedColumn,
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name: mapping.name === null ? null : this._names.at(mapping.name)
          };
        }, this).forEach(aCallback, context);
      };
      /**
       * Returns all generated line and column information for the original source,
       * line, and column provided. If no column is provided, returns all mappings
       * corresponding to a either the line we are searching for or the next
       * closest line that has any mappings. Otherwise, returns all mappings
       * corresponding to the given line and either the column we are searching for
       * or the next closest column that has any offsets.
       *
       * The only argument is an object with the following properties:
       *
       *   - source: The filename of the original source.
       *   - line: The line number in the original source.
       *   - column: Optional. the column number in the original source.
       *
       * and an array of objects is returned, each with the following properties:
       *
       *   - line: The line number in the generated source, or null.
       *   - column: The column number in the generated source, or null.
       */


      SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
        var line = util.getArg(aArgs, 'line'); // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
        // returns the index of the closest mapping less than the needle. By
        // setting needle.originalColumn to 0, we thus find the last mapping for
        // the given line, provided such a mapping exists.

        var needle = {
          source: util.getArg(aArgs, 'source'),
          originalLine: line,
          originalColumn: util.getArg(aArgs, 'column', 0)
        };

        if (this.sourceRoot != null) {
          needle.source = util.relative(this.sourceRoot, needle.source);
        }

        if (!this._sources.has(needle.source)) {
          return [];
        }

        needle.source = this._sources.indexOf(needle.source);
        var mappings = [];

        var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);

        if (index >= 0) {
          var mapping = this._originalMappings[index];

          if (aArgs.column === undefined) {
            var originalLine = mapping.originalLine; // Iterate until either we run out of mappings, or we run into
            // a mapping for a different line than the one we found. Since
            // mappings are sorted, this is guaranteed to find all mappings for
            // the line we found.

            while (mapping && mapping.originalLine === originalLine) {
              mappings.push({
                line: util.getArg(mapping, 'generatedLine', null),
                column: util.getArg(mapping, 'generatedColumn', null),
                lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
              });
              mapping = this._originalMappings[++index];
            }
          } else {
            var originalColumn = mapping.originalColumn; // Iterate until either we run out of mappings, or we run into
            // a mapping for a different line than the one we were searching for.
            // Since mappings are sorted, this is guaranteed to find all mappings for
            // the line we are searching for.

            while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
              mappings.push({
                line: util.getArg(mapping, 'generatedLine', null),
                column: util.getArg(mapping, 'generatedColumn', null),
                lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
              });
              mapping = this._originalMappings[++index];
            }
          }
        }

        return mappings;
      };

      exports.SourceMapConsumer = SourceMapConsumer;
      /**
       * A BasicSourceMapConsumer instance represents a parsed source map which we can
       * query for information about the original file positions by giving it a file
       * position in the generated source.
       *
       * The only parameter is the raw source map (either as a JSON string, or
       * already parsed to an object). According to the spec, source maps have the
       * following attributes:
       *
       *   - version: Which version of the source map spec this map is following.
       *   - sources: An array of URLs to the original source files.
       *   - names: An array of identifiers which can be referrenced by individual mappings.
       *   - sourceRoot: Optional. The URL root from which all sources are relative.
       *   - sourcesContent: Optional. An array of contents of the original source files.
       *   - mappings: A string of base64 VLQs which contain the actual mappings.
       *   - file: Optional. The generated file this source map is associated with.
       *
       * Here is an example source map, taken from the source map spec[0]:
       *
       *     {
       *       version : 3,
       *       file: "out.js",
       *       sourceRoot : "",
       *       sources: ["foo.js", "bar.js"],
       *       names: ["src", "maps", "are", "fun"],
       *       mappings: "AA,AB;;ABCDE;"
       *     }
       *
       * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
       */

      function BasicSourceMapConsumer(aSourceMap) {
        var sourceMap = aSourceMap;

        if (typeof aSourceMap === 'string') {
          sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
        }

        var version = util.getArg(sourceMap, 'version');
        var sources = util.getArg(sourceMap, 'sources'); // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
        // requires the array) to play nice here.

        var names = util.getArg(sourceMap, 'names', []);
        var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
        var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
        var mappings = util.getArg(sourceMap, 'mappings');
        var file = util.getArg(sourceMap, 'file', null); // Once again, Sass deviates from the spec and supplies the version as a
        // string rather than a number, so we use loose equality checking here.

        if (version != this._version) {
          throw new Error('Unsupported version: ' + version);
        }

        sources = sources.map(String) // Some source maps produce relative source paths like "./foo.js" instead of
        // "foo.js".  Normalize these first so that future comparisons will succeed.
        // See bugzil.la/1090768.
        .map(util.normalize) // Always ensure that absolute sources are internally stored relative to
        // the source root, if the source root is absolute. Not doing this would
        // be particularly problematic when the source root is a prefix of the
        // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
        .map(function (source) {
          return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
        }); // Pass `true` below to allow duplicate names and sources. While source maps
        // are intended to be compressed and deduplicated, the TypeScript compiler
        // sometimes generates source maps with duplicates in them. See Github issue
        // #72 and bugzil.la/889492.

        this._names = ArraySet.fromArray(names.map(String), true);
        this._sources = ArraySet.fromArray(sources, true);
        this.sourceRoot = sourceRoot;
        this.sourcesContent = sourcesContent;
        this._mappings = mappings;
        this.file = file;
      }

      BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
      BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
      /**
       * Create a BasicSourceMapConsumer from a SourceMapGenerator.
       *
       * @param SourceMapGenerator aSourceMap
       *        The source map that will be consumed.
       * @returns BasicSourceMapConsumer
       */

      BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap) {
        var smc = Object.create(BasicSourceMapConsumer.prototype);
        var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
        var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
        smc.sourceRoot = aSourceMap._sourceRoot;
        smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
        smc.file = aSourceMap._file; // Because we are modifying the entries (by converting string sources and
        // names to indices into the sources and names ArraySets), we have to make
        // a copy of the entry or else bad things happen. Shared mutable state
        // strikes again! See github issue #191.

        var generatedMappings = aSourceMap._mappings.toArray().slice();

        var destGeneratedMappings = smc.__generatedMappings = [];
        var destOriginalMappings = smc.__originalMappings = [];

        for (var i = 0, length = generatedMappings.length; i < length; i++) {
          var srcMapping = generatedMappings[i];
          var destMapping = new Mapping();
          destMapping.generatedLine = srcMapping.generatedLine;
          destMapping.generatedColumn = srcMapping.generatedColumn;

          if (srcMapping.source) {
            destMapping.source = sources.indexOf(srcMapping.source);
            destMapping.originalLine = srcMapping.originalLine;
            destMapping.originalColumn = srcMapping.originalColumn;

            if (srcMapping.name) {
              destMapping.name = names.indexOf(srcMapping.name);
            }

            destOriginalMappings.push(destMapping);
          }

          destGeneratedMappings.push(destMapping);
        }

        quickSort(smc.__originalMappings, util.compareByOriginalPositions);
        return smc;
      };
      /**
       * The version of the source mapping spec that we are consuming.
       */


      BasicSourceMapConsumer.prototype._version = 3;
      /**
       * The list of original sources.
       */

      Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
        get: function get() {
          return this._sources.toArray().map(function (s) {
            return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
          }, this);
        }
      });
      /**
       * Provide the JIT with a nice shape / hidden class.
       */

      function Mapping() {
        this.generatedLine = 0;
        this.generatedColumn = 0;
        this.source = null;
        this.originalLine = null;
        this.originalColumn = null;
        this.name = null;
      }
      /**
       * Parse the mappings in a string in to a data structure which we can easily
       * query (the ordered arrays in the `this.__generatedMappings` and
       * `this.__originalMappings` properties).
       */


      BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
        var generatedLine = 1;
        var previousGeneratedColumn = 0;
        var previousOriginalLine = 0;
        var previousOriginalColumn = 0;
        var previousSource = 0;
        var previousName = 0;
        var length = aStr.length;
        var index = 0;
        var cachedSegments = {};
        var temp = {};
        var originalMappings = [];
        var generatedMappings = [];
        var mapping, str, segment, end, value;

        while (index < length) {
          if (aStr.charAt(index) === ';') {
            generatedLine++;
            index++;
            previousGeneratedColumn = 0;
          } else if (aStr.charAt(index) === ',') {
            index++;
          } else {
            mapping = new Mapping();
            mapping.generatedLine = generatedLine; // Because each offset is encoded relative to the previous one,
            // many segments often have the same encoding. We can exploit this
            // fact by caching the parsed variable length fields of each segment,
            // allowing us to avoid a second parse if we encounter the same
            // segment again.

            for (end = index; end < length; end++) {
              if (this._charIsMappingSeparator(aStr, end)) {
                break;
              }
            }

            str = aStr.slice(index, end);
            segment = cachedSegments[str];

            if (segment) {
              index += str.length;
            } else {
              segment = [];

              while (index < end) {
                base64VLQ.decode(aStr, index, temp);
                value = temp.value;
                index = temp.rest;
                segment.push(value);
              }

              if (segment.length === 2) {
                throw new Error('Found a source, but no line and column');
              }

              if (segment.length === 3) {
                throw new Error('Found a source and line, but no column');
              }

              cachedSegments[str] = segment;
            } // Generated column.


            mapping.generatedColumn = previousGeneratedColumn + segment[0];
            previousGeneratedColumn = mapping.generatedColumn;

            if (segment.length > 1) {
              // Original source.
              mapping.source = previousSource + segment[1];
              previousSource += segment[1]; // Original line.

              mapping.originalLine = previousOriginalLine + segment[2];
              previousOriginalLine = mapping.originalLine; // Lines are stored 0-based

              mapping.originalLine += 1; // Original column.

              mapping.originalColumn = previousOriginalColumn + segment[3];
              previousOriginalColumn = mapping.originalColumn;

              if (segment.length > 4) {
                // Original name.
                mapping.name = previousName + segment[4];
                previousName += segment[4];
              }
            }

            generatedMappings.push(mapping);

            if (typeof mapping.originalLine === 'number') {
              originalMappings.push(mapping);
            }
          }
        }

        quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
        this.__generatedMappings = generatedMappings;
        quickSort(originalMappings, util.compareByOriginalPositions);
        this.__originalMappings = originalMappings;
      };
      /**
       * Find the mapping that best matches the hypothetical "needle" mapping that
       * we are searching for in the given "haystack" of mappings.
       */


      BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
        // To return the position we are searching for, we must first find the
        // mapping for the given position and then return the opposite position it
        // points to. Because the mappings are sorted, we can use binary search to
        // find the best mapping.
        if (aNeedle[aLineName] <= 0) {
          throw new TypeError('Line must be greater than or equal to 1, got ' + aNeedle[aLineName]);
        }

        if (aNeedle[aColumnName] < 0) {
          throw new TypeError('Column must be greater than or equal to 0, got ' + aNeedle[aColumnName]);
        }

        return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
      };
      /**
       * Compute the last column for each generated mapping. The last column is
       * inclusive.
       */


      BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
        for (var index = 0; index < this._generatedMappings.length; ++index) {
          var mapping = this._generatedMappings[index]; // Mappings do not contain a field for the last generated columnt. We
          // can come up with an optimistic estimate, however, by assuming that
          // mappings are contiguous (i.e. given two consecutive mappings, the
          // first mapping ends where the second one starts).

          if (index + 1 < this._generatedMappings.length) {
            var nextMapping = this._generatedMappings[index + 1];

            if (mapping.generatedLine === nextMapping.generatedLine) {
              mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
              continue;
            }
          } // The last mapping for each line spans the entire line.


          mapping.lastGeneratedColumn = Infinity;
        }
      };
      /**
       * Returns the original source, line, and column information for the generated
       * source's line and column positions provided. The only argument is an object
       * with the following properties:
       *
       *   - line: The line number in the generated source.
       *   - column: The column number in the generated source.
       *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
       *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
       *     closest element that is smaller than or greater than the one we are
       *     searching for, respectively, if the exact element cannot be found.
       *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
       *
       * and an object is returned with the following properties:
       *
       *   - source: The original source file, or null.
       *   - line: The line number in the original source, or null.
       *   - column: The column number in the original source, or null.
       *   - name: The original identifier, or null.
       */


      BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
        var needle = {
          generatedLine: util.getArg(aArgs, 'line'),
          generatedColumn: util.getArg(aArgs, 'column')
        };

        var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));

        if (index >= 0) {
          var mapping = this._generatedMappings[index];

          if (mapping.generatedLine === needle.generatedLine) {
            var source = util.getArg(mapping, 'source', null);

            if (source !== null) {
              source = this._sources.at(source);

              if (this.sourceRoot != null) {
                source = util.join(this.sourceRoot, source);
              }
            }

            var name = util.getArg(mapping, 'name', null);

            if (name !== null) {
              name = this._names.at(name);
            }

            return {
              source: source,
              line: util.getArg(mapping, 'originalLine', null),
              column: util.getArg(mapping, 'originalColumn', null),
              name: name
            };
          }
        }

        return {
          source: null,
          line: null,
          column: null,
          name: null
        };
      };
      /**
       * Return true if we have the source content for every source in the source
       * map, false otherwise.
       */


      BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
        if (!this.sourcesContent) {
          return false;
        }

        return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function (sc) {
          return sc == null;
        });
      };
      /**
       * Returns the original source content. The only argument is the url of the
       * original source file. Returns null if no original source content is
       * available.
       */


      BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
        if (!this.sourcesContent) {
          return null;
        }

        if (this.sourceRoot != null) {
          aSource = util.relative(this.sourceRoot, aSource);
        }

        if (this._sources.has(aSource)) {
          return this.sourcesContent[this._sources.indexOf(aSource)];
        }

        var url;

        if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
          // XXX: file:// URIs and absolute paths lead to unexpected behavior for
          // many users. We can help them out when they expect file:// URIs to
          // behave like it would if they were running a local HTTP server. See
          // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
          var fileUriAbsPath = aSource.replace(/^file:\/\//, "");

          if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
            return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
          }

          if ((!url.path || url.path == "/") && this._sources.has("/" + aSource)) {
            return this.sourcesContent[this._sources.indexOf("/" + aSource)];
          }
        } // This function is used recursively from
        // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
        // don't want to throw if we can't find the source - we just want to
        // return null, so we provide a flag to exit gracefully.


        if (nullOnMissing) {
          return null;
        } else {
          throw new Error('"' + aSource + '" is not in the SourceMap.');
        }
      };
      /**
       * Returns the generated line and column information for the original source,
       * line, and column positions provided. The only argument is an object with
       * the following properties:
       *
       *   - source: The filename of the original source.
       *   - line: The line number in the original source.
       *   - column: The column number in the original source.
       *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
       *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
       *     closest element that is smaller than or greater than the one we are
       *     searching for, respectively, if the exact element cannot be found.
       *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
       *
       * and an object is returned with the following properties:
       *
       *   - line: The line number in the generated source, or null.
       *   - column: The column number in the generated source, or null.
       */


      BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
        var source = util.getArg(aArgs, 'source');

        if (this.sourceRoot != null) {
          source = util.relative(this.sourceRoot, source);
        }

        if (!this._sources.has(source)) {
          return {
            line: null,
            column: null,
            lastColumn: null
          };
        }

        source = this._sources.indexOf(source);
        var needle = {
          source: source,
          originalLine: util.getArg(aArgs, 'line'),
          originalColumn: util.getArg(aArgs, 'column')
        };

        var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));

        if (index >= 0) {
          var mapping = this._originalMappings[index];

          if (mapping.source === needle.source) {
            return {
              line: util.getArg(mapping, 'generatedLine', null),
              column: util.getArg(mapping, 'generatedColumn', null),
              lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
            };
          }
        }

        return {
          line: null,
          column: null,
          lastColumn: null
        };
      };

      exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
      /**
       * An IndexedSourceMapConsumer instance represents a parsed source map which
       * we can query for information. It differs from BasicSourceMapConsumer in
       * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
       * input.
       *
       * The only parameter is a raw source map (either as a JSON string, or already
       * parsed to an object). According to the spec for indexed source maps, they
       * have the following attributes:
       *
       *   - version: Which version of the source map spec this map is following.
       *   - file: Optional. The generated file this source map is associated with.
       *   - sections: A list of section definitions.
       *
       * Each value under the "sections" field has two fields:
       *   - offset: The offset into the original specified at which this section
       *       begins to apply, defined as an object with a "line" and "column"
       *       field.
       *   - map: A source map definition. This source map could also be indexed,
       *       but doesn't have to be.
       *
       * Instead of the "map" field, it's also possible to have a "url" field
       * specifying a URL to retrieve a source map from, but that's currently
       * unsupported.
       *
       * Here's an example source map, taken from the source map spec[0], but
       * modified to omit a section which uses the "url" field.
       *
       *  {
       *    version : 3,
       *    file: "app.js",
       *    sections: [{
       *      offset: {line:100, column:10},
       *      map: {
       *        version : 3,
       *        file: "section.js",
       *        sources: ["foo.js", "bar.js"],
       *        names: ["src", "maps", "are", "fun"],
       *        mappings: "AAAA,E;;ABCDE;"
       *      }
       *    }],
       *  }
       *
       * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
       */

      function IndexedSourceMapConsumer(aSourceMap) {
        var sourceMap = aSourceMap;

        if (typeof aSourceMap === 'string') {
          sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
        }

        var version = util.getArg(sourceMap, 'version');
        var sections = util.getArg(sourceMap, 'sections');

        if (version != this._version) {
          throw new Error('Unsupported version: ' + version);
        }

        this._sources = new ArraySet();
        this._names = new ArraySet();
        var lastOffset = {
          line: -1,
          column: 0
        };
        this._sections = sections.map(function (s) {
          if (s.url) {
            // The url field will require support for asynchronicity.
            // See https://github.com/mozilla/source-map/issues/16
            throw new Error('Support for url field in sections not implemented.');
          }

          var offset = util.getArg(s, 'offset');
          var offsetLine = util.getArg(offset, 'line');
          var offsetColumn = util.getArg(offset, 'column');

          if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
            throw new Error('Section offsets must be ordered and non-overlapping.');
          }

          lastOffset = offset;
          return {
            generatedOffset: {
              // The offset fields are 0-based, but we use 1-based indices when
              // encoding/decoding from VLQ.
              generatedLine: offsetLine + 1,
              generatedColumn: offsetColumn + 1
            },
            consumer: new SourceMapConsumer(util.getArg(s, 'map'))
          };
        });
      }

      IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
      IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
      /**
       * The version of the source mapping spec that we are consuming.
       */

      IndexedSourceMapConsumer.prototype._version = 3;
      /**
       * The list of original sources.
       */

      Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
        get: function get() {
          var sources = [];

          for (var i = 0; i < this._sections.length; i++) {
            for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
              sources.push(this._sections[i].consumer.sources[j]);
            }
          }

          return sources;
        }
      });
      /**
       * Returns the original source, line, and column information for the generated
       * source's line and column positions provided. The only argument is an object
       * with the following properties:
       *
       *   - line: The line number in the generated source.
       *   - column: The column number in the generated source.
       *
       * and an object is returned with the following properties:
       *
       *   - source: The original source file, or null.
       *   - line: The line number in the original source, or null.
       *   - column: The column number in the original source, or null.
       *   - name: The original identifier, or null.
       */

      IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
        var needle = {
          generatedLine: util.getArg(aArgs, 'line'),
          generatedColumn: util.getArg(aArgs, 'column')
        }; // Find the section containing the generated position we're trying to map
        // to an original position.

        var sectionIndex = binarySearch.search(needle, this._sections, function (needle, section) {
          var cmp = needle.generatedLine - section.generatedOffset.generatedLine;

          if (cmp) {
            return cmp;
          }

          return needle.generatedColumn - section.generatedOffset.generatedColumn;
        });
        var section = this._sections[sectionIndex];

        if (!section) {
          return {
            source: null,
            line: null,
            column: null,
            name: null
          };
        }

        return section.consumer.originalPositionFor({
          line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
          column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
          bias: aArgs.bias
        });
      };
      /**
       * Return true if we have the source content for every source in the source
       * map, false otherwise.
       */


      IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
        return this._sections.every(function (s) {
          return s.consumer.hasContentsOfAllSources();
        });
      };
      /**
       * Returns the original source content. The only argument is the url of the
       * original source file. Returns null if no original source content is
       * available.
       */


      IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
        for (var i = 0; i < this._sections.length; i++) {
          var section = this._sections[i];
          var content = section.consumer.sourceContentFor(aSource, true);

          if (content) {
            return content;
          }
        }

        if (nullOnMissing) {
          return null;
        } else {
          throw new Error('"' + aSource + '" is not in the SourceMap.');
        }
      };
      /**
       * Returns the generated line and column information for the original source,
       * line, and column positions provided. The only argument is an object with
       * the following properties:
       *
       *   - source: The filename of the original source.
       *   - line: The line number in the original source.
       *   - column: The column number in the original source.
       *
       * and an object is returned with the following properties:
       *
       *   - line: The line number in the generated source, or null.
       *   - column: The column number in the generated source, or null.
       */


      IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
        for (var i = 0; i < this._sections.length; i++) {
          var section = this._sections[i]; // Only consider this section if the requested source is in the list of
          // sources of the consumer.

          if (section.consumer.sources.indexOf(util.getArg(aArgs, 'source')) === -1) {
            continue;
          }

          var generatedPosition = section.consumer.generatedPositionFor(aArgs);

          if (generatedPosition) {
            var ret = {
              line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
              column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
            };
            return ret;
          }
        }

        return {
          line: null,
          column: null
        };
      };
      /**
       * Parse the mappings in a string in to a data structure which we can easily
       * query (the ordered arrays in the `this.__generatedMappings` and
       * `this.__originalMappings` properties).
       */


      IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
        this.__generatedMappings = [];
        this.__originalMappings = [];

        for (var i = 0; i < this._sections.length; i++) {
          var section = this._sections[i];
          var sectionMappings = section.consumer._generatedMappings;

          for (var j = 0; j < sectionMappings.length; j++) {
            var mapping = sectionMappings[j];

            var source = section.consumer._sources.at(mapping.source);

            if (section.consumer.sourceRoot !== null) {
              source = util.join(section.consumer.sourceRoot, source);
            }

            this._sources.add(source);

            source = this._sources.indexOf(source);

            var name = section.consumer._names.at(mapping.name);

            this._names.add(name);

            name = this._names.indexOf(name); // The mappings coming from the consumer for the section have
            // generated positions relative to the start of the section, so we
            // need to offset them to be relative to the start of the concatenated
            // generated file.

            var adjustedMapping = {
              source: source,
              generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
              generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
              originalLine: mapping.originalLine,
              originalColumn: mapping.originalColumn,
              name: name
            };

            this.__generatedMappings.push(adjustedMapping);

            if (typeof adjustedMapping.originalLine === 'number') {
              this.__originalMappings.push(adjustedMapping);
            }
          }
        }

        quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
        quickSort(this.__originalMappings, util.compareByOriginalPositions);
      };

      exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports) {
      /* -*- Mode: js; js-indent-level: 2; -*- */

      /*
       * Copyright 2011 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       */

      /**
       * This is a helper function for getting values from parameter/options
       * objects.
       *
       * @param args The object we are extracting values from
       * @param name The name of the property we are getting.
       * @param defaultValue An optional value to return if the property is missing
       * from the object. If this is not specified and the property is missing, an
       * error will be thrown.
       */
      function getArg(aArgs, aName, aDefaultValue) {
        if (aName in aArgs) {
          return aArgs[aName];
        } else if (arguments.length === 3) {
          return aDefaultValue;
        } else {
          throw new Error('"' + aName + '" is a required argument.');
        }
      }

      exports.getArg = getArg;
      var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
      var dataUrlRegexp = /^data:.+\,.+$/;

      function urlParse(aUrl) {
        var match = aUrl.match(urlRegexp);

        if (!match) {
          return null;
        }

        return {
          scheme: match[1],
          auth: match[2],
          host: match[3],
          port: match[4],
          path: match[5]
        };
      }

      exports.urlParse = urlParse;

      function urlGenerate(aParsedUrl) {
        var url = '';

        if (aParsedUrl.scheme) {
          url += aParsedUrl.scheme + ':';
        }

        url += '//';

        if (aParsedUrl.auth) {
          url += aParsedUrl.auth + '@';
        }

        if (aParsedUrl.host) {
          url += aParsedUrl.host;
        }

        if (aParsedUrl.port) {
          url += ":" + aParsedUrl.port;
        }

        if (aParsedUrl.path) {
          url += aParsedUrl.path;
        }

        return url;
      }

      exports.urlGenerate = urlGenerate;
      /**
       * Normalizes a path, or the path portion of a URL:
       *
       * - Replaces consecutive slashes with one slash.
       * - Removes unnecessary '.' parts.
       * - Removes unnecessary '<dir>/..' parts.
       *
       * Based on code in the Node.js 'path' core module.
       *
       * @param aPath The path or url to normalize.
       */

      function normalize(aPath) {
        var path = aPath;
        var url = urlParse(aPath);

        if (url) {
          if (!url.path) {
            return aPath;
          }

          path = url.path;
        }

        var isAbsolute = exports.isAbsolute(path);
        var parts = path.split(/\/+/);

        for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
          part = parts[i];

          if (part === '.') {
            parts.splice(i, 1);
          } else if (part === '..') {
            up++;
          } else if (up > 0) {
            if (part === '') {
              // The first part is blank if the path is absolute. Trying to go
              // above the root is a no-op. Therefore we can remove all '..' parts
              // directly after the root.
              parts.splice(i + 1, up);
              up = 0;
            } else {
              parts.splice(i, 2);
              up--;
            }
          }
        }

        path = parts.join('/');

        if (path === '') {
          path = isAbsolute ? '/' : '.';
        }

        if (url) {
          url.path = path;
          return urlGenerate(url);
        }

        return path;
      }

      exports.normalize = normalize;
      /**
       * Joins two paths/URLs.
       *
       * @param aRoot The root path or URL.
       * @param aPath The path or URL to be joined with the root.
       *
       * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
       *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
       *   first.
       * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
       *   is updated with the result and aRoot is returned. Otherwise the result
       *   is returned.
       *   - If aPath is absolute, the result is aPath.
       *   - Otherwise the two paths are joined with a slash.
       * - Joining for example 'http://' and 'www.example.com' is also supported.
       */

      function join(aRoot, aPath) {
        if (aRoot === "") {
          aRoot = ".";
        }

        if (aPath === "") {
          aPath = ".";
        }

        var aPathUrl = urlParse(aPath);
        var aRootUrl = urlParse(aRoot);

        if (aRootUrl) {
          aRoot = aRootUrl.path || '/';
        } // `join(foo, '//www.example.org')`


        if (aPathUrl && !aPathUrl.scheme) {
          if (aRootUrl) {
            aPathUrl.scheme = aRootUrl.scheme;
          }

          return urlGenerate(aPathUrl);
        }

        if (aPathUrl || aPath.match(dataUrlRegexp)) {
          return aPath;
        } // `join('http://', 'www.example.com')`


        if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
          aRootUrl.host = aPath;
          return urlGenerate(aRootUrl);
        }

        var joined = aPath.charAt(0) === '/' ? aPath : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

        if (aRootUrl) {
          aRootUrl.path = joined;
          return urlGenerate(aRootUrl);
        }

        return joined;
      }

      exports.join = join;

      exports.isAbsolute = function (aPath) {
        return aPath.charAt(0) === '/' || !!aPath.match(urlRegexp);
      };
      /**
       * Make a path relative to a URL or another path.
       *
       * @param aRoot The root path or URL.
       * @param aPath The path or URL to be made relative to aRoot.
       */


      function relative(aRoot, aPath) {
        if (aRoot === "") {
          aRoot = ".";
        }

        aRoot = aRoot.replace(/\/$/, ''); // It is possible for the path to be above the root. In this case, simply
        // checking whether the root is a prefix of the path won't work. Instead, we
        // need to remove components from the root one by one, until either we find
        // a prefix that fits, or we run out of components to remove.

        var level = 0;

        while (aPath.indexOf(aRoot + '/') !== 0) {
          var index = aRoot.lastIndexOf("/");

          if (index < 0) {
            return aPath;
          } // If the only part of the root that is left is the scheme (i.e. http://,
          // file:///, etc.), one or more slashes (/), or simply nothing at all, we
          // have exhausted all components, so the path is not relative to the root.


          aRoot = aRoot.slice(0, index);

          if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
            return aPath;
          }

          ++level;
        } // Make sure we add a "../" for each component we removed from the root.


        return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
      }

      exports.relative = relative;

      var supportsNullProto = function () {
        var obj = Object.create(null);
        return !('__proto__' in obj);
      }();

      function identity(s) {
        return s;
      }
      /**
       * Because behavior goes wacky when you set `__proto__` on objects, we
       * have to prefix all the strings in our set with an arbitrary character.
       *
       * See https://github.com/mozilla/source-map/pull/31 and
       * https://github.com/mozilla/source-map/issues/30
       *
       * @param String aStr
       */


      function toSetString(aStr) {
        if (isProtoString(aStr)) {
          return '$' + aStr;
        }

        return aStr;
      }

      exports.toSetString = supportsNullProto ? identity : toSetString;

      function fromSetString(aStr) {
        if (isProtoString(aStr)) {
          return aStr.slice(1);
        }

        return aStr;
      }

      exports.fromSetString = supportsNullProto ? identity : fromSetString;

      function isProtoString(s) {
        if (!s) {
          return false;
        }

        var length = s.length;

        if (length < 9
        /* "__proto__".length */
        ) {
          return false;
        }

        if (s.charCodeAt(length - 1) !== 95
        /* '_' */
        || s.charCodeAt(length - 2) !== 95
        /* '_' */
        || s.charCodeAt(length - 3) !== 111
        /* 'o' */
        || s.charCodeAt(length - 4) !== 116
        /* 't' */
        || s.charCodeAt(length - 5) !== 111
        /* 'o' */
        || s.charCodeAt(length - 6) !== 114
        /* 'r' */
        || s.charCodeAt(length - 7) !== 112
        /* 'p' */
        || s.charCodeAt(length - 8) !== 95
        /* '_' */
        || s.charCodeAt(length - 9) !== 95
        /* '_' */
        ) {
          return false;
        }

        for (var i = length - 10; i >= 0; i--) {
          if (s.charCodeAt(i) !== 36
          /* '$' */
          ) {
            return false;
          }
        }

        return true;
      }
      /**
       * Comparator between two mappings where the original positions are compared.
       *
       * Optionally pass in `true` as `onlyCompareGenerated` to consider two
       * mappings with the same original source/line/column, but different generated
       * line and column the same. Useful when searching for a mapping with a
       * stubbed out mapping.
       */


      function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
        var cmp = mappingA.source - mappingB.source;

        if (cmp !== 0) {
          return cmp;
        }

        cmp = mappingA.originalLine - mappingB.originalLine;

        if (cmp !== 0) {
          return cmp;
        }

        cmp = mappingA.originalColumn - mappingB.originalColumn;

        if (cmp !== 0 || onlyCompareOriginal) {
          return cmp;
        }

        cmp = mappingA.generatedColumn - mappingB.generatedColumn;

        if (cmp !== 0) {
          return cmp;
        }

        cmp = mappingA.generatedLine - mappingB.generatedLine;

        if (cmp !== 0) {
          return cmp;
        }

        return mappingA.name - mappingB.name;
      }

      exports.compareByOriginalPositions = compareByOriginalPositions;
      /**
       * Comparator between two mappings with deflated source and name indices where
       * the generated positions are compared.
       *
       * Optionally pass in `true` as `onlyCompareGenerated` to consider two
       * mappings with the same generated line and column, but different
       * source/name/original line and column the same. Useful when searching for a
       * mapping with a stubbed out mapping.
       */

      function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
        var cmp = mappingA.generatedLine - mappingB.generatedLine;

        if (cmp !== 0) {
          return cmp;
        }

        cmp = mappingA.generatedColumn - mappingB.generatedColumn;

        if (cmp !== 0 || onlyCompareGenerated) {
          return cmp;
        }

        cmp = mappingA.source - mappingB.source;

        if (cmp !== 0) {
          return cmp;
        }

        cmp = mappingA.originalLine - mappingB.originalLine;

        if (cmp !== 0) {
          return cmp;
        }

        cmp = mappingA.originalColumn - mappingB.originalColumn;

        if (cmp !== 0) {
          return cmp;
        }

        return mappingA.name - mappingB.name;
      }

      exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

      function strcmp(aStr1, aStr2) {
        if (aStr1 === aStr2) {
          return 0;
        }

        if (aStr1 > aStr2) {
          return 1;
        }

        return -1;
      }
      /**
       * Comparator between two mappings with inflated source and name strings where
       * the generated positions are compared.
       */


      function compareByGeneratedPositionsInflated(mappingA, mappingB) {
        var cmp = mappingA.generatedLine - mappingB.generatedLine;

        if (cmp !== 0) {
          return cmp;
        }

        cmp = mappingA.generatedColumn - mappingB.generatedColumn;

        if (cmp !== 0) {
          return cmp;
        }

        cmp = strcmp(mappingA.source, mappingB.source);

        if (cmp !== 0) {
          return cmp;
        }

        cmp = mappingA.originalLine - mappingB.originalLine;

        if (cmp !== 0) {
          return cmp;
        }

        cmp = mappingA.originalColumn - mappingB.originalColumn;

        if (cmp !== 0) {
          return cmp;
        }

        return strcmp(mappingA.name, mappingB.name);
      }

      exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
      /***/
    },
    /* 3 */

    /***/
    function (module, exports) {
      /* -*- Mode: js; js-indent-level: 2; -*- */

      /*
       * Copyright 2011 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       */
      exports.GREATEST_LOWER_BOUND = 1;
      exports.LEAST_UPPER_BOUND = 2;
      /**
       * Recursive implementation of binary search.
       *
       * @param aLow Indices here and lower do not contain the needle.
       * @param aHigh Indices here and higher do not contain the needle.
       * @param aNeedle The element being searched for.
       * @param aHaystack The non-empty array being searched.
       * @param aCompare Function which takes two elements and returns -1, 0, or 1.
       * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
       *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
       *     closest element that is smaller than or greater than the one we are
       *     searching for, respectively, if the exact element cannot be found.
       */

      function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
        // This function terminates when one of the following is true:
        //
        //   1. We find the exact element we are looking for.
        //
        //   2. We did not find the exact element, but we can return the index of
        //      the next-closest element.
        //
        //   3. We did not find the exact element, and there is no next-closest
        //      element than the one we are searching for, so we return -1.
        var mid = Math.floor((aHigh - aLow) / 2) + aLow;
        var cmp = aCompare(aNeedle, aHaystack[mid], true);

        if (cmp === 0) {
          // Found the element we are looking for.
          return mid;
        } else if (cmp > 0) {
          // Our needle is greater than aHaystack[mid].
          if (aHigh - mid > 1) {
            // The element is in the upper half.
            return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
          } // The exact needle element was not found in this haystack. Determine if
          // we are in termination case (3) or (2) and return the appropriate thing.


          if (aBias == exports.LEAST_UPPER_BOUND) {
            return aHigh < aHaystack.length ? aHigh : -1;
          } else {
            return mid;
          }
        } else {
          // Our needle is less than aHaystack[mid].
          if (mid - aLow > 1) {
            // The element is in the lower half.
            return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
          } // we are in termination case (3) or (2) and return the appropriate thing.


          if (aBias == exports.LEAST_UPPER_BOUND) {
            return mid;
          } else {
            return aLow < 0 ? -1 : aLow;
          }
        }
      }
      /**
       * This is an implementation of binary search which will always try and return
       * the index of the closest element if there is no exact hit. This is because
       * mappings between original and generated line/col pairs are single points,
       * and there is an implicit region between each of them, so a miss just means
       * that you aren't on the very start of a region.
       *
       * @param aNeedle The element you are looking for.
       * @param aHaystack The array that is being searched.
       * @param aCompare A function which takes the needle and an element in the
       *     array and returns -1, 0, or 1 depending on whether the needle is less
       *     than, equal to, or greater than the element, respectively.
       * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
       *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
       *     closest element that is smaller than or greater than the one we are
       *     searching for, respectively, if the exact element cannot be found.
       *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
       */


      exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
        if (aHaystack.length === 0) {
          return -1;
        }

        var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);

        if (index < 0) {
          return -1;
        } // We have found either the exact element, or the next-closest element than
        // the one we are searching for. However, there may be more than one such
        // element. Make sure we always return the smallest of these.


        while (index - 1 >= 0) {
          if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
            break;
          }

          --index;
        }

        return index;
      };
      /***/

    },
    /* 4 */

    /***/
    function (module, exports, __webpack_require__) {
      /* -*- Mode: js; js-indent-level: 2; -*- */

      /*
       * Copyright 2011 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       */
      var util = __webpack_require__(2);

      var has = Object.prototype.hasOwnProperty;
      /**
       * A data structure which is a combination of an array and a set. Adding a new
       * member is O(1), testing for membership is O(1), and finding the index of an
       * element is O(1). Removing elements from the set is not supported. Only
       * strings are supported for membership.
       */

      function ArraySet() {
        this._array = [];
        this._set = Object.create(null);
      }
      /**
       * Static method for creating ArraySet instances from an existing array.
       */


      ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
        var set = new ArraySet();

        for (var i = 0, len = aArray.length; i < len; i++) {
          set.add(aArray[i], aAllowDuplicates);
        }

        return set;
      };
      /**
       * Return how many unique items are in this ArraySet. If duplicates have been
       * added, than those do not count towards the size.
       *
       * @returns Number
       */


      ArraySet.prototype.size = function ArraySet_size() {
        return Object.getOwnPropertyNames(this._set).length;
      };
      /**
       * Add the given string to this set.
       *
       * @param String aStr
       */


      ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
        var sStr = util.toSetString(aStr);
        var isDuplicate = has.call(this._set, sStr);
        var idx = this._array.length;

        if (!isDuplicate || aAllowDuplicates) {
          this._array.push(aStr);
        }

        if (!isDuplicate) {
          this._set[sStr] = idx;
        }
      };
      /**
       * Is the given string a member of this set?
       *
       * @param String aStr
       */


      ArraySet.prototype.has = function ArraySet_has(aStr) {
        var sStr = util.toSetString(aStr);
        return has.call(this._set, sStr);
      };
      /**
       * What is the index of the given string in the array?
       *
       * @param String aStr
       */


      ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
        var sStr = util.toSetString(aStr);

        if (has.call(this._set, sStr)) {
          return this._set[sStr];
        }

        throw new Error('"' + aStr + '" is not in the set.');
      };
      /**
       * What is the element at the given index?
       *
       * @param Number aIdx
       */


      ArraySet.prototype.at = function ArraySet_at(aIdx) {
        if (aIdx >= 0 && aIdx < this._array.length) {
          return this._array[aIdx];
        }

        throw new Error('No element indexed by ' + aIdx);
      };
      /**
       * Returns the array representation of this set (which has the proper indices
       * indicated by indexOf). Note that this is a copy of the internal array used
       * for storing the members so that no one can mess with internal state.
       */


      ArraySet.prototype.toArray = function ArraySet_toArray() {
        return this._array.slice();
      };

      exports.ArraySet = ArraySet;
      /***/
    },
    /* 5 */

    /***/
    function (module, exports, __webpack_require__) {
      /* -*- Mode: js; js-indent-level: 2; -*- */

      /*
       * Copyright 2011 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       *
       * Based on the Base 64 VLQ implementation in Closure Compiler:
       * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
       *
       * Copyright 2011 The Closure Compiler Authors. All rights reserved.
       * Redistribution and use in source and binary forms, with or without
       * modification, are permitted provided that the following conditions are
       * met:
       *
       *  * Redistributions of source code must retain the above copyright
       *    notice, this list of conditions and the following disclaimer.
       *  * Redistributions in binary form must reproduce the above
       *    copyright notice, this list of conditions and the following
       *    disclaimer in the documentation and/or other materials provided
       *    with the distribution.
       *  * Neither the name of Google Inc. nor the names of its
       *    contributors may be used to endorse or promote products derived
       *    from this software without specific prior written permission.
       *
       * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
       * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
       * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
       * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
       * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
       * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
       * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
       * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
       * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
       * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
       * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
       */
      var base64 = __webpack_require__(6); // A single base 64 digit can contain 6 bits of data. For the base 64 variable
      // length quantities we use in the source map spec, the first bit is the sign,
      // the next four bits are the actual value, and the 6th bit is the
      // continuation bit. The continuation bit tells us whether there are more
      // digits in this value following this digit.
      //
      //   Continuation
      //   |    Sign
      //   |    |
      //   V    V
      //   101011


      var VLQ_BASE_SHIFT = 5; // binary: 100000

      var VLQ_BASE = 1 << VLQ_BASE_SHIFT; // binary: 011111

      var VLQ_BASE_MASK = VLQ_BASE - 1; // binary: 100000

      var VLQ_CONTINUATION_BIT = VLQ_BASE;
      /**
       * Converts from a two-complement value to a value where the sign bit is
       * placed in the least significant bit.  For example, as decimals:
       *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
       *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
       */

      function toVLQSigned(aValue) {
        return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
      }
      /**
       * Converts to a two-complement value from a value where the sign bit is
       * placed in the least significant bit.  For example, as decimals:
       *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
       *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
       */


      function fromVLQSigned(aValue) {
        var isNegative = (aValue & 1) === 1;
        var shifted = aValue >> 1;
        return isNegative ? -shifted : shifted;
      }
      /**
       * Returns the base 64 VLQ encoded value.
       */


      exports.encode = function base64VLQ_encode(aValue) {
        var encoded = "";
        var digit;
        var vlq = toVLQSigned(aValue);

        do {
          digit = vlq & VLQ_BASE_MASK;
          vlq >>>= VLQ_BASE_SHIFT;

          if (vlq > 0) {
            // There are still more digits in this value, so we must make sure the
            // continuation bit is marked.
            digit |= VLQ_CONTINUATION_BIT;
          }

          encoded += base64.encode(digit);
        } while (vlq > 0);

        return encoded;
      };
      /**
       * Decodes the next base 64 VLQ value from the given string and returns the
       * value and the rest of the string via the out parameter.
       */


      exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
        var strLen = aStr.length;
        var result = 0;
        var shift = 0;
        var continuation, digit;

        do {
          if (aIndex >= strLen) {
            throw new Error("Expected more digits in base 64 VLQ value.");
          }

          digit = base64.decode(aStr.charCodeAt(aIndex++));

          if (digit === -1) {
            throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
          }

          continuation = !!(digit & VLQ_CONTINUATION_BIT);
          digit &= VLQ_BASE_MASK;
          result = result + (digit << shift);
          shift += VLQ_BASE_SHIFT;
        } while (continuation);

        aOutParam.value = fromVLQSigned(result);
        aOutParam.rest = aIndex;
      };
      /***/

    },
    /* 6 */

    /***/
    function (module, exports) {
      /* -*- Mode: js; js-indent-level: 2; -*- */

      /*
       * Copyright 2011 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       */
      var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
      /**
       * Encode an integer in the range of 0 to 63 to a single base 64 digit.
       */

      exports.encode = function (number) {
        if (0 <= number && number < intToCharMap.length) {
          return intToCharMap[number];
        }

        throw new TypeError("Must be between 0 and 63: " + number);
      };
      /**
       * Decode a single base 64 character code digit to an integer. Returns -1 on
       * failure.
       */


      exports.decode = function (charCode) {
        var bigA = 65; // 'A'

        var bigZ = 90; // 'Z'

        var littleA = 97; // 'a'

        var littleZ = 122; // 'z'

        var zero = 48; // '0'

        var nine = 57; // '9'

        var plus = 43; // '+'

        var slash = 47; // '/'

        var littleOffset = 26;
        var numberOffset = 52; // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ

        if (bigA <= charCode && charCode <= bigZ) {
          return charCode - bigA;
        } // 26 - 51: abcdefghijklmnopqrstuvwxyz


        if (littleA <= charCode && charCode <= littleZ) {
          return charCode - littleA + littleOffset;
        } // 52 - 61: 0123456789


        if (zero <= charCode && charCode <= nine) {
          return charCode - zero + numberOffset;
        } // 62: +


        if (charCode == plus) {
          return 62;
        } // 63: /


        if (charCode == slash) {
          return 63;
        } // Invalid base64 digit.


        return -1;
      };
      /***/

    },
    /* 7 */

    /***/
    function (module, exports) {
      /* -*- Mode: js; js-indent-level: 2; -*- */

      /*
       * Copyright 2011 Mozilla Foundation and contributors
       * Licensed under the New BSD license. See LICENSE or:
       * http://opensource.org/licenses/BSD-3-Clause
       */
      // It turns out that some (most?) JavaScript engines don't self-host
      // `Array.prototype.sort`. This makes sense because C++ will likely remain
      // faster than JS when doing raw CPU-intensive sorting. However, when using a
      // custom comparator function, calling back and forth between the VM's C++ and
      // JIT'd JS is rather slow *and* loses JIT type information, resulting in
      // worse generated code for the comparator function than would be optimal. In
      // fact, when sorting with a comparator, these costs outweigh the benefits of
      // sorting in C++. By using our own JS-implemented Quick Sort (below), we get
      // a ~3500ms mean speed-up in `bench/bench.html`.

      /**
       * Swap the elements indexed by `x` and `y` in the array `ary`.
       *
       * @param {Array} ary
       *        The array.
       * @param {Number} x
       *        The index of the first item.
       * @param {Number} y
       *        The index of the second item.
       */
      function swap(ary, x, y) {
        var temp = ary[x];
        ary[x] = ary[y];
        ary[y] = temp;
      }
      /**
       * Returns a random integer within the range `low .. high` inclusive.
       *
       * @param {Number} low
       *        The lower bound on the range.
       * @param {Number} high
       *        The upper bound on the range.
       */


      function randomIntInRange(low, high) {
        return Math.round(low + Math.random() * (high - low));
      }
      /**
       * The Quick Sort algorithm.
       *
       * @param {Array} ary
       *        An array to sort.
       * @param {function} comparator
       *        Function to use to compare two items.
       * @param {Number} p
       *        Start index of the array
       * @param {Number} r
       *        End index of the array
       */


      function doQuickSort(ary, comparator, p, r) {
        // If our lower bound is less than our upper bound, we (1) partition the
        // array into two pieces and (2) recurse on each half. If it is not, this is
        // the empty array and our base case.
        if (p < r) {
          // (1) Partitioning.
          //
          // The partitioning chooses a pivot between `p` and `r` and moves all
          // elements that are less than or equal to the pivot to the before it, and
          // all the elements that are greater than it after it. The effect is that
          // once partition is done, the pivot is in the exact place it will be when
          // the array is put in sorted order, and it will not need to be moved
          // again. This runs in O(n) time.
          // Always choose a random pivot so that an input array which is reverse
          // sorted does not cause O(n^2) running time.
          var pivotIndex = randomIntInRange(p, r);
          var i = p - 1;
          swap(ary, pivotIndex, r);
          var pivot = ary[r]; // Immediately after `j` is incremented in this loop, the following hold
          // true:
          //
          //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
          //
          //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.

          for (var j = p; j < r; j++) {
            if (comparator(ary[j], pivot) <= 0) {
              i += 1;
              swap(ary, i, j);
            }
          }

          swap(ary, i + 1, j);
          var q = i + 1; // (2) Recurse on each half.

          doQuickSort(ary, comparator, p, q - 1);
          doQuickSort(ary, comparator, q + 1, r);
        }
      }
      /**
       * Sort the given array in-place with the given comparator function.
       *
       * @param {Array} ary
       *        An array to sort.
       * @param {function} comparator
       *        Function to use to compare two items.
       */


      exports.quickSort = function (ary, comparator) {
        doQuickSort(ary, comparator, 0, ary.length - 1);
      };
      /***/

    }
    /******/
    ])
  );
});

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/stackframe/stackframe.js":
/*!***********************************************!*\
  !*** ./node_modules/stackframe/stackframe.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (root, factory) {
  'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  'use strict';

  function _isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function StackFrame(functionName, args, fileName, lineNumber, columnNumber, source) {
    if (functionName !== undefined) {
      this.setFunctionName(functionName);
    }

    if (args !== undefined) {
      this.setArgs(args);
    }

    if (fileName !== undefined) {
      this.setFileName(fileName);
    }

    if (lineNumber !== undefined) {
      this.setLineNumber(lineNumber);
    }

    if (columnNumber !== undefined) {
      this.setColumnNumber(columnNumber);
    }

    if (source !== undefined) {
      this.setSource(source);
    }
  }

  StackFrame.prototype = {
    getFunctionName: function getFunctionName() {
      return this.functionName;
    },
    setFunctionName: function setFunctionName(v) {
      this.functionName = String(v);
    },
    getArgs: function getArgs() {
      return this.args;
    },
    setArgs: function setArgs(v) {
      if (Object.prototype.toString.call(v) !== '[object Array]') {
        throw new TypeError('Args must be an Array');
      }

      this.args = v;
    },
    // NOTE: Property name may be misleading as it includes the path,
    // but it somewhat mirrors V8's JavaScriptStackTraceApi
    // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
    // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
    getFileName: function getFileName() {
      return this.fileName;
    },
    setFileName: function setFileName(v) {
      this.fileName = String(v);
    },
    getLineNumber: function getLineNumber() {
      return this.lineNumber;
    },
    setLineNumber: function setLineNumber(v) {
      if (!_isNumber(v)) {
        throw new TypeError('Line Number must be a Number');
      }

      this.lineNumber = Number(v);
    },
    getColumnNumber: function getColumnNumber() {
      return this.columnNumber;
    },
    setColumnNumber: function setColumnNumber(v) {
      if (!_isNumber(v)) {
        throw new TypeError('Column Number must be a Number');
      }

      this.columnNumber = Number(v);
    },
    getSource: function getSource() {
      return this.source;
    },
    setSource: function setSource(v) {
      this.source = String(v);
    },
    toString: function toString() {
      var functionName = this.getFunctionName() || '{anonymous}';
      var args = '(' + (this.getArgs() || []).join(',') + ')';
      var fileName = this.getFileName() ? '@' + this.getFileName() : '';
      var lineNumber = _isNumber(this.getLineNumber()) ? ':' + this.getLineNumber() : '';
      var columnNumber = _isNumber(this.getColumnNumber()) ? ':' + this.getColumnNumber() : '';
      return functionName + args + fileName + lineNumber + columnNumber;
    }
  };
  return StackFrame;
});

/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.entry.ts":
/*!**************************!*\
  !*** ./src/app.entry.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _app_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.ts */ "./src/app.ts");
__webpack_require__(/*! ./app.css */ "./src/app.css");



App(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createAppConfig"])(_app_ts__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.css */ "./src/app.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_0__);


var App = function App(props) {
  return props.children;
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "/__remax_runtime_options__":
/*!********************************************************!*\
  !*** external "require('/__remax_runtime_options__')" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('/__remax_runtime_options__');

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi @remax/apply-runtime-options ./src/app.entry.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @remax/apply-runtime-options */"./node_modules/@remax/apply-runtime-options.js");
module.exports = __webpack_require__(/*! D:\个人\account_bill\applets_client\src\app.entry.ts */"./src/app.entry.ts");


/***/ })

},[[0,"runtime","remax-vendors"]]]);