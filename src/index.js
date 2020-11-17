import Vue from 'vue'
import App from './index.vue'

import ExampleComponent from '../lib/component-example'

Vue.use(ExampleComponent)


new Vue({
  render: h => h(App)
}).$mount('#app')