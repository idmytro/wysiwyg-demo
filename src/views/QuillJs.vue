<template>
  <div>
    <div id="editor">
      <p>Hello World!</p>
      <p>Some initial <strong>bold</strong> text</p>
      <p><br></p>
    </div>
  </div>
</template>

<script>
const { Quill } = window;

export default {
  mounted () {
    const quill = new Quill('#editor', {
      theme: 'snow',
    });
  },
};
</script>
