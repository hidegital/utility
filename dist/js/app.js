(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _ready = require('./jquerytojs/ready');

var _ready2 = _interopRequireDefault(_ready);

var _templete = require('./lodashtojs/templete');

var _templete2 = _interopRequireDefault(_templete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ready2.default)((0, _templete2.default)('hogehoge'));

},{"./jquerytojs/ready":2,"./lodashtojs/templete":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ready;
function ready(fn) {
	if (document.readyState != 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = simple;
//import $ from 'jquery'
//import _ from 'lodash'
//
//function simple(name) {
//	var compiled = _.template("<p>Hello <%= name %>!</p>");
//	var user = { "name": name };
//	$("#simple").html(compiled(user));
//}
//下記es6templeteで書き換え

function simple(name) {
	var tempTarget = document.getElementById("simple");
	var compiled = function compiled(_ref) {
		var name = _ref.name;
		return "<p>hello " + name + "</p>";
	};
	var user = { "name": name };
	tempTarget.innerHTML = compiled(user);
}

},{}]},{},[1]);
