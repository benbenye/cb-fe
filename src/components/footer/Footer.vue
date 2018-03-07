<template>
  <footer class="border-top-1px">
    <div class="footer-tool border-bottom-1px">
      <a href="/Login/index.html" @click="clickMark({clickData: '1-1'})">注册<span>|</span>登录</a>
      <a href="javascript:;" class="toTop" @click="goToTop">回到顶部</a></div>

    <a href="javascript:;" class="on" value="1">触屏版</a>|
    <a href="javascript:;" value="2" @click="switchPlatform">电脑版</a>
    <p class="copyright">Copyright 2016 www.chunbo.com</p>
  </footer>
</template>

<script>
  import Cookie from 'js-cookie';
  import {ec, clickMark} from '../../util/index';
  export default {
    name: 'CbFooter',
    components: ec([]),
    data() {
      return {};
    },
    methods: {
      clickMark: clickMark,
      goToTop: function () {
        window.scrollTo(0, 0);
      },
      switchPlatform: function () {
        Cookie.set('cb_m_chunbo_2','0', {expires: 2, path: '/', domain: ''});
        window.location.reload();
      }
    }
  };
</script>

<style scoped lang="less" type="text/less">
  @import "../../common/less/base-style";
  footer {
    padding: .07rem;
    text-align: center;
    background: #fff;
    margin-top: .1rem;
    font-size: 14/125*1rem;
    a {
      margin: .1rem;
      &.on {
        color: @ColorImTip;
      }
    }
    .footer-tool {
      padding-bottom: .07rem;
      text-align: left;
      margin-bottom: .07rem;
      .toTop {
        float: right;
        margin: 0 .1rem;
      }
    }
  }
</style>
