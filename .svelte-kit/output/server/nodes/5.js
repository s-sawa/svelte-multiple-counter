import * as server from '../entries/pages/sverdle/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.1e57edcc.js","_app/immutable/chunks/scheduler.659ee57f.js","_app/immutable/chunks/index.0592b8d4.js","_app/immutable/chunks/each.3874fca9.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.19a19510.js"];
export const stylesheets = ["_app/immutable/assets/5.86227873.css"];
export const fonts = [];
