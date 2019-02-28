import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
  //Vuex对象的状态，即其所拥有的数据
  //引用后使用 import store from '@/store/store.js'; computed里面store.state.books
  state: {
    message:{
      notice: '', // 公告通知
      chat:[],     // 会话消息
    }
  },
  //getter可以看成是store的计算属性，getter的值会根据他的依赖被缓存起来，当其依赖发生变化的时候其值才会被重新计算
  //Getter 会暴露为 store.getters 对象，通过属性的形式访问这些值： store.getters.doneBooks
  getters: {
    receiveNotice(state){
      return state.message.notice;
    },
    chats(state){
      return state.message.chat;
    }
  },
  //定义了对State中数据的修改操作。组件使用State中的数据的时候并不能直接对数据进行修改操作，需要调用Mutation定义的操作来实现对数据的修改
  //store实例的commit属性来进行一个对Store的state中的数据的操作（如增加、减少等）：store.commit('addNewBook', this.form)
  mutations: {
    saveNotice(state, notice){
      state.message.notice = notice;
    },
    receiveChat(state, from){
      let isExit = false, key = 0;
      for(let k in state.message.chat){
        if (state.message.chat[k].id == from.id) {
          isExit = true;
          key = Number(k);
        }
      }
      isExit ? state.message.chat[key].content = state.message.chat[key].content.concat([],from.content) : state.message.chat.push(from)
    },
    replyChat(state, form){
      state.message.chat.forEach(v=>{
        if(v.id == form.user_id) v.content.push({ type: 'to', content:form.content })
      })
    }
  },
  //处理异步在组件中调用Action中的方法用的不是提交commit的方法，而是使用“分发”：通过 store.dispatch 方法触发：
  //if (store.state.books.length === 0) {store.dispatch('fetchData')}
  actions: {

  },
  //嵌套模块
  modules: {
    
  }
})

export default store;