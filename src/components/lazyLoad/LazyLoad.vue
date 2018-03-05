<template>
  <lazy-component @show="handler">
    <img class="mini-cover" :src="img.src" width="100%" height="400">
  </lazy-component>
</template>

<script>
  export default {
    name: 'LazyLoad',
    props: ['img'],
    data() {
      return {};
    },
    methods: {
      handler (component) {
        console.log('this component is showing')
      }
    }
  };
</script>

<style scoped lang="less" type="text/less">
</style>
