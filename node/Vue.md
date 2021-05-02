# Vue笔记
> 官方文档：https://vuejs.bootcss.com/guide/conditional.html

>js中匿名函数的使用：`()=>{}`或者`function () {}`

## 一、初识Vue
&ensp;Vue在正常的html中，需要先导入：
```javascript
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```
&ensp;在导入之后，我们还需要在body内创建一个容器来作为唯一的el（元素）进行后续的操作。
```html
<body>
    <div id="app">
        <h1>这是vue第一个例子</h1>
    </div>
</body>
```
&ensp;在创建好之后，就可以在`script`中进行相应的配置了。

```html
<script>
    let app = new Vue({
        el: '#app'
    })
</script>
```
至此，初始化九已经全部完成了，我们还可以添加一个data进行数据查看：
```html
<body>
    <div id="app">
        <h1>{{ msg }}</h1>
    </div>

    <script>
        let app = new Vue({
            el: '#app',
            data: {
                msg: 'Hello World'
            }
        })
    </script>
</body>
```
## 二、条件渲染
&ensp;在一个对象中添加一个`v-if`，后面添加的内容可以为一个布尔值或者一个条件判断式。
### 最基础的v-if
```html
<body>
    <div id="app">
        <div v-if="canShow">这是条件判断式</div>
    </div>

    <script>
        let app = new Vue({
            el: '#app',
            data: {
                canShow: true
            }
        })
    </script>
</body>
```
这样的代码，运行之后，就会看到页面中可以出现中文字母，而如果将canShow改为False，则不会出现任何东西
### if-else
当然，有if肯定会有else，这里只需要注意一个点就是，在if和else的元素之间不能出现其他的元素，不然会造成渲染失败
### if-else-if-else
这个也是常用的一种，下面的是一个稍微简单点的例子
```html
<div id="app">
    <h2>允许登录时间:
        <span v-if="age < 14">5h</span>
        <span v-else-if="age < 20">8h</span>
        <span v-else>18h</span>
    </h2>
</div>
<script>
    let app = new Vue({
        el: '#app',
        data: {
            age: 20
        }
    })
</script>
```
这一段就会发现页面中出现18h
### v-if和v-show的区别
v-if和v-show最主要的区别在于：

v-if如果第一次不显示，那该元素就不会进行渲染。如果内容已经显示，但是改为不显示，则直接从DOM中去除而v-show只是在css层面进行修改，就是不管v-show是真还是假，都会进行渲染，如果为假，则display: none因此，对于需要反复切换的组件，推荐使用v-show，而只需要一次的则推荐使用v-if

## 三、列表渲染

通过v-for来进行列表渲染

### 最基础的列表渲染

```html
<body>
    <div id="app">
        <ul>
            <li v-for="item in stars">
            	{{item}}
            </li>
        </ul>
    </div>
    
    <script>
        let app= new Vue({
            el: '#app',
            data: {
                stars: [
                    '蔡徐坤',
                    '鹿晗',
                    '张杰',
                    '周杰伦'
                ],
            }
        })
    </script>
</body>
```

### 注意点

-   for与if一起使用的话，都是先执行for然后执行if，这样对性能会有所下降。
-   可以再for的时候获取当前的index
-   对于对象来说同样可以进行循环，并且可以获取到该对象的每一个key和value与此时的index

## 四、模板语法

-   v-once可以固定数据
-   v-html可以显示原生html语言
-   v-on可以简写为@
-   v-bind可以简写为:
-   模板语言支持原生js语句（加减乘除或者三目运算）

## 五、计算属性和监听器

使用方法名：

-   计算属性：computed
-   监听器：watch

计算属性实际上就是一个缓存，将需要多次轮询一个大量数组的结果先进行存储，然后每次调用的时候直接返回该值即可。（所以计算属性监听的是依赖值）

监听器是监听值的修改，比如msg的修改（类似于befrorecreate和created的整合）。

注：计算属性默认是getter，但是也是可以添加setter，只需要再名字后面添加对象即可

## 六、class和style绑定

class绑定方式：

-   str直接写入
-   数组方式
-   对象方式
-   混合使用

style绑定方式：

-   str拼接
-   数组方式
-   对象方式

## 七、事件监听

-   可以直接写入js的简单表达式
-   可以传入事件对象
-   可以传参：若要传入event则需要再里面放置`$event`
-   修饰符的种类有许多，once、stop、ctrl等

## 八、表单输入

表单输入使用`v-model`来进行绑定，而普通的js则需要先获取该元素，然后获取该元素的内容，这里直接给一个值，输入的或者相关的数据直接存入当前值中。

-   可以添加的地方：
    -   单行文本框
    -   多行文本框
    -   下拉列表框
    -   复选框
    -   单选框等
-   值绑定：
    -   对于单选按钮，复选框及选择框的选项，`v-model` 绑定的值通常是静态字符串
    -   当然，复选框也可以是一个数组
-   修饰符
    -   在`v-model`后添加
    -   `.lazy`：默认情况下，每按一次键盘都会触发一次事件，如果使用这个，则会在鼠标移出之后进行触发
    -   `.number`：自动将字符串变成数字

## 九、动画

vue中动画可以简单理解成6个钩子函数的使用

![](https://vuejs.bootcss.com/images/transition.png)

1.  `v-enter`：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
2.  `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
3.  `v-enter-to`：**2.1.8 版及以上**定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 `v-enter` 被移除)，在过渡/动画完成之后移除。
4.  `v-leave`：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
5.  `v-leave-active`：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
6.  `v-leave-to`：**2.1.8 版及以上**定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 `v-leave` 被删除)，在过渡/动画完成之后移除。

### 用法

-   现在需要进行动画演示的外层套一层`<transition></transition>`标签
-   然后再标签内部输入name
    -   注意：这个name会再后期自动融入class。与你所写的钩子函数进行整合
-   再css中添加相应的名称+对应的钩子函数即可

### 自定义

对于自定义过渡动画，同样有6个钩子。

-   `enter-class`
-   `enter-active-class`
-   `enter-to-class` (2.1.8+)
-   `leave-class`
-   `leave-active-class`
-   `leave-to-class` (2.1.8+)

并且自定义的类名优先级高于普通的类名。这里推荐使用`animate.css`

## 十、生命周期
总的来说，Vue的生命周期从创建到消灭，一共有3个阶段：
-    初始化
-    挂载
-    销毁

在这里，一共有8个钩子
-   beforecreate()
-   created()
-   beforeMount()
-   mounted()
-   beforeUpdate()
-   updated()
-   beforeDestory()
-   destory()
## 十一、组件

组件可以将重复度较高的部分进行抽取形成一个组件

### 组件的创建

组件的创建方法：Vue.component('name', {})

组件的注册有两种：全局和局部。如果不在Vue前面添加let或者var，则是全局的组件，如果添加了，则是局部变量。局部变量必须在根组件内部使用`components`进行申明。

对于 `components` 对象中的每个 property 来说，其 property 名就是自定义元素的名字，其 property 值就是这个组件的选项对象。

### 父组件传值子组件

-   子组件在内部声明一个`props`，然后再列表里放入需要获取的值
    -   `props: ['school']`
-   再父组件中，使用刚刚声明的值进行绑定，再进行传值
    -   `<school v-for="sch in schoolList" :school-name="sch"></school>`

### 子组件向父组件传值

-   子组件先再需要传参的地方设置事件

    -   ```
        template: '<li><h3>学校名称：{{schoolName}}</h3><button @click="chooseEvent(schoolName)">选择学校</button></li>',
        ```

-   在事件内部实现`$emit`

    -               methods: {
                        chooseEvent: function (schoolName) {
                            // console.log(schoolName)
                            // 想要将子元素的数据传递给父元素，要自定义触发事件
                            this.$emit('cschool',schoolName)
                        }
                    }

-   此时，回到生成该子组件的地方，声明一个单机事件，使用刚刚emit声明的名字

    -   `<school v-for="sch in schoolList" :school-name="sch" @cschool="changeEvent"></school>`

-   最后，再父组件实现该方法即可

    -   ```vue
        methods: {
            changeEvent: function (data) {
                this.chooseSchool = data
            }
        }
        ```
### 组件传方法
除了传值，组件之间同样可以方法。

```html
// 1.通过父组件传入的方法进行执行操作
this.action(schoolName)
// 2.通过子组件访问父组件的方法进行操作
this.$parent.changeEvent(schoolName)
// 3. 直接修改父元素
this.$parent.chooseSchool = schoolName
```

### v-model的使用
首先要知道,v-model的原理:
-   先绑定value为一个值(a)
-   然后,绑定该数据上的input事件.通过event赋值给a: `a= $event.target.value`

因此,如果要再父子组件进行v-model,我们需要组件的props中定义value,然后再`$emit`的时候名字为input即可直接使用v-model进行绑定
```html
Vue.component('input-com2', {
    props: ['value'],
    template: `<input type="text" :value="value" @input="$emit('input', $event.target.value)">`,
})
```

### 动态组件

要是有动态组件，需要再父页面中使用`<component></component>`即可，然后使用`is`来进行绑定即可。对于多个组件，可以直接再components中写入名字即可。

#### 插槽

对于正常的组件，是无法通过父组件向子组件写入html的。如果真的想要，那就再子组件中写入一个`slot></slot>`即可。

## 十二、vuecli安装

>    https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create

-   ```bash
    npm install -g @vue/cli
    ```

-   创建一个公共目录，存放所有项目

-   使用vue start app_name来创建app

-   下载完成之后，进入文件

-   使用`npm run server`跑整个项目

## 十三、socket-io
> github地址:https://github.com/socketio/socket.io

### 下载

-   从github复制socket.io.js文件，放入自己的文件中
-   使用npm下载`socket-io`：`npm install --save socket.io`

### 服务器搭建

```javascript
// 文件名：index.js
const server = require('http').createServer();
const io = require('socket.io')(server,{cors: true});  // 这里设置了cors，可以有效解决2.3版本以后的跨域问题

// 设置监听端口
server.listen(80);

// 监听io的连接事件
// 模板：io.on('connection', ()=>{})
io.on('connection', client => {
    // emit发事件:前面的字符串为该事件的方法,客户端可以通过该方法实现一对一的访问
    client.emit('news', {hello: 'hello Vue'});
    // on接收事件
    client.on('event', data => { console.log(data) });
});
```

启动命令：`node index.js`

### 完整的服务器搭建例子

```javascript
const server = require('http').createServer(handler)
const io = require('socket.io')(server,{cors: true})
const fs = require('fs')

server.listen(80)

// 处理web服务器正常请求
function handler(req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500)
                return res.end('Error')
            }
            res.writeHead(200)
            res.end(data)
        })
}

// 实时通讯的连接
// io.on('connection', ()=>{}),监听io的连接事件
io.on('connection', function (client) {
    // emit发事件:前面的字符串为该事件的方法,客户端可以通过该方法实现一对一的访问
    client.emit('news', {hello: 'world'})
    // on接收事件
    client.on('event', function (data) {
        console.log(data)
    })
})
```

### 客户端搭建

```javascript
<script src="js/socket.io.js"></script>
const socket = io("http://localhost")
socket.on('news', data => {
    console.log(data)
    socket.emit('event',{my:'Hello World'})
})
```

### socket.io自带的事件

-   connect:查看socket是否渲染成功 
-   disconnect:检测socket断开连接 
-   reconnect:重新连接socket事件

## 十四、express

这个是socket.io的升级版

### 安装

`npm install --save express`

`npm install express express-generator -g`

### 手动搭建服务器

```javascript
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server,{cors: true});

server.listen(80);

io.on('connection', client => {
    client.emit('news', {hello: 'hello Vue'});
    client.on('event', data => { console.log(data) });
});
```

同样的，需要注意搭建的时候注意跨域问题

客户端可以和之前一样这里就不再重复了

### 自动搭建

#### 下载依赖

-   安装socket.io：`npm install socket.io --save`

-   在命令行输入:`express --view=ejs EXPRESS_NAME`即可
-    移动项目路径：cd EXPRESS_NAME`
-   下载依赖：npm install
-   运行app：SET DEBUG=EXPRESS_NAME`:* & npm start

#### 文件配置

-   在EXPRESS_NAME文件下创建一个socketio.js文件

-   在文件中写入一个可以为我们后续自己调用的接口

    -   ```javascript
        let socketio = {}
        
        function getSocket(server) {
            socketio.io = require('socket.io')(server,{cors: true})
        }
        
        socketio.getSocket = getSocket;
        
        module.exports = socketio
        ```

-   打开bin目录下的www文件，在第23行插入刚刚的配置

    -   ```javascript
        var socketio = require('../socketio')
        socketio.getSocket(server)
        ```

-   找到app.js，在41行添加如下代码即可

    -   ```javascript
        setTimeout(()=>{
            let socketio = require('./socketio')
            let io = socketio.io;
            io.on('connection', client => {
                client.emit('news', {hello: 'hello Vue'});
                client.on('event', data => { console.log(data) });
            });
        }, 100)
        ```

-   在之前的客户端添加3000端口

    -   `const socket = io("http://localhost:3000")`

#### 运行

命令：`npm start`

## 十五、vue原理

我们知道，正常的情况下，需要通过Vue来实现vue的生成。然后在里面传入我们所需要的数据和配置信息。那我们就可以根据这个来生成一个class，然后利用这个来理解Vue的原理

### Html初始化

```html
<div id="app">
    <h1>{{msg}}</h1>
    <h1 v-html="msg"></h1>
    <input type="text" v-model="msg">
    <button @click="changeEvent">修改msg</button>
</div>

<script>
    let app = new Vue({
        el: '#app',
        data: {
            msg: 'Hello World',
            username: 'summer'
        },
        methods: {
            changeEvent: function () {
                this.msg = 'hello Vue'
            }
        }
    })
</script>
```

### Vue初始化

#### 1. el的绑定

最开始的时候，我们需要创建一个Vueclass，然后再构造函数内部进行简单的配置el。

```javascript
class Vue{
    // 这里options就是我们正常的传入值
    constructor(options){
        // 通过选择器获取跟对象
        this.$el = querySelector(options.el)
        this.$options = options
    }
}
```

#### 2. data的绑定

当完成el绑定之后。我们就需要进行数据的绑定，即实现将options的data中的数据放入this中。

这里我们可以通过轮询，将每个值依次通过defineProperty函数放入即可。

>   相关网址：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

简单的说，就是通过defineProperty函数给this添加新的属性和值

```javascript
proxyData(){
    for (let key in this.$options.data){
        Object.defineProperty(this, key, {
            // 是否可以更改此属性描述符的类型，以及是否可以从相应的对象中删除该属性。
            configurable:false,
            // 是否可以被枚举这两个都是默认为false
            enumerable:true,
            // 添加设置事件
            set(val){
                this.$options.data[key] = val
            },
            get(){
                return this.$options.data[key]
            }
        })
    }
}
```

#### 4. 劫持事件

当实现上述之后，我们会发现，确实在this中已经加入了相关的data。但我们需要知道一件事：一个键可能关联了很多很多的对象，因此我们为了方便管理，需要添加一个新的类，然后这个类中包含app对象，key的值，节点的值和属性名。然后就是最关键的添加更新事件，

```javascript
class Watch{
    constructor(vm, key, node, attr, nType) {
        // vm即实例化的app对象
        this.vm = vm;
        // key即绑定的vm属性
        this.key = key;
        // node即此vm[key]数据绑定的html节点
        this.node = node;
        // vm数据所绑定的html节点的属性名称
        this.attr = attr;
    }
    update(){
        // 进行数据更新
        this.node[this.attr] = this.vm[this.key]
    }
}
```

当配置好之后，我们就可以来完成我们的劫持事件。

-   首先，依次循环data中的值和获取该键对应的值
-   同样利用defineProperty方法添加往每个数据中添加set和get事件
-   对于get直接返回该值即可
-   对于set，获取改动的值之后，将原来的值换成现在的值，然后判断$watchEvent中是否存放了相关的watcher，如果有则依次进行数据更新，如果没有就算了

```javascript
class Vue{
    constructor(options) {
        // 通过选择器获取根对象
        this.$el = document.querySelector(options.el)
        this.$options = options

        // 设置一个对象，专门保存修改和更新
        // this.$watchEvent[key] = [event, event, event]
        this.$watchEvent = {}

        // 代理option的data数据
        this.proxyData()

        // 劫持事件
        this.observe()
    }
    // 劫持事件
    observe(){
        for (let key in this.$options.data){
            // 获取此处的value保存
            let value = this.$options.data[key]
            let that = this
            Object.defineProperty(this.$options.data, key, {
                configurable:false,
                enumerable:true,
                set(val){
                    // console.log('触发设置事件')
                    value = val
                    if(that.$watchEvent[key]){
                        that.$watchEvent[key].forEach((item, index)=>{
                            item.update()
                        })
                    }
                },
                get(){
                    // 获取this[key]时，返回options.data[key]
                    return value
                }
            })
        }
    }
```

至此，初始化就已经全部完成了，接下来就是挂载

### Vue挂载

-   根据节点依次循环他的子节点
-   如果子节点的类型是1：（说明是元素类型）
    -   判断该节点是否有`v-html`
        -   根据`v-html`获取键，然后判断主节点是否含有这个键
        -   有键的话，将该这个键所对应的值放入innerhtml
        -   根据四个相关数据生成watcher然后添加放入this.$watchEvent[vmKey]
        -   最后，删除该子节点的`v-html`属性即可
    -   判断是否包含`v-model`
        -   …
    -   判断是否包含`@click`属性
        -   …
    -   查看其子节点的子节点是否含有相关属性，如果有则进入
-   如果子节点的类型是3：（说明是文本类型）
    -   文本类型比较简单，利用正则匹配即可

```javascript
// 编译事件
compile(cNode){
    cNode.childNodes.forEach((node, index)=>{
        if(node.nodeType == 1){
            // 元素类型
            if(node.hasAttribute('v-html')){
                let vmKey = node.getAttribute('v-html').trim()
                if(this.hasOwnProperty(vmKey)){
                    node.innerHTML = this[vmKey]
                    let wather = new Watch(this, vmKey, node, 'innerHTML')
                    if(!this.$watchEvent[vmKey]){
                        this.$watchEvent[vmKey] = []
                    }
                    this.$watchEvent[vmKey].push(wather)
                    // 删除属性
                    node.removeAttribute('v-html')
                }
            }
            // 判断是否右v-model属性
            if (node.hasAttribute('v-model')){
                let vmKey = node.getAttribute('v-model').trim()
                if(this.hasOwnProperty(vmKey)){
                    node.value = this[vmKey]
                    let wather = new Watch(this, vmKey, node, 'value')
                    if(!this.$watchEvent[vmKey]){
                        this.$watchEvent[vmKey] = []
                    }
                    this.$watchEvent[vmKey].push(wather)
                }
                node.addEventListener('input', (event)=>{
                    this[vmKey] = node.value
                })
                // 删除属性
                node.removeAttribute('v-model')
            }
            // 判断是否有绑定@click
            if (node.hasAttribute('@click')){
                node.addEventListener('click', (event)=>{
                    let vmKey = node.getAttribute('@click').trim()
                    this.$options.methods[vmKey](event)
                })
            }

            if(node.childNodes.length > 0){
                this.compile(node)
            }
        }
        if(node.nodeType == 3){
            // 文本类型
            let reg = /\{\{(.*?)\}\}/g;
            let text = node.textContent
            node.textContent= text.replace(reg, (match, vmKey)=>{
                vmKey = vmKey.trim()
                if(this.hasOwnProperty(vmKey)){
                    node.value = this[vmKey]
                    let wather = new Watch(this, vmKey, node, 'textContent')
                    if(!this.$watchEvent[vmKey]){
                        this.$watchEvent[vmKey] = []
                    }
                    this.$watchEvent[vmKey].push(wather)
                }
                return this[vmKey]
            })
        }
    })
}
```

## 十六、路由

首先，按照路由的方式生成的项目，会有一个App.vue和router/index.js这两个主要的文件。其中index.js里面存放的是路由的配置信息，而App.vue是整个项目的门面，进行主页面展示。

>   官方文档：https://router.vuejs.org/zh/guide/essentials/navigation.html

### 1.router和route

router是进行所有路由操作的核心元件，例如相关的路由跳转等操作。而route则是一个活跃路由，它里面存放着该路由下的一些参数信息，要在template中使用相关信息就可以使用route获取

### 2.动态路由

**使用方法**：在index.js中，设置的path后面使用`/:Params_name`即可。

```javascript
{
    path: '/news/:id',
    name: 'News',
    component: News
},
```

而所获得的值可以使用route.params来获取，当然，如果向查看路由的改变，可以使用watch来设置监听

```javascript
watch: {
    $route(to, from) {
        // 对路由变化作出响应...
    }
}
```

### 3.嵌套路由

实际生活中的应用界面，通常由多层嵌套的组件组合而成。同样地，URL 中各段动态路径也按某种结构对应嵌套的各层组件。例如在新闻页面下，搜不同的东西出现不同的页面。

**使用方法**：在index.js中配置完基本信息之后，添加一个children属性，然后再其数组里面放入新的配置信息接口

```html
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
```

```javascript
path: '/bignews',
    component: BigNews,
        children:[
            {
                path: '',
                component: videoCom
            },
            {
                path: 'text',
                component: textCom
            },
            {
                path: 'image',
                component: imageCom
            }
        ]
```

### 4.编程式导航

-   router.push(location, onComplete?, onAbort?)：向history栈中添加一个记录
    -   简写：<router-link :to="...">
-   router.replace(location, onComplete?, onAbort?)：替换history栈中第一个记录
    -   简写：<router-link :to="..." replace>
-   router.go(n)：向前、向后跳动n步

### 5.命名路由

使用方法：在index.js中配置完基础信息之后，添加name即可

```javascript
{
    path: '/about',
    name: 'about',
    component: About
},
```

### 6.命名视图

首先，需要明确的一点就是，要是有命名视图那就必须在根vue（也就是一般的App.vue）上使用。

使用方式：在`<router-view>`中添加一个name即可，在index.js中使用components进行相关配置

```html
<div>
    <router-view name="nav"/>
    <router-view name="aside"/>
    <router-view />  <--!对于没有给出名字的，则默认为default-->
</div>  
```

```javascript
{
    path: '/',
    components: {
        default: Home,
        nav: NavView,
        aside: AsideView
    }
}
```

### 7.重定向和别名

重定向：在index.js中配置完之后，添加`redirect:`即可

别名：在index.js中配置完之后，添加`alias:`即可

## 十七、路由高级
### 1. 导航守卫
导航首位其实就是在路由变化过程中生成的钩子函数
主要分为三种：
-    前置守卫
-    解析守卫
-    后置钩子

当然，这里的守卫方式也分为全局的和局部的。
#### 1.1 全局前置守卫
当一个导航被触发时，全局前置守卫按照创建顺序调用。
**参数**：
-   to: Route: 即将要进入的目标 路由对象

-   from: Route: 当前导航正要离开的路由

-   next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

    -   next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。

    -   next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。

    -   next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。
    -   next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。

```javascript
router.beforeEach((to, from, next)=>{
  console.log('beforeEach')
  console.log(to)
  console.log(from)
  next() // 进行跳转

  // next(false) // 不进行跳转：此时路由如果改变，会发现页面还是不进行改变的，始终是原来的样式

  // 进行权限校验，然后设定重定向
  // let isLogin = false
  // if (isLogin||to.path==='/login'){
  //   next()
  // }else {
  //   next({
  //     path: '/login'
  //   })
  // }
})
```

#### 1.2 全局后置钩子
在导航确认之后，执行函数，因此这里已经没有next参数
```javascript
router.afterEach((to, from)=>{
  console.log('afterEach')
  console.log(to)
  console.log(from)
})
```
#### 1.3路由独享守卫
该方法写在路由定义的内部，名字为：`beforeEnter`
该方法与前置守卫方法使用类似。
```javascript
{
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // about独享的事件
    beforeEnter: (to, from ,next) => {
        console.log('about独享事件')
        // 进行权限校验，然后设定重定向
        let isLogin = true
        if (isLogin||to.path==='/login'){
            next()
        }else {
            next({
                path: '/login'
            })
        }
    }
}
```
#### 1.4 组件内守卫
最后，你可以在路由组件内直接定义以下路由导航守卫：
-   beforeRouteEnter
-   beforeRouteUpdate (2.2 新增)
-   beforeRouteLeave

```javascript
beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log('--beforeRouteEnter')
    next()
},
beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log('--beforeRouteUpdate')
    next()
},
beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log('--beforeRouteLeave')
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
        next()
    } else {
        next(false)
    }
}
}
```

#### 1.5 完整的导航解析
1.导航被触发。

2.在失活的组件里调用 beforeRouteLeave 守卫。

3.调用全局的 beforeEach 守卫。

4.在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。

5.在路由配置里调用 beforeEnter。

6.解析异步路由组件。

7.在被激活的组件里调用 beforeRouteEnter。

8.调用全局的 beforeResolve 守卫 (2.5+)。

9.导航被确认。

10.调用全局的 afterEach 钩子。

11.触发 DOM 更新。

12.调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

### 2. 路由元信息
定义路由的时候可以配置 meta 字段


```javascript
router = {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {requiresAuth: true}
}


router.beforeEach((to, from, next)=> {
    // 根据meta进行校验
    if (to.meta.requiresAuth && !isLogin) {
        next({path: '/login'})
    } else {
        next()
    }
}
```

### 3. 过渡动效

路由里面的过渡动效与普通的动效类似，直接在`<router-view>`的外面嵌套一层`<transition>`即可。

在这里也涉及全局和局部，如果是在app.vue里面添加的则是全局的动效而如果是在组件内部添加的，则是局部分，我们还可以为他们添加一个名字。

注：由于vue的动画默认是进入离开同时进行，这样会导致有明显的动画不适应，因此我们可以使用过度模式。在transition的mode内进行处理。

-   `in-out`：新元素先进行过渡，完成之后当前元素过渡离开。
-   `out-in`：当前元素先进行过渡，完成之后新元素过渡进入。

```javascript
<transition name="fade" mode="out-in">
  <!-- ... the buttons ... -->
</transition>
```

### 4. 数据获取

>   https://router.vuejs.org/zh/guide/advanced/data-fetching.html#%E5%AF%BC%E8%88%AA%E5%AE%8C%E6%88%90%E5%90%8E%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE

获取数据我们有两种方式：

-   **导航完成之后获取**：先完成导航，然后在接下来的组件生命周期钩子中获取数据。在数据获取期间显示“加载中”之类的指示。（created钩子内）
-   **导航完成之前获取**：导航完成前，在路由进入的守卫中获取数据，在数据获取成功后执行导航。（在beforeRouteEnter）

### 5. 页面滚动

使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 `vue-router` 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。

**注意: 这个功能只在支持 `history.pushState` 的浏览器中可用。**

```javascript
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    console.log('-------')
    console.log(savedPosition)
    if(to.path==='/list' && savedPosition){
      return {x: 0, y: savedPosition.y/2}
    }
  }
})
```

`scrollBehavior` 方法接收 `to` 和 `from` 路由对象。第三个参数 `savedPosition` 当且仅当 `popstate` 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。

这个方法返回滚动位置的对象信息，长这样：

-   `{ x: number, y: number }`
-   `{ selector: string, offset? : { x: number, y: number }}`
-   `behavior: 'smooth'`可以设置平滑滚动

### 6. 路由懒加载

当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

-   在路由配置时，使用动态导入。

    -   ```javascript
        {
            path: '/list',
            component: ()=>import('../views/list'),
          }
        ```

-   把组件按组分块，

    -   ```javascript
        const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
        ```

## 十八、axios

>   http://www.axios-js.com/zh-cn/docs/

### **代码实例**：

```javascript
this.$axios({
	methos: "post",
	url: 'apiURL',
	data: {
		keyword: "1"
	}
})
.then(response => {
	console.log(response, "success");
})
.catch(error => console.log(error, "error"))
```

### **相关api**：

-   `axios.request(config)` 该方法是下面所有方法的“父类”
-   `axios.get(url, params: {}, config)` get方法需要多传一个params
-   `axios.delete(url, params, config)`
-   `axios.head(url, params, config)`
-   `axios.options(url, params, config)`
-   `axios.post(url, params, config)`
-   `axios.put(url, params, config)`

### 请求配置

```
{
   // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // default

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data, headers) {
    // 对 data 进行任意转换处理
    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理
    return data;
  }],

  // `headers` 是即将被发送的自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params: {
    ID: 12345
  },

   // `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data: {
    firstName: 'Fred'
  },

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 1000,

   // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // default

  // `adapter` 允许自定义处理请求，以使测试更轻松
  // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
  adapter: function (config) {
    /* ... */
  },

 // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

   // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default

  // `responseEncoding` indicates encoding to use for decoding responses
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default

   // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

   // `onUploadProgress` 允许为上传处理进度事件
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  onDownloadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

   // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,

  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },

  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 5, // default

  // `socketPath` defines a UNIX Socket to be used in node.js.
  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  // Only either `socketPath` or `proxy` can be specified.
  // If both are specified, `socketPath` is used.
  socketPath: null, // default

  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  // `keepAlive` 默认没有启用
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` 指定用于取消请求的 cancel token
  // （查看后面的 Cancellation 这节了解更多）
  cancelToken: new CancelToken(function (cancel) {
  })
}
```

### 响应配置

```
{
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 服务器响应的头
  headers: {},

   // `config` 是为请求提供的配置信息
  config: {},
 // 'request'
  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance the browser
  request: {}
}
```

使用 `then` 时，你将接收下面这样的响应 :

```
axios.get('/user/12345')
  .then(function(response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```

### 配置默认值

### 全局默认值

在项目中，很多配置信息都是需要重复输入的，为了减少代码量，我们可以设置全局的默认值。

```javascript
axios.defaults.baseURL = 'https://api.example.com';  // 配置基础的url，如果在后续的url中不使用根路由，则默认会将url加在此后面
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';  // 默认情况下，axios将JavaScript对象序列化为JSON。 要以application/x-www-form-urlencoded格式发送数据
```

### 自定义默认实例

```javascript
// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### 拦截器

在请求或响应被 `then` 或 `catch` 处理前拦截它们。

```
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });


// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```

如果你想在稍后移除拦截器，可以这样：

```
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

可以为自定义 axios 实例添加拦截器

```
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```

## 十九、vuex

>   https://vuex.vuejs.org/zh/

uex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

但是你可能会问，什么是状态管理。

### 1.状态管理

这个状态自管理应用包含以下几个部分：

-   **state**，驱动应用的数据源，也就是我们熟知的data；
-   **view**，以声明方式将 **state** 映射到视图；
-   **actions**，响应在 **view** 上的用户输入导致的状态变化

以下是一个表示“单向数据流”理念的简单示意

<img src="https://vuex.vuejs.org/flow.png" style="zoom:50%;" />

首先我们定义数据，然后数据在template中进行渲染，当渲染完成以后用户可以通过methods进行交互，当交互后数据会再次发生改变，此时就重新进行渲染。而这样的一个闭环就称为单向数据流

但是，当我们的应用遇到**多个组件共享状态**时，单向数据流的简洁性很容易被破坏：

-   多个视图依赖于同一状态。
-   来自不同视图的行为需要变更同一状态。

因此，我们可以把组件的共享状态抽取出来，以一个全局单例模式管理。在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为！

通过定义和隔离状态管理中的各种概念并通过强制规则维持视图和状态间的独立性，我们的代码将会变得更结构化且易维护。

### 2.开始

安装完成之后，来到store文件夹下的index.js，我们可以给出一个全局的state和mutauions。

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建整个项目的数据对象，将多组件共用的数据放置此对象里
export default new Vuex.Store({
  // data
  state: {
    number: 0
  },
  // methods
  mutations: {
    increment (state) {
      state.number++
    }
  },
  // 异步方法
  actions: {
  },
  // 模块
  modules: {
  }
})
```

然后进入main.js进行store的注册

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 实例app对象中配置store对象
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

最后，进入需要使用该变量的组件，然后使用即可。

```vue
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
      this.$store.commit('addNum')
    }
  }
}
</script>
```

### 3. 核心

vuex的核心在于5个钩子

-   state
-   getters
-   mutations
-   actions
-   modules

#### State

获取方式：

-   通过this获取：`this.$store.state.msg`

-   通过映射方式获取：`computed: mapState(['msg','age','number']),`

-   通过对象方式获取：

    -   ```
        computed: mapState({
          msg: 'msg',
          age: 'age',
          number:(state)=>{
            return state.number
          },
          // 注意，这里如果向使用this就不能使用箭头函数，而得使用一个有名函数
          greenMsg(state){
            return this.color + state.msg
          }
        })
        ```

-   对象展开：

    -   ```
        computed: {
          reverse: function() {
            return this.color.split('').reverse().join('')
          },
          // 使用对象展开运算符将此对象混入到外部对象中
          ...mapState({
            msg:'msg',
            age:'age',
            number:'number',
            greenMsg(state){
              return this.color + state.msg
            }
          })
        }
        ```

#### Getters

这个方法类似于计算属性，因此不过多讲，思路就是在store中写好参数之后，通过上面的四种方法进行调用

#### Mutations

mutations类似于methods方法，但是这个方法是同步的，如果想异步则需要使用下一个方法。调用方式同上，但是不是在computed中分发，而是去methods中

#### Actions

异步操作都将放在这里，调用和分发方法与上面的mutations一样

#### Module

当一个项目过大时，如果使用同一套代码就会非常庞大，因此看了一使用module进行拆分，这样可以将代码逐渐简化。

需要注意的地方：命名空间。如果使用不使用命名空间，则module中的参数和方法都是全局的，如果使用命名空间，则需要在调用之前添加上module的名字。