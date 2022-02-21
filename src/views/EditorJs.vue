<template>
  <div class="py-1rem bg-light-500">
    <div class="bg-white w-8.5in min-h-11in mx-auto">
      <div id="editorjs"></div>
    </div>
  </div>
</template>

<script>
import EditorJS from '@editorjs/editorjs';

export default {
  mounted () {
    const editor = new EditorJS();
    console.log(editor);
  },
};
</script>

<style>
.ce-block__content,
.ce-toolbar__content {
  max-width: 700px;
}
</style>
