/**
 * Created by bby on 18/3/23.
 */
import Toast from './src/main.vue';
Toast.install = Vue => {
  Vue.component(Toast.name, Toast)
}

export default Toast;
