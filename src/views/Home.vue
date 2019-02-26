<style scoped>

</style>
<template>
  <div class="home">
    <keep-alive>
      <router-view ref="router"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "home",
  data(){
    return{
      
    }
  },
  created(){
    document.title = '会话列表'
  },
  methods:{
    notice(val){
      this.$refs.router.notice && this.$refs.router.notice(val)
    },
    chat(val){
      this.$refs.router.chat && this.$refs.router.chat(val)
    },
  }
};
</script>
