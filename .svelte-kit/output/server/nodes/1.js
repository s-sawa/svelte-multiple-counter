

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7fc73d4d.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.200976ee.js","_app/immutable/chunks/stores.46a7d1c3.js","_app/immutable/chunks/singletons.6e75850b.js"];
export const stylesheets = [];
export const fonts = [];
