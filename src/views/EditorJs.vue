<template>
  <div>
    <h1>EditorJS</h1>
    <div id="editorjs"></div>
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
