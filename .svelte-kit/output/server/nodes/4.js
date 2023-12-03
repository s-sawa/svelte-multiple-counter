

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/introduction/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.ebb3eb2b.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.200976ee.js"];
export const stylesheets = [];
export const fonts = [];
