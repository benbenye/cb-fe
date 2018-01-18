<template>
  <ul class="layer-list">
    <item
    :data-product-id="item_li.product_id"
    v-for="(item_li,index) in lc.list"
    :key="index"
    v-if="lc.list.length-1 != index"
    :item_li="item_li"></item>

    <li class="more" :style="{ backgroundColor: lc.basic.m_title_color }">
      <a href="/list/index/cid/3695-0-0?src=index-48153-E">
        <img class="cb-lazy loaded"
             :src="lc.basic.m_title_pic"></a>
    </li>
  </ul>
</template>

<script>
  import { ec } from '../../util/index';
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

<style scoped>
</style>
