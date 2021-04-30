<template>
    <div>
        <h1>BigNews</h1>
        <div>
            <p>设置一个children属性，该列表里面存放入全部的子组件即可(不能在其前面添加/)</p>
        </div>
        <div id="nav">
            <router-link to="/bignews">Video</router-link> |
            <router-link to="/bignews/text">Text</router-link> |
            <router-link to="/bignews/image">Image</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'BigNews'
    }
</script>

<style scoped>

</style>
