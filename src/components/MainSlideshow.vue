<template>
  <div class="middle">
    <Carousel
      class="carousel-container"
      v-model="value3"
      :autoplay="setting.autoplay"
      :autoplay-speed="setting.autoplaySpeed"
      :dots="setting.dots"
      :radius-dot="setting.radiusDot"
      :trigger="setting.trigger"
      :arrow="setting.arrow"
    >
      <CarouselItem v-for="item in images" :key="item.id" class="carousel-item">
        <img :src="item" alt />
      </CarouselItem>
    </Carousel>
    <div class="bottom-pic">
      <img src="//p0.meituan.net/codeman/843d7347cb20d945e4bc39b6403f0515182965.png" alt />
      <img src="//p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSlideshow",
  props: {},
  data() {
    return {
      images: [
        "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
      ],
      value3: 0,
      setting: {
        autoplay: false,
        autoplaySpeed: 2000,
        dots: "inside",
        radiusDot: false,
        trigger: "click",
        arrow: "hover"
      }
    };
  },
  components: {},
  methods: {},
  mounted() {},
  filters: {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.middle {
  margin: 10px;
}
.carousel-container {
  width: 550px;
  height: 240px;
  .carousel-item {
    img {
      width: 550px;
      height: 240px;
    }
  }
}
.bottom-pic {
  img {
    margin-top: 10px;
    width: 270px;
    height: 165px;
    &:nth-child(1) {
      margin-right: 10px;
    }
  }
}
</style>