<template>
  <div class="result-container">
    <div class="result-top">
      <a href="/">{{$store.state.city}}美团</a>&gt;
      <a href>{{$store.state.city}}{{keyWord}}</a>
    </div>
    <div class="result-main">
      <div class="result-left">
        <div class="result-rank">
          <div @click="autoRank">智能排序</div>
          <div>
            <div @click="priceRank">
              <span :style="!auto?'font-weight:700;':''">{{auto?'价格排序':price?'价格最低':'价格最高'}}</span>
              <div class="rank-btn">
                <span :class="!auto&&price?'bottom-black':''" class="top"></span>
                <span :class="!auto&&!price?'top-black':''" class="bottom"></span>
              </div>
            </div>
          </div>
          <div @click="hotRank" :style="hot?'font-weight:700;':''">人气最高</div>
          <div @click="commitRank" :style="commit?'font-weight:700;':''">评价最高</div>
        </div>
        <div class="divider">
          <Divider />
        </div>
        <result-box
          v-for="item in showPois"
          :key="item.id"
          :item="item"
        ></result-box>
      </div>
      <div>
        <div id="maps"></div>
        <div class="youLike">
          <div>猜你喜欢</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import resultBox from "../../components/result/ResultBox";
export default {
  name: "Result",
  props: {},
  data() {
    return {
      keyWord: "",
      pois: [],
      showPois: [],
      auto: true,
      price: true,
      hot: false,
      commit: false
    };
  },
  components: { resultBox },
  methods: {
    autoRank() {
      this.auto = true;
      this.price = true;
      this.hot = false;
      this.commit = false;
    },
    priceRank() {
      this.auto = false;
      this.price = !this.price;
      this.hot = false;
      this.commit = false;
    },
    hotRank() {
      this.auto = true;
      this.price = true;
      this.hot = true;
      this.commit = false;
    },
    commitRank() {
      this.auto = true;
      this.price = true;
      this.hot = false;
      this.commit = true;
    }
  },
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
            _this.showPois = _this.pois;
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
  .result-rank {
    display: flex;
    padding: 15px 20px 2px;

    > div {
      width: 96px;
      height: 20px;
      display: inline-block;
      .rank-btn {
        display: inline-block;
        position: relative;
        width: 10px;
      }
      .top {
        position: absolute;
        border: 3.2px solid transparent;
        display: block;
        height: 0;
        right: 0;
        top: -12px;
        width: 0;
        border-bottom-width: 4px;
        border-bottom-color: #ccc;
      }
      .bottom {
        position: absolute;
        border: 3.2px solid transparent;
        display: block;
        height: 0;
        right: 0;
        top: -4px;
        width: 0;
        border-top-width: 4px;
        border-top-color: #ccc;
        margin-top: 1px;
      }
      .bottom-black {
        border-bottom-color: #000;
      }
      .top-black {
        border-top-color: #000;
      }
    }
  }
  .divider {
    margin: 0 20px;
    /deep/ div {
      margin: 10px 0;
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
.youLike {
  margin-top: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  background-color: #fff;
  padding: 16px 20px 0;
  height: 3000px;
  div {
    font-size: 16px;
    color: #333333;
    line-height: 22px;
    font-weight: 500;
  }
}
</style>