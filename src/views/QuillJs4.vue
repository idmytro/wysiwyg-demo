<!--
https://github.com/quilljs/webpack-example
-->

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
      <div id="toolbar-container">
        <span class="ql-formats">
          <select class="ql-size">
            <option value="10px">Small</option>
            <option selected>Normal</option>
            <option value="18px">Large</option>
            <option value="32px">Huge</option>
          </select>
        </span>
        <span class="ql-formats">
          <select class="ql-font">
            <option selected>Helvetica</option>
            <option value="roboto">Roboto</option>
            <option value="ubuntu">Ubuntu</option>
          </select>
        </span>
        <span class="ql-formats">
          <select class="ql-color">
            <option selected></option>
            <option value="red"></option>
            <option value="orange"></option>
            <option value="yellow"></option>
            <option value="green"></option>
            <option value="blue"></option>
            <option value="purple"></option>
          </select>
          <select class="ql-background">
            <option selected></option>
            <option value="red"></option>
            <option value="orange"></option>
            <option value="yellow"></option>
            <option value="green"></option>
            <option value="blue"></option>
            <option value="purple"></option>
          </select>
        </span>
      </div>
      <div id="editor-container">
        <p>Quill uses classes for most inline styles.</p>
        <p><br></p>
        <p>The exception is <span class="ql-bg-yellow">background</span> and <span class="ql-color-purple">color</span>,</p>
        <p>where it uses inline styles.</p>
        <p><br></p>
        <p>This <span style="font-size: 18px">demo</span> shows how to <span style="font-size: 32px">change</span> this.</p>
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

const BackgroundClass = Quill.import('attributors/class/background');
const ColorClass = Quill.import('attributors/class/color');
const SizeStyle = Quill.import('attributors/style/size');
Quill.register(BackgroundClass, true);
Quill.register(ColorClass, true);
Quill.register(SizeStyle, true);

const FontAttributor = Quill.import('attributors/class/font');
FontAttributor.whitelist = [
  'roboto', 'ubuntu',
];
Quill.register(FontAttributor, true);

/* https://quilljs.com/guides/why-quill/ */

export default {
  mounted () {
    const quill = new Quill('#editor-container', {
      modules: {
        toolbar: '#toolbar-container',
      },
      placeholder: 'Compose an epic...',
      theme: 'snow',
    });
  },
};
</script>

<style>
.ql-font-roboto {
  font-family: 'Roboto', sans-serif;
}
.ql-font-ubuntu {
  font-family: 'Ubuntu', sans-serif;
}
</style>
