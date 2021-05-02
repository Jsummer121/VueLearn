<template>
  <div>
<!--    直接获取-->
    <h1>{{$store.getters.reverseMsg}}</h1>
<!--    使用本身的计算属性获取-->
    <h2>{{reverseMsg}}</h2>
<!--    通过mapGetters获取参数-->
    <h2>{{miminMsg}}</h2>
<!--    通过对象展开式获取-->
    <h3>{{msg}}</h3>
    <h3>{{miminMsg('1112124')}}</h3>
    <h3>{{age}}</h3>
    <h3>{{reverseMsg}}</h3>
    <h3>{{nowAge}}</h3>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
  export default {
    name: 'GetterView',
    mounted() {
        console.log(this)
    },
    // 使用computed通过全局获取
    // computed: {
    //   reverseMsg: function () {
    //     return this.$store.getters.reverseMsg
    //   }
    // }
    // 通过mapGetters获取参数
    // computed: mapGetters(['reverseMsg','miminMsg'])
    // 通过对象展开的方式获取
    computed: {
      nowAge: function () {
        return 20+this.$store.state.age
      },
      ...mapState(['msg','age']),
      ...mapGetters(['reverseMsg','miminMsg'])
    }
  }
</script>

<style scoped>

</style>
