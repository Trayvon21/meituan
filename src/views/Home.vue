<template>
  <div class="container">
    <headers />
    <router-view></router-view>
  </div>
</template>

<script>
import headers from "../components/common/Headers";

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
    headers
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