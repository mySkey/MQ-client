<style scoped>
.message{
  padding: 4rem 1rem;
}
.item{
  border-bottom: 1px solid #eee;
  padding: 0.5rem 1rem;
}
.image{
  width: 2rem;height:2rem;border-radius: 5px;
}
</style>
<template>
  <div class="message">
    <div @click="toConversation(v)" class="item" v-for="(v,k) in users" :key="k">
      <img class="image" :src="i_resource + v.avatar" alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "message",
  data(){
    return{
      i_resource:'',
      users:[]
    }
  },
  created(){
    this.getList();
  },
  activated(){
    document.title = '消息'
  },
  methods:{
    getList(){
      ajax.get('user/list', {}).then(res=>{
        this.i_resource = res.data.i_resource;
        this.users = res.data.users;
      })
    },
    toConversation(row){
      this.$router.push({ path:'/message/conversation', query:{ user_id: row.id } })
    }
  }
};
</script>
