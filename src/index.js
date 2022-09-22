//strict mode, apparently makes cleaner code, preventing from using undeclared variables.
"use strict";

console.log("lel");

// import { v4 as uuidv4 } from "uuid";

import generateJoke from "./generateJoke";

import "./scss/style.scss";

console.log(generateJoke());

// console.log(uuidv4());

// import LocomotiveScroll from "locomotive-scroll";

// const scroll = new LocomotiveScroll({
//     el: document.querySelector("[data-scroll-container]"),
//     smooth: true,
// });

const isBabel = !(class {}.toString().indexOf("class ") === 0);
console.log("babel enabled: " + isBabel);

const fn = () => 1;

const hangryMode = (food = "sushi") => {
    console.log(`I am so hangry!!! I want ${food} !!!`);
};

hangryMode("peka");
