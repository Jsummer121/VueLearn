# Vue笔记
> 官方文档：https://vuejs.bootcss.com/guide/conditional.html

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



