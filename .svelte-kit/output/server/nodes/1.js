

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3f08fa9a.js","_app/immutable/chunks/scheduler.659ee57f.js","_app/immutable/chunks/index.0592b8d4.js","_app/immutable/chunks/stores.bed7e252.js","_app/immutable/chunks/singletons.19a19510.js"];
export const stylesheets = [];
export const fonts = [];
