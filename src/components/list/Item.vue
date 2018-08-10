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
    <a href="javascript:void(0)" class="i-cart" :data-pid="item_li.product_id"
       @click="test(); addCart(item_li.product_id, 1); clickMark({clickData:'1-7', pid:item_li.product_id})"></a>
    <div class="item-icon-box" v-if="item_li.promotion_price != 0.00">
      <i class="icon i-xsqg"></i>
    </div>
    <toast :visible.sync="toast.visible" :type="toast.type" :mes="toast.mes"></toast>
  </li>
</template>

<script>
  import {clickMark, ec} from '../../util/index';
  import {axiosAPI} from '../../util/client-axios';
  import Toast from '../../components/toast/Toast.vue';
  import ToastBus from '../toast/toast-bus';
  import qs from 'qs'
  export default {
    name: 'item',
    components: ec([
      Toast
    ]),
    props: {
      item_li: {
        type: Object
      }
    },
    data() {
      return {
        toast: {
          visible: false,
          type: 'warn',
          mes: ''
        }
      };
    },
    methods: {
      clickMark: clickMark,
      test: function () {
        ToastBus.$emit('show')
      },
      addCart: function (pid, num) {
        axiosAPI.post('/Cart/addToCart', qs.stringify({
            product_id: pid,
            site_id: 0,
            sku_num: num || 1,
          })
        )
          .then(res => {
            if(res.data.flag === 1) {
              this.toast.visible = true;
              this.toast.type = 'succ';
              this.toast.mes = '加入购物车成功'
            }else{
              this.toast.visible = true;
              this.toast.type = 'warn';
              this.toast.mes = res.data.error_message
            }
          })
      }
    }
  };
</script>

<style scoped lang="less" type="text/less">
  @import "../floor/floor";
</style>
