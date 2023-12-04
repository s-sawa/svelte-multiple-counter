<script>
  import { createForm } from 'felte';

  // フォームの増減でcount配列の要素もリンクさせる
  let count = [0];
  let mes = '';

  // data: フォームの現在の値を格納するオブジェクト
  const { form, data, addField, unsetField } = createForm({
    initialValues: {
      counters: [{ value: 'new' }]
    }
  });

  // $:でリアクティブ宣言をし、counters配列の内容が変更されると動的に変更される

  // 右辺のcountersは参照したいformのname属性を記述する
  // svelteではdetaにアクセスする際$を使用する
  // initialValuesでcountersというフィールドアレイを定義しているため、dataストア内にも同じプロパティが自動生成される
  $: counters = $data.counters;
  $: console.log(data);
  $: console.log(count);

  // function removeCounter(index) {
  //   // count.splice(index, 1);
  //   count = [...count.slice(0, index), ...count.slice(index + 1)];
  //   return () => unsetField(`counters.${index}`);
  // }

  // function newCounter(index) {
  //   // count.push(0);
  //   count = [...count, 0];
  //   return () => addField(`counters`, 0, index);
  // }

  const newCounter = (index) => {
    count = [...count, 0];
    addField(`counters`, { value: 'new' }, index);
  };

  const removeCounter = (index) => {
    count = [...count.slice(0, index), ...count.slice(index + 1)];
    unsetField(`counters.${index}`);
  };

  $: sum = () => count.reduce((acc, curr) => acc + curr, 0);

  // countersオブジェクト(value:'hoge' , key: 'fuga')からvalueの値だけ取り出した配列を作成する
  $: titleLists = () => counters.map((obj) => obj.value);
</script>

<form use:form>
  {#each counters as counter, index}
    <div>
      <input name="counters.{index}.value" />
      {count[index]}
      <button on:click={() => (count[index] += 1)}> + </button>
      <button on:click={() => (count[index] -= 1)}> - </button>
      <button on:click={() => (count[index] = 0)}> 0 </button>

      <!-- <button type="button" on:click={newCounter(index + 1)}> Add Counter </button>
      <button type="button" on:click={removeCounter(index)}> Remove Counter </button> -->

      <!-- <button type="button" on:click={() => newCounter(index + 1)}>Add Counter</button> -->
      <button type="button" on:click={() => removeCounter(index)}>Remove Counter</button>
    </div>
  {/each}
</form>
<button type="button" on:click={() => newCounter()}>New Counter</button>

<!-- display -->
<div>
  <p>title list: {titleLists()}</p>
  <p>sum of count: {sum()}</p>
</div>
