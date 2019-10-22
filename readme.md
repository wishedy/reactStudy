## 第一课 react简介
- react是一种新的编程思想 all in js
- facebook 2013年五月退出
- 函数式编程
- 使用人数最多的前端框架
- 健全的文档与完善的社区
- react fiber 指的是react16版本
- react的主要特点
  - 声明式开发
  - 可以与其他框架并存
  - 组件化
  - 单向数据流
  - 视图层框架
  - 函数式编程
#### 相比于vue
- 灵活性比较高的项目
## 第二课 开发环境的搭建
- 第一种方式js文件使用react
- 第二种方式使用脚手架工具来编码（初学建议使用react官方提供的脚手架工具create-react-app）,具体安装步骤参见官网
  #### 搭建步骤
  - 安装node
  - npm install create-react-app -g
  - create-react-app 项目名称
  - cd 进入相应的文件夹
  - 运行yarn start或者npm run dev
  #### 了解工程目录的内容
  - readme项目的说明文件，可以自己编写
  - package.json脚手架的相关依赖
  - node_modules第三方模块依赖包
  - public favicon.ico浏览器左上角的icon
  - public index.html首页的相关模板内容
  - src目录是项目开发的最重要的目录，所有的入口在index.js里面
  #### JSX语法
  ```javascript
  ReactDOM.render(<div><App /><HelloWorld/></div>, document.getElementById('root'));
  render(){//jsx语法
           return (
               <h1>hello world第一个组件创建</h1>
           )
       }
       //简单理解就是可以直接在js文件中编写html代码，但是在JSX中不仅可以使用html，同样也可以实现js功能，jsx识别组件必须是以大写开头
  ```
## 第三课 使用react实现一个toDoList功能（toDoList.js）
- immutable 不要直接改变state的内容
- jsx的语法细节
  - 注释：单行注释{/*注释内容*/}，多行注释{//注释内容}
  - 在jsx标签中不能使用class会与关键字冲突，需要使用className
  - text和HTML的转义
```JavaScript
 dangerouslySetInnerHtml = {{__html:item}}
```
  - 在下面的情况下react会报错，因为for与关键字冲突，需要使用htmlFor代替
```JavaScript
<label for="idName"></label>
<input id="idName" className="input" type="text" value={this.state.inputVal} onChange={this.setVal}/>
```
## 第四课 propTypes defaultProps

- 使用propsTypes，首先是引入，
```JavaScript
 import PropTypes from 'prop-types';
```
- 对props类型做定义
```JavaScript
TodoItem.propTypes={
    content:PropTypes.string.isRequired,
    itemDelete:PropTypes.func,
    index:PropTypes.number
}//代表是必传的项：isRequired
```
```JavaScript
TodoItem.defaultProps = {
    test:"hello world"
};
```
- [官网相关示例](https://reactjs.org/docs/typechecking-with-proptypes.html)
## 第五课 props state 与render函数的关系
- 当组件的props或者state发生改变的时候，render函数就会重新执行
- 当父组件的render函数执行的时候，前提是这个渲染和子组件有关系，子组建的render函数也会执行一次
- state数据渲染过程
  - 首先在constructor里面初始化了state数据
  - 有一段JSX模板
  - 数据+模板结合，生成真实的dom并且渲染显示
  - state数据发生改变
  - 数据+模板结合，生成真实的dom，替换原始的都没并且渲染
  + 在以上的过程中存在一个漏洞缺陷，第一次生成一个完整的dom，第二次同样生成一个完成的dom
  - 对于漏洞的弥补，可以将新的dom和原始的dom做对比，找差异，
  - 例如找出input框发生变化
  - 只用局部的新元素替换掉局部的老元素
- 但是以上解决方案对性能的提升依然并不是非常明显
   - react应对这个问题提出了虚拟dom的方案
   - 完整的顺序
     - 首先在constructor里面初始化了state数据
       - 有一段JSX模板
       - 数据+模板结合，生成真实的dom并且渲染显示
       - 生成虚拟dom(虚拟dom就是一个js对象，用它来描述真实dom) ['元素',{元素自身所带的属性},['嵌套元素',{元素相应的属性}]]（在这步过程中损耗了性能）
       - state数据发生改变
       - 比较原始虚拟dom中的内容和新虚拟dom的区别，找到相应的元素，直接操作相应的元素改变其中的内容（在这一步过程中极大地提高了性能）这里要采用rea的diff算法，所谓diff算法，就是寻找差异的算法different，其中最重要的就是同级比较
- react中ref的使用
```HTML
<input
                    type="text"
                    value={this.state.inputVal}
                    ref={(input)=>{this.input=input}}
                    onChange={this.handleInputChange}
                />

```

## 第六课 组件的生命周期（在某一时刻组件会自动调用的函数）
- 组件初始化的时候
    - Initinalization 这时候组件会初始化自己的数据（set props and state），发生在函数constructor
    - mounting(componentWillMount,render,componentDidMount)，只是在页面挂载的时候（组件第一次挂载到页面的时候）执行，其余时间改变dom的时候，只有render执行
      - componentWillMount在页面挂载之前执行，当组件即将被挂载到页面的时候执行
      - componentDidMount在组件被挂载的页面之后执行,在这个函数中通常是写ajax数据请求的过程，
      - render函数必须自己编写，且不可或缺，render函数不能操作数据，因为操作完数据，又会重新进入到render函数中，这时候就会造成一个死循环。
- 组件更新过程中涉及的函数
    - updation 在组件更新的过程中涉及的生命函数,shouldComponentUpdate在组件即将跟新前调用，这个函数要求返回一个布尔值，布尔值真代表需要被更新，布尔值假代表不需要被更新
      - 当props发生变化的时候（componentWillRecevieProp一个组件存在props的时候会调用，执行的之后会执行shouldComponentUpdate，false不会继续执行，true继续执行，componentWillUpdate,之后会执行render函数，最后执行componentDidUpdate）
      - componentWillRecevieProp 当一个组件要从父组件接收参数，只要父组件的render函数被执行了，子组件的这个生命周期就会被执行，如果这个组件第一次存在于父组件中，不会被执行，如果这个组件已经存在于这个父组件中才会被执行
      - 当states发生变化的时候调用的生命周期，shouldComponentUpdate,与上文同理，componentWillUpdate,render,componentDidUpdate
     - Unmounting组件卸载的时候涉及到的生命周期
       - componentWillUnMount 当这个组件即将被页面剔除的时候执行
    - 所有的生命周期函数都可以删除，唯独render函数
    - shouldComponetnUpdate主要是为了提高性能而设置的，并不是所有的数据改变都需要执行render函数，该生命钩子会接收两个参数，nextProps和nextState，可以根据相应的条件判断返回布尔值来确定渲染
    - 在页面初始化的时候，需要动态加载一些数据，也就是ajax请求，这个请求适合放在componentDidMount函数里，放在render函数中会出现一个死循环，之所以使用这个生命钩子是因为这个函数只会被执行一起，那么为什么不放在componentWillMount但是在react-native中或者在其他开发环境下该生命周期会有问题


### 第五课 在react中发送ajax请求
 - 使用axios,具体使用规则参见[此处](https://www.kancloud.cn/yunye/axios/234845)
 - 使用Charies模拟接口请求（一个在本地模拟接口请求的工具，同时可以抓取本地浏览器的请求）（未完待续）
### 第六课 react中的动画
 - 借助css3进行布尔值切换className并通过transition实现
 - 使用css动画效果，只要是通过keyframes
 - 使用react-transition-group，详情见[官方文档](https://reactcommunity.org/react-transition-group/)
```JavaScript
import { CSSTransition } from 'react-transition-group';
<CSSTransition
              in={showValidationMessage}
              timeout={300}
              classNames="message"
              unmountOnExit
              onExited={() => {
                this.setState({
                  showValidationButton: true,
                });
              }}
            >
               <div></div>
            </CSSTransition>
```
### 第七课 redux
- redux = reducer+flux
- redux的工作流程
   -  向图书馆借书-->借什么书-->图书馆管理员接收到操作-->查询后将书籍给使用者
   - ![avatar](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571660362438&di=e3fa79ad6a66e358f118e9e84a0f5542&imgtype=0&src=http%3A%2F%2Fwww.qingruanit.net%2FcatchImages%2F20170311%2F1489201469979061460.png)
   -  component-->action creators-->reducers-->store-->component
- 使用[ant](https://ant.design/index-cn) redux重新编写todolist
- 关于redux的总结
  - store是唯一得
  - 只有store能够改变自己的内容
  - reducer必须是个纯函数，纯函数，给到固定的输入，一定有固定的输出，而且不会有任何副作用
  - redux 核心api
    - createStore
    - store.subscribe
    - store.dispatch
    - store.getState
    - createStore
### 第八课 UI组件与容器组件的拆分
- UI组件：傻瓜组件
- 容器组件：聪明组件
- UI组件负责页面的渲染，容器组件负责页面的逻辑
- 无状态组件