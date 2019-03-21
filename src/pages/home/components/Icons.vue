<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <div class="icon" v-for="icon of item.icons" :key="icon.id">
            <div class="icon-img">
              <img :src="icon.imgUrl" alt="">
            </div>
            <p class="icon-desc">{{icon.desc}}</p>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    swiperList () {
      let list = []
      let start = 1
      for (let i = 0; i < this.list.length; i += 8) {
        list.push({
          id: start++,
          icons: this.list.slice(i, i + 8)
        })
      }
      return list
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/mixins.styl';
.wrapper >>> .swiper-container
  height: 0
  padding-bottom: 50%
.wrapper
  margin-top .2rem
.icon
  overflow: hidden
  float: left
  width: 25%
  padding-bottom: 25%
  position: relative
  .icon-img
    position: absolute
    top: 0
    left: 0
    bottom: 0.44rem
    padding: 0.1rem
    width: 100%
    box-sizing: border-box
    img
      height: 100%
      display: block
      margin: 0 auto
  .icon-desc
    position: absolute
    left: 0
    right: 0
    bottom: 0
    height: 0.44rem
    line-height: 0.44rem
    text-align center
    ellipsis()
</style>
