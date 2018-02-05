<template>
  <header class="category-header">
    <a href="javascript:{window.history.back();}" class="back"></a>
    <div class="search-btn" @click="getHotSearchData();"><span class="serarch-text">搜索春播商品</span></div>
    <div class="search-res-box" :style="{display: searchBoxDisplay ? 'block' : 'none'}">
        <div class="search-res-tit">
            <div class="search-cancel" @click="searchBoxDisplay = false; clickMark({clickData: '0-51'})"
                :style="{display: searchBoxDisplay ? 'block' : 'none'}">
            取消
            </div>
            <div class="search-box">
                <input v-model="search_key" class="search" placeholder="搜索春播商品" id="search_key">
            </div>
        </div>
        <div class="search-res do"> 
            <div class="associational-word" :style="{display: search_res.length ? 'block' : 'none'}">
                <ul>
                    <li v-for="(item, index) in search_res" :key="index">
                        <a :href="'/search/index?key='+item" @click="setHistoryWord(item)">{{item}}</a>
                    </li>
                </ul>
            </div>
            <h5 class="search-his-tit" :style="{display: historySearch.length ? 'block' : 'none'}">历史搜索<p class="del-search-key" cbclick="8-54" @click="emptyHistorySearch()"></p></h5>
            <ul class="search-list search-his" :style="{display: historySearch.length ? 'block':'none'}">
                <li v-for="(item, index) in historySearch" :key="index" @click="setHistoryWord(item)">
                    <a :href="'/search/index?src='+item">{{item}}</a> 
                </li>
            </ul>

            <h5>热门搜索</h5>
            <ul class="search-list search-hot">
                <li v-for="(item, index) in hotWord" :key="index">
                    <a :href="'/search/index?key='+item.guide_word+'&src=cb-search-hotsearch'"
                        @click="setHistoryWord(item.guide_word)">{{item.guide_word}}</a>
                </li>
            </ul>
            <h5>热门主题</h5>
            <ul class="search-list search-theme">
                <li v-for="(item, index) in hotSpecial" :key="index">
                    <a :href="'/act/'+item.special_id+'/?src=cb-search-hotspicial'">#{{item.word}}#</a>
                </li>
            </ul>
        </div>
    </div>
  </header>
</template>

<script>
import { axiosWWW } from "../../util/client-axios";
import { ec, clickMark } from "../../util/index";

export default {
  name: "searchTitle",
  components: ec([]),
  data() {
    return {
      searchBoxDisplay: false,
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
    getHotSearchData: function() {
      axiosWWW.get("/Search/getHotSearchData/").then(res => {
        this.searchBoxDisplay = true;
        [this.hotSpecial, this.hotWord] = [
          res.data.hotSpecial,
          res.data.hotWord
        ];
      });
    },
    getSmartWord: function() {
      axiosWWW
        .get("/Search/smartHotSearchOptionals/", {
          params: {
            key: this.search_key
          }
        })
        .then(res => {
          console.log(res.data);
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
