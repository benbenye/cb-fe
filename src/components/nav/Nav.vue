<template>
  <nav>
    <ul class="www_nav">
      <li><a href="/?src=top-nav-index"><i class="nav-0"></i>首页</a></li>
      <li><a href="/list/main/?src=top-nav-classify"><i class="nav-1"></i>分类</a></li>
      <li><a href="/cookbook/?src=top-nav-cookbook"><i class="nav-2"></i>美食社</a></li>
      <li><a href="/cart/?src=top-nav-shoppingcart"><i class="nav-3"></i>购物车<i class="num" id="AppCartNums" style="display: none;">0</i></a></li>
      <li><a href="/member/?src=top-nav-mychunbo"><i class="nav-4"></i>我的春播</a></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'CbNav',
    data() {
      return {};
    }
  };
</script>

<style lang="less" type="text/less" scoped>
  nav {
    width: 100%;
    height: .5rem;
    background: #f8f8f8;
    position: relative;
    z-index: 10;
    box-shadow: 0 1px 3px rgba(100, 100, 100, 0.3);

    ul {
      display: flex;
    }

    li {
      height: .5rem;
      overflow: hidden;
      flex: 1;
      background: url(https://sstatic.chunboimg.com/m/0.1.0/img/line-v.png) right center no-repeat;
      background-size: .01rem;
      width: 20%;
      &.on {
        background: #E8E8E8;
        margin-left: -1px;
      }
      a {
        display: block;
        width: 100%;
        height: .2rem;
        line-height: .15rem;
        text-align: center;
        padding-top: .3rem;
        font-size: .12rem;
        color: #999999;
        position: relative;
      }
      i {
        display: block;
        width: .18rem;
        height: .18rem;
        position: absolute;
        top: .07rem;
        left: 50%;
        margin-left: -0.09rem;
        background-size: contain;
        &.nav-0 {
          background-image: url(https://sstatic.chunboimg.com/m/0.1.0/img/nav0.png);
        }
        &.nav-1 {
          background-image: url(https://sstatic.chunboimg.com/m/0.1.0/img/nav1.png);
        }
        &.nav-2 {
          background-image: url(https://sstatic.chunboimg.com/m/0.1.0/img/nav2.png);
        }
        &.nav-3 {
          background-image: url(https://sstatic.chunboimg.com/m/0.1.0/img/nav3.png);
          margin-left: -12px;
        }
        &.nav-4 {
          background-image: url(https://sstatic.chunboimg.com/m/0.1.0/img/nav0.png);
        }
        &.num {
          width: 16px;
          height: 16px;
          background: #e75f44;
          color: #fff;
          text-align: center;
          line-height: 16px;
          font-size: .11rem;
          border-radius: 50%;
          top: 0;
          margin: 7px 0 0 12px;
        }
      }
    }
  }

  body.navFixed {
    padding-top: .5rem;
    nav {
      position: fixed;
      top: 0;
      left: 0;
    }
  }
</style>
