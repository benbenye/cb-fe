<template>
  <div id="anxin-m" :id="wrapper">
    <ul class="anxin-list">
      <li v-for="(item, index) in data" :key="index">
        <a v-if="item.certificationType"
           :href="item.act_url" cbclick="10-57">
          <img :src="item.tag_icon"/>
          <p>{{item.name}}</p>
        </a>
        <a v-else
           href="javascript:void(0)"
           cbclick="10-57">
          <img :src="item.tag_icon" :data-img-list="item.img_list"/>
          <p>{{item.name}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {ec} from '../../util/index';
  import Item from '../list/Item.vue';

  export default {
    name: 'AnxinScroll',
    components: ec([
      Item
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
        required: true
      }
    },
    mounted() {
      const li = this.$el.querySelectorAll('li')[this.data.length-1];
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
</style>
