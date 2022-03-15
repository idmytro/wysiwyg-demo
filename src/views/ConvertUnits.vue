<template>
  <div class="mx-auto w-800px py-1em ">
    <div class="bg-yellow-100 flex gap-10px p-10px">
      <input
        v-model="px"
        type="number"
        @input="changePx"
      >
      <span>px</span>
      <input
        v-model="inch"
        type="number"
        @input="changeIn"
      >
      <span>in</span>
    </div>
  </div>
</template>

<script>
const PX_IN_RATIO = 921 / 8.5;
const IN_PX_RATIO = 1 / PX_IN_RATIO;

export default {
  data () {
    return {
      inch: 0,
      px: 0,
    };
  },
  methods: {
    changeIn (e) {
      const v = +e.target.value;
      this.px = Math.floor(v * PX_IN_RATIO);
    },
    changePx (e) {
      const v = +e.target.value;
      this.inch = v * IN_PX_RATIO;
    },
  },
};
</script>
