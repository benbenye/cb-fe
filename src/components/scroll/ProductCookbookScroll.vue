<template>
  <section class="detail-section border-top-1px border-bottom-1px mb">
    <h2>还可以这样吃</h2>
    <div class="product-cookbook" :id="wrapper">
      <ul class="product-cookbook-ul">
        <li v-for="(item, index) in data" :key="index">
          <a :href="item.url">
            <img :src="item.image_url" :alt="item.title">
            <p>{{item.title}}</p></a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import {ec} from '../../util/index';
  export default {
    name: 'ProductCookbookScroll',
    components: ec([]),
    props: {
      data: {
        type: Array,
        default: []
      },
      wrapper: {
        type: String,
        default: 'pro-cook'
      }
    },
    mounted() {
      this.$el.querySelector('ul').style.width = `${this.liWidth * this.data.length + 0.12}rem`;
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
        liWidth: 1.72
      };
    }
  };
</script>

<style scoped lang="less" type="text/less">
  .product-cookbook {
    overflow: hidden;
    margin-bottom: .2rem;
  }

  .product-cookbook .product-cookbook-ul {
    width: 3000px;
  }

  .product-cookbook li {
    width: 1.6rem;
    font-size: .12rem;
    display: inline-block;
    vertical-align: top;
    margin-right: .12rem;
  }

  .product-cookbook li:first-child {
    margin-left: .12rem;
  }

  .product-cookbook li img {
    width: 1.6rem;
    height: 1.056rem;
    margin-bottom: 8px;
  }
</style>
