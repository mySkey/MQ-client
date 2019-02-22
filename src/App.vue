<template>
  <div id="app">
    <router-view ref="router" />
    <socket ref="socket" @service="service" @connected="connected" />
  </div>
</template>
<script>
import Socket from '@/components/Socket'
export default {
  components:{ Socket },
  data(){
    return{

    }
  },
  methods:{
    connected(id){
      console.log(id)
    },
    service(val){
      this.$refs.router.service && this.$refs.router.service(val);
    }
  }
}
</script>

<style lang="less">
@import url('./assets/css/reset.css');
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  scroll-behavior: smooth;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
