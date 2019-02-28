<style lang="less" scoped>
.message{
  .notice{
    font-size: 0.5rem;line-height:0.8rem;padding:0.5rem 1rem;color: #33c9d4;border-bottom:1px solid #f6f6f6;box-shadow: 0 0 15px -5px #eee inset;width: 100%;box-sizing: border-box;
  }
  .item{
    width:18.75rem;border-bottom: 1px solid #eee;padding: 0.5rem 0.8rem;box-sizing: border-box;
    .image{width: 2rem;height:2rem;border-radius: 50%;border:1px solid #eee;}
    .info{
      width:80%;padding:0.2rem 0 0.2rem 1rem;justify-content:space-between;
      .name{font-size: 0.8rem;color:#333;}
      .date{font-size: 0.5rem;color:#999;align-self: flex-end;}
      .content{font-size: 0.6rem;color: #666;width: 100%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
    }
  }
}
</style>

<template>
  <div class="message df-j-c df-col">
    <div v-if="receiveNotice" class="notice">公告：{{receiveNotice}}</div>
    <div @click="toConversation(v)" class="item df" v-for="(v,k) in chats" :key="k">
      <img class="image" :src="v.avatar" alt="">
      <div class="info df-col df1">
        <div class="df-j-b">
          <div class="name">{{v.nickname}}</div>
          <div class="date">{{dateFormat(v.updated)}}</div>
        </div>
        <div class="content">{{v.content[v.content.length-1].content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "message",
  data(){
    return{
      i_resource:'',
    }
  },
  computed:{
    ...mapGetters([ 'receiveNotice', 'chats' ])
  },
  created(){
    this.getList();
  },
  activated(){
    document.title = '消息'
  },
  methods:{
    dateFormat(t){
      return dayjs(t * 1000).format('MM.DD')
    },
    getList(){
      ajax.get('user/list', {}).then(res=>{
        this.i_resource = res.data.i_resource;
        this.users = res.data.users;
        this.users.forEach(v=>{
          v.avatar = this.i_resource + v.avatar;
          v.content = [{type:'from', content:'欢迎你来到这个大家庭！！！'}]
          this.$store.commit('receiveChat', v)
        })
      })
    },
    toConversation(row){
      this.$router.push({ path:'/message/conversation', query:{ user_id: row.id, user_name: row.nickname } })
    },
  }
};
</script>
