<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
  <div id="app">
    <div id="nav">
      <div class="flex bg-green-200 px-10px">
        <router-link
          class="px-10px"
          to="/"
        >
          Home
        </router-link>
        <router-link
          class="px-10px"
          to="/quill"
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
      <div class="flex">
        <router-link
          class="px-10px"
          to="/quill"
        >
          Quill Base Example
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  background-color: rgba(242, 242, 242, var(--tw-bg-opacity));
}
</style>
