<template>
  <section>
    <app-download :isShowAppDownload.sync="isShowAppDownload"></app-download>
    <!--search-->
    <product-title></product-title>
    <cb-nav></cb-nav>
    <!--slide-->
    <section class="detail-section detail-main">
      <snap
      :data="product_img"></snap>
      <h1>{{product_info.name}}</h1>
      <p class="sub">{{product_info.subname}}</p>
      <template
      v-if="promotion_list.is_limit_time || promotion_list.is_pre_sale || (product_detail && product_detail.expiration_show)">
        <!-- 标签 -->
        <div class="tag">
          <i v-if="promotion_list.is_pre_sale && promotion_list.is_show_pre_sale_icon"
             class="icon i-xsqg"></i>
          <i v-if="promotion_list.is_limit_time" class="icon i-ys"></i>
          <span style="color: #ee4b4b;font-size: .12rem;"
                v-if="product_info.exp_warning">{{product_info.exp_warning}}</span>
        </div>
      </template>
      <!--价格-->
      <template v-if="promotion_list.is_limit_time == 0">
        <p class="price"><b>&yen;{{product_info.chunbo_price}}</b>
          <span v-if="product_info.market_price">&yen;{{product_info.market_price}}</span></p>
      </template>

      <p v-if="product_coupons" class="datail-couponTip">
        <span></span>{{product_coupons}}
      </p>
      <!--促销-->
      <p v-if="promotion_list.is_limit_time == 1" class="price"><em>¥{{promotion_list.sale_price}}</em><span>¥{{product_info.chunbo_price}}</span>
      </p>
    </section>
    <section class="detail-section">
      <!--规格list-->
      <div class="detail-size border-bottom-1px" id="product_style_list">
        规格：
        <!--<router-link v-if="product_style"-->
        <!--v-for="(item, index) in product_style"-->
        <!--:key="index"-->
        <!--:data-p-option="item.relation_id"-->
        <!--:to="{name: 'product', params: {id: item.product_id}}"-->
        <!--:class="[{'on': item.product_id == product_id}, 'btn-mini']"-->
        <!--:title="item.property_option_name_all">-->
        <!--{{item.property_option_name_all}}</router-link>-->
        <a v-if="product_style" v-for="(item, index) in product_style"
           :href="'/product/'+item.product_id"
           :class="[{'on': item.product_id == product_id}, 'btn-mini']">
          {{item.property_option_name_all}}
        </a>
      </div>
      <template v-if="gift_list">
        <!-- start赠品 -->
        <div v-for="(item, index) in gift_list"
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


    <an-xin :product_quality="product_quality"
            :quality_text="quality_text"
            :virtual_quality="virtual_quality"></an-xin>

    <section class="detail-section mb topborder recommend-buyer ">
      <h2>- 买手推荐 -</h2>
      <p class="recommend-text"><span>{{mstj.breason}}</span></p>

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
            <li v-for="i in 3" :key="i"><span>{{mstj['about'+i]}}</span></li>
          </ul>

          <img v-for="(item, index) in mstj.tpic700" :key="index"
               :id="'about_shicai_pic'+index"
               :src="'http://i2.chunboimg.com/'+item"
               alt="我的优点">

        </div>
        <template v-if="product_detail">
          <hr>
          <h2>- 我的详情 -</h2>
          <div class="detail-info-box">
            <table>
              <tbody>
              <tr>
                <th width="30%">品牌</th>
                <td>{{product_info.brand_name || '--'}}</td>
              </tr>
              <tr>
                <th>规格</th>
                <td>{{product_detail.specifications}}</td>
              </tr>
              <tr v-if="product_detail && product_detail.expiration_show == 1">
                <th>保质期</th>
                <td>{{product_detail.expiration_date}}</td>
              </tr>
              <tr>
                <th>产地</th>
                <td>{{product_detail.producing_area}}</td>
              </tr>
              <tr class="bg-gray">
                <th>储存办法</th>
                <td>{{product_detail.storage_method}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </template>
        <template v-if="wxts1">
          <hr>
          <h2>- 你还要知道 -</h2>
          <div class="detail-info-box">
            <ol id="little_tip">
              <li v-for="(item, index) in wxts1" :key="index">{{item}}</li>
            </ol>
          </div>
        </template>
      </div>
    </section>
  </section>
</template>

<script lang="js">
  import {ec} from '../../util/index';
  import CbNav from '../../components/nav/CbNav.vue';
  import Snap from '../../components/scroll/Snap.vue';
  import AnXin from './blocks/AnXin.vue';
  import ProductTitle from '../../components/title/ProductTitle.vue';
  import AppDownload from '../../components/appDownload/AppDownload.vue';

  export default {
    name: 'Product',
    components: ec([
      CbNav, Snap, ProductTitle,
      AnXin, AppDownload
    ]),
    data() {
      return {
        isShowAppDownload: true,
        product_id: this.$route.params.id,
        gift_list: null,
        product_detail: null,
        wxts1: null,
        virtual_quality: [],
        virtual_list: [],
        ...this.$store.state.productInfo.data
      };
    },
    mounted() {
      console.log(this.product_id)
      // virtual_quality安心检测
    },
    asyncData({store, route: {params: {id}}}) {
      return store.dispatch('PRODUCTINFO_DATA', {id})
    }
  };
</script>

<style lang="less" type="text/less">
  @import "../../common/less/base-style";
</style>
