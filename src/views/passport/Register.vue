<style scoped>
.register{
  width: 100%;box-sizing: border-box;
}
.introduce{
  width: 100%;height: 5.5rem;margin-bottom:2rem;background: #eee;padding: 0.5rem;box-sizing: border-box;font-size: 0.35rem;
}
.introduce .title{
  color: #33c9d4;font-size: 0.6rem;
}
.introduce p{
  padding-left: 0.5rem;margin-top: 0.6rem;color: #666;
}

.form{
  width: 100%;padding:0 0.8rem;box-sizing: border-box;
}
.form .item{
  position: relative;font-size: 0.5rem;color: #666;
}
.form .item .send{
  position: absolute;top:0.62rem;right:0;color: #33c9d4;font-size: 0.65rem;
}
.form .item .inp{
  width: 100%;margin-bottom: 0.8rem;padding: 0.6rem 0.5rem;border:none;border-bottom: #eee 1px solid;box-sizing: border-box;
}
.form .item .check{
  width: 40%;align-self: flex-start;
}
.form .item .inp:focus{
  outline:none;border-bottom: #33c9d4 1px solid;
}

.btn{
  width: 100%;height: 2rem;line-height:2rem;font-size:0.8rem;letter-spacing: 0.35rem;text-align:center;background: #33c9d4;color: #fff;margin-top:2rem;border-radius: 5px;
}
</style>
<template>
  <div class="register">
    <div class="introduce">
      <div class="title">温馨提示：</div>
      <p>1、验证码只在3分钟内有效</p>
      <p>2、可用注册时的手机号或邮箱找回密码</p>
      <p>3、密码至少含有2位字母</p>
    </div>
    <div class="form df-col">
      <div class="item">
        <div @click="sendCheck" class="send">发送验证码</div>
        <input v-model="adopt_num" type="text" class="inp" placeholder="手机号 / 邮箱">
      </div>
      <div class="item">
        <input v-model="userForm.check_num" type="text" class="inp check" placeholder="验证码">
      </div>
      <div class="item">
        <input v-model="pwd1" type="password" class="inp" placeholder="请输入密码">
      </div>
      <div class="item">
        <input v-model="pwd2" type="password" class="inp" placeholder="再次输入密码">
      </div>
      <div class="btn" @click="register">注册</div>
    </div>
  </div>
</template>

<script>
const md5 = require('md5-node')
export default {
  name: "register",
  data(){
    return{
      base_check_num: 0,
      adopt_num:'',
      pwd1: '',
      pwd2: '',
      userForm:{
        phone: '',
        email: '',
        check_num: '',
        pwd: ''
      },
      saving: false
    }
  },
  activated(){
    document.title = '用户注册'
  },
  deactivated(){

  },
  methods:{
    sendCheck(){
      if(this.adopt_num === ''){
      common.alert('请输入手机号 / 邮箱');
        return false
      }
      if(this.adopt_num.match('@')){
        var reg = reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        reg.test(this.adopt_num) ? this.userForm.email = this.adopt_num : '';
        if(!reg.test(this.adopt_num)){
          common.alert('邮箱格式错误')
          return false
        }
      }else{
        if(!(/^1[34578]\d{9}$/.test(this.adopt_num))){ 
          common.alert("手机号码有误，请重填");
          return false;
        }else{
          this.userForm.email = ''
          this.userForm.phone = this.adopt_num
        }
      }

      if(this.saving) return false;
      this.saving = true;
      ajax.post('passport/check', { email: this.userForm.email, phone: this.userForm.phone }).then(res=>{
        this.saving = false;
        if(res.code == 0){
          this.base_check_num = res.data.check_num;
          setTimeout(() => {
            this.base_check_num = '';
          }, 1000 * 60 * 3);
        }else{
          common.alert(res.msg)
        }
      })
    },
    register(){
      if(!this.checkForm()){
        return;
      }else{
        this.userForm.pwd = this.pwd1;
      }
      if(this.saving) return false;
      this.saving = true;
      common.showLoading('注册中···')

      ajax.post('passport/register', this.userForm).then(res=>{
        this.saving = false;
        common.hideLoading()
        if(res.code == 0){
          const query = res.data;
          this.base_check_num = '';
          this.$router.replace({ path:'/login', query })
          common.alert('注册成功！');
        }else{
          common.alert(res.msg)
        }
      })
    },
    checkForm(){
      if(this.adopt_num === ''){
        common.alert('手机号 / 邮箱不能为空！')
        return false
      }
      if(this.userForm.check_num === ''){
        common.alert('验证码不能为空！')
        return false
      }
      if(md5(this.userForm.check_num) != this.base_check_num){
        common.alert('验证码错误！')
        return false;
      }
      if(this.pwd1 === '' || this.pwd2 === ''){
        common.alert('密码不能为空！')
        return false
      }
      if(this.pwd1 !== this.pwd2){
        common.alert('密码不一致！');
        return false
      }
      return true
    },

  }
};
</script>
