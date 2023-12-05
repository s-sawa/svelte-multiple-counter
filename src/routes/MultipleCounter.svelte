<script lang="ts">
  import { createForm } from 'felte';

  // 最初の入力フォームのカウント初期値
  let count: number[] = [0];

  // data: フォームの現在の値を格納するオブジェクト
  const { form, data, addField, unsetField } = createForm({
    initialValues: {
      // 入力フォームの初期値を 'new'でセットする
      counters: [{ value: 'new' }]
    }
  });

  // $:でリアクティブ宣言をすると、右辺の内容が変化するたびにコードが実行される
  // 右辺のcountersは参照したいformのname属性を記述する
  // svelteではdataにアクセスする際は $ を使用する
  // initialValuesでcountersというフィールドアレイを定義しているため、dataストア内にも同じプロパティが自動生成される
  $: counters = $data.counters; //
  // $: console.log(data);
  // $: console.log(count);
  // $: console.log(typeof counters);

  const newCounter = (): void => {
    count = [...count, 0];
    addField('counters', { value: 'new' });
  };

  const removeCounter = (index: number): void => {
    // 削除する要素以外を取得して新たに配列を作成
    count = [...count.slice(0, index), ...count.slice(index + 1)];
    unsetField(`counters.${index}`);
  };

  // reduceメソッドの初期値が0で、コールバック関数の計算結果もnumber型のため自動で型推論される
  // $: sum = (): number => count.reduce((acc: number, curr: number) => acc + curr, 0);
  $: sum = count.reduce((acc, curr) => acc + curr, 0);

  // countersオブジェクト(value:'hoge' , key: 'fuga')からvalueの値だけ取り出した配列を作成する
  // $: titleLists = (): string[] => counters.map((obj) => obj.value);
  $: titleLists = counters.map((obj) => obj.value);
</script>

<!-- use:formとすることでFelteを使用したフォームを作成できる -->
<form use:form>
  {#each counters as counter, index}
    <div>
      <input name="counters.{index}.value" />
      {count[index]}
      <button on:click={() => (count[index] += 1)}> + </button>
      <button
        on:click={() => {
          if (count[index] > 0) count[index] -= 1;
        }}
      >
        -
      </button>
      <button on:click={() => (count[index] = 0)}> 0 </button>
      <button type="button" on:click={() => removeCounter(index)}>Remove Counter</button>
    </div>
  {/each}
</form>
<button type="button" on:click={() => newCounter()}>New Counter</button>

<!-- display -->
<div>
  <p>title list: {titleLists}</p>
  <!-- <p>sum of count: {sum()}</p> -->
  <p>sum of count: {sum}</p>
</div>
