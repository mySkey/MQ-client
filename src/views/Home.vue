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
    
  }
};
</script>
