<template>
  <section>
    <!--search-->
    <cb-nav></cb-nav>
    <!--slide-->
    <section class="detail-section detail-main">
      <snap
        :data="product_info.product_img"></snap>
      <h1>{{product_info.product_info.name}}</h1>
      <p class="sub">{{product_info.product_info.subname}}</p>
      <template
      v-if="product_info.promotion_list.is_limit_time || product_info.promotion_list.is_pre_sale || product_info.product_detail.expiration_show">
        <!-- 标签 -->
        <div class="tag">
          <i v-if="product_info.promotion_list.is_pre_sale && product_info.promotion_list.is_show_pre_sale_icon"
             class="icon i-xsqg"></i>
          <i v-if="product_info.promotion_list.is_limit_time" class="icon i-ys"></i>
          <span style="color: #ee4b4b;font-size: .12rem;">{{product_info.product_detail.date}}</span>
        </div>
      </template>
      <!--价格-->
      <template v-if="product_info.promotion_list.is_limit_time == 0">
        <p class="price"><b>&yen;{{product_info.product_info.chunbo_price}}</b>
          <span v-if="product_info.product_info.market_price">&yen;{{product_info.product_info.market_price}}</span></p>
      </template>

      <p v-if="product_info.product_coupons" class="datail-couponTip">
        <span></span>{{product_info.product_coupons}}
      </p>
      <!--促销-->
      <p v-if="product_info.promotion_list.is_limit_time == 1" class="price"><em>¥{{product_info.promotion_list.sale_price}}</em><span>¥{{product_info.product_info.chunbo_price}}</span>
      </p>
    </section>
  </section>
</template>

<script>
  import {ec} from '../util/index';
  import CbNav from '../components/nav/Nav.vue';
  import Snap from '../components/scroll/Snap.vue';

  export default {
    name: 'Product',
    components: ec([
      CbNav, Snap
    ]),
    data() {
      return {
        product_id: this.$route.params.id,
        product_info: this.$store.state.productInfo.data
      };
    },
    mounted() {
      console.log(this.product_id)
    },
    asyncData({store, route: {params: {id}}}) {
      return store.dispatch('PRODUCTINFO_DATA', {id})
    }
  };
</script>

<style scoped lang="less" type="text/less">
</style>
