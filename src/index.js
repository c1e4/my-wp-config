//strict mode, apparently makes cleaner code, preventing from using undeclared variables.
"use strict";

console.log("lel");

// import { v4 as uuidv4 } from "uuid";

import generateJoke from "./js/generateJoke";

import "./scss/style.scss";

console.log(generateJoke());

// console.log(uuidv4());

checkBabel();

/**
 * Checks that can indicate that babel is working.
 * Look at the compiled code to see that.
 */

function checkBabel() {
    const hangryMode = (food = "sushi") => {
        console.log(`I am so hangry!!! I want ${food} !!!`);
    };

    hangryMode("peka");

    const isBabel = !(class {}.toString().indexOf("class ") === 0);
    console.log("babel enabled: " + isBabel);

    const fn = () => 1;
}
