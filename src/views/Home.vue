<template>
  <div class="container">
    <headers />
    <mian-nav />
  </div>
</template>

<script>
import headers from "../components/common/Headers";
import mianNav from "../components/common/MainNav";
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
    headers,mianNav
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