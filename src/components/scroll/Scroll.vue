<template>
  <div :id="wrapper">
    <ul class="layer-list">
      <item
      :data-product-id="item_li.product_id"
      v-for="(item_li,index) in data"
      :key="index"
      :item_li="item_li"></item>
    </ul>
  </div>
</template>

<script>
  import {ec} from '../../util/index';
  import Item from '../list/Item.vue';

  export default {
    name: 'scroll',
    components: ec([
      Item
    ]),
    props: {
      wrapper: {
        type: String,
        required: true
      },
      container: {
        type: String,
      },
      data: {
        type: Array,
        required: true
      }
    },
    mounted() {
      const li = this.$el.querySelectorAll('li')[this.data.length - 1];
      this.liWidth = li.offsetWidth;
      this.liStyle = li.currentStyle || getComputedStyle(li);
      this.$el.querySelector('ul').style.width = `${(this.liWidth + parseInt(this.liStyle.marginLeft) + parseInt(this.liStyle.marginRight)) * this.data.length}px`;

      import('../../common/util/iscroll').then(IScroll => {
        new IScroll('#' + this.wrapper, {
          eventPassthrough: true,
          scrollX: true,
          scrollY: false,
          preventDefault: false,
          click: false
        });
      })
    },
    data() {
      return {
        liWidth: null,
        liStyle: {},
      };
    }
  };
</script>

<style scoped lang="less" type="text/less">
  .layer-list {
    li {
      width: 180px !important;
      margin-left: 14px !important;
      margin-top: 0 !important;
      height: inherit;
      padding-bottom: .35rem;
      border: 0 !important;
      &:nth-of-type(2n-1) {
        margin-left: 10px;
      }
      &:first-child {
        margin-left: 0 !important;
      }
      img {
        width: 100%;
        height: inherit;
        border-radius: 4px;
      }
      .layer-list li p,
      .layer-list li h6 {
        text-indent: 0;
      }
    }
  }

</style>
