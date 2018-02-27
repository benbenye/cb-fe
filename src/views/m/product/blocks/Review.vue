<template>
  <section class="common-section detail-section comment-list border-top-1px mb">
    <h2>- 商品评论 -</h2>
    <p class="sub">好评度<b>{{review.total_percent}}%</b> {{review.total}}人评论</p>
    <ul>
      <li class="comment" v-for="(item, index) in review.list" :key="index">
        <div class="comment-header clearfix">
          <img :src="item.avatar_url" :alt="item.buyer_name">
          <p>
            <span class="comment-user">{{item.nickname}}</span>
            <span class="join-time">已在春播购买{{item.join_month}}</span>
          </p>
          <small class="comment-date">{{item.creation_time | substr}}</small>
        </div>
        <div class="comment-mianBox">
          <div class="comment-content">
            <i :class="['i-comment', 'i-comment-'+item.score]"></i>
            <template v-if="item.score === 1">不满意</template>
            <template v-if="item.score === 2">一般</template>
            <template v-if="item.score === 3">满意</template>
            <p>{{item.comment}}</p>
          </div>
          <div class="img-con clearfix" v-if="item.url.length">
            <img v-for="(itemUrl, itemIndex) in item.url" :key="itemIndex" :class="'s'+itemIndex"
                 @click="showSnapFullScreen('review_'+index, item.url, itemIndex)"
                 :src="'http://i3.chunboimg.com/'+itemUrl|replaceUrl" alt="用户晒图">
          </div>
        </div>
      </li>
    </ul>
    <div class="button-row" v-if="review.total > review.list.length">
      <a :href="'/product/good_comment.html?id='+product_id+'&amp;count='+review.total+'&amp;src=cb-product-qbpl'" class="btn-green-border"
         target="_self">查看全部</a>
    </div>
    <snap-full-screen :visible.sync="snapFullScreen" :wrapper="snapWrapper" :data="snapData" :curIndex="snapIndex"></snap-full-screen>
  </section>
</template>

<script>
  import {ec} from '../../../../util/index'
  import SnapFullScreen from '../../../../components/scroll/SnapFullScreen.vue'
  export default {
    name: 'Review',
    props: ['review', 'product_id'],
    components: ec([
      SnapFullScreen
    ]),
    data() {
      return {
        snapFullScreen: false,
        snapWrapper: '',
        snapData: [],
        snapIndex: 0
      };
    },
    methods: {
      showSnapFullScreen: function (wrapper, data, index) {
        this.snapFullScreen = true;
        this.snapWrapper = wrapper;
        this.snapData = data;
        this.snapIndex = index;
      }
    },
    filters: {
      replaceUrl: function (str) {
        return str.replace(/\.jpg/, function () {
          return '_200_200.jpg'
        })
      },
      substr: function (str) {
        return str.substr(0, 10)
      }
    }
  };
</script>

<style scoped lang="less" type="text/less">
</style>
