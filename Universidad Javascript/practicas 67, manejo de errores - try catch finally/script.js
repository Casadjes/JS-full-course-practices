"use strict";

try {
  x = 0;
} catch (error) {
  console.log(error);
} finally {
  console.log("termina la revision de errores");
}

console.log("continuamos");
