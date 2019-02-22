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
  mounted(){
    
  },
  sockets: {
    connect: function () {
      console.log('socket connected');
      this.id = this.$socket.id;
      this.$emit('connected', this.id);
    },
    service: function (val) {
      this.$emit('service', val)
      console.log('客服收到的消息', val);
    },
    chat: function(val){
      console.log(val)
    }
  },
  methods:{

  }
}
</script>
