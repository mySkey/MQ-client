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
      common.setLStore('user', { socket_id: this.id })
      this.$router.replace('/login')
    },
    notice(val) {
      console.log('公告： ' + val);
      this.$emit('notice', val)
    },
    chat(val){
      console.log('聊天： ' + val);
      this.$emit('chat', val)
    }
  },
  methods:{

  }
}
</script>
