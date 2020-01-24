<template>
  <div class="result-container">
    <div class="result-top">
      <a href="/">{{$store.state.city}}美团</a>&gt;
      <a href>{{$store.state.city}}{{keyWord}}</a>
    </div>
    <div class="result-main">
      <div class="result-left">
        <div>
          <!-- <div>{{ item }}</div> -->
          <result-box v-for="item in pois" :key="item.id" :item="item"></result-box>
        </div>
      </div>
      <div id="maps"></div>
    </div>
  </div>
</template>

<script>
import resultBox from "../../components/result/ResultBox";
export default {
  name: "Result",
  props: {},
  data() {
    return { keyWord: "", pois: [] };
  },
  components: { resultBox },
  methods: {},
  mounted() {
    this.keyWord = this.$route.params.name;
    let _this = this;
    var map = new AMap.Map("maps", {
      zoom: 10
    });
    AMap.plugin("AMap.PlaceSearch", function() {
      _this.$api
        .searchResults(_this.$store.state.city, _this.keyWord)
        .then(res => {
          if (res.code === 200) {
            _this.pois = res.data.pois;
            _this.pois.map((item, index) => {
              let count = item.location.split(",");
              item.location = count;
            });
            map.setZoomAndCenter(14, _this.pois[0].location);
            for (var i = 0; i < _this.pois.length; i += 1) {
              var marker = new AMap.Marker({
                content: '<div class="marker" >' + (i + 1) + "</div>",
                position: _this.pois[i].location,
                map: map,
                label: {
                  offset: new AMap.Pixel(20, 20), //修改label相对于maker的位置
                  content: _this.pois[i].name
                }
              });
              marker.id = _this.pois[i].id;
              marker.name = _this.pois[i].name;
              marker.on("click", function() {
                map.poiOnAMAP({
                  name: this.name,
                  location: this.getPosition(),
                  id: this.id
                });
              });
            }
            map.setFitView();
          }
        });
    });
    // map.addControl(new AMap.ToolBar());
  },
  updated() {},
  filters: {},
  watch: {
    $route(val) {
      this.$router.go(0);
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.result-container {
  width: 1190px;
  margin: 0 auto;
  .result-top {
    width: 100%;
    height: 20px;
    margin: 10px;
  }
  .result-main {
    display: flex;
    justify-content: space-between;
  }
}
.result-left {
  width: 950px;
  border: 1px solid #e5e5e5;
  background: white;
  border-radius: 5px;
}
#maps {
  width: 222px;
  height: 222px;
  background: white;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
}
/deep/.marker {
  position: absolute;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: #fff;
  box-shadow: 1px 1px 1px rgba(10, 10, 10, 0.2);
  font-size: 12px;
  background-color: #25a5f7;
  border-radius: 50%;
}
/deep/.amap-marker-label {
  display: none;
}
</style>