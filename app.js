import module from "node:module";

module.register("./register.js", import.meta.url);

console.log(await import("./dynamic.js"));
