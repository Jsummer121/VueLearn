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
## if条件渲染
&ensp;在一个对象中添加一个`v-if`，后面添加的内容可以为一个布尔值或者一个条件判断式。
### 1. 最基础的v-if
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
v-if如果第一次不显示，那该元素就不会进行渲染。如果内容已经显示，但是改为不显示，则直接从DOM中去除
而v-show只是在css层面进行修改，就是不管v-show是真还是假，都会进行渲染，如果为假，则display: none
因此，对于需要反复切换的组件，推荐使用v-show，而只需要一次的则推荐使用v-if





