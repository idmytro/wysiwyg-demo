<template>
  <div class="py-1rem bg-light-500 pb-2em">
    <div
      class="bg-white w-8.5in min-h-11in mx-auto"
      :data-style="`height: ${h}in`"
    >
      <PageBreaks :height="+h">
        <div
          id="editor-container"
          ref="editor"
          class="!border-0"
          @keyup="update"
        >
          <p>Hello World!</p>
          <p>Some initial <strong>bold</strong> text</p>
        </div>
      </PageBreaks>
    </div>
  </div>
</template>

<script>
import Quill from 'quill';
import PageBreaks from '@/components/PageBreaks.vue';
import getUnits from '@/utils/getUnits';

export default {
  components: { PageBreaks },
  data () {
    return {
      h: 11,
    };
  },
  mounted () {
    // eslint-disable-next-line no-new
    new Quill('#editor-container', {
      theme: 'snow',
      modules: {
        toolbar: false,
      },
    });
  },
  methods: {
    update () {
      this.h = getUnits(this.$refs.editor, 'height').inch;
    },
  },
};
</script>

<style>
.ql-editor {
  min-height: 11in;
  background-color: #fff;
  padding-left: 50px;
}
</style>
