function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");function l(t,n){new Promise(((e,o)=>{const r=Math.random()>.3;setInterval((()=>{r?e({position:t,delay:n}):o({position:t,delay:n})}),n)})).then((({position:t,delay:n})=>{e(i).Notify.success(`Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`Rejected promise ${t} in ${n}ms`)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault();let t=Number(e.target.elements.delay.value);const n=Number(e.target.elements.step.value),o=Number(e.target.elements.amount.value);for(let e=1;e<=o;e++)l(e,t),t+=n}));
//# sourceMappingURL=03-promises.d6aa906f.js.map
