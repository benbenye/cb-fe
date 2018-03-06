<template>
  <div class="lc-list">
    <div class="layer" v-for="(item, i) in list_lc" :key="i">
      <a :href="item.basic.model_url+'?src=index-'+item.basic.parent_id+'-A'">
        <h3><span>{{item.name}}</span></h3>
      </a>
      <div class="layer-sub-desc">{{item.basic.floor_title}}</div>
      <a :href="'/act/61545?src=index-'+item.basic.parent_id+'-B'"
         style="background-color: inherit !important;">
        <div class="cb-lazy-bg banner-img"
             v-lazy:background-image="item.banner1.pic"></div>
      </a>
      <list-r1-c2 :lc="item"></list-r1-c2>
    </div>
  </div>
</template>

<script>
  import { ec } from '../../util/index';
  import ListR1C2 from '../list/ListR1C2.vue';

  export default {
    name: 'floor',
    props: {
      list_lc: {
        type: Array,
        required: true
      }
    },
    components: ec([
      ListR1C2
    ]),
    data() {
      return {};
    }
  };
</script>

<style scoped type="text/less" lang="less">
  @import '../../common/less/base-style';
  @import "../card/layer";
  .banner-img{
    padding-top: 30/65*100%;
  }

  .layer #list-mask {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .3);
    z-index: 5;
  }

</style>
