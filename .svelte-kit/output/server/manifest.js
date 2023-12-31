export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.b4f6f5e1.js","app":"_app/immutable/entry/app.417ad035.js","imports":["_app/immutable/entry/start.b4f6f5e1.js","_app/immutable/chunks/scheduler.659ee57f.js","_app/immutable/chunks/singletons.19a19510.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.417ad035.js","_app/immutable/chunks/scheduler.659ee57f.js","_app/immutable/chunks/index.0592b8d4.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/introduction",
				pattern: /^\/introduction\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
