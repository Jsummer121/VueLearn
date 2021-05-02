export default {
    namespaced: true,  // 如果使用了命名空间，则需要在方法名前面添加上这个模块的名字

    state: {
        productNum: 10
    },
    getters: {
        brief: function (state) {
            return state.productNum + "件衣服"
        }
    },
    mutations: {
        addProNum: function (state) {
            return state.productNum++
        }
    },
    actions: {
        changeProductNum: function (content) {
            setTimeout(()=>{content.commit('addProNum')},1000)
        }
    }
}