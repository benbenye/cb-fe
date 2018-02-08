<template>
  <section>
    <div class="img-view" v-if="isReport">
      <h3>检测报告</h3>
      <ul>
        <li v-for="(item, index) in reportList" :key="index">
          <img :src="item" alt="检测报告">
        </li>
      </ul>
    </div>
    <div class="mask">
      <div class="content" slot></div>
    </div>
  </section>
</template>

<script>
  import {ec} from '../../../util/index'
  export default {
    name: 'Dialog',
    components: ec([]),
    props: ['isReport', 'reportList'],
    data() {
      return {};
    },
    methods: {
      init(options) {
        this.isReport = options.isReport;
        this.info = options.info;
        this.visible = true;
      }
    }
  };
</script>

<style scoped lang="less" type="text/less">
  .mask-class {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .img-view {
    .mask-class;
    background-color: rgba(255, 255, 255, .95);
    h3 {
      padding: .15rem;
      text-align: center;
    }
    ul{
      display: block;
      height: 4.6rem;
      overflow: scroll;
    }
  }

  .mask {
    .mask-class;
    background-color: rgba(0, 0, 0, .5);
  }
</style>
