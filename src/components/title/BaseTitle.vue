<template>
  <header>
    <a href="javascript:history.go(-1);" class="back"></a>
    <h1>{{name}}</h1>
  </header>
</template>

<script>
  export default {
    name: 'Title',
    props: ['name']
  }
</script>

<style scoped type="text/less" lang="less">
  @import "title.less";

  header h1 {
    height: .48rem;
    line-height: .48rem;
    overflow: hidden;
    position: absolute;
    left: .4rem;
    right: .4rem;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .16rem;
  }

  header .link-right {
    width: .9rem;
    height: 24px;
    position: absolute;
    top: 50%;
    right: .1rem;
    margin-top: -12px;
    text-align: right;
    line-height: 24px;
    font-size: .14rem;
  }

</style>
