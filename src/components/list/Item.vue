<template>
  <li>
    <a :href="'/product/'+item_li.pid+'?src=index-'+item_li.pid+'-D#d1'" class="item-wrapper">
      <div class="img-place cb-lazy-bg" v-lazy:background-image="item_li.url"></div>
      <h6>{{item_li.shortname}}</h6>
      <p class="sub">{{item_li.subname}}</p>
      <!--赠品 没有数据结构 暂缺-->
      <p class="sub">{{item_li.specifications}}</p>
      <p class="price">
        <template v-if="item_li.promotion_price != 0.00">
          <em class="promotion"><i class="money">¥</i>{{item_li.promotion_price}}</em>
          <span><i class="money">¥</i>{{item_li.chunbo_price}}</span>
        </template>
        <template v-else>
          <b class="chunbo"><i class="money">¥</i>{{item_li.chunbo_price}}</b>
        </template>
      </p>
    </a>
    <a cbclick="1-7" href="javascript:void(0)" class="i-cart" :data-pid="item_li.product_id"
       @click="addCart(item_li.product_id, 1); clickMark({clickData:'1-7', pid:item_li.product_id})"></a>
    <div class="item-icon-box" v-if="item_li.promotion_price != 0.00">
      <i class="icon i-xsqg"></i>
    </div>
  </li>
</template>

<script>
  import {clickMark} from '../../util/index';
  const axios = require('axios');
  const instance = axios.create({
    baseURL: '/www',
    timeout: 1000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  });
  export default {
    name: 'item',
    props: {
      item_li: {
        type: Object
      }
    },
    data() {
      return {};
    },
    methods: {
      clickMark: clickMark,
      addCart: function (pid, num) {
        instance.get('/Cart/add', {
          params: {
            product_id: pid,
            site_id: 0,
            sku_num: num || 1,
//            sku_code: 0,
            trackid: 0,
            source: 0
          }
        })
          .then(res => {
            console.log(res)
          })
      }
    }
  };
</script>

<style scoped lang="less" type="text/less">
  @import "../floor/floor";
</style>
