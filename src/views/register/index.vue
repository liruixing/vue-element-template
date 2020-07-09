<template>
  <div style="display:flex;justify-content:center;">
    <el-form ref="form" :model="form" label-width="80px" >
      <el-form-item label="用户名" style="margin-top: 100px">
        <el-input v-model="form.account" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pwd" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form.confimPWD" placeholder="请再次输入密码" show-password></el-input>
      </el-form-item>

      <el-form-item>
        <el-button :loading="loading" type="primary" @click="onSubmit">注册</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    name: 'register',
    data(){
      return{
        loading:false,
        form: {
          account: 'admin',
          pwd: '111111',
          confimPWD: '111111',
        }
      }
    },
    methods: {
      onSubmit() {
        if(this.form.pwd != this.form.confimPWD){

          this.$message({
            message: '两次密码不相同，请重试',
            type: 'warning'
          });
          return;
        }
        this.loading = true;
        this.$store.dispatch('user/register', this.form)
          .then(
            ()=>{
              this.loading = false
              // this.$router.back(-1);
              this.$router.push('/login')
            })
          .catch(() => {
            this.loading = false
          })
      }
    }

  }
</script>

<style scoped>

</style>
