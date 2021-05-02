import Vue from 'vue'
import Vuex from 'vuex'
import buyCar from './buyCar'

Vue.use(Vuex)

// 创建整个项目的数据对象，将多组件共用的数据放置此对象里
export default new Vuex.Store({
  // data
  state: {
    number: 0,
    msg: 'Hello Vue',
    age: 20,
    duanzi: null
  },
  // 类似于全局的计算属性
  getters:{
    reverseMsg: function (state) {
        return state.msg.split('').reverse().join('')
    },
    // 可以传参的方式
    miminMsg: function (state) {
      return function (val) {
        return val + state.msg
      }
    }
  },
  // methods,在mutations里面处理状态
  mutations: {
    addNum (state) {
      state.number++
    },
    setNum (state, value){
      state.number = value
    },
    setDuanzi (state, value) {
      state.duanzi = value
    }
  },
  // 异步方法
  actions: {
    setDz: function (content) {
      let httpUrl = 'https://api.apiopen.top/getJoke?page=1&count=10&type=text'
      fetch(httpUrl).then(res=>res.json()).then(res=>{
        content.commit('setDuanzi',res.result)
      })
    }
  },
  // 模块
  modules: {
    buyCar
  }
})
