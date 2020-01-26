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
      if (sessionStorage.getItem("city")) {
        this.$store.state.city = sessionStorage.getItem("city");
        this.getProvince(sessionStorage.getItem("city"));
        console.log(1);
      } else {
        this.$api.getPosition().then(res => {
          if (res.code === 200) {
            let city = JSON.parse(res.data).city;
            city = city.substr(0, city.length - 1);
            sessionStorage.setItem("city", city);
            this.$store.state.city = city;
            this.getProvince(city);
            console.log(2,city);
          }
        });
      }
    },
    //获取省市
    getProvince(city) {
      this.$api.relateProvince().then(res => {
        if (res.code === 200) {
          let cityId = res.data.city.filter(item =>
            JSON.stringify(item).includes(city)
          )[0].id;
          let provinceId = cityId.substr(0, 2) + "0000";
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
      sessionStorage.setItem("city", city);
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
  watch: {},
  computed: {
    city() {
      return this.$store.state.city;
    },
    nearList() {
      return this.nearData.filter(item => !item.name.includes(this.city));
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