<script lang="ts">
  import Header from '../Header.svelte';
  import Nested from '../Nested.svelte';
  import Props from '../Props.svelte';
  import Info from '../Info.svelte';

  let name = 'world';
  let src = 'https://thumb.photo-ac.com/e2/e2c42a74de4dcb8e9eace7f55e956757_t.jpeg';

  let count = 0;
  let count2 = 0;
  let numbers = [1, 2, 3, 4];

  const pkg = {
    name: 'svelte',
    version: 3,
    speed: 'blazing',
    website: 'https://svelte.dev'
  };

  $: doubled = count2 * 2;
  const incrementCount = () => {
    count++;
    $: console.log(count);
  };
  const handleClick = () => count2++;

  const addNumber = () => {
    numbers = [...numbers, numbers.length + 1];
  };
  $: sum = numbers.reduce((acc, curr) => acc + curr, 0);
</script>

<svelte:head>
  <title>introduction</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
  <h1>introduction</h1>
  <section>
    <!-- 波括弧でJavaScriptのコードを書ける -->
    <h2 class="section">Hello {name}</h2>
    <img {src} alt="フリーイメージ" />
    <hr />
  </section>

  <section>
    <h3 class="section">Nested components</h3>
    <Nested />
    <p class="box">importでNested.svelteを表示させている</p>
  </section>

  <section>
    <h3 class="section">Reactivity / Assignments</h3>
    <button on:click={incrementCount}>Clicked {count} {count === 1 ? 'time' : 'times'}</button>
    <p class="box">
      変数の値が更新されたとき、その変数を使用しているUIも受動的に更新される。Svelteのリアクティビティシステムによって実現できている
      変数の代入をトリガーとして変更を検知する。
    </p>
    <hr />
  </section>

  <section>
    <h3 class="section">Reactivity / Declarations</h3>
    <button on:click={handleClick}>Clicked {count2}</button>
    <p>{count2} doubled is {doubled}</p>
    <p class="box">
      let count = 0;<br />
      $: doubled = count * 2;<br />
      $:構文を使用することで、doubled変数は、count変数が更新されるたびに自動的に更新されるようになる。
      doubledを使用しているUIも更新される
    </p>
    <hr />
  </section>

  <section>
    <h3 class="section">Reactivity / Updating arrays and objects</h3>
    <button on:click={addNumber}>Add a number</button>
    <p>{numbers.join(' + ')} = {sum}</p>
    <p class="box">
      配列やオブジェクトをリアクティブに更新する場合は、それ自体の変更ではトリガーされず、代入が必要になる！
      メモリアドレスを参照しているため、代入することで新しく配列が作成されて、結果メモリアドレスが新しくなる→検知される→更新される
    </p>
    <hr />
  </section>

  <section>
    <h3 class="section">Props / Declaring props</h3>
    <Props answer={42} />
    <p class="box">
      親から子コンポーネントに値を渡したいときは、子コンポーネント内で受け渡しに使用する変数をexportする。
      親からはその変数にデータを渡す
    </p>
    <hr />
  </section>

  <section>
    <h3 class="section">Props / Spread props</h3>
    <Info {...pkg} />
    <p class="box">
      オブジェクトのプロパティを...pkgで展開してコンポーネントに渡すことができる。
      展開しないと書くのが大変。name&equals;&lbrace;pkg.name&rbrace;
      ;version&equals;&lbrace;pkg.version&rbrace;...とプロパティが多いほど大変
    </p>
    <hr />
  </section>
</div>

<!-- スタイルはコンポーネントの中だけに反映される -->
<style>
  p {
    /* color: red; */
  }
  .section {
    text-align: center;
    font-weight: bold;
  }
  .box {
    /* 方眼紙模様に必須のスタイル */
    background-image: linear-gradient(0deg, transparent calc(100% - 1px), #eeeeee calc(100% - 1px)),
      linear-gradient(90deg, transparent calc(100% - 1px), #eeeeee calc(100% - 1px));
    background-size: 16px 16px;
    background-repeat: repeat;
    background-position: center center;
    background-color: white;

    /* 以下任意のスタイル */
    padding: 20px;
  }
</style>
