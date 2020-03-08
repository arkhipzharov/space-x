<!--
  prettier is conflicting with vue/max-attributes-per-line, and there's only 2
  ways to fix this, either configure prettier to wrap all atributes in one line
  up to 80 characters ruler

  https://github.com/prettier/eslint-plugin-prettier/issues/94#issuecomment-438781791

  or write these 2 special comments to disable prettier eslint integration for
  <template> tag

  https://github.com/vuejs/eslint-plugin-vue/issues/260#issuecomment-445791801
-->
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="app">
    <TheHeader />
    <TheBackground>
      <TheMain />
    </TheBackground>
  </div>
</template>
<!-- eslint-enable -->

<script lang="ts">
  import Vue from 'vue';
  import TheBackground from './TheBackground';
  import TheHeader from './TheHeader';
  import TheMain from './TheMain';

  export default Vue.extend({
    components: {
      TheBackground,
      TheHeader,
      TheMain,
    },
    mounted() {
      this.$evBus.$on('toggle-page-noscroll', () => {
        document.documentElement
          .querySelector('body')!
          .classList.toggle('noscroll');
      });
    },
  });
</script>

<style lang="scss">
  html {
    height: 100%;
  }

  body {
    min-width: em(320);
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    color: $text-white;
    font-family: $font-museo;

    &.noscroll {
      overflow-y: hidden;
    }
  }

  .app {
    height: 100%;
  }
</style>
