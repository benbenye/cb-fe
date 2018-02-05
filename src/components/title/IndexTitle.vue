<template>
  <header>
    <div class="location" cbclick="0-34" id="site_area">
      <a href="/index?select_city=1&amp;src=index-top-selectcity">
        <img width="20"
             style="margin-right:5px;"
             src="http://static.chunboimg.com/images/place.png">
        北京
      </a>
    </div>
    <a href="/?src=top-header-logo" class="logo">春播</a>
    <a href="javascript:void(0);" class="search-act-icon"
      @click="clickMark({clickData:'1-15'}); showSearchBox()"></a>
    <search-box :searchBoxDisplay.sync='searchBoxIsShow'></search-box>
  </header>
</template>

<script>
  import {ec, clickMark} from '../../util/index'
  import SearchBox from './SearchBox.vue'

  export default {
    name: 'IndexTitle',
    components: ec([
      SearchBox
    ]),
    data() {
      return {
        searchBoxIsShow: false
      };
    },
    methods: {
      clickMark: clickMark,
      showSearchBox: function(){
        this.searchBoxIsShow = true
      }
    }
  };
</script>

<style scoped lang="less" type="text/less">
  @import "title";
  @import "search";
</style>
