import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import { Plugin as fragment } from 'vue-fragment';

Vue.use(fragment);

// using prototype to not import things every time
//
// https://medium.com/@andrejsabrickis/https-medium-com-andrejsabrickis-create-simple-eventbus-to-communicate-between-vue-js-components-cdc11cd59860
Vue.prototype.$evBus = new Vue();

// "Property '$evBus' does not exist on type 'CombinedVueInstance..'"
// Declared here for easier editing
declare module 'vue/types/vue' {
  interface Vue {
    $evBus: {
      $on: (
        eventName: string,
        callback?: (payload?: any) => void,
      ) => void | Promise<void>;
      $emit: (eventName: string, payload?: any) => void | Promise<void>;
      $off: (
        eventName: string,
        callbackToOff?: Function,
      ) => void | Promise<void>;
    };
  }
}

// import commonly used components located in the components folder, as well
// as the name of which begins with the letter V, and then consider their
// removal, movement and change
//
// https://vuejs.org/v2/guide/components-registration.html#Automatic-Global-Registration-of-Base-Components
const requireComponent = require.context(
  './components',
  false,
  /V[A-Z]\w+\.vue$/,
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()!
        .replace(/\.\w+$/, ''),
    ),
  );
  // make that components global
  Vue.component(componentName, componentConfig.default || componentConfig);
});
