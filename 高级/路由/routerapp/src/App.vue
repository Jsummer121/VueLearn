<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link> |-->
<!--      <router-link to="/me">Me</router-link> |-->
<!--      <router-link to="/news/123">News</router-link> |-->
<!--      <router-link to="/weather/广州/汕头">Weather</router-link> |-->
<!--      <router-link to="/bignews">BigNews</router-link>-->
<!--    </div>-->
<!--    <router-view/>-->

      <router-view name="nav"/>
      <router-view name="aside"/>
      <router-view />
  </div>
</template>

<script>
    export default {
        watch: {
            '$route': function f() {
                console.log('路由发生改变')
            }
        }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
