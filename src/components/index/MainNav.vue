<template>
  <div class="mainNav-bg">
    <div class="mainNav-all">
      <div class="mainNav-top">全部分类</div>
      <ul class="sidebar">
        <li
          class="sidebar-each"
          v-for="item in menu"
          :key="item.id"
          @mouseenter="showOn(item)"
          @mouseleave="showList=[]"
        >
          <i :style="{color:item.color}" class="iconfont" :class="`icon-${item.type}`"></i>
          {{item.name}}
          <span class="sidebar-right">&gt;</span>
          <div class="sidebar-nav" v-if="showList===item.child">
            <div class="nav-main" v-for="items in item.child" :key="items.id">
              <div class="nav-title">
                <div>{{items.title}}</div>
                <span class="title-right">更多&gt;</span>
              </div>
              <Divider class="divider" />
              <div class="nav-childs">
                <div v-for="childs in items.child" :key="childs.id" class="childs-each" @click="$goResult(childs)">{{ childs }}</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="nav-link">
      <div v-for="item in navLink" :key="item.id">{{item.name}}</div>
    </div>
    <main-slideshow />
    <div class="shandow-pic">
      <div>
        <img src="//p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt />
      </div>
      <div>
        <img src="//p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt />
      </div>
    </div>
    <main-user></main-user>
  </div>
</template>

<script>
import mainSlideshow from "./MainSlideshow";
import mainUser from "./MainUser";
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
      childs: {},
      showList: []
    };
  },
  props: {},
  components: {
    mainSlideshow,
    mainUser
  },
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
    showOn(item) {
      this.showList = item.child;
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
  max-width: 1190px;
  margin: 0 auto;
  position: relative;
  display: flex;
  margin-bottom:25px;
  .mainNav-all {
    border: 1px solid rgb(226, 226, 226);
    background: white;
    width: 228px;
    height: 475px;
    margin-top: -50px;
    z-index: 11;
    .mainNav-top {
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
        &:nth-child(1) {
          margin-top: 5px;
        }
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
        .sidebar-nav {
          background: white;
          width: 400px;
          height: 416px;
          position: absolute;
          bottom: 15px;
          left: 228px;
          padding: 30px;
          .nav-main {
            width: 340px;
            .nav-title {
              width: 340px;
              margin: 10px 0;
              position: relative;
              .title-right {
                position: absolute;
                right: 0;
                top: 0;
              }
            }
            .divider {
              margin: 8px 0;
            }
            .nav-childs {
              width: 360px;
              font-size: 12px;
              display: flex;
              flex-wrap: wrap;
              color: #666;
              .childs-each {
                height: 20px;
                margin: 10px 16px 0 0;
              }
              .childs-each:hover {
                color: #fe8c00;
              }
            }
          }
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
    top: -50px;
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
  .shandow-pic {
    width: 150px;
    div {
      margin: 10px 0;
      width: 150px;
      &:nth-child(1) {
        height: 240px;
      }
    }
    img {
      width: 150px;
    }
  }
}
</style>