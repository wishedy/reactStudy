## 第一课 react简介
- react是一种新的编程思想 all in js
- facebook 2013年五月退出
- 函数式编程
- 使用人数最多的前端框架
- 健全的文档与完善的社区
- react fiber 指的是react16版本
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

