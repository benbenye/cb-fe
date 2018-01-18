<template>

  <li>
    <a class="item-wrapper" :href="'/product/'+item_li.pid+'?src=index-'+item_li.pid+'-D#d1'">
      <div class="cb-lazy-loading-bg item-img" style="background-color: inherit !important;">
        <img class="cb-lazy cb-lazy-img loaded"
             data-original="http://i3.chunboimg.com/group1/M00/20/42/Cv4JrVop8OKAd38fAANO9BYMvnU785_290_232.jpg"
             :alt="item_li.title"
             :src="item_li.url">
      </div>
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
    <a cbclick="1-7" href="javascript:void(0)" class="i-cart" :data-pid="item_li.product_id"></a>
    <div class="item-icon-box" v-if="item_li.promotion_price != 0.00">
      <i class="icon i-xsqg"></i>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'item',
    props: {
      item_li: {
        type: Object
      }
    },
    data() {
      return {};
    }
  };
</script>

<style scoped>
</style>
