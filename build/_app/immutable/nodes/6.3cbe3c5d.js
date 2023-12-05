import{d as v}from"../chunks/environment.9aa685ef.js";import{s as h,n as r}from"../chunks/scheduler.659ee57f.js";import{S as g,i as u,g as i,s as _,D as k,h as p,f as l,c as f,y as x,k as c,A as y,a as m}from"../chunks/index.0592b8d4.js";const w=v,b=!0,j=Object.freeze(Object.defineProperty({__proto__:null,csr:w,prerender:b},Symbol.toStringTag,{value:"Module"}));function S(d){let e,n,s,o=`<h1>How to play Sverdle</h1> <p>Sverdle is a clone of <a href="https://www.nytimes.com/games/wordle/index.html">Wordle</a>, the
    word guessing game. To play, enter a five-letter English word. For example:</p> <div class="example svelte-7mkc3r"><span class="close svelte-7mkc3r">r</span> <span class="missing svelte-7mkc3r">i</span> <span class="close svelte-7mkc3r">t</span> <span class="missing svelte-7mkc3r">z</span> <span class="exact svelte-7mkc3r">y</span></div> <p class="svelte-7mkc3r">The <span class="exact svelte-7mkc3r">y</span> is in the right place. <span class="close svelte-7mkc3r">r</span> and
    <span class="close svelte-7mkc3r">t</span>
    are the right letters, but in the wrong place. The other letters are wrong, and can be discarded.
    Let&#39;s make another guess:</p> <div class="example svelte-7mkc3r"><span class="exact svelte-7mkc3r">p</span> <span class="exact svelte-7mkc3r">a</span> <span class="exact svelte-7mkc3r">r</span> <span class="exact svelte-7mkc3r">t</span> <span class="exact svelte-7mkc3r">y</span></div> <p>This time we guessed right! You have <strong>six</strong> guesses to get the word.</p> <p>Unlike the original Wordle, Sverdle runs on the server instead of in the browser, making it
    impossible to cheat. It uses <code>&lt;form&gt;</code> and cookies to submit data, meaning you can
    even play with JavaScript disabled!</p>`;return{c(){e=i("meta"),n=_(),s=i("div"),s.innerHTML=o,this.h()},l(t){const a=k("svelte-1gj0au3",document.head);e=p(a,"META",{name:!0,content:!0}),a.forEach(l),n=f(t),s=p(t,"DIV",{class:!0,"data-svelte-h":!0}),x(s)!=="svelte-1t1bvgd"&&(s.innerHTML=o),this.h()},h(){document.title="How to play Sverdle",c(e,"name","description"),c(e,"content","How to play Sverdle"),c(s,"class","text-column")},m(t,a){y(document.head,e),m(t,n,a),m(t,s,a)},p:r,i:r,o:r,d(t){t&&(l(n),l(s)),l(e)}}}class E extends g{constructor(e){super(),u(this,e,null,S,h,{})}}export{E as component,j as universal};
