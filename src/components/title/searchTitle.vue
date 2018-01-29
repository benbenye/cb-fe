<template>
  <header class="category-header">
    <a href="javascript:{window.history.back();}" class="back"
       style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"></a>
    <a href="#"
       class="search-cancel"
       cbclick="0-51"
       style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1); display: none;">取消</a>
    <div class="search-btn"><span class="serarch-text">搜索春播商品</span></div>
    <div class="search-box"
         style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1); display: none;">
      <input type="text"
             class="search"
             placeholder="搜索春播商品"
             id="search_key"
             style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
    </div>
  </header>
</template>

<script>
  import {ec} from '../../util/index';
  export default {
    name: 'searchTitle',
    components: ec([]),
    data() {
      return {};
    }
  };
</script>

<style scoped lang="less" type="text/less">
  header {
    width: 100%;
    height: .48rem;
    border-bottom: 1px solid #ddd;
    background: #fff;
    position: relative;
    z-index: 11;
    color: #666666;
  }

  header .logo {
    display: block;
    width: 113px;
    height: 29px;
    background: url(https://sstatic.chunboimg.com/m/0.1.0/img/logo.png) no-repeat 0 0;
    -webkit-background-size: contain;
    text-indent: -9999px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -14px 0 0 -57px;
  }

  header .logo span.up {
    position: absolute;
    width: 5px;
    height: 5px;
    border-top: 1px solid #5b5b5b;
    border-right: 1px solid #5b5b5b;
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 50%;
    margin-top: -2px;
    right: -10px;
  }

  header .logo span.down {
    position: absolute;
    width: 5px;
    height: 5px;
    border-top: 1px solid #5b5b5b;
    border-right: 1px solid #5b5b5b;
    -moz-transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    top: 50%;
    margin-top: -6px;
    right: -10px;
  }

  header .cb-list {
    display: none;
    position: absolute;
    right: 0;
    left: 0;
    top: .48rem;
    background: #fff;
    z-index: 111111;
    padding-left: .1rem;
    padding-right: .1rem;
  }

  header .cb-list li {
    border-top: 1px solid #d8d8d8;
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;
  }

  header .cb-list li:first-child {
    border-top: none
  }

  header .cb-list li:after {
    content: "";
    position: absolute;
    right: 0.06rem;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 0.1rem;
    height: 0.1rem;
    border-top: 4px solid #CCC;
    border-right: 4px solid #CCC;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  header .cb-list a {
    display: block;
    padding-left: 20px;
    background-position: 5px 6px;
    background-repeat: no-repeat;
    background-size: 10px;
  }

  header .cb-list a.cb-list-standard {
    background-image: url(https://sstatic.chunboimg.com/m/0.1.0/img/i-cb-list-standard.png);
  }

  header .cb-list a.cb-list-union {
    background-image: url(https://sstatic.chunboimg.com/m/0.1.0/img/i-cb-list-union.png);
  }

  header .cb-list a .cb-list-tit {
    font-size: .16rem;
    color: #333;
  }

  header .cb-list a .cb-list-desc {
    font-size: .12rem;
    color: #999;
  }

  header .search {
    box-sizing: border-box;
    height: .3rem;
    text-align: center;
    font-size: .14rem;
    background: #e8ecef;
    padding: 0 .24rem;
    border: 1px solid #ddd;
    border-radius: 3px;
    background-image: url(https://sstatic.chunboimg.com/m/0.1.0/img/icon-search.png);
    background-repeat: no-repeat;
    background-position: .1rem center;
    background-size: 12px;
  }

  header .search-box {
    position: absolute;
    top: 50%;
    left: .12rem;
    right: .6rem;
    margin-top: -0.15rem;
    display: none;
  }

  header .search-box .icon-del {
    position: absolute;
    width: .24rem;
    height: .3rem;
    right: 0;
    top: 0;
    display: none;
    background-image: url(https://sstatic.chunboimg.com/m/0.1.0/img/icon-search-del.png);
    background-repeat: no-repeat;
    background-size: .12rem;
    background-position: center;
  }

  header .search-box.show {
    display: block;
  }

  header .search-focus {
    text-align: left;
  }

  header .search-act {
    width: .4rem;
    height: 24px;
    position: absolute;
    top: 50%;
    right: .1rem;
    margin-top: -12px;
    text-align: right;
    font-size: .16rem;
    overflow: hidden;
    display: none;
  }

  header .search-btn {
    position: absolute;
    left: .4rem;
    right: .4rem;
    line-height: .5rem;
    text-align: center;
  }

  header .search-btn .serarch-text {
    padding: .05rem .3rem .05rem .5rem;
    background-color: #e8ecef;
    color: #999;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-image: url(https://sstatic.chunboimg.com/m/0.1.0/img/icon-search.png);
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: .3rem;
  }

  header .location {
    position: absolute;
    top: 50%;
    left: .1rem;
    margin-top: -12px;
    font-size: .16rem;
    overflow: hidden;
    line-height: 22px;
  }

  header .search-act-icon {
    width: .4rem;
    height: .48rem;
    position: absolute;
    top: 0;
    right: .1rem;
    background: url(https://sstatic.chunboimg.com/m/0.1.0/img/i-search.png) no-repeat center;
    background-size: 50%;
    text-indent: 9999px;
    text-align: right;
    font-size: .16rem;
    overflow: hidden;
  }

  header .search-cancel,
  header .search-cancel-v {
    width: .4rem;
    height: 24px;
    position: absolute;
    top: 50%;
    right: .1rem;
    font-size: .16rem;
    margin-top: -12px;
    display: none;
    color: #22bc69
  }

  header .search-filter-act,
  header .set-act {
    width: .9rem;
    height: 24px;
    position: absolute;
    top: 50%;
    right: .1rem;
    margin-top: -12px;
    text-align: right;
    font-size: .15rem;
    line-height: 24px;
    font-size: .14rem;
  }

  header .back {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0.4rem;
  }

  header .back:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 0.12rem;
    border-left: 4px solid #c7c7c7;
    border-top: 4px solid #c7c7c7;
    width: 0.12rem;
    height: 0.12rem;
    -webkit-transform: rotate(-45deg);
  }

  header h1 {
    height: .48rem;
    line-height: .48rem;
    overflow: hidden;
    position: absolute;
    left: .4rem;
    right: .4rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .16rem;
  }

  header .link-right {
    width: .9rem;
    height: 24px;
    position: absolute;
    top: 50%;
    right: .1rem;
    margin-top: -12px;
    text-align: right;
    font-size: .15rem;
    line-height: 24px;
    font-size: .14rem;
  }

  .search-res {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #f5f7fa;
    top: .5rem;
    display: none;
    z-index: 11;
  }

  .search-res.do {
    top: 1rem;
  }

  .search-res h5 {
    height: .4rem;
    line-height: .4rem;
    background: #f5f7fa;
    color: #666666;
    text-indent: .1rem;
    position: relative;
    font-size: 12px;
  }

  .search-res h5 .del-search-key {
    position: absolute;
    top: 50%;
    right: .05rem;
    margin-top: -9px;
    width: 18px;
    height: 18px;
    background-image: url(https://sstatic.chunboimg.com/m/0.1.0/img/del.png);
    background-size: contain;
    background-repeat: no-repeat;
  }

  .search-res .search-list {
    padding-left: .05rem;
    padding-right: .05rem;
    padding-bottom: .15rem;
    border-bottom: 1px solid #ddd;
    margin-top: -.1rem;
  }

  .search-res .search-list:last-child {
    border: 0;
  }

  .search-res .search-list li {
    font-size: 14px;
    color: #333333;
    border: 1px solid #ddd;
    position: relative;
    display: inline-block;
    padding: .05rem .12rem;
    margin-left: .06rem;
    margin-right: .06rem;
    background-color: #fff;
    border-radius: 5px;
    margin-top: .1rem;
  }

  .search-res .associational-word {
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    display: none;
  }

  .search-res .associational-word li {
    line-height: .4rem;
    background-image: url(https://sstatic.chunboimg.com/m/0.1.0/img/icon-search.png);
    background-repeat: no-repeat;
    background-position: .22rem center;
    padding-left: .36rem;
    padding-right: .12rem;
    background-size: 12px;
    border-bottom: 1px solid #ddd;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }


</style>
