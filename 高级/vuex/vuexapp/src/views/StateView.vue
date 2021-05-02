<template>
  <div>
    <h1>名字：summer</h1>
    <h2>年龄：{{age}}</h2>
    <h2>信息：{{msg}}</h2>
    <h2>数量：{{number}}</h2>
    <h2>合成参数：{{greenMsg}}</h2>
    <h2>对象展开：{{reverse}}</h2>
    <input type="text" v-model="number">
    <input type="text" :value="number" @input="changeValue">
  </div>
</template>

<script>
  // 在单独构建的版本中辅助函数为 Vuex.mapState
  import { mapState } from 'vuex'

  // state在组件的应用
  // 将想要用到的全局state数据，放置到组件的conpute内部使用，v-model将set和get分开处理
  export default {
    name: 'StateView',
    data(){
      return {
        color: 'green'
      }
    },
    // 普通的使用store获取数据和修改数据
    // computed: {
    //   msg: function () {
    //     return this.$store.state.msg
    //   },
    //   age: function () {
    //     return this.$store.state.age
    //   },
    //   number: {
    //     get:function () {
    //       return this.$store.state.number
    //     },
    //     set: function (val) {
    //       this.$store.commit('setNum',val)
    //     }
    //   }
    // }

    // 使用辅助函数
    // 第一种：映射方式：
    // computed: mapState(['msg','age','number']),
    // methods: {
    //   changeValue: function (e) {
    //     this.$store.commit('setNum', e.target.value)
    //   }
    // }

    // 第二种：对象方式
    // computed: mapState({
    //   msg: 'msg',
    //   age: 'age',
    //   number:(state)=>{
    //     return state.number
    //   },
    //   // 注意，这里如果向使用this就不能使用箭头函数，而得使用一个有名函数
    //   greenMsg(state){
    //     return this.color + state.msg
    //   }
    // })

    // 第三种：对象展开
    computed: {
      reverse: function() {
        return this.color.split('').reverse().join('')
      },
      // 使用对象展开运算符将此对象混入到外部对象中
      ...mapState({
        msg:'msg',
        age:'age',
        number:'number',
        greenMsg(state){
          return this.color + state.msg
        }
      })
    }
  }
</script>

<style scoped>

</style>
