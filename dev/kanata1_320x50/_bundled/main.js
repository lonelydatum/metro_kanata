(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function start() {
	TweenLite.defaultEase = Power3.easeOut;
	var tl = new TimelineMax();
	var read = "+=1";
	var time = .5;
	tl.set(".frame1", { opacity: 1 });

	tl.add("dothis", 2);
	tl.to(".slider", .5, { x: "-=110" }, "dothis");
	tl.to(".t1", .3, { opacity: 0 }, "dothis");
	tl.from(".t2", .3, { opacity: 0 }, "dothis");
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
