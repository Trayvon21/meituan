<template>
  <div class="detail-container">
    <div class="detail-top">
      <a href="/">{{$store.state.city}}美团</a>&gt;
      <a href>{{$store.state.city}}</a>&gt;
      <a @click="goResult()">{{$route.query.id}}</a>
    </div>
    <div class="detail-main">
      <div class="detail-left">
        <div class="detail-title">{{detailData.name}}</div>
        <div class="detail-rate" v-if="detailData.biz_ext">
          <Rate disabled show-text :v-model="detailData.biz_ext.rating*1" />
          <span class="commit">0人评论</span>
          <span v-if="detailData.biz_ext.cost>0">人均￥{{detailData.biz_ext.cost}}</span>
          <span v-else>暂无数据</span>
        </div>
        <div>地址：{{detailData.address}}</div>
        <div>电话：{{detailData.tel}}</div>
      </div>
      <div class="detail-right">
        <div></div>
        <!-- <img :src="detailData.photos[0].url" alt /> -->
      </div>
    </div>
    <div id="maps"></div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {},
  data() {
    return {
      detailData: []
    };
  },
  components: {},
  methods: {
    getProducts() {
      this.$api
        .getProducts(this.$route.query.id, this.$route.query.city)
        .then(res => {
          if (res.code === 200) {
            this.detailData = res.data.product;
            let localtion = this.detailData.entr_location.split(",");
            let _this = this;

            AMap.plugin("AMap.PlaceSearch", function() {
              var marker = new AMap.Marker({
                content: '<div class="marker" >' + +"</div>",
                position: [localtion[0], localtion[1]],
                map: map,
                label: {
                  offset: new AMap.Pixel(20, 20), //修改label相对于maker的位置
                  content: _this.detailData.name
                }
              });
              marker.id = _this.detailData.id;
              marker.name = _this.detailData.name;
              marker.on("click", function() {
                map.poiOnAMAP({
                  name: this.name,
                  location: this.getPosition(),
                  id: this.id
                });
              });
              map.setFitView();
            });
          }
        });
    },
    goResult() {
      this.$router.push({
        name: "result",
        params: { name: this.$route.query.id }
      });
    }
  },
  mounted() {
    this.getProducts();
    var map = new AMap.Map("maps", {
      zoom: 10
    });
  },
  filters: {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.detail-container {
  width: 1190px;
  margin: 0 auto;
  .detail-top {
    width: 100%;
    height: 20px;
    margin: 10px;
  }
  .detail-main {
    font-size: 12px;
    color: #666;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 20px 33px;
    border: 1px solid #e5e5e5;
    box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.1);
    .detail-title {
    }
  }
}
#maps {
  width: 222px;
  height: 222px;
  background: white;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
}
</style>