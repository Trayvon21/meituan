<template>
  <div class="footer-container">
    <div class="footer-link">
      <div class="footer-col" v-for="(item,index) in footList" :key="index">
        <div class="footer-title">{{item.title}}</div>
        <ul>
          <div v-for="(detail,index) in item.details" :key="index" class="footer-detail">
            <li>
              <span>{{detail}}</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <div class="footer-beian flex">
      <div class="beian-left">
        <p>
          ©美团网团购 meituan.com
          <a href style="margin-left: 20px;margin-right: 20px;">京ICP证070791号</a>
          <a href style="margin-right: 20px;">京ICP备10211739号</a>
        </p>
        <p>广播电视节目制作经营许可证（京）字第03889号</p>
        <p>
          <a href>食品经营许可证</a>
          <a href>互联网药品信息服务资格证</a>
        </p>
        <p>
          <a href>医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</a>
        </p>
      </div>
      <div class="beian-right">
        <a href>京公网安备11010502025545号</a>
        <div class="right-img flex">
          <div class="flex">
            <img
              src="https://p1.meituan.net/travelcube/3e7f8a17e55bace814166b667618b459366061.png@76h_76w_2e"
              alt
            />
            <p>北京三快科技有限公司</p>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footers",
  props: {},
  data() {
    return {
      footList: [
        {
          title: "用户帮助",
          details: [
            "申请退款",
            "查看美团券密码",
            "常见问题",
            "用户协议",
            "隐私政策",
            "反诈骗公告",
            "消费者权益保障"
          ]
        },
        {
          title: "美团服务",
          details: [
            "美团外卖",
            "美团酒店",
            "猫眼电影",
            "美团配送",
            "美团云",
            "大众点评",
            "美团民宿",
            "无人配送"
          ]
        },
        {
          title: "商家合作",
          details: [
            "美团餐饮商户中心",
            "美食商家入驻(非外卖)",
            "美团外卖开店申请",
            "美团收银官网",
            "外卖配送加盟申请",
            "美团点评餐饮学院",
            "酒店商家入驻",
            "境内度假商家入驻",
            "综合商家入驻",
            "美团民宿房东商家入驻",
            "商家开票申请",
            "美团点评智能收银机",
            "美团点评收单",
            "美团点评餐饮开放平台",
            "免费使用美团排队",
            "快驴进货商家合作",
            "美团闪购商家入驻"
          ]
        },
        {
          title: "代理商加盟",
          details: [
            "美团外卖代理商招募",
            "到店餐饮代理商招募",
            "非餐饮代理商招募",
            "美团联盟",
            "美团收银招募线上分销商",
            "美团点评5S服务商招募",
            "美团收单渠道代理商招募"
          ]
        },
        {
          title: "美团规则",
          details: ["规则中心", "规则目录", "规则评议院"]
        },
        {
          title: "关注美团",
          details: ["美团新浪微博"]
        },
        {
          title: "公司信息",
          details: [
            "关于我们",
            "投资者关系",
            "加入我们",
            "商户诚信公约及管理办法",
            "保险经纪资质"
          ]
        },
        {
          title: "廉正举报",
          details: ["廉政邮箱"]
        },
        {
          title: "知识产权",
          details: ["知识产权维权平台"]
        },
        {
          title: "消费者服务热线",
          details: [
            "外卖消费者：10109777",
            "猫眼消费者：10105335",
            "其他消费者：10107888"
          ]
        },
        {
          title: "商家服务热线",
          details: [
            "外卖&餐饮商家：10105557",
            "休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：10100107"
          ]
        },
        {
          title: "投诉举报热线",
          details: [
            "违法和不良信息举报电话：4006018900",
            "举报邮箱：tousujubao@meituan.com"
          ]
        },
        {
          title: "商家自助入驻美团入口",
          details: []
        },
        {
          title: "供应商注册入口",
          details: []
        }
      ]
    };
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
.footer-container {
  width: 1190px;
  margin: 40px auto 0;
  .footer-link {
    height: 538px;
    padding: 40px 45px;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    .footer-col {
      width: 20%;
      padding-bottom: 20px;
      ul {
        line-height: 1.6;
      }
      .footer-title {
        font-size: 14px;
        font-weight: 500;
        color: #333;
      }
      .footer-detail {
        li {
          span {
            color: #666;
            cursor: pointer;
            &:hover {
              color: #fe8c00;
            }
          }
        }
      }
    }
  }
  .footer-beian {
    color: #999;
    padding-left: 20px;
    padding-top: 15px;
    padding-bottom: 30px;
    line-height: 1.6;
    justify-content: space-between;
    display: flex;
    .beian-left {
      p {
        a {
          color: #999;
          margin-right: 20px;
          &:hover {
            color: #fe8c00;
          }
        }
      }
    }
    .beian-right {
      a {
        color: #999;
        position: relative;
        margin-left: 330px;
        &:hover {
          color: #fe8c00;
        }
      }
      .right-img {
        display: flex;
        div {
          &:nth-child(1) {
            img {
              width: 38px;
              height: 38px;
            }
            p {
              line-height: 38px;
              padding: 0 5px;
              &:hover {
                color: #fe8c00;
              }
            }
          }
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4) {
            height: 38px;
            width: 109px;
            margin-right: 2px;
            background-image: url("https://s0.meituan.net/bs/fe-web-meituan/8a39c6b/img/sprites/footer.png");
            background-position: 0 -167px;
          }
          &:nth-child(3) {
            width: 107px;
            background-position: 0 -127px;
          }
          &:nth-child(4) {
            width: 107px;
            background-position: 0 -40px;
          }
        }
      }
    }
  }
}
</style>