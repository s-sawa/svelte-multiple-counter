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
  // svelteではdataというstoreにアクセスする際は $ を使用する
  // initialValuesでcountersというフィールドアレイを定義しているため、dataストア内にも同じプロパティが自動生成される
  $: counters = $data.counters; //

  const newCounter = (): void => {
    // count.push(0);
    count = [...count, 0];
    addField('counters', { value: 'new' });
  };

  const removeCounter = (index: number): void => {
    // 削除する要素以外を取得して新たに配列を作成
    count = [...count.slice(0, index), ...count.slice(index + 1)];
    unsetField(`counters.${index}`);
  };

  // reduceメソッドの初期値が0で、コールバック関数の計算結果もnumber型のため自動で型推論される
  $: sum = count.reduce((acc, curr) => acc + curr, 0);

  // countersオブジェクト(value:'hoge' , key: 'fuga')からvalueの値だけ取り出した配列を作成する
  $: titleLists = counters.map((obj) => obj.value);
</script>

<!-- use:formとすることでFelteを使用したフォームを作成できる -->
<div class="container">
  <form use:form class="form">
    {#each counters as _counter, index}
      <div class="counter">
        <input class="input-field" name="counters.{index}.value" />
        <span class="display">{count[index]}</span>
        <div class="buttons">
          <button class="button increment" on:click={() => (count[index] += 1)}> + </button>
          <button
            class="button decrement"
            on:click={() => {
              if (count[index] > 0) count[index] -= 1;
            }}
          >
            −
          </button>
          <button class="button reset" on:click={() => (count[index] = 0)}> 0 </button>
          <button class="button delete-form" type="button" on:click={() => removeCounter(index)}
            >x</button
          >
        </div>
      </div>
    {/each}
  </form>
  <button class="button add-form" type="button" on:click={() => newCounter()}>New Counter</button>
  <div>
    <p>title list: {titleLists}</p>
    <p>sum of count{sum}</p>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
  }

  .form {
    margin-bottom: 1rem;
    width: 100%;
  }
  .counter {
    display: flex;
    margin: 0.5rem;
    padding: 0.5rem;
    background: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  .buttons {
    gap: 0.1rem;
  }
  .button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid transparent;
  }
  .button:hover {
    border-color: #bbb;
  }
  .input-field {
    padding: 0.5rem 1rem;
    border-radius: 10px;
    border: 1px solid transparent;
  }
  .display {
    font-weight: bold;
    padding: 0.5rem 1rem;
    min-width: 4rem;
    text-align: center;
  }

  .increment {
    font-weight: bold;
    background-color: #f56565;
    color: #fff;
  }

  .decrement {
    font-weight: bold;
    background-color: #4299e1;
    color: #fff;
  }

  .reset {
    font-weight: bold;
    background-color: #ebc94a;
    color: #fff;
  }

  .delete-form {
    font-weight: bold;
    background-color: #ff0000;
    color: #fff;
  }

  .add-form {
    width: calc(100% - 1rem);
    background-color: #5cb85c;
    color: #fff;
  }

  .add-form:hover {
    background-color: #449d44;
  }
</style>
