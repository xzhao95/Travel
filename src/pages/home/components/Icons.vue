<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <div class="icon" v-for="icon of item.icons" :key="icon.id">
            <div class="icon-img">
              <img :src="icon.iconUrl" alt="">
            </div>
            <p class="icon-desc">{{icon.iconDesc}}</p>
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      iconList: [{
        id: 1001,
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        iconDesc: '景点门票'
      }, {
        id: 1002,
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
        iconDesc: '亲子游'
      }, {
        id: 1003,
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        iconDesc: '金华必游'
      }, {
        id: 1004,
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        iconDesc: '踏青赏花'
      }, {
        id: 1005,
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        iconDesc: '一日游'
      }, {
        id: 1006,
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        iconDesc: '秦王宫'
      }, {
        id: 1007,
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/8c/47630407f70e8302.png',
        iconDesc: '横店影视城'
      }, {
        id: 1008,
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        iconDesc: '圆明新园'
      }, {
        id: 1009,
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
        iconDesc: '虎踞峡'
      }]
    }
  },
  computed: {
    swiperList () {
      let list = []
      let start = 1
      for (let i = 0; i < this.iconList.length; i += 8) {
        list.push({
          id: start++,
          icons: this.iconList.slice(i, i + 8)
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
    ellipsis()
</style>
