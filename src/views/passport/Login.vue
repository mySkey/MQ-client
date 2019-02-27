<style scoped>
.login{
  padding: 0 0.8rem;
}
.login .logo{
  margin-top: 3.5rem;
}
.login .content{
  width: 100%;font-size: 0.35rem;margin-top: 2rem;
}
.login .content .write{
  border-bottom: 1px solid #eee;align-items: center;padding: 1rem 0 0 0;
}
.login .content .write .inp{
  padding: 0.6rem 0.5rem;width: 100%;border:none;border: transparent 1px solid;border-radius: 5px;
}
.login .content .write .inp:focus{
  outline: none;border: #33c9d4 1px solid;
}

.login .btn{
  width: 100%;height: 2rem;line-height:2rem;font-size:0.8rem;letter-spacing: 0.35rem;text-align:center;background: #33c9d4;color: #fff;margin-top:2rem;border-radius: 5px;
}
.login .tip{
  margin-top:0.6rem;font-size: 0.3rem;color: #33c9d4;
}
</style>
<template>
  <div class="login">
    <div class="logo">MQ</div>
    <div class="content">
      <div class="name write df">
        <div>账号</div>
        <input v-model="userForm.name" type="text" class="inp df1" placeholder="请输入账号">
      </div>
      <div class="pwd write df">
        <div>密码</div>
        <input v-model="userForm.pwd" type="password" class="inp df1" placeholder="请输入密码">
      </div>
    </div>
    <div class="btn" @click="login">登录</div>
    <div class="df-j-b tip">
      <div class="forgot">忘记密码?</div>
      <div class="new" @click="toRegister">新用户注册</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "login",
  data(){
    return{
      userForm: {
        name: '',
        pwd: '',
        socket_id: ''
      },
      saving: false
    }
  },
  activated(){
    document.title = '用户登录'
    // this.userForm.name = '1663654533@qq.com'
    // this.userForm.pwd = 'qq1663654533'
    this.userForm.socket_id = common.getStore('user').socket_id || ''
    if(this.userForm.pwd && this.userForm.name) this.login();
  },
  methods:{
    login(){
      if(!this.checkForm()) return false;
      this.saving = true;
      common.showLoading('登陆中···')
      ajax.post('passport/login', this.userForm).then(res=>{
        this.saving = false;
        common.hideLoading()
        if(res.code == 0){
          common.setLStore('token', res.data.token)
          common.setStore('user', { email:res.data.email,socket_id:this.userForm.socket_id })
          this.$router.replace('/message')
        }else{
          common.alert(res.msg)
        }
      })
    },
    checkForm(){
      if(this.userForm.name === ''){
        common.alert('手机号 / 邮箱不能为空！')
        return false
      }
      if(this.userForm.pwd === '' || this.pwd2 === ''){
        common.alert('密码不能为空！')
        return false
      }
      return true
    },
    toRegister(){
      this.$router.push('/register')
    }
  }
};
</script>
