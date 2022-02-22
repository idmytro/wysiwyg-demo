<!--
### Features

**Нужны:**

+ Bold
? Strikethrough
+ Underline
+ Italic
+ Bullet points
+ Numbered list
- Font
- Type
- Colour
- Add image
- Add simple table

**Желательно:**

- Line height
- Undo
- Re-do
- Full screen
-->

<template>
  <div class="py-1rem bg-light-500">
    <div class="bg-white w-8.5in min-h-11in mx-auto">
      <div id="editor-container">
        <p>Hello World!</p>
        <p>Some initial <strong>bold</strong> text</p>
        <p><br></p>
      </div>
    </div>
  </div>
</template>

<!--
https://quilljs.com/playground/#class-vs-inline-style

var BackgroundClass = Quill.import('attributors/class/background');
var ColorClass = Quill.import('attributors/class/color');
var SizeStyle = Quill.import('attributors/style/size');
Quill.register(BackgroundClass, true);
Quill.register(ColorClass, true);
Quill.register(SizeStyle, true);

var quill = new Quill('#editor-container', {
  modules: {
    toolbar: '#toolbar-container'
  },
  placeholder: 'Compose an epic...',
  theme: 'snow'
});

-->

<script>
const { Quill } = window;
const ColorClass = Quill.import('attributors/class/color');
const SizeStyle = Quill.import('attributors/style/size');
Quill.register(ColorClass, true);
Quill.register(SizeStyle, true);

/* https://quilljs.com/guides/why-quill/ */

export default {
  mounted () {
    const quill = new Quill('#editor-container', {
      theme: 'snow',
      modules: {
        toolbar: true,
        // toolbar: '#toolbar-container',
      },
    });
  },
};
</script>
