<template>
  <div class="py-1rem bg-light-500">
    <div class="bg-white w-8.5in min-h-11in mx-auto">
      <div id="editor">
        <p>Hello World!</p>
        <p>Some initial <strong>bold</strong> text</p>
        <p><br></p>
      </div>
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
