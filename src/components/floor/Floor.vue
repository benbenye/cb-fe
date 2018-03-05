<template>

  <div class="lc-list">
    <div class="layer" v-for="(item, i) in list_lc" :key="i">
      <a :href="item.basic.model_url+'?src=index-'+item.basic.parent_id+'-A'">
        <h3><span>{{item.name}}</span></h3>
      </a>
      <div class="layer-sub-desc">{{item.basic.floor_title}}</div>
      <a :href="'/act/61545?src=index-'+item.basic.parent_id+'-B'"
         style="background-color: inherit !important;">
        <div class="cb-lazy-bg"
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
  .lc-list{
    .cb-lazy-bg{
      padding-top: 46.153846%;
      background-size: 100%;
      &[lazy=loading] {
        background-repeat: no-repeat;
        background-position: center center;
        display: block;
        background-color: #ccc;
        background-size: .353333rem;
      }
    }
  }

  .layer-list li.more .cb-lazy-loading-bg {
    background-color: inherit;
  }
</style>
