/**
 * Created by bby on 18/3/23.
 */
import Vue from 'Vue'
const Toast = new Vue({
  data: {
    visible: false,
    type: 'warn',
    mess: ''
  },
  template: `<div v-show="visible" :class="['toast', type]">
    <i></i>{{mes}}
  </div>`
});
Toast.$on('show', function (option) {

})
export default Toast;