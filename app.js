import module from "node:module";

module.register("./register.js", import.meta.url);
