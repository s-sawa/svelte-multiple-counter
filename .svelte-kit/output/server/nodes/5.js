import * as server from '../entries/pages/sverdle/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.10b86d93.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.200976ee.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.36a8a92b.js"];
export const stylesheets = ["_app/immutable/assets/5.9d501049.css"];
export const fonts = [];
