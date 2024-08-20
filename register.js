import join from "@rcompat/fs/join";

export const resolve = (specifier, context, next) => {
  if (specifier === "app/target") {
    return {
      format: "module",
      shortCircuit: true,
      url: new URL("target.js", import.meta.url).href,
    }
    console.log(specifier);
  }
  return next(specifier, context);
}

export const load = (url, context, next) => next(url, context);
