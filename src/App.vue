<template>
  <div id="app">
    <vue-find-memo></vue-find-memo>
    <vue-create-memo></vue-create-memo>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);
Vue.use(VueRouter);

import VueFindMemo from "./components/VueFindMemo.vue";
import VueCreateMemo from "./components/VueCreateMemo.vue";
import VueRegisterMemo from "./components/VueRegisterMemo.vue";
import VueUpdateMemo from "./components/VueUpdateMemo.vue";

export default {
  name: "app",
  methods: {
    changePageUpdatePage: function(memo_registered_id) {}
  },
  router: new VueRouter({
    routes: [
      { path: "/", component: VueRegisterMemo },
      { path: "/create", component: VueRegisterMemo },
      { path: "/update/:id", component: VueUpdateMemo }
    ]
  }),
  components: {
    VueFindMemo,
    VueCreateMemo
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
