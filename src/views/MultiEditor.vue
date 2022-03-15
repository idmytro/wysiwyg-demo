<template>
  <div class="py-1rem bg-light-500 pb-2em">
    <div class="bg-white w-8.5in mx-auto relative | MultiEditor">
      <div
        id="toolbar"
        class="sticky top-0 z-10 bg-white"
      ></div>
      <PageBreaks :height="+h">
        <div
          ref="editor"
          class="pt-0.36in min-h-11in"
        >
          <div class="flex gap-0.10in px-0.59in">
            <div class="w-1/2 flex flex-col">
              <div
                class="
              editor1
              w-full h-0.37in
              !p-0
              !border-2px !border-dashed
              rounded-5px
            "
                :class="[
                  !editor1Overflowed ? '!border-purple8' : '',
                  editor1Overflowed ? '!border-red-500' : '',
                ]"
              >
                <div
                  id="editor1"
                  ref="editor1"
                  @keyup="update1"
                ></div>
              </div>

              <div class="bg-grey1 w-full min-h-1em flex-1 mt-10px rounded-5px"></div>
            </div>

            <div
              class="
                editor2
                w-1/2 h-2.42in
                !p-0
                !border-2px !border-dashed
                rounded-5px
              "
              :class="[
                !editor2Overflowed ? '!border-purple8' : '',
                editor2Overflowed ? '!border-red-500' : '',
              ]"
              @keyup="update2"
            >
              <div
                id="editor2"
                ref="editor2"
                @keyup="update2"
              ></div>
            </div>
          </div>
          <div
            class="
              editor3
              min-h-6.75in mt-0.43in mx-0.59in
              !border-2px !border-dashed
              rounded-5px
            "
            :class="[
              pageCount > MAX_PAGE_COUNT ? '!border-red-500' : '!border-purple8',
            ]"
          >
            <div
              id="editor3"
              ref="editor3"
              @keyup="update3"
            ></div>
          </div>
        </div>
      </PageBreaks>
      <div class="h-0.35in bg-white"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-new */

import Quill from 'quill';

import PageBreaks from '@/components/PageBreaks.vue';
import getUnits from '@/utils/getUnits';

const FIRST_PAGE_HEIGHT = 11;
const PAGE_HEIGHT = 10;
const FIRST_PAGE_DIFF = FIRST_PAGE_HEIGHT - PAGE_HEIGHT;
const MAX_PAGE_COUNT = 6;

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block'],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  [{ direction: 'rtl' }], // text direction

  [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ['clean'], // remove formatting button
];

const quillOptions = {
  modules: {
    toolbar: toolbarOptions,
  },
  theme: 'snow',
};

function getSiblings (elem) {
  // Setup siblings array and get the first sibling
  const siblings = [];
  let sibling = elem.parentNode.firstChild;

  // Loop through each sibling and push to the array
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }

  return siblings;
}

function hideToolbar (toolbarContainer) {
  toolbarContainer.classList.add('hidden');
}

function showToolbar (toolbarContainer) {
  // hide all other toolbars
  const siblings = getSiblings(toolbarContainer).map((elem) => elem.classList.add('hidden'));
  toolbarContainer.classList.remove('hidden');
}

function selectionChange (selection, quill) {
  console.log('selection change', selection, quill);
  const toolbar = quill.getModule('toolbar');
  if (selection == null) {
    hideToolbar(toolbar.container);
    console.log('quill 1 lost focus');
  } else {
    showToolbar(toolbar.container);
  }
}

function initQuill (element, globalToolbarContainer) {
  const quill = new Quill(element, quillOptions);
  quill.on('selection-change', (selection) => selectionChange(selection, quill));
  const toolbar = quill.getModule('toolbar');
  globalToolbarContainer.appendChild(toolbar.container);

  // search for existing toolbar and hide it
  const prevToolbar = toolbar.container.previousElementSibling;
  if (prevToolbar) {
    hideToolbar(prevToolbar);
  }
}

export default {
  components: { PageBreaks },
  data () {
    return {
      MAX_PAGE_COUNT,
      h: 11,
      pageCount: 1,
      editor1Overflowed: false,
      editor2Overflowed: false,
      editor3Overflowed: false,
    };
  },
  mounted () {
    initQuill(document.querySelector('#editor1'), document.querySelector('#toolbar'));
    initQuill(document.querySelector('#editor2'), document.querySelector('#toolbar'));
    initQuill(document.querySelector('#editor3'), document.querySelector('#toolbar'));
  },
  methods: {
    update1 () {
      const lastElement = this.$refs.editor1.firstChild.lastChild;
      this.editor1Overflowed = lastElement.offsetHeight + lastElement.offsetTop > this.$refs.editor1.offsetHeight;
    },
    update2 () {
      const lastElement = this.$refs.editor2.firstChild.lastChild;
      this.editor2Overflowed = lastElement.offsetHeight + lastElement.offsetTop > this.$refs.editor2.offsetHeight;
    },
    update3 () {
      this.h = getUnits(this.$refs.editor, 'height').inch;
      this.pageCount = Math.floor((this.h - FIRST_PAGE_DIFF) / PAGE_HEIGHT) + 1;
    },
  },
};
</script>

<style>
.MultiEditor :focus-visible {
  outline: none;
}

.editor1 .ql-editor,
.editor2 .ql-editor,
.editor3 .ql-editor {
  padding: 0;
  line-height: 1.2;
}

.editor3 .ql-container,
.editor3 .ql-editor {
  min-height: 6.75in;
}

.MultiEditor .ql-container.ql-snow {
  border-color: transparent;
}
</style>
