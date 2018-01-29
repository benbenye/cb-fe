<template>
  <header class="category-header">
    <a href="javascript:{window.history.back();}" class="back"></a>
    <a href="#"
       class="search-cancel"
       cbclick="0-51">
      取消
    </a>
    <div class="search-btn"><span class="serarch-text">搜索春播商品</span></div>
    <div class="search-box">
      <input type="text"
             class="search"
             placeholder="搜索春播商品"
             id="search_key">
    </div>
  </header>
</template>

<script>
  import {ec} from '../../util/index';
  export default {
    name: 'searchTitle',
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
