<!-- eslint-disable prettier/prettier -->
<template>
  <div
    class="
      background absolute w-100 h-100 top-0 left-0
    "
  >
    <div class="background__inner flex items-center">
      <div class="background__mars-overlay relative">
        <div class="background__body">
          <slot></slot>
        </div>
        <img
          src="@/assets/img/background/mars-overlay.png"
          alt="Mars"
          class="background__image"
        >
        <div
          class="
            background__start-journey absolute pl3 pl4-ns dn flex-l justify-end
          "
        >
          <div
            class="
              background__start-journey-inner
              flex
              items-start
            "
          >
            <VButton class="background__start-journey-button dn flex-ns">
              <span class="ph2 f6">Начать путешествие</span>
            </VButton>
            <div
              class="
                background__rocket-pointer
                flex-auto
                dn
                flex-m
                flex-l
                items-center
              "
            >
              <div
                class="
                  background__rocket-pointer-guide-item
                  background__rocket-pointer-guide-item--angle
                  br-100
                  br--right
                "
              ></div>
              <div
                class="
                  background__rocket-pointer-guide-item
                  background__rocket-pointer-guide-item--line
                  flex-auto
                  br-100
                  br--left
                "
              ></div>
              <span
                class="
                  background__rocket-pointer-dot ba b--white br-100
                "
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-enable -->

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      isMarsTextOverlayExist: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
  });
</script>

<style lang="scss">
  .background {
    &__inner {
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
      min-width: em(1920);
      height: 100%;
      min-height: em(660);
      background: #121822 center / cover no-repeat
        url('~@/assets/img/background/background.jpg');
      transform: translateX(-50%);
    }

    &__mars-overlay {
      width: 100%;
      height: (387 / 660 * 100) + 0%;
    }

    &__body {
      position: fixed;
      top: 0;
      left: 50%;
      width: 100vw;
      height: 100%;
      min-height: 34em;
      transform: translateX(-50%);
    }

    &__image {
      position: absolute;
      top: 0;
      left: 50%;
      z-index: 1;
      width: auto;
      height: 100%;
      transform: translateX(-50%);

      @include break(mars) {
        z-index: -1;
      }
    }

    &__start-journey {
      right: 50%;
      bottom: 19%;
      width: 50vw;
    }

    &__start-journey-inner {
      width: 100%;
      max-width: em($mw-page / 2);
    }

    &__rocket-pointer {
      position: relative;
      margin: em(57) em(3) 0 em(-4);
    }

    &__rocket-pointer-guide-item {
      height: em(1);

      &--angle {
        width: em(81);
        background-image: linear-gradient(
          to right,
          rgba($bg-white, 0) 0%,
          rgba($bg-white, 0.19) 100%
        );
        transform: rotate(30deg);
        transform-origin: bottom right;
      }

      &--line {
        background-image: linear-gradient(
          to right,
          rgba($bg-white, 0.19) 0%,
          $bg-white 100%
        );
      }
    }

    &__rocket-pointer-dot {
      position: absolute;
      top: 50%;
      left: calc(100%);
      width: em(4);
      height: em(4);
      transform: translateY(-50%);
    }
  }
</style>
