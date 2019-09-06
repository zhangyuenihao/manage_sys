<template>
  <div class=warp>
    <div class="loginform">
      <h1>登录</h1>
      <el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">登录</el-button>
          <el-button @click="resetForm('form')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>


    export default {
        name: 'login',
        data() {
            return {
                form: {
                    username: '',
                    pass: ''
                },
                onOff: null,
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        /*{validator: this.validateusername, message: '用户名不存在', trigger: 'blur'}*/
                    ],
                    pass: [
                        {required: true, message: '密码不能为空', trigger: 'blur'},
                        {min: 6, max: 20, message: '密码长度6-20字符', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            /**
             * 表单效验检测用户名是否存在
             * @param rule
             * @param value
             * @param callback
             */
            validateusername(rule, value, callback) {
                if (value == '' || value == undefined || value == null) {
                    callback();
                } else {
                    const exit = !this.getAllusername()
                    if (!exit) {
                        callback(new Error('用户名不存在'));
                    } else {
                        callback();
                    }
                }
            },
            validatecheck(rule, value, callback) {
                if (value == '' || value == undefined || value == null) {
                    callback();
                }
                if (!this.onOff) {
                    callback(new Error('用户名密码不匹配'))
                }
                callback()
            },


            /**
             * 检测用户名和密码是否匹配
             * @returns {Promise<AxiosResponse<any>>}
             */
            async checkUser() {
                await this.$axios({
                    method: 'get',
                    url: '/api/user/login?uname=' + this.form.username + '&pwd=' + this.form.pass,
                }).then(res => {
                    if (res.data.length > 0) {
                        res.data.some((item) => {
                            if (item.uname && item.pwd && item.uname == this.form.username && item.pwd == this.form.pass) {
                            }
                        })
                        this.onOff = true
                    } else {
                        this.onOff = false
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
            /**
             *
             * @returns {Promise<AxiosResponse<any>>}
             */
            getAllusername() {
                return this.$axios({
                    method: 'get',
                    url: '/api/user/login?uname=' + this.form.username,
                }).then(res => {

                    res.data.some((item) => {
                        if (item.uname == this.form.username) {

                        } else {
                            console.log()
                        }
                    })

                }).catch(err => {
                    console.log(err)
                })
            },
            submitForm(formName) {
                this.checkUser().then(() => {
                   this.rules.pass.push({validator: this.validatecheck,trigger:'blur'});
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            this.$router.push('/')
                        } else {
                            console.log('error submit!!');
                            return false;
                        }
                    });
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        computed: {},
        created() {

        },
        mounted() {

        },
        components: {}
    }
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
</style>
