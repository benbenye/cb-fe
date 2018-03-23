<template>
  <div>
    <app-download :isShowAppDownload.sync="isShowAppDownload"></app-download>
    <index-title></index-title>
    <cb-nav :num="cartInfo.product_nums"></cb-nav>

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
          <img :src="home.data.banners_below_focus.left.img" alt="火热促销">
          <div class="topic-name">好友团</div>
        </a>
      </li>
      <li>
        <a href="http://www.chunbo.com//act/63207?keyStr=index-top-mrys">
          <img :src="home.data.banners_below_focus.center.img" alt="每日知食">
          <div class="topic-name">每日知食</div>
        </a>
      </li>
      <li>
        <a :href="home.data.banners_below_focus.right.link">
          <img :src="home.data.banners_below_focus.right.img" :alt="home.data.banners_below_focus.right.title">
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

    <cb-footer :username="userInfo.nickname"></cb-footer>
  </div>
</template>

<script>
  import {ec, getMemebr} from '../../util/index';
  import {axiosAPI} from '../../util/client-axios';
  import Nav from '../../components/nav/CbNav.vue';
  import BannerImg from '../../components/banner-img/BannerImg.vue';
  import Floor from '../../components/floor/Floor.vue';
  import Item from '../../components/list/Item.vue';
  import IndexTitle from '../../components/title/IndexTitle.vue';
  import Scroll from '../../components/scroll/Scroll.vue';
  import ScrollCard from '../../components/card/scrollCard.vue';
  import AppDownload from '../../components/appDownload/AppDownload.vue';
  import SelectCity from './SelectCity.vue';
  import CbFooter from '../../components/footer/Footer.vue';
  import H5ToWx from '../../components/h5-to-wx/H5ToWx.vue';
  import qs from 'qs'

  export default {
    components: ec([
      Nav, BannerImg, Floor,
      Item, Scroll, ScrollCard,
      IndexTitle, AppDownload, SelectCity,
      CbFooter, H5ToWx
    ]),
    name: 'main',
    data() {
      return {
        home: this.$store.state.homeData,
        isShowAppDownload: true,
        isSelectCity: +this.$route.query.select_city === 1,
        userInfo: {},
        cartInfo: {}
      };
    },
    mounted() {
      getMemebr()
        .then(res => {
          if(res.data.flag === 1){
            this.userInfo = res.data.member_info;
          }
          return axiosAPI.post(`/Cart/GetAppCartNums`)
        })
        .then(res => {
          console.log(res.data)
          if(res.data.flag === 1){
            this.cartInfo = {...res.data};
          }
        });
    },
    asyncData ({store}) {
      return store.dispatch('HOMEDATA_DATA')
    }
  };
</script>

<style lang="less">
  @import "../../common/less/base.less";
  @import "../../common/less/base-style.less";

</style>
