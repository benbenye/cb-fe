/**
 * Created by bby on 17/6/1.
 */
import Vue from 'vue';

const ToastConstructor = Vue.extend(require('./main.vue'));

let instance;

const Toast = function s(options) {
// eslint-disable-next-line no-param-reassign
  options = options || {};

  instance = new ToastConstructor({
    data: options
  });
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.init(options);
  return instance.vm;
};

export default Toast;
