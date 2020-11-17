import Vue from 'vue'
import App from './index.vue'

import ExampleComponent from '../lib/component-example'

import '../lib/theme/index.css'

Vue.use(ExampleComponent)


new Vue({
  render: h => h(App)
}).$mount('#app')