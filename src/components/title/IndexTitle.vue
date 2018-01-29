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
    <a href="javascript:void(0)" class="search-cancel" onclick="goReferer()">取消</a>
    <a href="/?src=top-header-logo" class="logo">春播</a>
    <div class="search-box">
      <input type="text" class="search" placeholder="搜索春播商品" id="search_key">
      <div class="icon-del"></div>
    </div>
    <a href="javascript:void(0);" class="search-act-icon" cbclick="1-15"></a>
  </header>
</template>

<script>
  import {ec} from '../../util/index'
  export default {
    name: 'IndexTitle',
    components: ec([]),
    data() {
      return {};
    }
  };
</script>

<style scoped lang="less" type="text/less">
  @import "title";
  @import "search";
</style>
