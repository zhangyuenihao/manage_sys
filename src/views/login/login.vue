<template>
  <div class="warp">
    <div class="loginform">
      <h1>登录</h1>
      <el-form
        :model="form"
        status-icon
        :rules="rules"
        ref="form"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="form.pass"
            auto-complete="off"
            @keyup.native.enter="checkUser"
          ></el-input>
        </el-form-item>
        <el-form-item prop="verifycode">
          <el-input
            v-model="form.verifycode"
            placeholder="请输入验证码"
            class="identifyinput"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div class="identifybox">
            <div @click="getLoginCode">
              <div v-html="identifyCode"></div>
            </div>
            <el-button @click="getLoginCode" type="text" class="textbtn"
            >看不清，换一张
            </el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="checkUser">登录</el-button>
          <el-button @click="resetForm('form')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                form: {
                    username: "",
                    pass: "",
                    verifycode: ""
                },
                identifyCode: "",
                rules: {
                    username: [
                        {required: true, message: "请输入用户名", trigger: "blur"}
                    ],
                    pass: [
                        {required: true, message: "密码不能为空", trigger: "blur"},
                        {min: 6, max: 20, message: "密码长度6-20字符", trigger: "blur"}
                    ],
                    verifycode: [
                        {required: true, message: "验证码不能为空", trigger: "blur"}
                    ]
                }
            };
        },
        methods: {
            /**
             * 检测用户名和密码是否匹配
             * @returns {Promise<AxiosResponse<any>>}
             */
            async checkUser() {
                const {username, pass, verifycode} = this.form;
                try {
                    await this.axios.post("user/login", {
                        uname: username,
                        pwd: pass,
                        verifyCode: verifycode
                    });
                    this.$router.push("/main/home");
                } catch (e) {
                }
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            /**
             * 获取验证码
             * @returns {Promise<void>}
             */
            async getLoginCode() {
                const data = await this.axios.get("common/loginCode");
                this.identifyCode = data;
            }
        },
        computed: {},
        created() {
            this.getLoginCode();
        },
        mounted() {
        },
        components: {}
    };
</script>

<style lang="scss" scoped>
  .warp {
    height: 100%;
    background: linear-gradient(blue, white);
    position: relative;
  }

  .loginform {
    min-width: 452px;
    padding: 50px 50px 50px 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: linear-gradient(white, pink);
  }

  .el-form {
    padding-right: 50px;
  }

  .codeBox {
    height: 100px;
  }
</style>
