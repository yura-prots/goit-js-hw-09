!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON");function u(n,t){new Promise((function(e,o){var r=Math.random()>.3;setInterval((function(){r?e("Fulfilled promise ".concat(n," in ").concat(t,"ms")):o("Rejected promise ".concat(n," in ").concat(t,"ms"))}),t)})).then((function(n){e(i).Notify.success(n)})).catch((function(n){e(i).Notify.failure(n)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(e.target.elements.delay.value),t=Number(e.target.elements.step.value),o=Number(e.target.elements.amount.value),r=1;r<=o;r++)u(r,n),n+=t}))}();
//# sourceMappingURL=03-promises.b70927a8.js.map