!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;function r(e,n){new Promise((function(o,t){var r=Math.random()>.3;setInterval((function(){r?o({position:e,delay:n}):t({position:e,delay:n})}),n)})).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t),t("6JpON"),{form:document.querySelector(".form")}.form.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(e.target.elements.delay.value),o=Number(e.target.elements.step.value),t=Number(e.target.elements.amount.value),i=1;i<=t;i++)r(i,n),n+=o}))}();
//# sourceMappingURL=03-promises.f83a382e.js.map
