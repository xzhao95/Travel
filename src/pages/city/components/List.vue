<template>
  <div class="wrapper" ref="wrap">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
      </div>
      <div class="area">
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
          </div>
      </div>
       <div class="area">
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrap)
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl';
.border-topbottom,.border-bottom
  &:before
    border-color #cccccc
  &:after
    border-color #cccccc
.wrapper
  overflow hidden
  position absolute
  top 1.58rem
  bottom 0
  left 0
  right 0
.title
  line-height .54rem
  background #eeeeee
  padding-left .2rem
  color #666666
  font-size .26rem
.button-list
  padding .1rem .6rem .1rem .1rem
  overflow hidden
  .button-wrapper
    float left
    width 33.33%
    .button
      text-align center
      padding .1rem 0
      margin .1rem
      border .02rem solid #cccccc
      border-radius .06rem
.item-list
  .item
    line-height .64rem
    color #666666
    padding-left .2rem

</style>
