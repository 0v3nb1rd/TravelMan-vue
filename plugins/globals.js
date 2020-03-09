import Vue from 'vue'
import VueMarkdown from 'vue-markdown-v2'

import DataFilter from '@/common/date.filter'

Vue.component('vue-markdown', VueMarkdown)
Vue.filter('date', DataFilter)
