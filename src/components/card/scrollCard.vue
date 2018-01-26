<template>
  <div class="layer good-recommend border-bottom-1px">
    <h3><span>{{rollData.title}}</span></h3>
    <div class="layer-sub-desc">{{rollData.sub_title}}</div>
    <scroll :wrapper="'good-recommend-'+index" :data="rollData.product_list">
    </scroll>
  </div>
</template>

<script>
  import { ec } from '../../util/index';
  import Scroll from '../scroll/Scroll.vue';

  export default {
    name: 'scrollCard',
    components: ec([
      Scroll
    ]),
    props: {
      rollData: {
        type: Object,
        require: true
      },
      index: {
        type: Number,
        require: true
      }
    },
  }
</script>

<style type="text/less"></style>