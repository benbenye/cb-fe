<template>
  <div>
    <index-title></index-title>
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

    <scroll-card
      v-for="(item, index) in home.data.roll_list"
      :key="index"
      :rollData="item"
      :index="index"
    >
    </scroll-card>

    <floor :list_lc="home.data.list_lc"></floor>
  </div>
</template>

<script>
  import {ec} from '../../util/index';
  import Nav from '../../components/nav/CbNav.vue';
  import BannerImg from '../../components/banner-img/BannerImg.vue';
  import Floor from '../../components/floor/Floor.vue';
  import Item from '../../components/list/Item.vue';
  import IndexTitle from '../../components/title/IndexTitle.vue';
  import Scroll from '../../components/scroll/Scroll.vue';
  import ScrollCard from '../../components/card/scrollCard.vue';

  export default {
    components: ec([
      Nav, BannerImg, Floor,
      Item, Scroll, ScrollCard,
      IndexTitle
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
  @import "../../common/less/base.less";
  @import "../../common/less/base-style.less";
  
</style>
