import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.d40f7dfe.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.200976ee.js","_app/immutable/chunks/singletons.36a8a92b.js","_app/immutable/chunks/stores.abafd53e.js"];
export const stylesheets = ["_app/immutable/assets/2.668228eb.css"];
export const fonts = [];
