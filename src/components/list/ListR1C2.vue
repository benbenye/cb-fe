<template>
  <ul class="layer-list">
    <item
    :data-product-id="item_li.product_id"
    v-for="(item_li,index) in lc.list"
    :key="index"
    v-if="lc.list.length-1 != index"
    :item_li="item_li"></item>

    <li class="more" :style="{ backgroundColor: lc.basic.m_title_color }">
      <a href="javascript:;" class="item-wrapper">
        <div class="img-place cb-lazy-bg"></div>
        <h6>00</h6>
        <p class="sub">00</p>
        <p class="sub">00</p>
        <p class="price">
          <b class="chunbo"><i class="money">¥</i>00</b>
        </p>
      </a>
      <a href="/list/index/cid/3695-0-0?src=index-48153-E" class="more-active">
        <img class="cb-lazy"
             v-lazy="lc.basic.m_title_pic"></a>
    </li>
  </ul>
</template>

<script>
  import {ec} from '../../util/index';
  import Item from './Item.vue';

  export default {
    name: 'list-r1-c2',
    components: ec([
      Item
    ]),
    props: {
      lc: {
        type: Object,
        required: true
      }
    },
    data() {
      return {};
    }
  };
</script>

<style scoped type="text/less" lang="less">
  @import "../floor/floor";
</style>
