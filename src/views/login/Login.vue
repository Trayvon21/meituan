<template>
  <div class="login-container">
    <!-- 头部 -->
    <div class="login-header">
      <i class="login-logo" @click="$router.push('/')"></i>
    </div>
    <!-- 中部 -->
    <div class="login-main">
      <div class="main-left">
        <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt />
      </div>
      <div class="main-right">
        <Form ref="form" :model="form" :rules="rule" inline>
          <FormItem prop="user" class="formItem">
            <Input type="text" v-model="form.user" placeholder="手机号">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="form.password" placeholder="密码">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <div class="forgetpwd">
            <span>忘记密码？</span>
          </div>
          <!-- 登录按钮 -->
          <FormItem>
            <Button class="login-btn" type="warning" @click="handleSubmit('form')" long>登录</Button>
          </FormItem>
        </Form>

        <!-- 跳转注册页 -->
        <p class="gotoRegister">
          还没有账号？
          <span @click="$router.push('/register')">免费注册</span>
        </p>
        <!-- 其他方式登录分割线 -->
        <Divider class="login-other">用合作网站账号登录</Divider>
      </div>
    </div>
    <!-- 底部 -->
    <div class="login-footer">
      <div class="login-footer-content">
        <div>
          <span>关于美团</span>
        </div>
        <div>
          <span>加入我们</span>
        </div>
        <div>
          <span>商家入驻</span>
        </div>
        <div>
          <span>帮助中心</span>
        </div>
        <div>
          <span>美团手机版</span>
        </div>
      </div>
    </div>
    <p class="mores">
      ©
      <span>2020</span>
      <span @click="$router.push('/')" class="sp-one">美团网团购</span>
      <span>meituan.com</span>
      <span class="sp-two">京ICP证070791号</span>
      京公网安备11010502025545号
    </p>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        user: "",
        password: ""
      },
      rule: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  props: {},
  components: {},
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$api.login(this.form.user, this.form.password).then(res => {
            if (res.code === 200) {
              this.$Message.success(res.msg);
              this.$router.push("/");
              
            } else {
              this.$Message.error(res.msg);
            }
          });
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.login-container {
  width: 980px;
  margin: 0 auto;
  .login-header {
    margin: 40px 0 30px;
    .login-logo {
      margin: 0;
      width: 82px;
      height: 54px;
      background-position: -188px -808px;
      background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
      background-size: initial;
      display: inline-block;
      overflow: hidden;
    }
  }
  .login-main {
    display: flex;
    .formItem {
      display: block;
    }
  }
  .login-footer {
    width: 980px;
    padding: 12px 0;
    margin: 0 auto 20px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    .login-footer-content {
      width: 594px;
      color: #999;
      font-size: 12px;
      display: flex;
      div {
        padding: 0 16px;
        margin: 5px 0;
        border-left: 1px solid #eee;
        span {
          &:hover {
            cursor: pointer;
          }
        }
        &:first-child {
          padding-left: 0;
          border-left: none;
        }
      }
    }
  }
  .mores {
    width: 980px;
    margin: 0 auto 20px;
    font-size: 12px;
    color: #999;
    span {
      margin: 0 2px;
      &:first-child {
        margin-left: 0;
      }
    }
    .sp-one:hover {
      cursor: pointer;
    }
    .sp-two:hover {
      cursor: pointer;
    }
  }
}
</style>