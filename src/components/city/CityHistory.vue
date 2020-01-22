<template>
  <div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      citiesList: []
    };
  },
  props: {},
  components: {
    cityBySearch,
    cityHotCities
  },
  methods: {
    changeCity(item) {
      localStorage.setItem("city", item);
      this.$store.state.city = item;
      this.$router.push("/");
    }
  },
  mounted() {
  
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>