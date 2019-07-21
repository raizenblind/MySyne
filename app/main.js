import Vue from 'nativescript-vue'
import Main from './components/Login'
import store from './store';

import VueDevtools from 'nativescript-vue-devtools'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)
Vue.registerElement('Gif', () => require('nativescript-gif').Gif)
Vue.registerElement('Toast', () => require('nativescript-toast').Toast)
require( "nativescript-localstorage" );
new Vue({
  store,
  render: h => h('frame', [h(Main)])
}).$start()
