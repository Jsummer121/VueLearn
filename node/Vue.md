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

