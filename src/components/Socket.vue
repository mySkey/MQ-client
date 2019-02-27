<template>
  <div>

  </div>
</template>
<script>
export default {
  data(){
    return{
      id: ''
    }
  },
  sockets: {
    connect() {
      this.id = this.$socket.id;
      console.log('socket connected ' + this.id)
      common.setStore('user', { socket_id: this.id })
      ajax.post('user/updateSocket', {socket_id:this.id}).then(res=>{
        common.setStore('user', { email:res.data.email,socket_id:this.id })
      })
      //this.$router.replace('/login') //后台接口重启后需重新验证
    },
    notice(val) {
      //console.log('公告： ' + val);
      this.$emit('notice', val)
    },
    chat(val){
      console.log('聊天： ' + val);
      common.alert(val.from.email + '想告诉你： ' + val.content)
      this.$emit('chat', val)
    }
  },
  methods:{

  }
}
</script>
