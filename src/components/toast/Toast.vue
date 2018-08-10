<template>
  <div v-show="visible" :class="['toast', type]">
    <i></i>{{mes}}
  </div>
</template>

<script>
  import {ec} from '../../util/index'
  export default {
    name: 'Toast',
    components: ec([]),
    props: {
      type: {required: true},
      mes: {required: true, default: '系统异常，刷新重试'},
      time: {
        default: 3000
      },
      visible: {required: true}
    },
    data() {
      return {
        timer: null
      };
    },
    mounted() {

    },
    watch: {
      visible: function () {
        if(this.visible) {
          this.timer = setTimeout(() => {
            this.$emit('update:visible', false)
            clearTimeout(this.timer)
          }, this.time)
        }
      }
    }
  };

</script>

<style scoped lang="less" type="text/less">
  .toast {
    width: 1.5rem;
    min-height: .8rem;
    background: rgba(0, 0, 0, 0.8);
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: .1rem;
    margin: -0.4rem 0 0 -0.75rem;
    z-index: 9090;
    color: #fff;
    font-size: .13rem;
    padding-bottom: .1rem;
    i {
      width: .32rem;
      height: .32rem;
      display: block;
      margin: .1rem auto;
      background-size: contain;
      background-repeat: no-repeat;
    }
    &.succ i {
      background-image: url(https://sstatic.chunboimg.com/m/0.1.0/img/alert-succ.png);
    }

    &.warn i {
      background-image: url(https://sstatic.chunboimg.com/m/0.1.0/img/alert-warn.png);
    }
  }
</style>
