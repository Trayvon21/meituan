<template>
  <div class="header-city">
    <div>
      <Icon type="ios-pin" size="16" />
    </div>
    <div>{{city='成都'}}</div>
    <div class="citys-replace">切换城市</div>
    <div class="citys-near">
      <div>{{city='成都'}}</div>
      <div>{{city='成都'}}</div>
      <div>{{city='成都'}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {},
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.header-city {
  display: flex;
  .citys-replace {
    margin: 0 4px;
    padding: 0 2px;
    cursor: pointer;
    border: 1px solid rgb(219, 219, 219);
    line-height: 18px;
  }

  .citys-near {
    display: flex;
    margin: 0 4px;
    padding: 0 2px;
    div {
      cursor: pointer;
      margin: 0 2px;
      color: gray;
    }
    div:hover {
      color: #fc9a50;
    }
  }
  .citys-replace:hover {
    color: #fc9a50;
  }
}
</style>