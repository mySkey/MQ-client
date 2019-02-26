import Alert from './Alert.vue'
import Vue from 'vue'
const Constructor = Vue.extend(Alert)
let instance;
let index = 2000

const install = () => {
  Object.defineProperty(Vue.prototype, '$alert', {
    get() {
      const alertMsg = (msg, title) => {
        index++;
        instance = new Constructor({
          data() {
            return {
              msg: msg || 'hello body',
              title: title || '温馨提示'
            }
          }
        }).$mount();

        instance.$el.style.zIndex = index;
        document.body.appendChild(instance.$el)
      };
      return alertMsg;
    }
  })
}

export default install