<template>
  <div class="detail-container">
    <div class="detail-top">
      <a href="/">{{$store.state.city}}美团</a>&gt;
      <a href>{{$store.state.city}}</a>&gt;
      <a @click="goResult()">{{$route.query.id}}</a>
    </div>
    <div class="detail-main"></div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    getProducts() {
      this.$api
        .getProducts(this.$route.query.id, this.$route.query.city)
        .then(res => {
          res.data.product;
          console.log(res.data.product);
        });
    },
    goResult() {
      this.$router.push({
        name: "result",
        params: { name: this.$route.query.id }
      });
    }
  },
  mounted() {
    this.getProducts();
  },
  filters: {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.detail-container {
  width: 1190px;
  margin: 0 auto;
  .detail-top {
    width: 100%;
    height: 20px;
    margin: 10px;
  }
  .detail-main {
    font-size: 12px;
    color: #666;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 20px 33px;
    border: 1px solid #e5e5e5;
    box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>