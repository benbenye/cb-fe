/**
 * Created by bby on 18/2/8.
 */
import Vue from 'vue';

const ToastConstructor = Vue.extend(require('./main.vue'));

let instance;

const Dialog = (options) => {
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

export default Dialog;
