export const resolve = (specifier, context, next) => next(specifier, context);

export const load = (url, context, next) => next(url, context);
