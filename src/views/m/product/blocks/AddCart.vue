<template>
  <section>
    <div class="detail-buy">
      数量：
      <div class="copies">
        <a class="icon-minus" @click="withMark(changeProductNum(-1), '10-48', product_id)">-</a>
        <input id="product_count" type="number" v-model="product_num"/>
        <a class="icon-plus" @click="withMark(changeProductNum(1), '10-47', product_id)">+</a>
      </div>
      <a class="btn-red" id="add_cart"
         cbclick="10-7" @click="addCart(product_id)"
         v-if="stock_count" :data-pid="product_id">
        加入购物车</a>
      <a id="no_stock_div" class="btn-red btn-disable"
         v-else>抢空了，马上回来</a>
    </div>

    <toast :visible.sync="toast.visible" :type="toast.type" :mes="toast.mes"></toast>
  </section>
</template>

<script>
  import {ec, withMark} from '../../../../util/index'
  import {addCart} from '../../../../common/js/product';
  import Toast from '../../../../components/toast/Toast.vue';

  export default {
    name: 'AddCart',
    props: {
      product_id: {
        required: true
      },
      stock_count: {
        require: true,
        default: 0
      }
    },
    components: ec([
      Toast
    ]),
    data() {
      return {
        toast: {
          visible: false,
          type: 'warn',
          mes: ''
        },
        product_num: 1,
      };
    },
    methods: {
      withMark: withMark,
      addCart: function (pid) {
        addCart({
          pid: pid,
          sku_code: 1111,
          count: this.product_num
        })
          .then(data => {
            if (data.status === 1) {
//              更新购物车数量
              this.toast.visible = true
              this.toast.type = 'succ'
              this.toast.mes = '添加购物车成功'
              return
            }
            this.toast.visible = true
            this.toast.type = 'warn'
            this.toast.mes = data.info
          })
      },
      changeProductNum: function (num) {
        if(this.product_num + num === 0){
          this.toast.visible = true
          this.toast.mes = '商品数量不能为0'
          return
        }
        this.product_num += num
      }
    }
  };
</script>

<style scoped lang="less" type="text/less">
</style>
