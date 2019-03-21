<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
          <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <img class="item-img" :src="item.imgUrl" alt="">
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
              <button class="item-button">查看详情</button>
            </div>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/bf/bf2928e78e339573a3.img.jpg_200x200_87267e0a.jpg',
        title: '横店梦幻谷',
        desc: '横店梦幻谷'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/bf/bf2928e78e339573a3.img.jpg_200x200_87267e0a.jpg',
        title: '横店梦幻谷',
        desc: '横店梦幻谷'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/bf/bf2928e78e339573a3.img.jpg_200x200_87267e0a.jpg',
        title: '横店梦幻谷',
        desc: '横店梦幻谷'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/bf/bf2928e78e339573a3.img.jpg_200x200_87267e0a.jpg',
        title: '横店梦幻谷',
        desc: '横店梦幻谷'
      }, {
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/bf/bf2928e78e339573a3.img.jpg_200x200_87267e0a.jpg',
        title: '横店梦幻谷',
        desc: '横店梦幻谷'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/mixins.styl';
.recommend-title
  line-height .8rem
  background-color #eeeeee
  margin-top .2rem
  text-indent .2rem
.item
  overflow hidden
  display flex
  height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color: #cccccc
      ellipsis()
    .item-button
      line-height .44rem
      margin-top .16rem
      background #ff9300
      padding 0 .1rem
      border-radius .06rem
      color #ffffff
</style>
