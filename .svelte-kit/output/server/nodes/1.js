

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.02ea4734.js","_app/immutable/chunks/scheduler.659ee57f.js","_app/immutable/chunks/index.0592b8d4.js","_app/immutable/chunks/stores.71f6097a.js","_app/immutable/chunks/singletons.565e189b.js"];
export const stylesheets = [];
export const fonts = [];
