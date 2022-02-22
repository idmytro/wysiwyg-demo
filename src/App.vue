<!--
https://github.com/quilljs/webpack-example
-->

<template>
  <div id="app">
    <div
      id="nav"
      class="nav"
    >
      <div class="nav-level1 | flex px-10px">
        <!-- <router-link
          class="px-10px"
          to="/"
        >
          Home
        </router-link> -->
        <router-link
          class="px-10px"
          :class="$route.name.match('Quill') && 'router-link-exact-active'"
          :to="{name: 'Quill'}"
        >
          Quill
        </router-link>
        <router-link
          class="px-10px"
          to="/editor-js"
        >
          Editor.js
        </router-link>
        <router-link
          class="px-10px"
          to="/letter"
        >
          Letter
        </router-link>

      <!-- <router-link to="/tiptap">TipTap</router-link> | -->
      <!-- <router-link to="/fos">FosPublisher</router-link> -->
      </div>
      <div
        v-if="$route.name.match('Quill')"
        class="nav-level2 | flex px-20px"
      >
        <router-link
          class="px-10px"
          :to="{name: 'Quill'}"
        >
          Base Example
        </router-link>
        <router-link
          class="px-10px"
          :to="{name: 'Quill2'}"
        >
          Sizes & Colors
        </router-link>
        <router-link
          class="px-10px"
          :to="{name: 'Quill3'}"
        >
          + Fonts
        </router-link>
        <router-link
          class="px-10px"
          :to="{name: 'Quill4'}"
        >
          4
        </router-link>
      </div>
      <div
        v-else
        class="h-5px bg-gray-300"
      ></div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nav a {
  @apply text-gray-700 font-bold;
}

.nav-level1 {
  @apply bg-gray-400 border-gray-400 border-t-5px;
}

.nav .router-link-exact-active {
  @apply bg-gray-300;
}

.nav-level2 {
  @apply bg-gray-300 border-gray-300 border-t-5px;
}

.nav-level2  .router-link-exact-active {
  @apply bg-light-500;
}
</style>
