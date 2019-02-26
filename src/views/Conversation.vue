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
  flex:1;width:100%;border:none;border-radius:4px;padding-left:15px;
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
        <input v-model="content" class="inp" type="text">
        <div @click="contantService" class="btn">发送</div>
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
      content: ''
    }
  },
  created(){
    document.title = '会话中'
  },
  methods:{
    contantService(){
      // let socket_id = localStorage.getItem('socket_id')
      // ajax.get('http://localhost:8000/api/send', {name: 'mySkey',content:this.content, socket_id}).then(res=>{
      //   console.log(res)
      // })
    }
  }
};
</script>
