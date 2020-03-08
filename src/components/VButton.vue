<!-- eslint-disable prettier/prettier -->
<template>
  <button class="button pv2 ph3 fw1 grey nowrap grow relative flex">
    <span class="ph2 pv1 pv0-l f6">Начать путешествие</span>
    <div
      class="
        button__glowing-corner
        button__glowing-corner--bottom-left
      "
    >
      <div
        class="
          button__glowing-corner-side
          button__glowing-corner-side--left
          bg-white
          absolute
          left-0
          bottom-0
          z-2
        "
      ></div>
      <div
        class="
          button__glowing-corner-light
          bg-white
          absolute
          left-0
          bottom-0
          z-1
        "
      ></div>
      <div
        class="
          button__glowing-corner-side
          button__glowing-corner-side--right
          bg-white
          absolute
          left-0
          bottom-0
          z-2
        "
      ></div>
    </div>
    <div
      class="
        button__glowing-corner
        button__glowing-corner--top-right
      "
    >
      <div
        class="
          button__glowing-corner-side
          button__glowing-corner-side--left
          bg-white
          absolute
          left-0
          bottom-0
          z-2
        "
      ></div>
      <div
        class="
          button__glowing-corner-light
          bg-white
          absolute
          left-0
          bottom-0
          z-1
        "
      ></div>
      <div
        class="
          button__glowing-corner-side
          button__glowing-corner-side--right
          bg-white
          absolute
          left-0
          bottom-0
          z-2
        "
      ></div>
    </div>
  </button>
</template>
<!-- eslint-enable -->

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({});
</script>

<style lang="scss">
  .button {
    background-color: rgba(22, 21, 29, 0.5);
    border-style: solid;
    border-width: em(1);
    border-image: linear-gradient(
        to right top,
        #263f66 0%,
        #101f2d 50%,
        #263f66 100%
      )
      1;

    &__glowing-corner {
      position: absolute;
      width: em(5);
      height: em(5);

      &--bottom-left {
        bottom: em(-1);
        left: em(-1);
      }

      &--top-right {
        top: em(-1);
        right: em(-1);
        transform: rotate(180deg);
      }
    }

    &__glowing-corner-side {
      &--left {
        width: em(1);
        height: 100%;
      }

      &--right {
        width: 100%;
        height: em(1);
      }
    }

    &__glowing-corner-light {
      width: em(1);
      height: em(1);
      box-shadow: em(1) em(-1) em(10) em(2) rgba($bg-white, 0.7);
    }
  }
</style>
