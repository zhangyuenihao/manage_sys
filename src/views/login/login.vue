<template>
    <div class=warp>
      <div class="loginform">
        <h1>登录</h1>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm2.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
            <el-button @click="resetForm('ruleForm2')">注册</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
</template>

<script>

    export default {
        name: 'login',
        data() {
            var validateusername=(rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                   /* if (this.ruleForm2.username !== '') {
                        this.$refs.ruleForm2.validateField('username');
                    }*/
                    callback();
                }
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm2: {
                    username:'',
                    pass: '',
                    checkPass: '',
                },
                rules2: {
                    username:[
                        { validator: validateusername, trigger: 'blur' }
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$router.push('/')
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
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
    .warp{
      height: 100%;
      background: linear-gradient(blue,white);
      position: relative;
    }
  .loginform{
    padding: 50px 50px 50px 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    background: linear-gradient(white,pink);
  }
  .el-form{
    padding-right: 50px;
  }
</style>
