<template>
  <div>
    <div>TipTap</div>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
/*
https://www.vuescript.com/rich-text-editor-for-vue-js-tiptap/
based on https://prosemirror.net/
*/

import {
  Editor,
  EditorContent,
  // EditorMenuBar,
  // EditorMenuBubble,
  // EditorFloatingMenu,
} from 'tiptap';

export default {
  components: { EditorContent },
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    this.editor = new Editor({
      content: '<p>Default Content Here</p>',
    });
  },
};
</script>
