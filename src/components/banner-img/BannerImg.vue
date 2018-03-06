<template>
  <div style="margin: .1rem" class="bannerImg">
    <a :href="link" target="_self"><img :src="imgSrc" :alt="title"></a>
  </div>
</template>

<script>
  export default {
    name: 'BannerImg',
    props: {
      link: String,
      title: String,
      imgSrc: String
    },
    data() {
      return {};
    }
  };
</script>

<style scoped>
</style>
