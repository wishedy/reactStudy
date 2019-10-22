import  React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem';
import Toggle from './Toggle';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import './toggle.css';
class Todolist extends Component {
    constructor(props){
        super(props);
        const _this = this;
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.addList = _this.addList.bind(_this);
        _this.deleteItem = _this.deleteItem.bind(_this);
        _this.state = {
            inputVal:"",
            list:[]
        }
    }
    render(){
        //当组件的props或者state发生改变的时候，render函数就会重新执行
        //当父组件的render函数执行的时候，自组建的render函数也会执行一次
        console.log('我是父组件的render函数');
        return (
            <Fragment>
                {/*jsx里面的注
                 这是一个多行的注释
                释*/}
                {
                    //这是单行注释
                }
                <input
                    type="text"
                    value={this.state.inputVal}
                    ref={(input)=>{this.input=input}}
                    onChange={this.handleInputChange}
                />
                <Toggle></Toggle>
                <div>{this.state.inputVal}</div>
                <button onClick={this.addList}>提交</button>
                <TransitionGroup>
                <ul>
                    {
                       this.getTodoItem()
                    }
                </ul>
                </TransitionGroup>
            </Fragment>
        )
    }
    getTodoItem(){
        const _this = this;
       return (_this.state.list).map((item,index)=>{

           return <CSSTransition
               key={index}
               timeout={1000}
               classNames='fade'
               unmountOnExit
               appear={true}
               onEntered={(el)=>{console.log(el);}}
           ><Fragment key={index}  >
               <TodoItem itemDelete={_this.deleteItem} content={item} index={index}/>
           </Fragment></CSSTransition>
       })
    }
    addList(){
        const _this = this;
        /*const list = JSON.parse(JSON.stringify(_this.state.list));
        _this.setState({
           list:[...list,_this.state.inputVal],
            inputVal:""
        });*/
        _this.setState((preState)=>{
            return {
                list:[...preState.list,preState.inputVal],
                inputVal:""
            }
        });
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(this.state.inputVal,nextState.inputVal);
        return ((this.state.inputVal+"")!==(nextState.inputVal+""));
    }
    deleteItem(index){
        const _this = this;
        const list = JSON.parse(JSON.stringify(_this.state.list));
        list.splice(index,1);
        /*_this.setState({
            list:[...list]
        });*/
        _this.setState(()=>{
           return {
               list
           }
        }
        );
    }
    handleInputChange(e){
        const _this = this;
        //console.log(_this.input);
        /*_this.setState({
            inputVal: e.target.value
        })*/
        const value =e.target.value;
            _this.setState(()=>{

            return {
                inputVal:value
            }
        });
    }
}
export default  Todolist;