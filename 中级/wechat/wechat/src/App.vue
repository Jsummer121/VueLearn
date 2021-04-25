<template>
  <div id="app">
      <h1>{{msg}}</h1>
      <div class="content">
          <chat-com :currentUser="currentUser"></chat-com>
          <userlist-com :userlist="userlist" @chooseuser="toggleUser"></userlist-com>
      </div>
  </div>
</template>

<script>
import chatCom from './components/chatcom.vue'
import userlistCom from './components/userlist.vue'

export default {
    name: 'App',
    components: {
    chatCom, userlistCom
    },
    data () {
        return {
            msg: 'Dreamspy聊天室',
            userlist: [
                {
                  username: '小明',
                  headerimg:require('./assets/img/p1.jpg')
                },
                {
                  username: '小红',
                  headerimg:require('./assets/img/p2.jpg')
                },
                {
                  username: '小绿',
                  headerimg:require('./assets/img/p3.jpg')
                },
                {
                  username: '小蓝',
                  headerimg:require('./assets/img/p4.jpg')
                },
                {
                  username: '小黄',
                  headerimg:require('./assets/img/p5.jpg')
                }
            ],
            currentUser: {
                  username: '小明',
                  headerimg:require('./assets/img/p1.jpg')
            }
        }
    },
    methods: {
      toggleUser: function (index) {
          this.currentUser = this.userlist[index]
      }
    }
}
</script>

<style scoped>
    .content{
        display: flex;
        width: 800px;
        height: 700px;
        margin: 0 auto;
    }
</style>
