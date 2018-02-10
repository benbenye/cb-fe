<template>
  <section v-if="visible">
    <!--安心度 begin-->
    <template v-if="product_quality && product_quality.length">
      <section class="detail-section mb anxin-m">
        <div class="anxin-tit">
          <span class="anxin-tit-left">安心： </span>
          <div class="anxin-info">{{quality_text}}</div>
        </div>
        <an-xin-scroll class="anxin-list" :wrapper="'anxin-list'" :data="product_quality"></an-xin-scroll>
      </section>
    </template>
    <!--安心度组合-->
    <template v-else-if="virtual_quality.length"
              v-for="(item, index) in virtual_quality">
      <section class="detail-section anxin-m"
               v-if="index > 1"
               v-show="virtualVisible">
        <div class="anxin-tit" v-html="item.product_name+':'+item.quality_text">
        </div>
        <an-xin-scroll class="anxin-list" :wrapper="'anxin-list-'+index" :data="item.product_quality"></an-xin-scroll>
      </section>
      <section class="detail-section anxin-m"
               v-else>
        <div class="anxin-tit" v-html="item.product_name+':'+item.quality_text">
        </div>
        <an-xin-scroll class="anxin-list" :wrapper="'anxin-list-'+index" :data="item.product_quality"></an-xin-scroll>
      </section>
    </template>
    <template v-if="virtual_quality.length > 2">
      <div class="btn-more" @click="toggleVisible">点击查看更多</div>
    </template>
  </section>
</template>

<script>
  import {ec} from '../../../util/index'
  import AnXinScroll from '../../../components/scroll/AnXinScroll.vue';
  export default {
    name: 'AnXin',
    components: ec([
      AnXinScroll
    ]),
    props: ['product_quality', 'virtual_quality'],
    data() {
      return {
        visible: false,
        virtualVisible: false
      };
    },
    mounted() {
      this.replaceNum()
    },
    filters: {},
    methods: {
      toggleVisible: function () {
        this.virtualVisible = !this.virtualVisible
      },
      replaceNum: function () {
        if (this.virtual_quality.length) {
          this.virtual_quality.forEach(e => {
            e.quality_text = e.quality_text.replace(/\d{1,}/g, (item) => `<span class="c-imp">${item}</span>`)
          })
          this.visible = true
        }
      }
    }
  };
</script>

<style lang="less" type="text/less">
  /*安心度*/
  .anxin-m {
    overflow: hidden;
    .anxin-tit {
      position: relative;
      padding-left: .15rem;
      padding-right: .15rem;
      padding-top: .15rem;
      font-size: .12rem;
      .anxin-tit-left {
        position: absolute;
      }
      .anxin-info {
        padding-left: .34rem;
      }
      .c-imp {
        color: #22bc69;
      }
    }
  }
</style>
