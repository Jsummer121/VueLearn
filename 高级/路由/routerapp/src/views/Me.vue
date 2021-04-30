<template>
    <div>
        <h1>个人中心</h1>
        <div>相关的网页连接：https://router.vuejs.org/zh/guide/essentials/navigation.html</div>
        <button @click="goPushAbout">push:about页面</button>
        <button @click="goReplaceAbout">replace:about页面</button>
        <button @click="goTo">前进</button>
        <button @click="goBack">后退</button>
    </div>
</template>

<script>
    export default {
        name: 'Me',
        methods: {
            goPushAbout: function () {
                console.log(this)
                // push方法是在history中添加新的路由记录
                // 对于router对象，有以下几种方式可以进行
                // 1. 直接传入字符串（该字符串即拼接的路径地址）
                // 2. 对象：{path: 'about'},该方法是第一种方法的完整式
                // 3. 命令路由，该方法根据router/index.js里面定义的name来进行跳转（可实现解耦）.{ name: 'user', params: { userId: '123' }}
                // 4. 带查询参数。{ path: 'register', query: { plan: 'private' }}
                this.$router.push({name:'About'})
            },
            goReplaceAbout: function (){
                this.$router.replace('about')
            },
            goTo: function () {
                this.$router.go(1)
            },
            goBack: function () {
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>

</style>
