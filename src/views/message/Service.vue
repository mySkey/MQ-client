<style scoped>
.home{
  width:100%;height:100vh;position: relative;overflow: auto;padding:0 15px;box-sizing: border-box;
}

</style>
<template>
  <div class="home">
    <ul class="list">
      <li class="item">111</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  data(){
    return{
      
    }
  },
  created(){
    document.title = '客服端'
  },
  methods:{
    contant(){
      this.$router.push('/conversation')
    },
    service(val){
      console.log('conversation发给客户端的'+ val)
    }
  }
};
</script>
