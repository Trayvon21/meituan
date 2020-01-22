<template>
  <div class="container">
    <headers />
    <router-view></router-view>
    <footers></footers>
  </div>
</template>

<script>
import headers from "../components/common/Headers";
import footers from "../components/common/Footers";

export default {
  data() {
    return {
      province: "",
      city: "",
      ip: ""
    };
  },
  props: {},
  components: {
    headers,
    footers
  },
  methods: {
    getPosition() {
      this.$api.getPosition().then(res => {
        if (res.code === 200) {
          let list = JSON.parse(res.data);
          this.province = list.province;
          this.city = list.city;
          this.ip = list.ip;
        }
      });
    }
  },
  mounted() {
    this.getPosition();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  width: 100%;
  background: rgb(248, 248, 248);
}
</style>