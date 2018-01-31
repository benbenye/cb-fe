<template>
  <div class="slide" id="detail_slider" style="visibility: visible;">
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <img :src="item.url" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  import {ec} from '../../util/index';
  import _ from 'lodash';

  export default {
    name: 'Snap',
//    components: ec([]),
    props: {
      wrapper: {
        type: String,
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
      this.liWidth = this.$el.offsetWidth;//直接获取窗口宽度
//      this.liWidth = li.offsetWidth;
      this.liStyle = li.currentStyle || getComputedStyle(li);

      this.$el.querySelectorAll('li').forEach(e => {
        e.style.width = `${this.liWidth}px`;
      });

      this.$el.querySelector('ul').style.width = `${(this.liWidth + parseInt(this.liStyle.marginLeft) + parseInt(this.liStyle.marginRight)) * this.data.length}px`;

      import('../../common/util/iscroll').then(IScroll => {
        new IScroll('#detail_slider', {
          snap: true,
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

<style scoped type="text/less" lang="less">
  ul {
    display: block;
    overflow: hidden;
    li {
      background-color: #000;
      float: left;
      img {
        width: 100%;
      }
    }
  }
</style>
