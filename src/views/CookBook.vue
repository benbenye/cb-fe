<template>
  <div class="cookbook">
    <cb-title name="美食社"></cb-title>
    <div class="cc">
      <div class="cc-tit">
        <div class="tit">最新美食灵感</div>
        <div class="sub-tit">持续更新，请多关注</div>
      </div>
    </div>
    <div class="cc-caipu-latest">
      <ul class="product_search_list">
        <cb-latest v-for="item in cookbook.data.latest_cookbook.list"></cb-latest>
      </ul>
    </div>
  </div>
</template>

<script>
  import Title from '../components/Title.vue';
  import CookbookListItem from '../components/CookbookListItem.vue';

  export default {
    name: 'cookbook-view',
    components: {
      'cb-title': Title,
      'cb-latest': CookbookListItem
    },

    computed: {
      cookbook () {
        return this.$store.state.cookbook
      }
    },

    asyncData ({store}) {
      return store.dispatch('COOKBOOK_DATA')
    },

    title () {
      return this.cookbook
        ? this.cookbook.id
        : 'User not found'
    }
  }
</script>

<style>
  body {
    background: #fff !important;
    /*font-size:14px;*/
  }

  .cc {
    text-align: center;
    padding-left: .12rem;
    padding-right: .12rem
  }

  .cc .cc-tit {
    margin-top: 0.224rem;
    margin-bottom: 0.096rem;
    font-size: 0.128rem
  }

  .cc .cc-tit:first-child {
    margin-top: .15rem
  }

  .cc .cc-tit .tit {
    font-weight: bold;
    color: #333;
  }

  .cc .cc-tit .sub-tit {
    font-size: 0.096rem;
    color: #999;
  }

  .cc-caipu-list, .cc-cooker-list {
    overflow: hidden;
    margin-left: -.12rem;
    margin-right: -.12rem
  }

  .cc-caipu-list .layer-list, .cc-cooker-list .layer-list {
    margin-left: .12rem;
    margin-right: .12rem
  }

  .cc-caipu-list .layer-list li, .cc-cooker-list .layer-list li {
    height: inherit;
    width: .6rem;
    border-radius: 8px;
    padding-bottom: 0
  }

  .cc-caipu-list .layer-list li img, .cc-cooker-list .layer-list li img {
    width: .6rem;
    height: .6rem
  }

  .cc-cooker-list li img {
    border-radius: 50% !important
  }

  .cc-cooker-list .layer-list li {
    text-align: center;
    border: 0;
    position: relative;
  }

  .cc-cooker-list .layer-list li .dot {
    position: absolute;
    width: 8px;
    height: 8px;
    border: 2px solid #fff;
    border-radius: 50%;
    background: #e4543c;
    top: -2px;
    right: 12px;
  }

  .cc-cooker-list .layer-list li .name {
    font-size: 0.112rem;
    margin-top: 0.048rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    white-space: nowrap;
  }

  .cc-cooker-list .layer-list li .desc {
    font-size: .12rem
  }

  .cc-caipu-list .name {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    line-height: 1.5;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: center
  }

  .cc-caipu-latest {
    margin-top: .1rem;
    padding: 0 .12rem 0.1rem
  }

  .cc-caipu-latest li {
    border-bottom: 1px dashed #ddd;
    margin-bottom: .1rem;
    position: relative;
  }

  .cc-caipu-latest li:last-child {
    border-bottom: 0
  }

  .cc-caipu-latest li .add-favrite {
    position: absolute;
    top: .1rem;
    right: .1rem;
    width: .36rem;
    height: .36rem;
    background-color: #fff;
    border-radius: 50%;
    background-image: url(http://static.chunboimg.com/m/0.1.0/img/cookbook/a.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%
  }

  .cc-caipu-latest li .add-favrite.added {
    background-image: url(http://static.chunboimg.com/m/0.1.0./img/cookbook/b.png)
  }

  .cc-caipu-latest li .top {
    position: relative;
    display: block
  }

  .cc-caipu-latest li .top .ban-big-a {
    display: block;
  }

  .cc-caipu-latest li .top .ban-big {
    width: 100%;
    /*border-radius:4px*/
  }

  .cc-caipu-latest li .top .cooker-a {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
  }

  .cc-caipu-latest li .top .cooker-a .cooker {
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    position: absolute;
    right: .1rem;
    bottom: .1rem;
  }

  .cc-caipu-latest li .top .bottom-desc {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    display: block;
    line-height: 2.5;
    color: #333;
    text-align: right;
  }

  .cooker {
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    position: absolute;
    right: .1rem;
    bottom: .3rem;
    z-index: 10;
  }

  .cc-caipu-latest li .tit {
    font-size: .14rem;
    display: block;
    position: absolute;
    right: 0;
    top: 1.3rem;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    width: 100%;
    line-height: 2.2;
    color: #fff;
    text-align: right;
    padding-right: .9rem;
    box-sizing: border-box;
  }

  .cc-caipu-latest li .desc {
    color: #999;
    font-size: .14rem;
    padding-bottom: .1rem;
    display: block;
  }

  .cc-sort-tit {
    margin-right: .12rem;
    margin-left: .12rem;
    color: #999;
    margin-top: .15rem;
    margin-bottom: .1rem
  }

  .cc-sort-tit:first-child {
    margin-top: .1rem
  }

  .cc-sort-list {
    margin-right: .12rem;
    margin-left: .12rem
  }

  .cc-sort-list li {
    margin-left: 3.5%;
    width: 31%;
    display: inline-block;
    margin-bottom: 3.5%
  }

  .cc-sort-list li:nth-of-type(3n+1) {
    margin-left: 0
  }

  .cc-sort-list li a {
    display: block;
    text-align: center;
    position: relative
  }

  .cc-sort-list li a img {
    border-radius: 8px
  }

  .cc-sort-list li a .name {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    line-height: 2;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff
  }

  .vm {
    vertical-align: middle
  }

  .no-border {
    border: 0 !important
  }

  .cookbook-page {
    background-color: #f5f7fa !important
  }

  .cookbook-page table {
    border-top: 0
  }

  .cookbook-page table td {
    border: 0
  }

  .cookbook-page .btn-favrite {
    display: block;
    width: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    line-height: .36rem;
    text-align: center;
    border-radius: 4px;
    margin-bottom: .12rem
  }

  .cookbook-page .btn-favrite.add {
    background-color: #22bc69;
    color: #fff
  }

  .cookbook-page .btn-favrite.cancel {
    background-color: #e5e5e5;
    color: #666
  }

  .cookbook-page .top-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .cookbook-page .cb-top-tit {
    margin-top: .15rem;
    font-size: 24px;
    text-align: center;
    margin-bottom: .15rem
  }

  .cookbook-page .cb-p-con {
    color: #999;
    padding-left: .15rem;
    padding-right: .15rem;
    text-align: left;
    font-size: 14px;
  }

  .cookbook-page .cb-cooker {
    margin-top: 18px;
    position: relative;
    margin-bottom: 25px;
    padding-bottom: .15rem
  }

  .cookbook-page .cb-cooker a {
    display: block;
    width: 44px;
    margin-right: auto;
    margin-left: auto
  }

  .cookbook-page .cb-cooker:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 50px;
    height: 1px;
    background-color: #eee;
    left: 50%;
    margin-left: -25px
  }

  .cookbook-page .cb-cooker .cooker-avatar {
    border-radius: 50%;
    width: 44px;
    height: 44px;
    margin-bottom: 8px
  }

  .cookbook-page .cb-cooker .cooker-desc {
    color: #3a4146;
    font-size: 14px;
  }

  .cookbook-page .cb-cooker .cooker-more {
    width: 20px;
    height: 20px;
    margin-top: 10px;
    background-size: 100%;
    background-image: url(http://static.chunboimg.com/m/0.1.0/img/cookbook/cook-more.png);
    background-repeat: no-repeat;
    display: block;
    margin-left: auto;
    margin-right: auto
  }

  .cookbook-page .layer {
    border-top: 1px solid #eee
  }

  .cookbook-page .layer.cb-need-food {
    padding-left: 0;
    padding-right: 0
  }

  .cookbook-page .layer.cb-need-food .layer-list2 {
    text-align: left
  }

  .cookbook-page .layer.cb-need-food #alsobuy-wrapper {
    height: inherit
  }

  .cookbook-page .layer.cb-need-food .alsobuy-list li {
    padding-bottom: .34rem
  }

  .cookbook-page .layer.cb-need-food .alsobuy-list li h6 {
    white-space: inherit;
    height: 0.36rem
  }

  .cookbook-page .layer.cb-cooker-desc {
    padding-top: .1rem
  }

  .cookbook-page .layer.cb-cooker-desc .top-img {
    border-radius: 4px
  }

  .cookbook-page .layer .tit {
    font-size: 22px;
    margin-bottom: .1rem;
    margin-top: .15rem;
    font-weight: bold
  }

  .cookbook-page .layer .desc {
    text-align: justify;
    line-height: 1.7;
    margin-bottom: .08rem;
    font-size: .14rem;
  }

  .cookbook-page .cb-detail {
    margin-bottom: .2rem
  }

  .cookbook-page .cb-detail .detail-item {
    width: 33.3333%
  }

  .cookbook-page .cb-detail .detail-item .cb-detail-num .icon {
    width: .14rem;
    height: .14rem;
    background-image: url(http://static.chunboimg.com/m/0.1.0/img/cookbook/cook-time.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    margin-right: 3px
  }

  .cookbook-page .cb-detail .detail-item .cb-detail-num .icon.pot {
    width: inherit;
    background-image: none;
    text-align: left
  }

  .cookbook-page .cb-detail .detail-item .cb-detail-num .icon.pot img {
    margin-right: 2px;
    width: .18rem
  }

  .cookbook-page .cb-detail .cb-detail-tit {
    color: #ccc;
    text-align: center
  }

  .cookbook-page .cb-cook-step {
    padding: 0 .15rem .1rem;
    max-width: 640px;
    margin-left: auto;
    margin-right: auto
  }

  .cookbook-page .cb-cook-step img {
    border-radius: 4px
  }

  .cookbook-page .cb-step-con {
    text-align: left;
    color: #666;
    margin-bottom: 15px
  }

  .cookbook-page .cb-step-img {
    margin-bottom: 10px
  }

  .cookbook-page .cb-step-list-tit {
    margin-top: 15px;
    margin-bottom: 10px
  }

  .cookbook-page .cb-step-list-tit i {
    background-color: #2bbc69;
    color: #fff;
    width: 25px;
    height: 25px;
    line-height: 25px;
    border-radius: 50%
  }

  .cookbook-page .cb-alsolike-cook ul {
    text-align: left
  }

  .cookbook-page .cb-alsolike-cook ul li {
    width: 48%;
    margin-left: 4%;
  }

  .cookbook-page .cb-alsolike-cook ul li:nth-of-type(2n-1) {
    margin-left: 0
  }

  .cookbook-page .cb-alsolike-cook ul li img {
    border-radius: 4px
  }

  .cookbook-page .cb-alsolike-cook ul li .cb-also-like-con {
    font-size: .13rem;
    margin-top: .1rem;
    margin-bottom: .2rem
  }

  .cookbook-page .cb-alsolike-cook ul li .cb-also-like-con .cb-also-like-desc {
    font-size: .12rem;
    color: #999
  }

  .cookbook-page .cb-all-course ul li a {
    display: block;
    margin-bottom: .1rem
  }

  .cookbook-page .cb-all-course ul li a .img-box {
    display: block;
    position: relative
  }

  .cookbook-page .cb-all-course ul li a .img-box img {
    border-radius: 8px
  }

  .cookbook-page .cb-all-course ul li a .img-box .play-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    width: .45rem;
    height: .45rem;
    margin-top: -.225rem;
    margin-left: -.225rem;
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid #fff;
    border-radius: 50%
  }

  .cookbook-page .cb-all-course ul li a .img-box .play-btn .icon-arr {
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(http://static.chunboimg.com/m/0.1.0/img/cookbook/icon-play.png);
    background-repeat: no-repeat;
    background-size: 45%;
    background-position: center
  }

  .cookbook-page .cb-all-course ul li a .name {
    display: block;
    font-size: .14rem;
    padding-top: .1rem;
    padding-bottom: .2rem
  }

  .cookbook-page .cb-all-cookers ul li a {
    display: block;
    margin-top: .1rem;
    margin-bottom: .1rem;
    padding-bottom: .15rem;
    border-bottom: 1px dashed #ddd
  }

  .cookbook-page .cb-all-cookers ul li a img {
    border-radius: 4px
  }

  .cookbook-page .cb-all-cookers ul li a .name {
    display: block;
    font-size: .16rem;
    padding-top: .1rem;
    padding-bottom: .05rem;
    color: #333
  }

  .cookbook-page .cb-all-cookers ul li a .desc {
    display: block;
    font-size: .14rem;
    text-align: center;
    color: #999
  }

  .cookbook .cc-caipu-latest {
    margin-top: .1rem;
    padding: 0 .12rem 0.1rem
  }

  .cookbook .cc-caipu-latest li {
    border-bottom: 1px dashed #ddd;
    margin-bottom: .1rem;
    position: relative;
  }

  .cookbook .cc-caipu-latest li:last-child {
    border-bottom: 0
  }

  .cookbook .cc-caipu-latest li .add-favrite {
    position: absolute;
    top: .1rem;
    right: .1rem;
    width: .36rem;
    height: .36rem;
    background-color: #fff;
    border-radius: 50%;
    background-image: url(http://static.chunboimg.com/m/0.1.0/img/cookbook/a.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%
  }

  .cookbook .cc-caipu-latest li .add-favrite.added {
    background-image: url(http://static.chunboimg.com/m/0.1.0/img/cookbook/b.png)
  }

  .cookbook .cc-caipu-latest li .top {
    position: relative;
    display: block
  }

  .cookbook .cc-caipu-latest li .top .ban-big-a {
    display: block;
  }

  .cookbook .cc-caipu-latest li .top .ban-big {
    width: 100%;
    /*border-radius:4px*/
  }

  .cookbook .cc-caipu-latest li .top .cooker-a {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
  }

  .cookbook .cc-caipu-latest li .top .cooker-a .cooker {
    width: .32rem;
    height: .32rem;
    border-radius: 50%;
    position: absolute;
    right: .1rem;
    bottom: .1rem;
    z-index: 0 !important;
  }

  .cookbook .cc-caipu-latest li .top .bottom-desc {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    display: block;
    line-height: 2.7692;
    color: #fff;
    text-align: right;
    padding-right: 0.48rem;
    font-size: 0.104rem;
  }

  .cookbook .cc-caipu-latest li .tit {
    margin-top: 0.08rem;
    font-size: .12rem;
    display: block;
    position: static;
    background: transparent;
    color: #333;
    padding: 0;
    text-align: left;
    line-height: 1.68;
    font-weight: bold;
  }

  .cookbook .cc-caipu-latest li .desc {
    color: #999;
    font-size: 0.104rem;
    margin-top: 0.048rem;
    line-height: 1.5384;
    padding-bottom: 0.096rem;
    display: block
  }

  .cookbook .cc-sort-tit {
    margin-right: .12rem;
    margin-left: .12rem;
    color: #999;
    margin-top: .15rem;
    margin-bottom: .1rem
  }

  .cookbook .cc-sort-tit:first-child {
    margin-top: .1rem
  }

  .cookbook .cc-sort-list {
    margin-right: .12rem;
    margin-left: .12rem
  }

  .cookbook .cc-sort-list li {
    margin-left: 3.5%;
    width: 31%;
    display: inline-block;
    margin-bottom: 3.5%
  }

  .cookbook .cc-sort-list li:nth-of-type(3n+1) {
    margin-left: 0
  }

  .cookbook .cc-sort-list li a {
    display: block;
    text-align: center;
    position: relative
  }

  .cookbook .cc-sort-list li a img {
    border-radius: 8px
  }

  .cookbook .cc-sort-list li a .name {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    line-height: 2;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff
  }
</style>
