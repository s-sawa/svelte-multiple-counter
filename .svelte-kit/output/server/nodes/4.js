

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/introduction/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.817491db.js","_app/immutable/chunks/scheduler.659ee57f.js","_app/immutable/chunks/index.0592b8d4.js"];
export const stylesheets = [];
export const fonts = [];
