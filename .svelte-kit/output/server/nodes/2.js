import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.7c6dbea8.js","_app/immutable/chunks/scheduler.659ee57f.js","_app/immutable/chunks/index.0592b8d4.js","_app/immutable/chunks/each.3874fca9.js","_app/immutable/chunks/singletons.565e189b.js","_app/immutable/chunks/stores.71f6097a.js"];
export const stylesheets = ["_app/immutable/assets/2.cb99ddca.css"];
export const fonts = [];
