<style scoped>
.toast-mask{
  width:100vw;height:100vh;background: rgba(0,0,0,.5);position: fixed;z-index: 9999;top:0;left:0;display: flex;justify-content: center;align-items: center;
}
.toast-mask .content{
  width: 80%;background: #fff;border-radius: 5px;box-sizing: border-box;padding-bottom:30px;text-align: center;
}
.toast-mask .content .title{
  text-align: center;border-bottom: 1px solid #eee;padding:15px 20px 8px 20px;color: #333;
}
.toast-mask .content .detail{
  margin:15px 0;text-align: left;font-size: 12px;padding: 0 30px;line-height: 14px;color: #666;
}
.toast-mask .content .btn{
  margin-top:20px;background: #33c9d4;width:60%;display: inline-block;color: #eee;padding: 8px 15px;border-radius:5px;font-size:14px;letter-spacing: 4px;
}
</style>
<template>
<div v-if="show" class="toast-mask">
  <div class="content">
    <div class="title">{{title}}</div>
    <div class="detail">{{msg}}</div>
    <div @click="close" class="btn">确定</div>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      title: '温馨提示',
      show: true
    }
  },
  methods:{
    close(){
      this.show = false
    }
  }
}
</script>