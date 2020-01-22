<template>
  <div class="header-city">
    <div>
      <Icon type="ios-pin" size="16" />
    </div>
    <div class="city">{{city}}</div>
    <div class="citys-replace" @click="goto()">切换城市</div>
    <div class="citys-near">
      <div v-for="item in nearList" :key="item.id" @click="changeCity(item.name)">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import service from "../../http";
export default {
  data() {
    return {
      nearData: []
    };
  },
  props: {},
  components: {},
  methods: {
    //获取当前城市
    getCity() {
      let city = "";
      let province = "";
      if (localStorage.getItem("city")) {
        let obj = JSON.parse(localStorage.getItem("city"));
        province = obj.province;
        city = obj.city;
        this.$store.state.city = city;
        this.getProvince(province);
      } else {
        this.$api.getPosition().then(res => {
          if (res.code === 200) {
            city = JSON.parse(res.data).city;
            city = city.substr(0, city.length - 1);
            province = JSON.parse(res.data).province;
            localStorage.setItem(
              "city",
              JSON.stringify({
                city: city,
                province: province
              })
            );
            this.$store.state.city = city;
            this.getProvince(province);
          }
        });
      }
    },
    //获取省市
    getProvince(province) {
      this.$api.getProvince(province).then(res => {
        if (res.code === 200) {
          let provinceId = res.data.province.filter((item, index) =>
            JSON.stringify(item).includes(province)
          )[0].id;
          this.getCities(provinceId);
        }
      });
    },
    //获取城市列表
    getCities(provinceId) {
      this.$api.getCities(provinceId).then(res => {
        if (res.code === 200) {
          this.$store.state.cities = res.data.city;
          this.$store.state.cities.map(item => {
            item.name = item.name.substr(0, item.name.length - 1);
          });
          this.setNearCity(this.$store.state.city);
        }
      });
    },
    //设置附近城市
    setNearCity(city) {
      let count = 0;
      let obj = JSON.parse(localStorage.getItem("city"));
      obj.city = city;
      localStorage.setItem("city", JSON.stringify(obj));
      this.$store.state.cities.map((item, index) => {
        if (item.name.includes(city)) {
          count = index;
        }
      });
      if (count === 0) {
        this.nearData = this.$store.state.cities.slice(0, 4);
      } else if (this.$store.state.cities.length - count < 4) {
        this.nearData = this.$store.state.cities.slice(
          this.$store.state.cities.length - 4,
          this.$store.state.cities.length
        );
      } else {
        this.nearData = this.$store.state.cities.slice(count - 1, count + 3);
      }
      this.getSearchHotPlace();
    },
    changeCity(city) {
      this.$store.state.city = city;
      this.setNearCity(city);
      this.$router.go(0);
    },
    getSearchHotPlace() {
      this.$api.searchHotPlace(this.$store.state.city).then(res => {
        if (res.code === 200) {
          this.$store.state.hotPlace = res.data.result.slice(0, 10);
        }
      });
    },
    goto() {
      if (this.$route.path === "/city") {
        this.$router.go(0);
      } else {
        this.$router.push("/city");
      }
    }
  },
  mounted() {
    this.getCity();
  },
  updated() {},
  watch: {
    city(val) {
      this.getCity();
    }
  },
  computed: {
    city() {
      return this.$store.state.city;
    },
    nearList() {
      return this.nearData.filter(item => item.name !== this.city);
    }
  }
};
</script>

<style scoped lang='scss'>
.header-city {
  display: flex;
  .citys-replace {
    margin: 0 4px;
    padding: 0 2px;
    cursor: pointer;
    border: 1px solid rgb(219, 219, 219);
    line-height: 18px;
  }
  .city {
    width: 25px;
    overflow: hidden;
  }
  .citys-near {
    display: flex;
    margin: 0 4px;
    padding: 0 2px;
    div {
      cursor: pointer;
      margin: 0 2px;
      color: gray;
      width: 25px;
      overflow: hidden;
    }
    div:hover {
      color: #fc9a50;
    }
  }
  .citys-replace:hover {
    color: #fc9a50;
  }
}
</style>