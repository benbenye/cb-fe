<template>
  <transition name="fade" mode="out-in">
    <div class="comment-img-box" :id="wrapper" v-show="visible" @click="hidden">
      <ul class="wrapper">
        <li v-for="(item, index) in data" :key="index">
          <img :src="'http://i1.chunboimg.com/'+item">
        </li>
      </ul>
      <div class="slide-nav dot">
        <i v-for="(item, index) in data" :key="index" :class="[index==cur ? 'cur' : '']"></i>
      </div>
    </div>
  </transition>
</template>

<script>
  import {ec} from '../../util/index';
  import _ from 'lodash';
  export default {
    name: 'SnapFullScreen',
    components: ec([]),
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
      },
      visible: {
        type: Boolean,
        required: true
      },
      curIndex: {
        type: Number,
        default: 0
      }
    },
    mounted() {
    },
    methods: {
      hidden: function () {
        this.$emit('update:visible', false)
        this.cur = 0;
      },
      initIScroll: function () {
        const li = this.$el.querySelectorAll('.wrapper li')[this.data.length - 1];
        this.liWidth = this.$el.offsetWidth;//直接获取窗口宽度
        this.liStyle = li.currentStyle || getComputedStyle(li);

        this.$el.querySelectorAll('.wrapper li').forEach(e => {
          e.style.width = `${this.liWidth}px`;
        });

        this.$el.querySelector('ul').style.width = `${this.liWidth * this.data.length}px`;

        import('../../common/util/iscroll').then(IScroll => {
          this.Iscroll = new IScroll(`#${this.wrapper}`, {
            snap: true,
            eventPassthrough: true,
            scrollX: true,
            scrollY: false,
            preventDefault: false,
            click: false
          });
          this.Iscroll.goToPage(this.curIndex, 0)
          this.Iscroll.on('scrollEnd', () => {
            this.cur = this.Iscroll.currentPage.pageX
          })
        })
      }
    },
    data() {
      return {
        liWidth: null,
        liStyle: {},
        Iscroll: null,
        cur: 0,
        isInit: false
      };
    },
    updated: function () {
      if (!this.visible) return;
      if (this.isInit) return;
      this.isInit = true;
      this.initIScroll();
    },
    watch: {
      data: function () {
        this.isInit = false;

        this.cur = this.curIndex;
      }
    }
  };
</script>

<style scoped lang="less" type="text/less">
  @import "../../common/less/base";

  .comment-img-box {
    position: fixed;
    z-index: 102;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .8);
    .wrapper {
      height: 100%;
      display: -webkit-box;
      -webkit-box-lines: multiple;
      overflow: hidden;
      position: relative;
      li {
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        display: -ms-flexbox;
        -ms-flex-pack: center;
        -ms-flex-align: center;
        float: left;
        width: 100%;
        position: relative;
        background-image: url(https://sstatic.chunboimg.com/m/0.1.0/img/loading.gif);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 40px;
        img {
          -webkit-user-drag: none;
          -webkit-user-select: none;
          max-width: 100%;
          max-height: 100%;
        }
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
    i {
      display: inline-block;
      vertical-align: top;
      margin: 0 2px;
      width: 6px;
      height: 6px;
      opacity: .9;
      border-radius: 50%;
      background: #dddddd;
      &.cur {
        background: #2bbc69;
        opacity: 1;
      }
    }
  }
</style>
