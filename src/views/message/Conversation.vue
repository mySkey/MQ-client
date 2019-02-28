<style lang="less" scoped>
.home{
  width:100%;height:100vh;background: #eee;
  .header{
    width: 100%;height:2rem;padding: 0 0.75rem;box-sizing:border-box;align-items: center;color:#fff;background: radial-gradient(at 16rem -3rem,#d2d2d2,#33c9d4);
    .with-name{font-size: 0.8rem;}
  }
  .content{
    width: 100%;height:calc(100vh - 2rem);position: relative;
    .message{
      width:100%;max-height: calc(100% - 5rem);overflow: auto;position: absolute;left:0;bottom:5rem;padding: 0 0.75rem;box-sizing:border-box;
      .item{
        align-items: center;font-size: 0.7rem;margin-bottom: 0.3rem;
        .avatar{width: 1.7rem;height:1.7rem;border-radius: 50%;border:1px solid #eee;}
        .msg{padding:0.3rem 0.5rem;background: #00bcd4;color:#f6f6f6;border-radius:5px;margin:0 0.4rem;}
      }
      .item-to{align-self: flex-end;flex-direction: row-reverse;}
      
    }
    .send{
      width:100%;display:flex;position: absolute;bottom: 20px;background: #eee;padding:0 0.5rem;box-sizing:border-box;
      .inp{
        flex:1;width:100%;border:none;border-radius:4px;padding-left:15px;font-size: 0.5rem;
        &:focus{outline: none;}
      }
      .btn{
        width: 60px;height: 30px;background: #33c9d4;color: #fff;font-size: 12px;text-align: center;line-height: 30px;border-radius:6px;margin-left:10px;
      }
    }
  }
}
</style>
<template>
  <div class="home">
    <div class="header df-j-b">
      <div class="back" @click="back"><i class="iconfont icon-back"></i></div>
      <div class="with-name">{{to_name}}</div>
      <div>&nbsp;</div>
    </div>
    <div class="content">
      <div class="message">
        <div class="df-col" v-for="(v,k) in chats" :key="k">
          <div class="df item" :class="{'item-to': e.type == 'to'}" v-for="(e,i) in v.content" :key='i'>
            <img :src="e.type == 'to' ? user.avatar : v.avatar" alt="" class="avatar">
            <div class="msg">{{e.content}}</div>
          </div>
        </div>
      </div>
      <div class="send">
        <input v-model="msgForm.content" class="inp" type="text">
        <div @click="send" class="btn">发送</div>
        <div v-if="user.email == '476168710@qq.com'" @click="sendNotice" class="btn">通知</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "conversation",
  data(){
    return{
      user:{},
      to_name: '',
      msgForm:{
        user_id: '',
        content: ''
      }
    }
  },
  computed:{
    ...mapGetters(['chats'])
  },
  created(){
    
  },
  activated(){
    document.title = '会话中'
    this.user = common.getLStore('user') || {}
    this.msgForm.user_id = this.$route.query.user_id || '';
    this.to_name = this.$route.query.user_name || 'mySkey'
  },
  methods:{
    send(){
      ajax.post('message/send', this.msgForm).then(res=>{
        this.$store.commit('replyChat', this.msgForm )
        this.msgForm.content = '';
      })
    },
    sendNotice(){
      const socket_id = common.getStore('user').socket_id;
      ajax.post('message/notice', {socket_id,content:this.msgForm.content}).then(res=>{
        common.toast(res.msg)
      })
    },
    back(){
      history.back();
    }
  }
};
</script>
