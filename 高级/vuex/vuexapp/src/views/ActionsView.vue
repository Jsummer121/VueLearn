<template>
    <div>
      <h1>action</h1>
      <h1>{{number}}</h1>
      <button @click="getDuanzi">点击获取段子1</button>
      <button @click="setDz">获取段子2</button>
      <button @click="addNum">AddNumber</button>
      <ul>
        <li v-for="(item,index) in duanzi" :key="index">
          {{index + 1}}:{{item.text}}
        </li>
      </ul>
    </div>
</template>

<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  export default {
    name: 'ActionsView',
    computed: {
      ...mapState(['duanzi','number'])
    },
    methods: {
      getDuanzi: function () {
        this.$store.dispatch('setDz')
      },
      ...mapActions(['setDz']),
      ...mapMutations(['addNum'])
    }
  }
</script>

<style scoped>

</style>
