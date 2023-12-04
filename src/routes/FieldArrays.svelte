<script>
  // Felteフォームライブラリをインポート
  import { createForm } from 'felte';

  // FelteのcreateForm関数を使用してフォームの設定を行う
  const { form, data, addField, unsetField } = createForm({
    // フォームの初期値を設定
    initialValues: {
      // interestsフィールドアレイを初期化し、最初の要素に空の文字列を設定
      interests: [{ value: '' }],
    },
  });

  // interestsフィールドアレイをリアクティブ変数として宣言
  $: interests = $data.interests;

  // 指定されたインデックスの興味(interest)を削除する関数
  function removeInterest(index) {
    // unsetFieldを使用してフィールドを削除
    return () => unsetField(`interests.${index}`);
  }

  // 新しい興味(interest)を指定されたインデックスに追加する関数
  function addInterest(index) {
    // addFieldを使用してフィールドを追加
    return () => addField(`interests`, { value: '' }, index);
  }
</script>

<form use:form>
  <!-- {/* interestsフィールドアレイをループ処理 */} -->
  {#each interests as interest, index}
    <div>
      <!-- {/* 各興味(interest)の入力フィールド */} -->
      <input name="interests.{index}.value" />
      <!-- {/* 興味を追加するボタン */} -->
      <button type="button" on:click="{addInterest(index + 1)}">
        Add Interest
      </button>
      <!-- {/* 興味を削除するボタン */} -->
      <button type="button" on:click="{removeInterest(index)}">
        Remove Interest
      </button>
    </div>
  {/each}
</form>
