<template>
  <div>
    <div class="banner" @click="handleBannerClick">
        <img class="banner-img" :src="bannerImg" alt="">
        <div class="banner-info">
          <div class="banner-title">{{sightName}}</div>
          <div class="banner-number"><span class="banner-icon arrow-icon">&#xe608;</span>{{this.gallaryImgs.length}}</div>
        </div>
    </div>
    <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClick"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'
export default {
  name: 'Banner',
  components: {
    CommonGallary
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1603/50/5020c11e7dde947390.water.jpg_r_800x800_64ec76b2.jpg', 'http://img1.qunarzz.com/sight/p0/1410/24/b949544827a569a3e7191f62e92fa420.jpg_r_800x800_53007fa0.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClick () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #ffffff
    background-image linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      margin-top .14rem
      padding 0 .4rem
      line-height .4rem
      height .32rem
      border-radius .2rem
      background rgba(0, 0, 0, 0.8)
      font-size .24rem
      .banner-icon
        font-size .24rem
</style>
