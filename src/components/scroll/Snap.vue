<template>
  <transition name="fade" mode="out-in">
    <div class="slide" id="detail_slider" style="visibility: visible;">
      <ul class="slide-img">
        <li v-for="(item, index) in data" :key="index">
          <img :src="item.url" alt="">
        </li>
      </ul>
      <ul class="slide-nav">
        <li v-for="(item, index) in data" :key="index" :class="[index==cur ? 'cur' : '']"></li>
      </ul>
    </div>
  </transition>
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
      const li = this.$el.querySelectorAll('.slide-img li')[this.data.length - 1];
      this.liWidth = this.$el.offsetWidth;//直接获取窗口宽度
//      this.liWidth = li.offsetWidth;
      this.liStyle = li.currentStyle || getComputedStyle(li);

      this.$el.querySelectorAll('.slide-img li').forEach(e => {
        e.style.width = `${this.liWidth}px`;
      });

      this.$el.querySelector('ul').style.width = `${(this.liWidth + parseInt(this.liStyle.marginLeft) + parseInt(this.liStyle.marginRight)) * this.data.length}px`;
      this.$el.style.height = `${this.liWidth}px`;

      import('../../common/util/iscroll').then(IScroll => {
        this.Iscroll = new IScroll('#detail_slider', {
          snap: true,
          eventPassthrough: true,
          scrollX: true,
          scrollY: false,
          preventDefault: false,
          click: false
        });
        this.Iscroll.on('scrollEnd', () => {
          this.cur = this.Iscroll.currentPage.pageX
        })
      })
    },
    data() {
      return {
        liWidth: null,
        liStyle: {},
        Iscroll: null,
        cur: 0
      };
    }
  };
</script>

<style scoped type="text/less" lang="less">
  @import "../../common/less/base";

  .slide {
    position: relative;
    height: 0;
    overflow: hidden;
    .slide-img {
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

    .slide-nav {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 5px;
      text-align: center;
      font-size: 0;
      z-index: 1;
      li {
        display: inline-block;
        vertical-align: top;
        margin: 0 2px;
        width: 6px;
        height: 6px;
        opacity: .9;
        border-radius: 50%;
        background: @ColorComLine;
        &.cur {
          background: @ColorImMain;
          opacity: 1;
        }
      }
    }
  }
</style>
