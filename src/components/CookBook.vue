<template>
  <div>
    this is cookbook
  </div>
</template>

<script>
  export default {
    name: 'cookbook',
    props: ['show'],
    serverCacheKey: props => props.show
  }
</script>

<style lang="stylus">
</style>
