<template>
  <div class="header-bg">
    <div class="header">
      <index-city class="index-city" />
      <div class="user-control">
        <div class="login" @click="$router.push('/login')">立即登录</div>
        <div class="register" @click="$router.push('/register')">注册</div>
      </div>
      <div class="right-nav">
        <div @click="msg" class="nav">
          <span>我的美团</span>
          <ul class="detail">
            <li>我的订单</li>
            <li>我的收藏</li>
            <li>抵用券</li>
            <li>账户设置</li>
          </ul>
        </div>
        <div @click="msg">
          <span>手机APP</span>
        </div>
        <div @click="msg" class="nav">
          <span>商家中心</span>
          <ul class="detail">
            <li>美团餐饮商户中心</li>
            <li>登录商家中心</li>
            <li>美团智能收银</li>
            <li>我想合作</li>
            <li>手机免费开店</li>
            <li>餐饮代理商招募</li>
            <li>商家申请开票</li>
            <li>免费合作美团排队</li>
          </ul>
        </div>
        <div @click="msg" class="nav">
          <span>美团规则</span>
          <ul class="detail">
            <li>规则中心</li>
            <li>规则目录</li>
            <li>规则评议员</li>
          </ul>
        </div>
        <div @click="msg" class="nav">
          <span>网站导航</span>
          <div class="navigator">
            <div style="width:270px">
              <div class="navigator-title">酒店旅游</div>
              <div class="navigator-desc">
                <div>国际机票</div>
                <div>火车票</div>
                <div>民宿</div>
                <div>经济型酒店</div>
                <div>主题酒店</div>
                <div>商务酒店</div>
                <div>公寓</div>
                <div>豪华酒店</div>
                <div>客栈</div>
                <div>青年旅社</div>
                <div>度假酒店</div>
                <div>别墅</div>
                <div>农家院</div>
              </div>
            </div>
            <div style="width:180px">
              <div class="navigator-title">吃美食</div>
              <div class="navigator-desc">
                <div>烤鱼</div>
                <div>特色小吃</div>
                <div>烧烤</div>
                <div>自助餐</div>
                <div>火锅</div>
                <div>代金券</div>
              </div>
            </div>
            <div style="width:90px">
              <div class="navigator-title">看电影</div>
              <div class="navigator-desc">
                <div>热映电影</div>
                <div>热门影院</div>
                <div>热映电影口碑榜</div>
                <div>最受期待电影</div>
                <div>国内票房榜</div>
                <div>北美票房榜</div>
                <div>电影排行榜</div>
              </div>
            </div>
            <div>
              <div class="navigator-title">手机应用</div>
              <div class="navigator-desc">
                <img
                  src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                  alt
                />
                <img
                  src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                  alt
                />
                <img
                  src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                  alt
                />
                <img
                  src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                  alt
                />
                <img
                  src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-content-bg">
      <div class="header-content">
        <div class="header-logo">
          <img
            @click="gotoHome"
            src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
            alt
          />
        </div>
        <headers-search></headers-search>
      </div>
    </div>
  </div>
</template>

<script>
import indexCity from "./HeaderCity";
import headersSearch from "../HeadersSearch";
export default {
  data() {
    return {
     
    };
  },
  props: {},
  components: { indexCity,headersSearch },
  methods: {
    gotoHome() {
      if (this.$route.path === "/") {
        this.$router.go(0);
      } else {
        this.$router.push("/");
      }
    },
    msg() {
      this.$Message.error({
        content: "功能开发中，敬请期待!"
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.header-bg {
  height: 197px;
  .header {
    max-width: 1200px;
    min-width: 1080px;
    height: 40px;
    margin: 0 auto;
    display: flex;
    font-size: 12px;
    line-height: 20px;
    padding: 10px;
    position: relative;
    .index-city {
      width: 220px;
      height: 20px;
    }
    .user-control {
      display: flex;
      div {
        padding: 0 10px;
        cursor: pointer;
      }
      .login {
        color: #fc9a50;
      }
      .register:hover {
        color: #fc9a50;
      }
    }
    .right-nav {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      > div {
        text-align: center;
        width: 78px;
        height: 40px;
        line-height: 40px;
        position: relative;
        cursor: pointer;
        .detail {
          display: none;
          white-space: nowrap;
          padding: 0 5px;
          z-index: 100;
          background: white;
          top: 40px;
          position: absolute;
          min-width: 78px;
        }
      }
      .nav {
        position: relative;
        .detail {
          position: absolute;
          right: 0;
          // display: none;
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          li:hover {
            color: #fc9a50;
          }
        }
        .navigator {
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
          background: white;
          z-index: 99;
          width: 1200px;
          height: 300px;
          border-top-left-radius: 4px;
          padding: 30px 36px 36px 47px;
          position: absolute;
          right: 0;
          display: none;
          justify-content: space-between;
          .navigator-title {
            text-align: center;
            font-weight: 800;
            color: black;
          }
          .navigator-desc {
            display: flex;
            flex-wrap: wrap;
            > div {
              width: 90px;
              height: 30px;
            }
            > div:hover {
              color: #fc9a50;
            }
            img {
              width: 60px;
            }
          }
        }
      }
      .nav:hover {
        background: white;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        .detail {
          display: block;
        }
        .navigator {
          display: flex;
        }
      }
      div:hover span {
        color: #fc9a50;
      }
    }
  }
  .header-content-bg {
    background: white;
    height: 157px;
    box-shadow: 1px 1px 5px rgb(236, 236, 236);
    .header-content {
      max-width: 1200px;
      min-width: 1080px;
      margin: 0 auto;
      display: flex;
      .header-logo {
        width: 280px;
        padding: 28px 60px 40px 0;
        img {
          height: 46px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>