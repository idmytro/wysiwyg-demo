<template>
  <div class="py-1rem bg-light-500 pb-2em">
    <div class="bg-white w-8.5in min-h-11in mx-auto">
      <div
        id="toolbar"
        class="sticky"
      >
        123
      </div>
      <div
        ref="editor"
        class="min-h-1em"
      ></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-new */

import Quill from 'quill';

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

initQuill(document.querySelector('#editor'), document.querySelector('#toolbar'));
initQuill(document.querySelector('#editor2'), document.querySelector('#toolbar'));
initQuill(document.querySelector('#editor3'), document.querySelector('#toolbar'));
initQuill(document.querySelector('#editor4'), document.querySelector('#toolbar'));
initQuill(document.querySelector('#editor5'), document.querySelector('#toolbar'));
initQuill(document.querySelector('#editor6'), document.querySelector('#toolbar'));

export default {
  components: { },
  data () {
    return {
      // h: 11,
    };
  },
  mounted () {
    // new Quill('#editor-container', {
    new Quill(this.$refs.editor, {
      theme: 'snow',
      modules: {
        toolbar: false,
      },
    });
  },
  methods: {
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
