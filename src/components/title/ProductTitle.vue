<template>
  <header class="category-header">
    <a href="javascript:{window.history.back();}" class="back"></a>
    <div class="search-btn"
        @click="showSearchBox()"><span class="serarch-text">搜索春播商品</span></div>
    <search-box :searchBoxDisplay.sync="searchIsShow"></search-box>
  </header>
</template>

<script>
import { axiosWWW } from "../../util/client-axios";
import { ec, clickMark } from "../../util/index";
import SearchBox from './SearchBox.vue';

export default {
  name: "ProductTitle",
  components: ec([
      SearchBox
  ]),
  data() {
    return {
      searchIsShow: false,
      hotSpecial: [], // 热门话题
      hotWord: [], // 热门搜索
      search_key: "", // 用户搜索的关键词
      search_res: [], // 根据search_key返回的联想词组
      historySearch: []
    };
  },
  mounted() {
    this.historySearch = localStorage.searchWord
      ? localStorage.searchWord.split(",")
      : [];
  },
  methods: {
    clickMark: clickMark,
    showSearchBox: function() {
        this.searchIsShow = true
    },
    getSmartWord: function() {
      axiosWWW
        .get("/Search/smartHotSearchOptionals/", {
          params: {
            key: this.search_key
          }
        })
        .then(res => {
          this.search_res = res.data || [];
        });
    },
    setHistoryWord: function(w) {
      if (localStorage) {
        w.replace(/\,/g, "");
        let arr = this.historySearch.filter(v => v !== w)
        if (arr.length >= 15) {
          arr.pop();
        }
        arr.unshift(w);
        localStorage.setItem("searchWord", arr.join(","));
      }
    },
    emptyHistorySearch: function(){
        this.historySearch = [];
        localStorage && localStorage.setItem('searchWord', '')
    }
  },
  watch: {
    search_key: function() {
      this.getSmartWord();
    }
  }
};
</script>

<style scoped lang="less" type="text/less">
@import "title";
@import "search";
</style>
