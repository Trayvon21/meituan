<template>
  <div>
    <mian-nav />
    <haveStyle />
  </div>
</template>

<script>
import mianNav from "../../components/index/MainNav";
import haveStyle from "../../components/index/HaveStyle";
export default {
  data() {
    return {};
  },
  props: {},
  components: { mianNav, haveStyle },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
  beforeRouteEnter(to, from, next) {
    if (from.name === "city"||from.name === "detail"||from.name === "result") {
      next(vm => {
        vm.$router.go(0);
      });
    } else {
      next();
    }
  }
};
</script>

<style scoped lang='scss'>
</style>