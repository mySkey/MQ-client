<style scoped>
.message{
  padding: 0 1rem;
}
.notice{
  font-size: 0.5rem;padding:1rem;color: #33c9d4;
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
    <div v-if="base_notice" class="notice">公告：{{base_notice}}</div>
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
      base_notice: '',
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
    },
    notice(val){
      this.base_notice = val;
    }
  }
};
</script>
