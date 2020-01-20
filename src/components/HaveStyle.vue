<template>
  <div class="style-container">
    <ul class="style-title">
      <li class="active">有格调</li>
      <li>全部</li>
      <li>约会聚餐</li>
      <li>丽人SPA</li>
      <li>电影演出</li>
      <li>品质出游</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HaveStyle",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  filters: {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.style-container {
  width: 1190px;
  margin: 0 auto;
}
.style-title {
  display: flex;
  height: 44px;
  width: 100%;
  background: rgb(190, 164, 116);
  border-radius: 5px 5px 0 0;
  line-height: 44px;
  li {
    padding: 0 5px;
    color: white;
    cursor: pointer;
    &:nth-child(1) {
      font-size: 18px;
      margin-left: 13px;
      margin-right: 10px;
    }
    active {
      ::after {
        position: absolute;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 7px solid #fff;
        content: " ";
        display: block;
        width: 2px;
        height: 0;
        top: 37px;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }
}
</style>