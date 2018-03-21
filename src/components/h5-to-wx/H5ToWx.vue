<template>
  <section>

    <script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>
    <div id="ss" @click="backToWx">回首页</div>
  </section>
</template>

<script>
  import {ec} from '../../util/index'
  export default {
    name: 'H5ToWx',
    components: ec([]),
    data() {
      return {};
    },
    methods: {
      backToWx: function () {
        alert(navigator.userAgent)
        wx.miniProgram.navigateTo({url: '/pages/index/index'});

      }
    }
  };
</script>

<style scoped lang="less" type="text/less">
  #ss{
    padding: .2rem;
  }
</style>
