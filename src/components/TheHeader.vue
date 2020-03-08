<!-- eslint-disable prettier/prettier -->
<template>
  <!--
    using fragment here because if menu is child of header, it will not overlap
    his parent, but if we extract menu from header we will need to use event bus
    to toggle menu from button in header, so it's most simple solution
  -->
  <fragment>
    <header
      class="
        header absolute top-0 left-0 w-100 z-1 ph3 ph4-ns bt-ns bb b--grey
      "
    >
      <div
        class="header__inner mw-page center flex items-center justify-between"
      >
        <div class="header__logo relative">
          <div class="header__logo-overlap-border">
            <div
              class="
                header__logo-corner
                absolute
                top-0
                left-0
                bl
                bt
                b--white
                dn
                db-ns
              "
            ></div>
            <div
              class="
                header__logo-corner
                absolute
                top-0
                right-0
                bt
                br
                b--white
                dn
                db-ns
              "
            ></div>
            <div
              class="
                header__logo-corner
                absolute
                bottom-0
                right-0
                br
                bb
                b--white
                dn
                db-ns
              "
            ></div>
            <div
              class="
                header__logo-corner
                absolute
                bottom-0
                left-0
                bb
                bl
                b--white
                dn
                db-ns
              "
            ></div>
            <a
              href="#"
              class="header__logo flex items-center"
              @click.prevent
            >
              <div class="header__logo-image">
                <img
                  src="@/assets/img/logo.png"
                  alt="Space x logo"
                  class="h-100"
                >
              </div>
            </a>
          </div>
        </div>
        <div class="header__right dn flex-l">
          <ul class="header__menu list flex items-center fw1">
            <li class="header__menu-item relative db">
              <a
                href="#"
                class="header__menu-item-link flex items-center"
                @click.prevent
              >
                Главная
              </a>
              <span class="header__menu-item-underline-animated"></span>
            </li>
            <li class="header__menu-item relative ml4 db">
              <a
                href="#"
                class="header__menu-item-link flex items-center"
                @click.prevent
              >
                Технология
              </a>
              <span class="header__menu-item-underline-animated"></span>
            </li>
            <li class="header__menu-item relative ml4 db">
              <a
                href="#"
                class="header__menu-item-link flex items-center"
                @click.prevent
              >
                График полетов
              </a>
              <span class="header__menu-item-underline-animated"></span>
            </li>
            <li class="header__menu-item relative ml4 db">
              <a
                href="#"
                class="header__menu-item-link flex items-center"
                @click.prevent
              >
                Гарантии
              </a>
              <span class="header__menu-item-underline-animated"></span>
            </li>
            <li class="header__menu-item relative ml4 db">
              <a
                href="#"
                class="header__menu-item-link flex items-center"
                @click.prevent
              >
                О компании
              </a>
              <span class="header__menu-item-underline-animated"></span>
            </li>
          </ul>
        </div>
        <button
          class="
            header__toggle-menu-btn
            flex
            hide-l
            pa2
            items-center
            justify-center
          "
          @click="openMenu"
        >
          <VIcon
            class="w2"
            :href="'menu'"
          />
        </button>
      </div>
    </header>
    <TheMenu :class="{ opened: isMenuOpened }" />
  </fragment>
</template>
<!-- eslint-enable -->

<script lang="ts">
  import Vue from 'vue';
  import TheMenu from './TheMenu';

  interface Data {
    isMenuOpened: boolean;
  }

  const data: Data = {
    isMenuOpened: false,
  };

  export default Vue.extend({
    components: {
      TheMenu,
    },
    data() {
      return data;
    },
    mounted() {
      this.$evBus.$on('close-menu', () => {
        this.toggleMenu();
        this.$evBus.$emit('toggle-page-noscroll');
      });
    },
    methods: {
      openMenu() {
        this.$evBus.$emit('toggle-page-noscroll');
        this.toggleMenu();
      },
      toggleMenu() {
        this.isMenuOpened = !this.isMenuOpened;
      },
    },
  });
</script>

<style lang="scss">
  .header {
    background-color: rgba(21, 10, 1, 0.21);

    &__logo {
      width: em(255);
      height: em(75);

      @include break(ns) {
        width: em(316);
        height: em(100);
      }
    }

    &__logo-overlap-border {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: calc(100% + #{em(2)});
      transform: translateY(-50%);
    }

    &__logo-corner {
      width: em(7);
      height: em(7);
    }

    &__logo-image {
      position: relative;
      width: 100%;
      height: em(19);

      @include break(ns) {
        height: em(22);
      }

      > img {
        position: absolute;
        bottom: 0;
        left: 50%;
        height: 159%;
        transform: translateX(-50%);
      }
    }

    &__menu-item-link {
      opacity: 1;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.7;
        transition: opacity 0.3s;
      }
    }

    &__menu-item-underline-animated {
      position: absolute;
      bottom: em(-11);
      left: 0;
      display: block;
      width: 100%;
      height: em(1);
      color: #3d3d3d;
      background-color: currentColor;
      transform: scaleX(0);
      transition: transform 0.3s;
      will-change: transform;

      @at-root .header__menu-item:hover > & {
        transform: scaleX(1);
        transition: transform 0.3;
        will-change: transform;
      }
    }
  }
</style>
