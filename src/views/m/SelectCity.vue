<template>
<div>{{cityInfo}}</div>
</template>

<script>
  import {ec} from '../../util/index';
  export default {
    name: 'SelectCity',
    components: ec([]),
    data() {
      return {
        cityInfo: this.$store.state.cityInfo
      };
    },
    asyncData({store}) {
      return store.dispatch('CITYINFO')
    }
  };
</script>

<style scoped lang="less" type="text/less">
</style>
