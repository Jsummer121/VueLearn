<template>
    <div>
        <h1>buycar</h1>
        <h2>{{$store.state.buyCar.productNum}}</h2>
        <h2>{{buyCar.productNum}}</h2>
        <h2>{{brief}}</h2>
        <button @click="changeProductNum">添加衣服1</button>
        <button @click="addProNum">添加衣服2</button>
    </div>
</template>

<script>
    import { mapState,mapGetters,mapActions,mapMutations } from 'vuex'
    export default {
    name: 'BuyCar',
    mounted() {
        console.log(this)
    },
    computed: {
        ...mapState(['buyCar']),
        // ...mapGetters(['brief'])
        ...mapGetters({
            brief: 'buyCar/brief'
        })
    },
    methods: {
        // ...mapActions(['changeProductNum']),
        ...mapActions({
            changeProductNum: 'buyCar/changeProductNum'
        }),
        // ...mapMutations(['addProNum'])
        ...mapMutations({
            addProNum:'buyCar/addProNum'
        })
    }
    }
</script>

<style scoped>

</style>
