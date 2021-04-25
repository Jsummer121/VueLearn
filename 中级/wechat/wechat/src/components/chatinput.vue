<template>
    <div>
        <input type="text" @keydown.enter="send" v-model="inputContent">
        <button @click="send">发送</button>
    </div>
</template>

<script>
    export default {
        name: 'chatinput',
        data () {
            return{
                inputContent: ''
            }
        },
        props: ['sendEvent'],
        methods: {
            send: function () {
                this.sendEvent(this.inputContent)
                this.inputContent= ''
            }
        }
    }
</script>

<style scoped>

</style>
