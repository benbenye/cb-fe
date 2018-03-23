<template>
  <transition name="fade" v-if="visible">
    <div class="alert alert-warn" v-if="type == 'warn'"><i></i>{{info}}</div>
    <div class="alert alert-succ" v-else-if="type == 'succ'"><i></i>{{info}}</div>
  </transition>
</template>

<script>
  export default {
    name: 'Toast',
    data() {
      return {
        type: '',
        info: '',
        visible: false
      };
    },
    watch: {
      visible: function s() {
        if (this.visible) {
          setTimeout(() => {
            this.visible = false;
          }, 3000);
        }
      }
    },
    methods: {
      init(options) {
        this.type = options.type;
        this.info = options.info;
        this.visible = true;
      }
    }
  };
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .alert {
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
  }

  .alert i {
    width: .32rem;
    height: .32rem;
    display: block;
    margin: .1rem auto;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .alert-succ i {
    background-image: url(https://sstatic.chunboimg.com/m/0.1.0/img/alert-succ.png);
  }

  .alert-warn i {
    background-image: url(https://sstatic.chunboimg.com/m/0.1.0/img/alert-warn.png);
  }

  .alert-none {
    display: none;
  }

</style>

