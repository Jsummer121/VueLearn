<template>
    <div>
        新闻内容页面{{$route.params.id}}
        <div>动态路由：
            <ul>
                <li><b>使用方法</b>：在router/index.js中配置的时候，使用:加名字即可</li>
                <li><b>文档地址</b>：https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html</li>
                <li><b>路由对象</b>：https://router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'News',
        mounted() {
            console.log(this)
        }
    }
</script>

<style scoped>

</style>
