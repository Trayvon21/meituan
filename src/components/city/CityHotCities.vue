<template>
  <div class="hotcity-box">
    <div>热门城市：</div>
    <div
      v-for="item in hostCities"
      :key="item.id"
      class="hotcity"
      @click="$emit('changeCity',item)"
    >{{ item }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    hostCities: {
      type: Array,
      default: () => []
    }
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.hotcity-box {
  display: flex;
  .hotcity {
    margin: 0 20px;
    cursor: pointer;
  }
}
</style>