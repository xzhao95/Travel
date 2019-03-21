<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  methods: {
    callback () {}
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    },
    swiperList () {
      return this.list
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background-color: #fff !important
.wrapper
  width: 100%
  overflow: hidden
  height: 0
  padding-bottom: 26.75%
  background-color: #ccc
  .swiper-img
    width:100%
</style>
