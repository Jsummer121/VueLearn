<template>
    <div class="chatItem">
        <img :src="chatitems.user.headerimg" alt="" :style="imgStyle">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'chatitem',
        props: [
            'chatitems'
        ],
        data () {
            return {
                imgStyle: 'width:60px;height:60px'
            }
        }
    }
</script>

<style scoped>
    .chatItem{
        display: flex;
    }
</style>
