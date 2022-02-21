<template>
  <div>
    <Editor
      @updateContent="(val) => (content = val)"
      :content="content"
      :style-object="styleObject"
    >
      <div>Hello!</div>
    </Editor>
  </div>
</template>

<script>
/* https://github.com/fospublisher201/fospublisher-vue-text-editor */

import Editor from 'fospublisher-vue-text-editor';

export default {
  data() {
    return {
      content: '',
      styleObject: {
        editorWidth: {},
        toolButton: {},
        toolButtonText: {},
        dropdownButton: {},
        modalButton: {},
        modalContent: {},
        modalTextInput: {},
        colorPickerButton: {},
        tooltip: {},
      },
    };
  },
  components: {
    Editor,
  },
};
</script>
