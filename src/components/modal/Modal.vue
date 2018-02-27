<template>
  <section v-show="visible">
    <div class="img-view" v-if="isReport && reportList">
      <h3>检测报告</h3>
      <div class="d" style="height: 100%; overflow: hidden;">
        <div class="scroll-polyfill" style="height: 10000px;">
          <ul>
            <li v-for="(item, index) in reportList" :key="index">
              <img :src="item" alt="检测报告">
            </li>
          </ul>
        </div>
      </div>
      <div class="close" @click="close">×</div>
    </div>
    <div class="mask" v-else-if="modal">
      <div class="container">
        <div class="title" v-if="modal.title">{{modal.title}}</div>
        <div class="content" v-if="modal.content" v-html="modal.content"></div>
        <div class="button" v-if="modal.button" @click="close">
          <template v-if="modal.button.isInline">
            <div>ss</div>
          </template>
          <template v-else>
            <div class="btn-spirit" v-if="modal.button.confirm">{{modal.button.confirm}}</div>
            <div class="btn-spirit" v-if="modal.button.cancel">{{modal.button.cancel}}</div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {ec} from '../../util/index'
  import {addClass, removeClass} from '../../common/js/dom';
  export default {
    name: 'CbModal',
    components: ec([]),
    props: [
      'visible', 'isReport', 'reportList',
      'modal'
    ],
    data() {
      return {
        data: {}
      };
    },
    methods: {
      close: function () {
        this.$emit('update:visible', false)
      }
    },
    watch: {
      visible: function () {
        let html = document.documentElement;
        let body = html.getElementsByTagName('body')[0];
        if (this.visible) {
          addClass(body, 'dis-scroll')
        } else {
          removeClass(body, 'dis-scroll')
        }
      }
    }
  };
</script>

<style scoped lang="less" type="text/less">
  @import "../../common/less/base";
  .mask-class {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1111;
    overflow: hidden;
  }

  .img-view {
    .mask-class;
    background-color: rgba(255, 255, 255, .95);
    h3 {
      padding: .15rem;
      text-align: center;
    }
    ul {
      display: block;
      height: 4.6rem;
      overflow: scroll;
    }
    .close {
      position: absolute;
      bottom: .1rem;
      left: 50%;
      width: .36rem;
      height: .36rem;
      font-size: .32rem;
      line-height: .36rem;
      text-align: center;
      margin: 0 0 0 -0.18rem;
    }
  }

  .mask {
    .mask-class;
    background-color: rgba(0, 0, 0, .5);
    .container{
      width: 280/125*1rem;
      margin: 180/125*1rem auto 0;
      border-radius: @imgRadius;
      background-color: #fff;
      .title{
        font-size: @FontImHeaderBigger;
        padding-top: 20/125*1rem;
        text-align: center;
      }
      .content{
        margin-bottom: 10/125*1rem;
        margin-top: 10/125*1rem;
      }
      .button{
        text-align: center;
        .btn-spirit{
          padding-top: 10/125*1rem;
          padding-bottom: 10/125*1rem;
          font-size: @FontImHeader;
          color: @ColorImMain;
          border-top: 1px solid #ddd;
        }
      }
    }

  }
</style>
