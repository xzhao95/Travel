<template>
  <div class="wrapper">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>
<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl';
.wrapper
  height .72rem
  background $bgColor
  padding 0 .1rem
  .search-input
    box-sizing border-box
    height .62rem
    width 100%
    line-height .62rem
    text-align center
    border-radius .06rem
    padding 0 .1rem
    color #666666
</style>
