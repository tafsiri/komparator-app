webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _getPrototypeOf = __webpack_require__(1);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(13);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(14);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(18);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(43);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	__webpack_require__(50);
	
	__webpack_require__(57);
	
	var _react = __webpack_require__(58);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _actions = __webpack_require__(214);
	
	var _reducers = __webpack_require__(215);
	
	var _textUploader = __webpack_require__(226);
	
	var _textUploader2 = _interopRequireDefault(_textUploader);
	
	var _compareView = __webpack_require__(227);
	
	var _compareView2 = _interopRequireDefault(_compareView);
	
	var _controls = __webpack_require__(234);
	
	var _controls2 = _interopRequireDefault(_controls);
	
	var _samples = __webpack_require__(235);
	
	var _samples2 = _interopRequireDefault(_samples);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Main component that represents the Komparator demo app.
	 *
	 * Responsible to scafollding the top level components and
	 * connecting them to the data store.
	 */
	
	var KomparatorApp = (function (_React$Component) {
	  (0, _inherits3.default)(KomparatorApp, _React$Component);
	
	  function KomparatorApp() {
	    (0, _classCallCheck3.default)(this, KomparatorApp);
	
	    // Note the initial state is stored as a property on this POJO because
	    // react requires the state property to be a POJO. If you use the
	    // immutable object directly, its prototype will get changed.
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(KomparatorApp).call(this));
	
	    _this.state = { data: _reducers.initialState };
	
	    _this.store = (0, _reducers.getStore)();
	
	    _this.store.subscribe(function () {
	      _this.setState({ 'data': _this.store.getState() });
	    });
	    return _this;
	  }
	
	  /**
	   * On mount we dispatch an action to render the sample text.
	   */
	
	  (0, _createClass3.default)(KomparatorApp, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.store.dispatch((0, _actions.setText)(_samples2.default.nyt, "left"));
	      this.store.dispatch((0, _actions.setText)(_samples2.default.fox, "right"));
	    }
	
	    /**
	     * Event handler for updated text. Will update the store with
	     * the new text. Called by the TextUploader components.
	     *
	     * @param  {String} newValue the new text
	     * @param  {String} corpusId the corpusId associated with the text
	     *                           currently 'left'|'right'
	     */
	
	  }, {
	    key: 'textUpdated',
	    value: function textUpdated(newValue, corpusId) {
	      this.store.dispatch((0, _actions.setText)(newValue, corpusId));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var left = this.state.data.get('sourceTexts').get('left');
	      var right = this.state.data.get('sourceTexts').get('right');
	      var options = this.state.data.get('komparatorOptions');
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'pure-g' },
	          _react2.default.createElement(
	            'div',
	            { className: 'pure-u-1' },
	            _react2.default.createElement(_controls2.default, { store: this.store })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'pure-g' },
	          _react2.default.createElement(
	            'div',
	            { className: 'pure-u-1' },
	            _react2.default.createElement(_compareView2.default, { left: left, right: right, options: options.toJS() })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'pure-g' },
	          _react2.default.createElement(
	            'div',
	            { className: 'pure-u-1-2' },
	            _react2.default.createElement(_textUploader2.default, { updated: this.textUpdated.bind(this), corpusId: 'left', text: left })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'pure-u-1-2' },
	            _react2.default.createElement(_textUploader2.default, { updated: this.textUpdated.bind(this), corpusId: 'right', text: right })
	          )
	        )
	      );
	    }
	  }]);
	  return KomparatorApp;
	})(_react2.default.Component);
	
	// Inital render.
	
	document.addEventListener("DOMContentLoaded", function () {
	  _react2.default.render(_react2.default.createElement(KomparatorApp, null), document.getElementById('main'));
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(9).Object.getPrototypeOf;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(4);
	
	__webpack_require__(6)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(5);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(7)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(12);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , core      = __webpack_require__(9)
	  , ctx       = __webpack_require__(10)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 8 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(11);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _defineProperty = __webpack_require__(15);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(16), __esModule: true };

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(17);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof2 = __webpack_require__(19);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};
	
	exports.__esModule = true;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Symbol = __webpack_require__(20)["default"];
	
	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(22);
	__webpack_require__(42);
	module.exports = __webpack_require__(9).Symbol;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(17)
	  , global         = __webpack_require__(8)
	  , has            = __webpack_require__(23)
	  , DESCRIPTORS    = __webpack_require__(24)
	  , $export        = __webpack_require__(7)
	  , redefine       = __webpack_require__(25)
	  , $fails         = __webpack_require__(12)
	  , shared         = __webpack_require__(28)
	  , setToStringTag = __webpack_require__(29)
	  , uid            = __webpack_require__(31)
	  , wks            = __webpack_require__(30)
	  , keyOf          = __webpack_require__(32)
	  , $names         = __webpack_require__(36)
	  , enumKeys       = __webpack_require__(37)
	  , isArray        = __webpack_require__(38)
	  , anObject       = __webpack_require__(39)
	  , toIObject      = __webpack_require__(33)
	  , createDesc     = __webpack_require__(27)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(41)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 23 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(12)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(26);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(17)
	  , createDesc = __webpack_require__(27);
	module.exports = __webpack_require__(24) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(8)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(17).setDesc
	  , has = __webpack_require__(23)
	  , TAG = __webpack_require__(30)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(28)('wks')
	  , uid    = __webpack_require__(31)
	  , Symbol = __webpack_require__(8).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(17)
	  , toIObject = __webpack_require__(33);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(34)
	  , defined = __webpack_require__(5);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(35);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(33)
	  , getNames  = __webpack_require__(17).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(17);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(35);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(40);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 42 */
/***/ function(module, exports) {



/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(44)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(46)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(45), __esModule: true };

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(17);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(47), __esModule: true };

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48);
	module.exports = __webpack_require__(9).Object.setPrototypeOf;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(7);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(49).set});

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(17).getDesc
	  , isObject = __webpack_require__(40)
	  , anObject = __webpack_require__(39);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(10)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ },
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setText = setText;
	exports.setMinimumFrequency = setMinimumFrequency;
	exports.showUniqueTerms = showUniqueTerms;
	exports.showStopWords = showStopWords;
	/*
	 * This module exports all the action types and action creators
	 * that the app uses. Actions are used to communicate intentions
	 * to change the state of the application and are commonly triggered
	 * by user interaction.
	 */
	
	/*
	 * action types
	 */
	var SET_TEXT = exports.SET_TEXT = 'SET_TEXT';
	var SET_MIN_FREQUENCY = exports.SET_MIN_FREQUENCY = 'CHANGE_MIN_FREQ_THRESHOLD';
	var SHOW_UNIQUE_TERMS = exports.SHOW_UNIQUE_TERMS = 'TOGGLE_UNIQUE_TERMS';
	var SHOW_STOP_WORDS = exports.SHOW_STOP_WORDS = 'SHOW_STOP_WORDS';
	
	/*
	 * action creators
	 */
	function setText(text, corpusId) {
	  return { type: SET_TEXT, text: text, corpusId: corpusId };
	}
	
	function setMinimumFrequency(value) {
	  return { type: SET_MIN_FREQUENCY, value: value };
	}
	
	function showUniqueTerms(value) {
	  return { type: SHOW_UNIQUE_TERMS, value: value };
	}
	
	function showStopWords(value) {
	  return { type: SHOW_STOP_WORDS, value: value };
	}
	
	var sfasd = 2;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initialState = undefined;
	exports.getStore = getStore;
	
	var _immutable = __webpack_require__(216);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _redux = __webpack_require__(217);
	
	var _actions = __webpack_require__(214);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Create a redux reducer function, the returned function
	 * will produce a new state for every given pair of state and action
	 *
	 * @param  {Object} initialState an Immutable.js object representing
	 *                               the initial state of the application.
	 * @return {Function} reducer a function that converts actions and a current
	 *                            state into a new state.
	 */
	function makeReducer(initialState) {
	
	  /**
	   * The reducer function
	   * @param  {Object} state  an Immutable.js object a current state
	   * @param  {Object} action an action object
	   *                         @see ./actions.js
	   * @return {Object}        a new immutable object representing the new state
	   */
	  var reducer = function reducer(state, action) {
	    if (typeof state === 'undefined') {
	      return initialState;
	    }
	
	    switch (action.type) {
	      case _actions.SET_TEXT:
	        return state.updateIn(['sourceTexts', action.corpusId], function () {
	          return action.text;
	        });
	      case _actions.SET_MIN_FREQUENCY:
	        return state.updateIn(['komparatorOptions', 'minimumFrequency'], function () {
	          return action.value;
	        });
	      case _actions.SHOW_UNIQUE_TERMS:
	        return state.updateIn(['komparatorOptions', 'showUniqueTerms'], function () {
	          return action.value;
	        });
	      case _actions.SHOW_STOP_WORDS:
	        return state.updateIn(['komparatorOptions', 'showStopWords'], function () {
	          return action.value;
	        });
	      default:
	        return state;
	    }
	  };
	
	  return reducer;
	}
	
	// Set up the store and inital state. Note that these will be singletons.
	/**
	 * This module contains the reducers that transform actions into actual
	 * changes of state.
	 */
	
	var initialState = exports.initialState = _immutable2.default.fromJS({
	  sourceTexts: {
	    left: "",
	    right: ""
	  },
	  komparatorOptions: {
	    showUniqueTerms: false,
	    minimumFrequency: 3
	  }
	});
	
	var reducer = makeReducer(initialState);
	var store = (0, _redux.createStore)(reducer);
	
	function getStore() {
	  return store;
	}

/***/ },
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(1);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(13);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(14);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(18);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(43);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(58);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Component that allows a user to upload a text to the app.
	 * Currently implemented as a text area.
	 */
	
	var TextUploader = (function (_React$Component) {
	  (0, _inherits3.default)(TextUploader, _React$Component);
	
	  function TextUploader() {
	    (0, _classCallCheck3.default)(this, TextUploader);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TextUploader).call(this));
	  }
	
	  /**
	   * Event handler for changes to the content of the text area.
	   * @param  {SyntheticEvent} event a change event
	   * @return {[type]}       [description]
	   */
	
	  (0, _createClass3.default)(TextUploader, [{
	    key: "handleChange",
	    value: function handleChange(event) {
	      // Pass the change event to the handler passed in from the parent.
	      this.props.updated(event.target.value, this.props.corpusId);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement("textarea", {
	        onChange: this.handleChange.bind(this),
	        value: this.props.text,
	        rows: "4",
	        cols: "50" });
	    }
	  }]);
	  return TextUploader;
	})(_react2.default.Component);
	
	exports.default = TextUploader;
	
	TextUploader.propTypes = {
	  updated: _react2.default.PropTypes.func, // callback for when state is updated.
	  text: _react2.default.PropTypes.string, // initial text content.
	  corpusId: _react2.default.PropTypes.string // an identifier to track responses
	  // from this component.
	};

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(1);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(13);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(14);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(18);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(43);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(58);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _komparator = __webpack_require__(228);
	
	var _komparator2 = _interopRequireDefault(_komparator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * View that displays a comparison of words used in two text
	 * corpora. This is the react view that wraps the komparator
	 * visualization.
	 */
	
	var CompareView = (function (_React$Component) {
	  (0, _inherits3.default)(CompareView, _React$Component);
	
	  function CompareView() {
	    (0, _classCallCheck3.default)(this, CompareView);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CompareView).call(this));
	  }
	
	  /**
	   * On initial mount of the component, inject an instance of a
	   * komparator visualization and initilize it.
	   */
	
	  (0, _createClass3.default)(CompareView, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var container = _react2.default.findDOMNode(this).querySelector('#compare-view');
	      var width = _react2.default.findDOMNode(this).offsetWidth;
	      var height = _react2.default.findDOMNode(this).offsetHeigh;
	
	      this.komparator = new _komparator2.default({
	        container: container
	      });
	
	      this.komparator.update(this.props.left, this.props.right, this.props.options);
	      this.komparator.render();
	    }
	
	    /**
	     * Pass updated data and parameters to the komparator and re-render
	     */
	
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.komparator.update(this.props.left, this.props.right, this.props.options);
	      this.komparator.render();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'pure-g' },
	          _react2.default.createElement('div', { id: 'compare-view' })
	        )
	      );
	    }
	  }]);
	  return CompareView;
	})(_react2.default.Component);
	
	exports.default = CompareView;
	
	CompareView.propTypes = {
	  left: _react2.default.PropTypes.string.isRequired,
	  right: _react2.default.PropTypes.string.isRequired,
	  options: _react2.default.PropTypes.object.isRequired
	};

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(13);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(14);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _lodash = __webpack_require__(229);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _d = __webpack_require__(231);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _komparatorAnalysis = __webpack_require__(232);
	
	var _komparatorAnalysis2 = _interopRequireDefault(_komparatorAnalysis);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Komparator = (function () {
	  function Komparator(options) {
	    (0, _classCallCheck3.default)(this, Komparator);
	
	    this.data = _lodash2.default.clone(options.data, true);
	    this._container = options.container;
	
	    if (typeof this.container === 'string') {
	      this._container = document.querySelector(this._container);
	    }
	
	    this.container = _d2.default.select(this._container);
	
	    this.margins = {
	      left: 50,
	      right: 50,
	      top: 50,
	      bottom: 50
	    };
	
	    this.filterFunctions = [];
	
	    this.currentlySelectedToken = null;
	
	    this.update('', '', {});
	    this.initialRender();
	  }
	
	  (0, _createClass3.default)(Komparator, [{
	    key: 'update',
	    value: function update(left, right, options) {
	
	      var leftTokens, rightTokens;
	
	      var minTokenFreq = options.minimumFrequency || 0;
	      var showUniqueTerms = options.showUniqueTerms || false;
	
	      if (left.length === 0 || right.length === 0) {
	        left = 'enter text left left right';
	        right = 'enter text right right left';
	      }
	
	      if (_lodash2.default.isString(left)) {
	        leftTokens = _komparatorAnalysis2.default.tokenize(left);
	      } else {
	        leftTokens = left;
	      }
	      if (_lodash2.default.isString(right)) {
	        rightTokens = _komparatorAnalysis2.default.tokenize(right);
	      } else {
	        rightTokens = right;
	      }
	
	      if (!options.showStopWords) {
	        rightTokens = _komparatorAnalysis2.default.removeStopWordTokens(rightTokens);
	        leftTokens = _komparatorAnalysis2.default.removeStopWordTokens(leftTokens);
	      }
	
	      // Count and score the tokens then build a map of tokens to counts
	      // and scores.
	      var counts = _komparatorAnalysis2.default.frequencyTable(leftTokens, rightTokens);
	      var scores = _komparatorAnalysis2.default.scoreByCount(leftTokens, rightTokens);
	
	      this.tokens = _lodash2.default.map(_lodash2.default.keys(scores), function (key) {
	        return [key, scores[key], counts[key]];
	      });
	
	      // Filter out terms that appear less than a user specified number of
	      // times
	
	      this.tokens = _lodash2.default.filter(this.tokens, function (token) {
	        if (showUniqueTerms) {
	          return token[2] > minTokenFreq;
	        } else {
	          return token[1] !== 1 && token[1] !== -1 && token[2] > minTokenFreq;
	        }
	      });
	
	      // Reset Scales
	
	      var exp = 0.5;
	      this.x = _d2.default.scale.pow().exponent(exp).domain([-1, 0, 1]).range([this.margins.left, this.width / 2, this.width - this.margins.right]);
	
	      this.fontSize = _d2.default.scale.linear().domain(_d2.default.extent(_lodash2.default.map(this.tokens, function (d) {
	        return d[2];
	      }))).range([12, 64]);
	    }
	  }, {
	    key: 'initialRender',
	    value: function initialRender() {
	      var self = this;
	      this.width = this._container.clientWidth;
	      this.height = this._container.clientHeight;
	
	      var svg = this.container.append('svg').attr('id', 'komparator').attr('height', this.height).attr('width', this.width);
	
	      // Background rect
	      this.bgRect = svg.append('rect').attr('class', 'background').attr('width', '100%').attr('height', '100%').attr('fill', 'white').attr('opacity', 0.5);
	      // .attr('fill', '#e1e1e1'); // TODO remove
	
	      var g = svg.append('g').attr('class', 'vis-group');
	
	      g.append('line').attr('class', 'lCorpus-line-top');
	      g.append('line').attr('class', 'rCorpus-line-top');
	      g.append('line').attr('class', 'lCorpus-line-bottom');
	      g.append('line').attr('class', 'rCorpus-line-bottom');
	      g.append('text').attr('class', 'lCorpus-section-label');
	      g.append('text').attr('class', 'rCorpus-section-label');
	
	      this.tokensGroup = g.append('g').attr('class', 'tokens-group');
	
	      this.detailsContainer = this.container.append('div').attr('id', 'details-container');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.boundingBoxes = [];
	
	      this.container.select('svg').attr('height', this.height).attr('width', this.width);
	
	      this.renderAxesAndTitles();
	      this.renderText();
	    }
	  }, {
	    key: 'renderAxesAndTitles',
	    value: function renderAxesAndTitles() {
	      this.container.select('line.lCorpus-line-top').attr('x1', 0).attr('y1', 0).attr('x2', this.width / 2).attr('y2', 0);
	
	      this.container.select('line.rCorpus-line-top').attr('x1', this.width / 2).attr('y1', 0).attr('x2', this.width).attr('y2', 0);
	
	      this.container.select('line.lCorpus-line-bottom').attr('x1', 0).attr('y1', this.height).attr('x2', this.width / 2).attr('y2', this.height);
	
	      this.container.select('line.rCorpus-line-bottom').attr('x1', this.width / 2).attr('y1', this.height).attr('x2', this.width).attr('y2', this.height);
	
	      this.container.select('text.lCorpus-section-label').attr('x', 0).attr('y', 30).attr('text-anchor', 'start').text('Left');
	
	      this.container.select('text.rCorpus-section-label').attr('x', this.width - 5).attr('y', 30).attr('text-anchor', 'end').text('Right');
	    }
	  }, {
	    key: 'renderText',
	    value: function renderText() {
	      var self = this;
	
	      var tokens = this.tokensGroup.selectAll('.token').data(this.tokens, function (d) {
	        return d[0];
	      });
	
	      var tokensEnter = tokens.enter().append('g').attr('class', function (d) {
	        return 'token';
	      }).attr('transform', function (d) {
	        // Initial positioning. Will be refined during collision
	        // resolution
	        var x = d[1] < 0 ? -250 : self.width + 250;
	
	        var y = Math.random() * self.height;
	
	        return 'translate(' + x + ',' + y + ')';
	      }).on('mouseover', mouseovered).on('mouseout', mouseouted).on('click', mouseclicked);
	
	      tokensEnter.append('rect').attr('class', function (d) {
	        return 'node-bg';
	      });
	
	      tokensEnter.append('text').attr('class', 'node-text').attr('text-anchor', 'middle')
	      // .attr('opacity', function(d) {
	      //   return 1;
	      // })
	      .text(function (d) {
	        return d[0];
	      });
	
	      tokens.selectAll('text.node-text').style('font-size', function (d, i) {
	        return self.fontSize(d[2]) + 'px';
	      });
	
	      var direction = 0;
	      function getNextFreeSpace(bb, allBoundingBoxes) {
	        var potential = _lodash2.default.extend({}, bb);
	
	        var sx1 = potential.x;
	        var sy1 = potential.y;
	        var sx2 = potential.x + potential.width;
	        var sy2 = potential.y + potential.height;
	
	        // If a collision is detected while we are looping through
	        // we will continue checking against the rest of the bounding
	        // boxes in case the
	        var reLoop = false;
	
	        for (var i = 0; i < allBoundingBoxes.length; i++) {
	          var target = allBoundingBoxes[i];
	
	          var tx1 = target.x;
	          var ty1 = target.y;
	          var tx2 = target.x + target.width;
	          var ty2 = target.y + target.height;
	
	          var intersects = sx1 < tx2 && sx2 > tx1 && sy1 < ty2 && sy2 > ty1;
	          if (intersects) {
	            reLoop = true;
	            var sign = direction % 2 === 0 ? -1 : 1;
	            potential.y += potential.height * sign;
	            sy1 = potential.y;
	            sy2 = potential.y + potential.height;
	          }
	
	          if (i === allBoundingBoxes.length - 1 && reLoop) {
	            i = 0;
	            reLoop = false;
	          }
	        }
	
	        direction += 1;
	        return potential;
	      }
	
	      var transitionDuration = 200;
	
	      tokens.transition().duration(transitionDuration).attr('transform', function (d) {
	        var vPadding = 2;
	        var hPadding = 5;
	        var bb = _d2.default.select(this).select('text.node-text').node().getBBox();
	
	        var x = self.x(d[1]);
	        var y = self.height / 2;
	
	        var width = bb.width;
	        var height = bb.height;
	
	        var pos = getNextFreeSpace({
	          x: x,
	          y: y,
	          width: width + hPadding,
	          height: height + vPadding,
	          data: d,
	          node: this
	        }, self.boundingBoxes);
	
	        // Clamp y values to the bounding box of the chart
	        // this also makes sure the quadTree wont throw exceptions
	        // on traversal.
	        if (pos.y > self.height - 20) {
	          pos.y = self.height - 20;
	        }
	
	        if (pos.y < 20) {
	          pos.y = 20;
	        }
	
	        self.boundingBoxes.push(pos);
	
	        return 'translate(' + pos.x + ',' + pos.y + ')';
	      });
	
	      tokens.selectAll('rect.node-bg').transition().duration(transitionDuration).call(positionAdjectiveBackground);
	
	      function positionAdjectiveBackground(d, i, highlight) {
	        this.attr('opacity', 0.0).attr('stroke', 'none').each(function (d, i) {
	          var text = this.nextSibling;
	          var bb = text.getBBox();
	
	          var x, y, width, height;
	
	          if (d === self.currentlySelectedToken || highlight) {
	            x = -(bb.width / 2) - 6;
	          } else {
	            x = -bb.width / 2;
	          }
	
	          if (d === self.currentlySelectedToken || highlight) {
	            y = -bb.height;
	          } else {
	            y = -bb.height / 2;
	          }
	
	          if (d === self.currentlySelectedToken || highlight) {
	            height = bb.height + 6;
	          } else {
	            height = bb.height / 2;
	          }
	
	          if (d === self.currentlySelectedToken || highlight) {
	            width = bb.width + 12;
	          } else {
	            width = bb.width;
	          }
	
	          var pos = {
	            x: x, y: y, width: width, height: height
	          };
	
	          _d2.default.select(this).transition().duration(50).attr(pos);
	        });
	      }
	
	      tokens.exit().remove();
	
	      //Mouse Handlers
	
	      // Handle mouseover
	      //
	      // To support locked selections, it will check if there is a selected
	      // adjective before adjusting what should be highlighted.
	      function mouseovered(d) {
	        if (_lodash2.default.isNull(self.currentlySelectedToken)) {
	          self.container.select('svg').selectAll('g.token').classed('active', false);
	          _d2.default.select(this).classed('active', true);
	          this.parentNode.appendChild(this);
	        } else {
	          return;
	        }
	      }
	
	      // Handle mouseout
	      //
	      // To support locked selections, it will check if there is a selected
	      // adjective before adjusting what should be unhighlighted.
	      function mouseouted() {
	        if (_lodash2.default.isNull(self.currentlySelectedToken)) {
	          _d2.default.select(this).classed('active', false);
	        } else {
	          return;
	        }
	      }
	
	      // Handle clicking on adjectives. Basically uses the mouseout and mouseover
	      // functions to lock a selection and highlight it.
	      function mouseclicked(d) {
	        if (self.currentlySelectedToken === d) {
	          self.currentlySelectedToken = null;
	          mouseouted.bind(this)();
	          // self.hideAdjectiveDetailOverlay();
	        } else {
	            mouseouted.bind(this)();
	            self.currentlySelectedToken = null;
	            mouseovered.bind(this)(d);
	            self.currentlySelectedToken = d;
	            var node = this;
	            setTimeout(function () {
	              //self.showAdjectiveDetailOverlay(node, d);
	            }, 50);
	          }
	
	        self.container.selectAll('rect.node-bg').transition().duration(50).call(positionAdjectiveBackground);
	      }
	    }
	  }]);
	  return Komparator;
	})();
	
	exports.default = Komparator;

/***/ },
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(229);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _stopwordsEn = __webpack_require__(233);
	
	var _stopwordsEn2 = _interopRequireDefault(_stopwordsEn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var KomparatorAnalysis = {
	
	  /**
	   * Provides simple tokenization of text.
	   *
	   * Input text is tokenized by splitting on whitespace.
	   *
	   * @param  {String} string input string
	   * @return [String]        list of tokens
	   */
	  tokenize: function tokenize(string) {
	    return _lodash2.default.map(string.split(/\W/), function (s) {
	      return s.toLowerCase();
	    });
	  },
	
	  /**
	   * Removes tokens that are identified as stopwords.
	   * @param  [String] tokenList A list of strings
	   * @param  [String] stopWords Optional: A list of stopwords to remove
	   *                            if no list is passed a default list is used   *                            
	   * @return [String]           A list of strings with stopwords removed
	   * @todo
	   */
	  removeStopWordTokens: function removeStopWordTokens(tokenList) {
	    var stopwords = arguments.length <= 1 || arguments[1] === undefined ? _stopwordsEn2.default : arguments[1];
	
	    return _lodash2.default.reject(tokenList, function (s) {
	      return _lodash2.default.includes(stopwords, s.toLowerCase());
	    });
	  },
	
	  /**
	   * Removes tokens that are identified as stopwords.
	   * @param  [String] tokenList A list of strings
	   * @return [String]           A list of strings with stopwords removed
	   * @todo
	   */
	  removePunctuationTokens: function removePunctuationTokens(tokenList) {
	    return tokenList;
	  },
	
	  /**
	   * Removes tokens that occur n or fewer times.
	   * @param  [String] tokenList A list of strings
	   * @param  [Number] n         threshold
	   * @return [String]           A list of strings with low frequency terms removed
	   * @todo
	   */
	  removeLowFrequency: function removeLowFrequency(tokenList, n) {
	    var freqTable = KomparatorAnalysis.frequencyTable(tokenList);
	    var res = [];
	    _lodash2.default.each(tokenList, function (token) {
	      if (freqTable[token] > n) {
	        res.push(token);
	      }
	    });
	    return res;
	  },
	
	  frequencyTable: function frequencyTable(first) {
	    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      rest[_key - 1] = arguments[_key];
	    }
	
	    var all = first.concat.apply(first, rest);
	    // console.log("frequencyTable", first.length, rest[0].length, all.length)
	    var res = _lodash2.default.countBy(all, _lodash2.default.identity);
	    // console.log(res);
	    return res;
	  },
	
	  /**
	   * Scores all the terms on a scale from -1 to 1
	   * based on whether it occurs more in one corpus or another
	   *
	   * A term that only appears in leftCorpus would recieve a score of -1
	   * A term that appears only in rightCorpus would have a score of 1.
	   * A term that appears equally in both copora would have a score of zero.
	   * Other scores in range are assigned as appropriate based on relative frequency.
	   *
	   *
	   * @param  [String] leftCorpus  a list of strings/tokens
	   * @param  [String] rightCorpus a list of strings/tokens
	   * @return {Object}             a dictionary of strings to scores.
	   *
	   */
	  scoreByCount: function scoreByCount(leftCorpus, rightCorpus) {
	    var combined = leftCorpus.concat(rightCorpus);
	
	    var combinedFrequencies = _lodash2.default.countBy(combined, _lodash2.default.identity);
	    var leftFrequencies = _lodash2.default.countBy(leftCorpus, _lodash2.default.identity);
	    var rightFrequencies = _lodash2.default.countBy(rightCorpus, _lodash2.default.identity);
	
	    var scores = _lodash2.default.reduce(_lodash2.default.keys(combinedFrequencies), function (memo, token) {
	      var count = combinedFrequencies[token];
	      var lf = leftFrequencies[token];
	      var rf = rightFrequencies[token];
	
	      if (rf === undefined) {
	        memo[token] = -1;
	      } else if (lf === undefined) {
	        memo[token] = 1;
	      } else if (lf === rf) {
	        memo[token] = 0;
	      } else if (lf > rf) {
	        memo[token] = (lf - rf) / count * -1;
	      } else if (lf < rf) {
	        memo[token] = (rf - lf) / count;
	      }
	      return memo;
	    }, {});
	    return scores;
	  }
	
	};
	exports.default = KomparatorAnalysis;

/***/ },
/* 233 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// Stop word list is from the snowball stemmer project via
	// https://github.com/brenes/stopwords-filter/blob/master/lib/stopwords/snowball/locales/en.csv
	
	var stopwords = ["i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "would", "should", "could", "ought", "i'm", "you're", "he's", "she's", "it's", "we're", "they're", "i've", "you've", "we've", "they've", "i'd", "you'd", "he'd", "she'd", "we'd", "they'd", "i'll", "you'll", "he'll", "she'll", "we'll", "they'll", "isn't", "aren't", "wasn't", "weren't", "hasn't", "haven't", "hadn't", "doesn't", "don't", "didn't", "won't", "wouldn't", "shan't", "shouldn't", "can't", "cannot", "couldn't", "mustn't", "let's", "that's", "who's", "what's", "here's", "there's", "when's", "where's", "why's", "how's", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very"];
	exports.default = stopwords;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(1);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(13);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(14);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(18);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(43);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(58);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _actions = __webpack_require__(214);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Contains UI for the main configuration options that
	 * modify the visualization.
	 */
	
	var Controls = (function (_React$Component) {
	  (0, _inherits3.default)(Controls, _React$Component);
	
	  function Controls() {
	    (0, _classCallCheck3.default)(this, Controls);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Controls).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Controls, [{
	    key: 'updateFreq',
	
	    /**
	     * Event handler for updates to minimum frquency control
	     *
	     * @param  {SyntheticEvent} event a change event
	     * @return {undefined}
	     */
	    value: function updateFreq(event) {
	      if (event.target.value >= 0) {
	        this.props.store.dispatch((0, _actions.setMinimumFrequency)(event.target.value));
	      }
	    }
	
	    /**
	     * Event handler for updates to show unique terms toggle
	     *
	     * @param  {SyntheticEvent} event a change event
	     * @return {undefined}
	     */
	
	  }, {
	    key: 'updateShowUnique',
	    value: function updateShowUnique(event) {
	      this.props.store.dispatch((0, _actions.showUniqueTerms)(event.target.checked));
	    }
	
	    /**
	     * Event handler for updates to show stopwords toggle
	     *
	     * @param  {SyntheticEvent} event a change event
	     * @return {undefined}
	     */
	
	  }, {
	    key: 'updateShowStopWords',
	    value: function updateShowStopWords(event) {
	      this.props.store.dispatch((0, _actions.showStopWords)(event.target.checked));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var options = this.props.store.getState().get('komparatorOptions');
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'label',
	          null,
	          'Minimum Term Frequency'
	        ),
	        _react2.default.createElement('input', { type: 'number',
	          value: options.get('minimumFrequency'),
	          onChange: this.updateFreq.bind(this),
	          min: '0',
	          max: '100' }),
	        _react2.default.createElement(
	          'label',
	          null,
	          'Show Unique Terms'
	        ),
	        _react2.default.createElement('input', { type: 'checkbox',
	          checked: options.get('showUniqueTerms'),
	          onChange: this.updateShowUnique.bind(this) }),
	        _react2.default.createElement(
	          'label',
	          null,
	          'Show Stopwords'
	        ),
	        _react2.default.createElement('input', { type: 'checkbox',
	          checked: options.get('showStopWords'),
	          onChange: this.updateShowStopWords.bind(this) })
	      );
	    }
	  }]);
	  return Controls;
	})(_react2.default.Component);
	
	exports.default = Controls;
	
	Controls.propTypes = {
	  store: _react2.default.PropTypes.object.isRequired // A redux store
	};

/***/ },
/* 235 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var samples = {};
	exports.default = samples;
	
	samples.nyt = "SIMI VALLEY, Calif. — Determined to prove their mettle, several Republican presidential candidates showed new aggressiveness in lacing into Donald J. Trump on Wednesday night, seeking to elevate themselves as leaders of substance and shake up a race that Mr. Trump has dominated all summer.\n\nWhile moderators at the CNN debate tried repeatedly to pit one Republican after another against Mr. Trump, the candidates fought to break out of that dynamic, with Carly Fiorina emerging as an especially tenacious combatant who provided some of the few moments where Mr. Trump looked uncomfortable.\n\nThe debate covered a broad range of subjects — immigration, the nuclear deal with Iran, same-sex marriage, federal financing for Planned Parenthood — and was more inclusive than the first debate last month, allowing each of the 11 candidates to engage through a nearly three-hour forum that tested their endurance.\n\nStill, some of the most memorable interactions centered on loaded confrontations with Mr. Trump. Mrs. Fiorina called him “an entertainer,” and Senator Rand Paul of Kentucky labeled him “sophomoric” in the opening minutes of the debate at the Ronald Reagan Presidential Library here. Mr. Trump drew a stinging assault on his leadership abilities and character from Gov. Scott Walker of Wisconsin, one of several candidates who have declined in the polls as Mr. Trump has soared.\n\nContinue reading the main story\nSlide Show\n\nSlide Show11 Photos\n\nRepublican Candidates Debate Again\n\nRepublican Candidates Debate Again\n\nCreditMax Whittaker for The New York Times\n“We don’t need an apprentice in the White House — we have one right now,” Mr. Walker said, invoking the name of Mr. Trump’s former reality show. When Mr. Trump sharply criticized his record in Wisconsin, Mr. Walker hit back: “Just because he says it doesn’t make it true. The facts are the facts.”\n\nAnother struggling candidate, former Gov. Jeb Bush of Florida, who has been Mr. Trump’s chief target, was initially slow to take him on, but then ripped into him for suggesting that Mr. Bush would be a puppet of his major donors. He accused Mr. Trump of using his enormous wealth to act like a “special interest” by lobbying for casino gambling in Florida when Mr. Bush was governor there.\n\n“Totally false,” said Mr. Trump, who rolled his eyes and feigned looks of shock as his opponents piled on.\n\n“You wanted it, and you didn’t get it because I was opposed,” Mr. Bush shot back.\n\n“More energy tonight. I like that,” Mr. Trump quipped, drawing a look of fury from Mr. Bush, whose low-key manner he has lampooned all summer.\n\nSeveral candidates tried to connect with voters on a personal level. Gov. Chris Christie of New Jersey spoke at length about his fears that his wife had been killed in the Sept. 11 attacks and that he might become a single parent. Senator Marco Rubio of Florida spoke about the importance of speaking Spanish in his family, and used national security questions about Russia and Syria to pledge that he had the experience to keep Americans safe. And Ben Carson, a retired neurosurgeon and a social conservative, said he loathed politics as much as many of the voters who have helped him and Mr. Trump emerge as the leading candidates in polls.\n\nContinue reading the main story\n“When I entered this race, all the political pundits said, ‘It’s impossible; you can’t do it because you’re not connected with the money,’ ” Mr. Carson said. “We now have over 500,000 donations, and the money is coming in. But the pundits forgot about one thing, and that is the people. And they are really in charge.”\n\nThe attacks from Mr. Bush and Mrs. Fiorina were expected, given how harshly Mr. Trump has jabbed at them in recent weeks. But perhaps more notable was that Mr. Walker, too, in an acknowledgment that he has to make up lost ground, repeatedly took on Mr. Trump.\n\nAt times, Mr. Trump responded to attacks with gusto, belittling Mr. Paul’s appearance (“I never attacked him on his looks, and believe me, there is plenty of subject matter right there”), bashing Mr. Walker for his collapse in the polls in Iowa (“You went down the tubes”) and treating Mr. Bush — as well as his brother George W. Bush — dismissively.\n\n“Your brother’s administration gave us Barack Obama, because it was such a disaster,” Mr. Trump snapped at one point.\n\n“You know what? As it relates to my brother, there’s one thing I know for sure: He kept us safe,” Mr. Bush said, drawing strong applause on a night when he often delivered sharp lines with an uneasy, obligatory tone — knowing he had to attack but seeming not to relish it.\n\nMr. Trump appeared cowed at only one moment, when a moderator noted that he had recently denigrated Mrs. Fiorina’s appearance, saying: “Look at that face! Would anybody vote for that?” (He later claimed he had been referring to her persona.) Mrs. Fiorina was asked what she thought of Mr. Trump’s persona.\n\nContinue reading the main story\nHighlights From the G.O.P. Debate\n\nThe New York Times provided real-time analysis as the Republican presidential hopefuls discussed the issues on CNN.\n“I think women all over this country heard very clearly what Mr. Trump said,” she said pointedly.\n\nHer riposte drew the loudest applause of the debate, and Mr. Trump waited until it died down to reply.\n\n“I think she’s got a beautiful face, and she’s a beautiful woman,” Mr. Trump said as Mrs. Fiorina looked on stonily.\n\nOver and over, the discussion returned to Mr. Trump, who stood center-stage, his shoulders slouched forward, hands on lectern and lips pursed. He gladly took on his rivals, but was unable to bait the moderators into a spat and seemed not to enjoy the evening as much as he had at the first debate. As the night went on, he became quieter and, in an interview with CNN immediately after the debate, complained that it had gone on “too long” and said it had to have been the longest ever held.\n\nThe debate highlighted significant policy differences among the candidates, with Gov. John Kasich of Ohio and Senator Ted Cruz of Texas tangling over the Iran accord and whether congressional Republicans should stop funding the government as part of an effort to end public financing for Planned Parenthood.\n\nIn a glimpse at the tension between the hard-right and more centrist wings of the Republican Party, Mr. Kasich mocked the idea that the deal between Iran and multiple world powers could be summarily discarded, saying Americans “operate better in a world when our allies work with us.” And he warned Republicans not to shut down the government.\n\nContinue reading the main story\nFirst Draft Newsletter\n\nSubscribe for updates on the 2016 presidential race, the White House and Congress, delivered to your inbox Monday - Friday.\nMr. Cruz gave no quarter, citing videos that show Planned Parenthood officials discussing fees for tissue from aborted fetuses as evidence of a “criminal enterprise” and denouncing Republicans for “pre-emptively surrendering to Barack Obama.”\n\nMr. Walker, asserting himself after a sharp fall in the polls, repeatedly interjected when he was not called on, attacking Mr. Trump and later criticizing the Washington political establishment.\n";
	
	/*
	 *
	 * 
	 */
	
	samples.fox = "Why Rubio is climbing in GOP polls\nThings may be looking up for Marco Rubio.\n\nThough he's struggled to break through the crowded, and loud, 2016 field after announcing his intention to run in April, there has been fresh buzz about his campaign since what many analysts saw as a stand-out performance at the Sept. 16 debate at the Reagan Library. \n\nA Fox News poll released late Wednesday showed Rubio and Carly Fiorina tied for third place on the GOP side, each with 9 percent, behind Donald Trump and Dr. Ben Carson.\n\nA CNN/ORC poll released earlier this week showed the Florida senator surging into 4th place with 11 percent – up from a meager 3 percent at the beginning of September. And he seems to be benefiting the most from Wisconsin Gov. Scott Walker’s decision to drop out of the race Monday. The Wall Street Journal reported that Rubio will inherit about two-thirds of Walker’s big-donor fundraising apparatus, citing a member of Walker’s national finance committee. \n\n“His chances have grown, his chances are growing. He’s part of a small group of candidates who really do have a shot,” Ron Bonjean, an unaligned Republican strategist, told FoxNews.com. “It’s still a long way away but he’s playing his cards right for now.\"\n\nA number of key staff, including Walker’s New Hampshire state co-chairman, already have joined Rubio's campaign.\n\nHe is also beginning to pose a challenge to former front-runner and ex-Florida Gov. Jeb Bush in their home state. A new Florida Atlantic University poll puts Rubio in second place, behind Donald Trump but in front of Bush.\n\nHowever, so far, Rubio’s team has been cautious in getting carried away by recent good news. \n\n“While it's always nice to see people responding well to Marco, the truth is that polls at this stage of the race are not indicative of who will win,” Alex Conant, a spokesman for the Rubio campaign, told FoxNews.com, adding that there are still four months to go before the first primary contest.\n\nThis muted response is all part of the strategy, Bonjean says: “Rubio has engaged in a chipaway strategy where he’s not trying to be the front-runner with the spotlight shining on him, but over the course of each debate and over time he’s building his foundation of support.”\n\nHowever, as Rubio’s support and infrastructure expands, it seems unlikely he will be able to stay out of the spotlight for long. On Monday night, Trump took a shot at Rubio over his initial support and role in crafting the 2013 immigration reform bill, as well as his voting record in the Senate.\n\nTrump also took a swing at Rubio’s alleged absenteeism in the Senate during the Reagan Library debate. And he's still a target of Democrats.\n\nOn Monday, the DNC attempted to stir up a “Nazi” controversy, pointing out that Rubio was attending a fundraiser at the home of developer Harlan Crow, who owns a signed copy of Adolf Hitler’s autobiography Mein Kampf. However, several media organizations noted Crow has a wide range of historical memorabilia, including items that belonged to Abraham Lincoln. Republicans called the matter a \"false controversy.\" \n\nIt wasn't the first time a critique of Rubio seemed to backfire. The New York Times was mocked in June for stories that reported on Rubio's finances and speeding tickets. In one front-page story, the paper reported about the Rubios’ “extravagant” purchases including an $80,000 speedboat, and leasing a $50,000 SUV. In one peculiar paragraph, the Times included the detail that a house Rubio bought in 2005 “includes an in-ground pool, a handsome brick driveway, meticulously manicured shrubs and oversize windows.”\n\nThe only recent public flub that seems to have stuck around was his decision to take an awkward sip of water during his response to the 2013 State of the Union address. But Rubio regularly pokes fun at himself over the incident. \n\nNow, even some Democrats say Rubio could be a contender. “Presidential campaigns are -- yes they’re about messaging and policy -- but they’re also about symbolism, and what I think what Marco Rubio is doing is trying to present this positive image of an America that, in his belief we can all live in,” Basil Smikle Jr., executive director of the New York state Democratic Party told FoxNews.com LIVE.\n\n“As long as he keeps presenting that image and that symbol of what America is and should be … then I think he has a winning message and narrative there,” Smikle said.\n\nWhile cautious, the Rubio camp is showing quiet optimism about their chances.\n\n“We have a strategy to be first in February, and we're on track to accomplishing that. Marco did very well in the first two debates, and it's a good thing for our campaign that we have 10 more debates,” Conant said.\n";

/***/ }
]);
//# sourceMappingURL=komparator-app.js.map