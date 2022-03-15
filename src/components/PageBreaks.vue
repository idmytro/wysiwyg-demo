<template>
  <div class="relative">
    <slot></slot>
    <div
      v-for="n in breaksCount"
      :key="n"
      class="pointer-events-none absolute left-0 right-0 text-grey4 text-10px leading-1.5em"
      :style="style(n)"
    >
      <span class="flex">
        <span class="border-dashed border-t border-grey3 w-50px"></span>
        <span class="border-dashed border-t border-grey3 opacity-50 flex-1"></span>
      </span>
      <span
        class="pl-5px absolute -top-1.5em"
        :class="n > MAX_PAGE_COUNT ? 'text-red-500' : ''"
      >PAGE {{ n }}</span>
      <span
        class="pl-5px"
        :class="n + 1 > MAX_PAGE_COUNT ? 'text-red-500' : ''"
      >PAGE {{ n + 1 }}</span>
    </div>
  </div>
</template>

<script>
const FIRST_PAGE_HEIGHT = 11;
const PAGE_HEIGHT = 10;
const FIRST_PAGE_DIFF = FIRST_PAGE_HEIGHT - PAGE_HEIGHT;
const MAX_PAGE_COUNT = 6;

export default {
  props: {
    height: {
      type: Number,
      required: true,
    },
  },
  data () {
    return {
      MAX_PAGE_COUNT,
    };
  },
  computed: {
    breaksCount () {
      return Math.floor((this.height - FIRST_PAGE_DIFF) / PAGE_HEIGHT);
    },
  },
  methods: {
    style (n) {
      let value = FIRST_PAGE_HEIGHT;
      if (n > 1) value = FIRST_PAGE_DIFF + n * PAGE_HEIGHT;
      return `top: ${value}in`;
    },
  },
};
</script>
