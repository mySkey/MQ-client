<style scoped>
.home{width:100%;padding: 0 15px;box-sizing:border-box;background: #eee;}
.content{
  width: 100%;height: 100vh;position: relative;
}
.message{
  height: calc(100% - 60px);overflow: auto;
}
.send{
  width:100%;display:flex;position: absolute;bottom: 20px;background: #eee;
}
.send .inp{
  flex:1;width:100%;border:none;border-radius:4px;padding-left:15px;font-size: 0.5rem;
}
.send .inp:focus{
  outline: none;
}
.send .btn{
  width: 60px;height: 30px;background: #33c9d4;color: #fff;font-size: 12px;text-align: center;line-height: 30px;border-radius:6px;margin-left:10px;
}
</style>
<template>
  <div class="home">
    <div class="content">
      <div class="message"></div>
      <div class="send">
        <input v-model="msgForm.content" class="inp" type="text">
        <div @click="send" class="btn">发送</div>
        <div v-if="email == '476168710@qq.com'" @click="sendNotice" class="btn">通知</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "conversation",
  data(){
    return{
      email: {},
      msgForm:{
        user_id: '',
        content: ''
      }
    }
  },
  created(){
    
  },
  activated(){
    document.title = '会话中'
    this.email = common.getStore('user').email || ''
    this.msgForm.user_id = this.$route.query.user_id || '';
  },
  methods:{
    send(){
      ajax.post('message/send', this.msgForm).then(res=>{
        console.log(res)
      })
    },
    sendNotice(){
      const socket_id = common.getStore('user').socket_id;
      ajax.post('message/notice', {socket_id,content:this.msgForm.content}).then(res=>{
        //common.alert(res.msg)
      })
    }
  }
};
</script>
