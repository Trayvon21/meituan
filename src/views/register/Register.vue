<template>
  <div class="register-container">
    <!-- 注册头部 -->
    <div class="register-header">
      <div class="logoimg"></div>
      <div class="login-block">
        <div class="login-block-had">已有美团账号？</div>
        <div class="logins" @click="$router.push('/login')">登录</div>
      </div>
    </div>
    <!-- 注册内容 -->
    <div class="register-content">
      <Form ref="formData" :model="formData" :label-width="100" class="form">
        <FormItem label="手机号" prop="tel">
          <Input type="text" v-model="formData.tel" />
        </FormItem>
        <FormItem label="短信动态码" prop="email">
          <Input type="text" v-model="formData.email" />
        </FormItem>
        <FormItem label="创建密码" prop="passwd">
          <Input type="password" v-model="formData.passwd" />
        </FormItem>
        <FormItem label="确认密码" prop="passwdCheck">
          <Input type="password" v-model="formData.passwdCheck" />
        </FormItem>
        <FormItem>
          <Button type="primary" @click="submit('formData')">同意以下协议并注册</Button>
        </FormItem>
      </Form>
    </div>
    <!-- 尾部 -->
    <div class="register-footer">
      <div class="footer-main textalign">
        <p>
          ©
          <span @click="$goto('/')">meituan.com</span>
          <span>京ICP证070791号</span>
          <span>京公网安备11010502025545号</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // const validatePass = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("Please enter your password"));
    //   } else {
    //     if (this.formCustom.passwdCheck !== "") {
    //       // 对第二个密码框单独验证
    //       this.$refs.formCustom.validateField("passwdCheck");
    //     }
    //     callback();
    //   }
    // };
    // const validatePassCheck = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("Please enter your password again"));
    //   } else if (value !== this.formCustom.passwd) {
    //     callback(new Error("The two input passwords do not match!"));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      formData: {
        tel: "",
        email: "",
        passwd: "",
        passwdCheck: ""
      }
      // rules: {
      //   tel: [{ validator: validatePass, trigger: "blur" }],
      //   sms: [{ validator: validatePass, trigger: "blur" }],
      //   passwd: [{ validator: validatePass, trigger: "blur" }],
      //   passwdCheck: [{ validator: validatePassCheck, trigger: "blur" }]
      // }
    };
  },
  props: {},
  components: {},
  methods: {
    submit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
          this.$api
            .register(this.formData.tel, this.formData.passwd, "")
            .then(res => {
              if (res.code === 200) {
                this.$Message.success(res.msg);
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
.register-container {
  width: 100%;
  .register-header {
    height: 60px;
    border-bottom: 2px solid #d8d8d8;
    max-width: 980px;
    height: 59px;
    margin: 0 auto;
    padding: 10px 0;
    justify-content: space-between;
    display: flex;
    // logo图片
    .logoimg {
      width: 128px;
      height: 36px;
      background: url("//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png")
        no-repeat;
      background-size: contain;
    }
    .login-block {
      line-height: 39px;
      display: flex;
      .login-block-had {
        margin-right: 12px;
      }
      .logins {
        height: 24px;
        padding: 0 11px;
        margin-top: 8px;
        background: #ffd000;
        box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
        border: rgba(191, 105, 0, 0.15);
        border-radius: 2px;
        font-size: 12px;
        line-height: 24px;
        color: #222;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  .register-content {
    max-width: 1200px;
    min-width: 1080px;
    margin: 50px auto;
    .form {
      margin-left: 100px;
      width: 400px;
    }
  }
  .footer-main {
    border-top: 1px solid #eee;
    padding-top: 20px;
    text-align: center;
    p {
      color: #999;
      font-size: 13px;
      span {
        margin-right: 8px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>