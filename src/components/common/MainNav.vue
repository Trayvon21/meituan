<template>
  <div class="mainNav-bg">
    <div class="mainNav-all">
      <div>全部分类</div>
      <ul class="sidebar">
        <li></li>
      </ul>
    </div>
    <div class="nav-link">
      <div v-for="item in navLink" :key="item.id">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLink: [
        { name: "美团外卖" },
        { name: "猫眼电影" },
        { name: "美团酒店" },
        { name: "民宿/公寓" },
        { name: "商家入驻" },
        { name: "美团公益" }
      ]
    };
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
.mainNav-bg {
  min-width: 1080px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: -50px;
  position: relative;
  .mainNav-all {
    border: 1px solid rgb(226, 226, 226);
    background: white;
    width: 228px;
    height: 475px;
    div {
      font-size: 16px;
      padding-top: 15px;
      margin-left: 15px;
      height: 50px;
      color: #222222;
      font-weight: 700;
    }
    .sidebar {
      width: 228px;
      height: 425px;
    }
  }
  .nav-link {
    position: absolute;
    top: 0;
    width: 660px;
    margin-left: -330px;
    left: 50%;
    display: flex;
    div {
      cursor: pointer;
      padding-top: 15px;
      width: 70px;
      height: 21px;
      margin: 0 20px;
      height: 50px;
      font-size: 16px;
      color: #222222;
      font-weight: 700;
    }
  }
}
</style>