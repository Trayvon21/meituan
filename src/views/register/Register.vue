<template>
  <div class="register-container">
    <!-- 注册头部 -->
    <div class="register-header"></div>
    <!-- 注册内容 -->
    <div class="register-content">
      <Form ref="formCustom" :model="formData" :rules="rules" :label-width="100" class="form">
        <FormItem label="用户名" prop="username">
          <Input type="text" v-model="formData.username" />
        </FormItem>
        <FormItem label="电子邮箱" prop="email">
          <Input type="text" v-model="formData.email" />
        </FormItem>
        <FormItem label="创建密码" prop="passwd">
          <Input type="password" v-model="formData.passwd" />
        </FormItem>
        <FormItem label="确认密码" prop="passwdCheck">
          <Input type="password" v-model="formData.passwdCheck" />
        </FormItem>
        <FormItem>
          <Button type="primary" @click="submit('formData')">注册</Button>
        </FormItem>
      </Form>
    </div>
    <!-- 尾部 -->
    <div class="register-footer"></div>
  </div>
</template>

<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password"));
      } else {
        if (this.formCustom.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password again"));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error("The two input passwords do not match!"));
      } else {
        callback();
      }
    };
    return {
      formData: {
        tel: "",
        sms: "",
        passwd: "",
        passwdCheck: ""
      },
      rules: {
        tel: [{ validator: validatePass, trigger: "blur" }],
        sms: [{ validator: validatePass, trigger: "blur" }],
        passwd: [{ validator: validatePass, trigger: "blur" }],
        passwdCheck: [{ validator: validatePassCheck, trigger: "blur" }]
      }
    };
  },
  props: {},
  components: {},
  methods: {
    submit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
      this.$api.register(username, password, email).then(res => {
        if (res) {
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
}
</style>