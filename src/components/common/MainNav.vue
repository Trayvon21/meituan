<template>
  <div class="mainNav-bg">
    <div class="mainNav-all">
      <div>全部分类</div>
      <ul class="sidebar">
        <li class="sidebar-each" v-for="item in menu" :key="item.id" @mouseenter="show(item)" @mouseleave="childs={}">
          <i :style="{color:item.color}" class="iconfont" :class="`icon-${item.type}`"></i>
          {{item.name}}
          <span class="sidebar-right">&gt;</span>
        </li>
      </ul>
    </div>
    <div class="sidebar-nav" v-if="childs.title">
      <div class="nav-title">
        {{title}}
        <span class="title-right"></span>
      </div>
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
      ],
      menu: [],
      setColor: [
        "#FF8200",
        "#FFC63B",
        "#9B5E3E",
        "#FFB500",
        "#FF3D00",
        "#50C3F7",
        "#00BF96",
        "#00BF96",
        "#FF4081",
        "#FF4081",
        "#FF4081",
        "#03A9F4",
        "#00BF96",
        "#00BF96",
        "#03A9F4",
        "#00BF96"
      ],
      childs: {}
    };
  },
  props: {},
  components: {},
  methods: {
    getMenuData() {
      this.$api.getMenu().then(res => {
        if (res.code === 200) {
          this.menu = res.data.menu;
          this.menu.map((item, index) => {
            item.color = this.setColor[index];
          });
        }
      });
    },
    show(item) {
      this.childs = item.child;
    }
  },
  mounted() {
    this.getMenuData();
  },
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
      .sidebar-each {
        height: 26px;
        padding: 2px 12px;
        cursor: pointer;
        color: #646464;
        i {
          margin-right: 12px;
        }
        .sidebar-right {
          float: right;
        }
      }
      .sidebar-each:hover {
        background: rgb(255, 247, 235);
        color: black;
      }
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