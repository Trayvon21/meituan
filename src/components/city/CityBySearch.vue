<template>
  <div class="search-container">
    <div>按省份查询</div>
    <Select v-model="province" style="width:150px" @on-change="getCitiesList" placeholder="省份">
      <Option v-for="item in provincesList" :value="item.id" :key="item.id">{{ item.name }}</Option>
    </Select>
    <Select v-model="city" style="width:150px" @on-change="changeCity(city)" placeholder="城市">
      <Option v-for="item in citiesList" :value="item.name" :key="item.id">{{ item.name }}</Option>
    </Select>
    <div>直接搜索</div>
    <div class="fuzzy-search">
      <Input
        v-model="cityValue"
        placeholder="请输入城市中文或拼音"
        style="width: 220px;margin-left:10px;"
        @on-focus="showFlag=true"
        @on-blur="showFlags()"
      />
      <div class="fuzzy-box" v-if="searchCitiesList.length > 0 && showFlag">
        <div
          class="fuzzy-reslut"
          v-for="item in showCitiesList"
          @click="selectCity(item.name)"
          :key="item.id"
        >{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityBySearch",
  props: {
    searchCitiesList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      province: "",
      provincesList: [],
      city: "",
      citiesList: [],
      showFlag: false,
      cityValue: ""
    };
  },
  components: {},
  methods: {
    // 获取省列表
    getProvincesList() {
      this.$api.getProvince().then(res => {
        if (res.code === 200) {
          console.log(res);
          this.provincesList = res.data.province;
        }
      });
    },
    // 获取城市列表
    getCitiesList() {
      this.$api.getCities(this.province).then(res => {
        this.citiesList = res.data.city;
      });
    },
    // 改变城市
    changeCity(item) {
      item = item.substr(0, item.length - 1);
      this.$emit("changeCity", item);
    },
    showFlags() {
      setTimeout(() => {
        this.showFlag = false;
      }, 500);
    },
    selectCity(city) {
      this.cityValue = city;
      sessionStorage.setItem("city", city);
      this.$store.state.city = city;
      this.$router.push("/");
    }
  },
  mounted() {
    this.getProvincesList();
  },
  filters: {},
  watch: {},
  computed: {
    showCitiesList() {
      return this.searchCitiesList.filter(item =>
        JSON.stringify(item).includes(this.cityValue)
      );
    }
  }
};
</script>

<style scoped lang='scss'>
.search-container {
  display: flex;
}
.fuzzy-search {
  position: relative;
}
.fuzzy-box {
  position: absolute;
  top: 45px;
  left: 78px;
  z-index: 99;
  min-width: 150px;
  max-height: 375px;
  padding: 0 20px 0 15px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  .fuzzy-reslut {
    min-width: 40px;
    height: 20px;
    padding: 1px 8px;
    margin: 6px 38px 6px 0;
    line-height: 20px;
    color: #222;
    font-weight: 500;
    font-size: 12px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>