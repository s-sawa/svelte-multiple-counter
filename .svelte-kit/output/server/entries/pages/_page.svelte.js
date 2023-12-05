import { o as onDestroy, c as create_ssr_component, a as subscribe, d as each, e as escape, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { createForm as createForm$1 } from "@felte/core";
import { w as writable } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function createForm(config) {
  const _a = createForm$1(config !== null && config !== void 0 ? config : {}, {
    storeFactory: writable
  }), { cleanup, startStores } = _a, rest = __rest(_a, ["cleanup", "startStores"]);
  onDestroy(cleanup);
  return rest;
}
const MultipleCounter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let counters;
  let sum;
  let titleLists;
  let $data, $$unsubscribe_data;
  let count = [0];
  const { form, data, addField, unsetField } = createForm({
    initialValues: {
      // 入力フォームの初期値を 'new'でセットする
      counters: [{ value: "new" }]
    }
  });
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  counters = $data.counters;
  {
    console.log(data);
  }
  {
    console.log(count);
  }
  {
    console.log(typeof counters);
  }
  sum = () => count.reduce((acc, curr) => acc + curr, 0);
  titleLists = () => counters.map((obj) => obj.value);
  $$unsubscribe_data();
  return `<form>${each(counters, (counter, index) => {
    return `<div><input name="${"counters." + escape(index, true) + ".value"}"> ${escape(count[index])} <button data-svelte-h="svelte-8bj1e8">+</button> <button data-svelte-h="svelte-xk61is">-</button> <button data-svelte-h="svelte-1l1ex8d">0</button> <button type="button" data-svelte-h="svelte-stofmk">Remove Counter</button> </div>`;
  })}</form> <button type="button" data-svelte-h="svelte-1vlbtck">New Counter</button>  <div><p>title list: ${escape(titleLists())}</p> <p>sum of count: ${escape(sum())}</p></div>`;
});
const welcome = "/_app/immutable/assets/svelte-welcome.c18bcf5a.webp";
const welcome_fallback = "/_app/immutable/assets/svelte-welcome.6c300099.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1rtdfln.svelte-1rtdfln{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6}h1.svelte-1rtdfln.svelte-1rtdfln{width:100%}.welcome.svelte-1rtdfln.svelte-1rtdfln{display:block;position:relative;width:100%;height:0;padding:0 0 calc(100% * 495 / 2048) 0}.welcome.svelte-1rtdfln img.svelte-1rtdfln{position:absolute;width:100%;height:100%;top:0;display:block}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-8gb88t_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-8gb88t_END -->`, ""} <section class="svelte-1rtdfln"><h1 class="svelte-1rtdfln" data-svelte-h="svelte-c4cu9i"><span class="welcome svelte-1rtdfln"><picture><source${add_attribute("srcset", welcome, 0)} type="image/webp"> <img${add_attribute("src", welcome_fallback, 0)} alt="Welcome" class="svelte-1rtdfln"></picture></span>

    to your new<br>SvelteKit app</h1> <ul><li${add_attribute(
    "aria-current",
    $page.url.pathname === "/introduction" ? "page" : void 0,
    0
  )}><a href="/introduction" data-svelte-h="svelte-1atp0qr">introduction</a></li></ul> <h2 data-svelte-h="svelte-12e3nzn">try editing <strong>src/routes/+page.svelte</strong></h2>  ${validate_component(MultipleCounter, "MultipleCounter").$$render($$result, {}, {}, {})} </section>`;
});
export {
  Page as default
};
