<template>
  <div id="app">
    <keep-alive>
      <router-view ref="router" />
    </keep-alive>
    <socket />
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
    
  }
}
</script>
<style lang="less">
@import url('./assets/css/reset.css');
#app {
  width: 100%;
  min-height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  scroll-behavior: smooth;
  box-sizing: border-box;
  overflow-x: hidden;
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
