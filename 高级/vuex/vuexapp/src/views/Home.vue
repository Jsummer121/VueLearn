<template>
  <div class="home">
<!--    对于整个项目来说的局部变量-->
    <h1>点击数量：{{count}}</h1>
    <button @click="addEvent">添加</button>

    <hr>
<!--    vuex的方式-->
    <h1>点击数量：{{$store.state.number}}</h1>
    <button @click="emitAction">添加</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      count: 0
    }
  },
  methods: {
    addEvent: function () {
      this.count++
    },
    emitAction:function () {
      // 可以在全局共享数据时不混乱
      // 可以随时看到是那个action在修改数据
      this.$store.commit('addNum')
    }
  }
}
</script>
