<template>
  <div id="app">
    <keep-alive>
      <router-view ref="router" />
    </keep-alive>
    <socket @notice="notice" />
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
    notice(val){
      this.$refs.router.notice && this.$refs.router.notice(val)
    },
    chat(val){
      this.$refs.router.chat && this.$refs.router.chat(val)
    },
  }
}
</script>
<style lang="less">
@import url('./assets/css/reset.css');
#app {
  width: 100%;
  max-height: 100%;
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
