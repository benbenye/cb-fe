<template>
  <div id="anxin-m" :id="wrapper">
    <ul class="anxin-list">
      <li v-for="(item, index) in data" :key="index">
        <a v-if="item.certificationType"
           :href="item.act_url" cbclick="10-57">
          <img class="anxin-img" :src="item.tag_icon"/>
          <p>{{item.name}}</p>
        </a>
        <a v-else
           href="javascript:void(0)"
           cbclick="10-57"
           @click="showDialog(index, item.img_list)">
          <img class="anxin-img" :src="item.tag_icon" :data-img-list="item.img_list"/>
          <p>{{item.name}}</p>
        </a>
      </li>
    </ul>
    <cb-modal :visible.sync="dialogVisible1" :isReport="true" :reportList="img_list"></cb-modal>
  </div>
</template>

<script>
  import {ec} from '../../util/index';
  import Item from '../list/Item.vue';
  import CbModal from '../modal/Modal.vue'

  export default {
    name: 'AnXinScroll',
    components: ec([
      Item, CbModal
    ]),
    props: {
      wrapper: {
        type: String,
      },
      container: {
        type: String,
      },
      data: {
        type: Array,
        required: true,
      }
    },
    mounted() {
      this.$el.querySelector('ul').style.width = `${this.liWidth * this.data.length}px`;
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
        liWidth: 100,
        liStyle: {},
        dialogVisible: {},
        dialogVisible1: false,
        img_list: []
      };
    },
    created() {
      this.data.forEach((e, i) => {
        this.dialogVisible['v' + i] = false;
      })
    },
    methods: {
      showDialog: function (index, list) {
        this.dialogVisible['v' + index] = true;
        this.dialogVisible1 = true;
        this.img_list = list
      }
    }
  };
</script>

<style scoped lang="less" type="text/less">
  a {
    display: block;
  }

  .anxin-list {
    width: 10000px;
    font-size: 12px;
    text-align: center;
    margin-top: .1rem;
    margin-bottom: .1rem;
    li {
      display: inline-block;
      width: 100px;
      vertical-align: middle;
      white-space: nowrap;
      overflow: hidden;
      .anxin-img {
        width: 50px;
        height: 50px;
      }
      a {
        color: #2bbc69;
      }
    }
  }
</style>
