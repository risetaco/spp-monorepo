// feature to check if the view transition is supported by the browser

export const supportsViewTransitions = typeof document !== "undefined" && "startViewTransition" in document;
