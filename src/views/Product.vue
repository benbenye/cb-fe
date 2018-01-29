<template>
  <section>
    <!--search-->
    <search-title></search-title>
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
          <span style="color: #ee4b4b;font-size: .12rem;" v-if="product_info.product_info.exp_warning">{{product_info.product_info.exp_warning}}</span>
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
    <section class="detail-section">
      <template v-if="product_info.gift_list">
        <!-- start赠品 -->
        <div v-for="(item, index) in product_info.gift_list"
             class="detail-gift"
             :key="index">
          <span class="num">×{{item.gift_give_num}}</span>
          促销：<i class="i-txticon-red">赠</i>
          <a :href="'/product/'+item.gift_pid+'/is_hide_gift/1'"
             v-if="item.is_sale == 1"
             target="_blank">
            {{item.name}}
          </a>
          <template v-else>{{item.name}}</template>
        </div>
      </template>
      <div class="detail-express address" v-if="0">
        <!--配送区域 begin-->
        <p id="NoProductAddress">
          请选择详细地址
          <b class="goods" v-if="stock_count > 0">
            有货
          </b>
          <b class="goods" v-else>
            无货
          </b>
        </p>
        <div style="display: none" id="ProductAddress">
          <p><span class="add">配送至：<span class="text">北京>朝阳区>三环以内 </span></span><b class="goods stockNum"></b></p>
          <p id="detail_address"><b class="date">7天</b>可送达，请在<b class="date">3小时45分钟</b>内下单</p>
          <i class="more"></i>
        </div>
      </div>
      <div class="detaail-express-tip" v-if="0">
        <p>{{pre_description}}</p>
        <i></i>
      </div>

      <div class="detail-buy">
        数量：
        <div class="copies">
          <a class="icon-minus" id="down_p_count" cbclick="10-48">-</a>
          <input id="product_count" type="text" value="1"/>
          <a class="icon-plus" id="up_p_count" cbclick="10-47">+</a>
        </div>
        <a class="btn-red"
           id="add_cart"
           cbclick="10-7"
           :data-pid="product_id">
          加入购物车</a>
        <a id="no_stock_div" class="btn-red btn-disable" style="display:none;">抢空了，马上回来</a>
      </div>
    </section>


    <!--安心度 begin-->
    <section v-if="product_info.product_quality" class="detail-section mb topborder anxin-m">
      <div class="anxin-tit">
        <span class="anxin-tit-left">安心： </span>
        <div class="anxin-info">{$AnExplain}</div>
      </div>
      <div id="anxin-m">
        <ul class="anxin-list">
          <li v-for="(item, index) in product_info.product_quality" :key="index">
            <a v-if="item.certificationType"
               :href="item.act_url" cbclick="10-57">
              <img :src="item.tag_icon"/>
              <p>{{item.name}}</p>
            </a>
            <a else
               href="javascript:void(0)"
               cbclick="10-57">
              <img :src="item.tag_icon" :data-img-list="item.img_list"/>
              <p>{{item.name}}</p>
            </a>
          </li>
        </ul>
      </div>
    </section>


    <section class="detail-section mb topborder recommend-buyer ">
      <h2>- 买手推荐 -</h2>
      <p class="recommend-text"><span>{{product_info.mstj.breason}}</span></p>

      <a href="#" class="detail-showmore-act topborder">
        <h3>产品详情
          <small>(建议在WiFi环境下打开)</small>
        </h3>
        <p class="sub">图文展示产品优点、营养成分及食用方法</p>
        <i class="more"></i>
      </a>
      <div class="detail-info-more topborder" style="display: block;">
        <h2>- 我的优点 -</h2>
        <div class="detail-info-box">
          <ul class="detail-info-pop">
            <li v-for="i in 3"><span>{{product_info.mstj['about'+i]}}</span></li>
          </ul>

          <img v-for="(item, index) in product_info.mstj.tpic700"
               :id="'about_shicai_pic'+index"
               :src="'http://i2.chunboimg.com/'+item"
               alt="我的优点">

        </div>
        <template v-if="product_info.product_detail">
          <hr>
          <h2>- 我的详情 -</h2>
          <div class="detail-info-box">
            <table>
              <tbody>
              <tr>
                <th width="30%">品牌</th>
                <td>{{product_info.product_info.brand_name}}</td>
              </tr>
              <tr>
                <th>规格</th>
                <td>{{product_info.product_detail.specifications}}</td>
              </tr>
              <tr>
                <th>保质期</th>
                <td>{{product_info.product_detail.expiration_date}}</td>
              </tr>
              <tr>
                <th>产地</th>
                <td>{{product_info.product_detail.producing_area}}</td>
              </tr>
              <tr class="bg-gray">
                <th>储存办法</th>
                <td>{{product_info.product_detail.storage_method}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </template>
      </div>
    </section>
  </section>
</template>

<script>
  import {ec} from '../util/index';
  import CbNav from '../components/nav/Nav.vue';
  import Snap from '../components/scroll/Snap.vue';
  import SearchTitle from '../components/title/searchTitle.vue';

  export default {
    name: 'Product',
    components: ec([
      CbNav, Snap, SearchTitle
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
  @import "../common/less/base-style";

  .detail-section {
    .border-bottom-1px
  }
</style>
