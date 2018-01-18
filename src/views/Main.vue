<template>
  <div>
    <cb-nav></cb-nav>

    <banner-img
    :link="item.link"
    :imgSrc="item.image"
    :title="item.title"
    v-for="(item, i) in home.data.top_banner_list"
    :key="i">
    </banner-img>

    <ul class="top-topic mb">
      <li>
        <a href="http://www.chunbo.com/tuan/activity/list">
          <img :src="home.data.banners_below_focus.left.img" alt="火热促销" width="111" height="88">
          <div class="topic-name">好友团</div>
        </a>
      </li>
      <li>
        <a href="http://www.chunbo.com//act/63207?keyStr=index-top-mrys">
          <img :src="home.data.banners_below_focus.center.img" alt="每日知食" width="111" height="88">
          <div class="topic-name">每日知食</div>
        </a>
      </li>
      <li>
        <a :href="home.data.banners_below_focus.right.link">
          <img :src="home.data.banners_below_focus.right.img" :alt="home.data.banners_below_focus.right.title"
               width="111" height="88">
          <div class="topic-name">{{home.data.banners_below_focus.right.title}}</div>
        </a>
      </li>
    </ul>

    <template v-for="(item, index) in home.data.roll_list">
      <div class="layer good-recommend border-bottom-1px">
        <h3><span>{{item.title}}</span></h3>
        <div class="layer-sub-desc">{{item.sub_title}}</div>
        <scroll :wrapper="'good-recommend-'+index" :data="item.product_list">
        </scroll>
      </div>
    </template>

    <floor :list_lc="home.data.list_lc"></floor>
  </div>
</template>

<script>
  import {ec} from '../util/index';
  import Nav from '../components/nav/Nav.vue';
  import BannerImg from '../components/banner-img/BannerImg.vue';
  import Floor from '../components/floor/Floor.vue';
  import Item from '../components/list/Item.vue';
  import Scroll from '../components/scroll/Scroll.vue';

  export default {
    components: ec([
      Nav, BannerImg, Floor,
      Item, Scroll
    ]),
    name: 'main',
    data() {
      return {
        home: this.$store.state.homeData
      };
    },
    mounted() {
    },
    asyncData ({store}) {
      return store.dispatch('HOMEDATA_DATA')
    }
  };
</script>

<style scoped lang="less">
  @import "../common/less/base.less";
  @import "../common/less/base-style.less";

</style>
