

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b3b1a0b1.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.200976ee.js","_app/immutable/chunks/stores.abafd53e.js","_app/immutable/chunks/singletons.36a8a92b.js"];
export const stylesheets = [];
export const fonts = [];
