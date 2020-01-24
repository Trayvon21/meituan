<template>
  <div class="city-container">
    <city-by-search :searchCitiesList="citiesList" @changeCity="changeCity" />
    <Divider />
    <city-hot-cities @changeCity="changeCity" :hostCities="hostCities" />
    <Divider />
    <city-history />
    <Divider />
    <cityAZ :citiesList="Data" @changeCity="changeCity" :hostCities="hostCities" />
  </div>
</template>

<script>
import cityBySearch from "../../components/city/CityBySearch";
import cityHotCities from "../../components/city/CityHotCities";
import cityHistory from "../../components/city/CityHistory";
import cityAZ from "../../components/city/CityAZ";
import $city from "../../js/city";
export default {
  data() {
    return {
      citiesList: [],
      Data: {},
      hostCities: []
    };
  },
  props: {},
  components: {
    cityBySearch,
    cityHotCities,
    cityHistory,
    cityAZ
  },
  methods: {
    changeCity(item) {
      sessionStorage.setItem("city", item);
      this.$store.state.city = item;
      this.$router.push("/");
    },
    getHotCities() {
      this.$api.getHotCity().then(res => {
        if (res.code === 200) {
          res.data.hots.map(item => {
            if (item.name === "市辖区") {
              this.hostCities.push(
                item.province.substr(0, item.province.length - 1)
              );
            } else {
              this.hostCities.push(item.name.substr(0, item.name.length - 1));
            }
          });
        }
      });
    }
  },
  mounted() {
    this.getHotCities();
    this.Data = $city.data.cities;
    Object.keys($city.data.cities).map(item => {
      this.citiesList.push(...$city.data.cities[item]);
    });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.city-container {
  width: 1190px;
  box-sizing: border-box;
  margin: 20px auto 0;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  min-height: 1000px;
  padding: 20px;
}
</style>