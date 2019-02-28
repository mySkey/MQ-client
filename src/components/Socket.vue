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
      console.log('socket connected !')
      this.id = this.$socket.id;
      ajax.post('user/updateSocket', {socket_id:this.id}).then(res=>{
        if(res.code == 0){
          let user = Object.assign({socket_id:this.id}, res.data.user, common.getLStore('user'))
          common.setLStore('user', user)
        }
      })
    },
    notice(val) {
      this.$store.commit('saveNotice', val)
    },
    chat(res){
      this.$store.commit('receiveChat', res.from)
    }
  },
  methods:{

  }
}
</script>
