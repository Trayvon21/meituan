<template>
  <div>
    <mian-nav />
    <haveStyle />
  </div>
</template>

<script>
import mianNav from "../../components/MainNav";
import haveStyle from "../../components/HaveStyle";
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
    if (from.name === "city") {
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