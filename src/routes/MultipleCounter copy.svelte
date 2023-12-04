<!-- <script>
  import { createForm } from 'felte';

  let mes = '';
    let hasBio = false;

  const { form } = createForm({
    onSubmit: (values) => {
      // ...
    }
  });
</script>

<div>
  <h1>あああああ</h1>
  <form use:form>
    <input type="text" name="email" bind:value={mes} />

    <input type="password" name="password" />
    <button type="submit">Sign In</button>
  </form>
</div>

<div>{mes}</div>



<form use:form>
  <input name="username">
  <input type="checkbox" name="hasBio" bind:checked={hasBio}>
  {#if hasBio}
    <textarea name="bio" />
  {/if}
</form> -->

<script>
  import { createForm } from 'felte';

  // フォームの増減でcount配列の要素もリンクさせる
  let count = [];
  let mes = '';

  const { form, data, addField, unsetField } = createForm({
    initialValues: {
      interests: [{ value: 0 }]
    }
  });
  $: console.log(count);

  $: interests = $data.interests;

  function removeInterest(index) {
    return () => unsetField(`interests.${index}`);
  }

  function addInterest(index) {
    count.push(0);
    return () => addField(`interests`, { value: 0 }, index);
  }
</script>

<form use:form>
  {#each interests as interest, index}
    <div>
      <input name="interests.{index}.value" />
      <p>{count[index]}</p>
      <button on:click={() => (count[index] += 1)}> + </button>
      <button on:click={() => (count[index] -= 1)}> - </button>
      <button type="button" on:click={addInterest(index + 1)}> Add Interest </button>
      <button type="button" on:click={removeInterest(index)}> Remove Interest </button>
    </div>
  {/each}
</form>

<div>
  {mes}
</div>
