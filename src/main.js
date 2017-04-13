import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

new Vue({
  el: '#page',
  render: h => h(App)
})
