<template>
  <div class="header">
    <router-link to="/">
      <div class="header-back">&#xe624;</div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl';
.header
  position relative
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #ffffff
  background $bgColor
  font-size .32rem
  .header-back
    position absolute
    width .64rem
    text-align center
    font-size .4rem
    color #ffffff
</style>
