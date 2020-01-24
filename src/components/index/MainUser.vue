<template>
  <div class="user-container">
    <div class="user-box">
      <img src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt />
      <h2>Hi！你好</h2>
      <div class="btn" @click="goto('/register')">注册</div>
      <div class="btn" @click="goto('/login')">立即登录</div>
    </div>
    <div class="app-share">
      <img src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt />
      <div class="bottom-title">美团APP手机版</div>
      <div class="bottom">
        <span>1元起</span>吃喝玩乐
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainUser",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    goto(item) {
      this.$router.push(item);
    }
  },
  mounted() {},
  filters: {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.user-container {
  width: 230px;
  height: 417px;
  margin-top: 10px;
  margin-left: 10px;
  .user-box {
    background: white;
    width: 230px;
    height: 240px;
    text-align: center;
    border: 1px solid #e5e5e5;
    img {
      margin-top: 30px;
      width: 47px;
      border-radius: 50%;
      border: 4px solid #e5e5e5;
    }
    .btn {
      width: 118px;
      margin: 12px auto;
      line-height: 38px;
      border-radius: 19px;
      border: 1px solid #e5e5e5;
      cursor: pointer;
    }
  }
  .app-share {
    background: white;
    margin-top: 10px;
    width: 230px;
    height: 167px;
    text-align: center;
    border: 1px solid #e5e5e5;
    img {
      margin-top: 10px;
      width: 95px;
    }
    .bottom-title {
      font-weight: 700;
    }
    .bottom {
      font-size: 12px;
      span {
        color: red;
      }
    }
  }
}
</style>