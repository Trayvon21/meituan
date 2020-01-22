<template>
  <div class="city-container">
    <city-by-search :searchCitiesList="citiesList" />
  </div>
</template>

<script>
import cityBySearch from "../../components/city/CityBySearch";
import $city from "../../js/city";
export default {
  data() {
    return {
      citiesList: []
    };
  },
  props: {},
  components: {
    cityBySearch
  },
  methods: {
    getHotCity() {}
  },
  mounted() {
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