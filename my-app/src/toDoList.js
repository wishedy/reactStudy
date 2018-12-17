import  React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem';
import Test from './test';
import './style.css';
class ToDoList extends Component{
    constructor(props){
        super(props);
         this.setVal = this.setVal.bind(this);
         this.addList = this.addList.bind(this);
         //this.deleteList = this.deleteList.bind(this);
        this.state = {
            inputVal:"",
            listData:[]
        }
    }
    setVal(e){
        let t = this;
        console.log(t.input.value);
        t.setState({
            inputVal: t.input.value
        });
    }
    addList(){
        let t = this;
        let list =  [...t.state.listData,t.state.inputVal];
        t.setState(()=>{
           return {
               listData:list,
               inputVal: ''
           }
        },()=>{
            //setState本身是一个异步线程，如果在代码下面同步调用会出现数据不准的情况
        });
    }
    deleteList(i){
        let t = this;
        let list = [...t.state.listData];
        list.splice(i,1);
        this.setState(()=>{
           return {
               listData:list
           }
        });
        /*this.setState({
            listData:list
        });*/
    }
    render(){
        return (
            <Fragment>
                <div>
                    <label htmlFor="idName">这是个label</label>
                    <input id="idName" className="input" type="text" value={this.state.inputVal} onChange={this.setVal} ref={(input)=>{this.input=input;}}/>
                    <button onClick={this.addList}>提交</button>
                </div>
                <Test content={this.state.inputVal}></Test>
            <ul>
                {
                    this.state.listData.map((item,index)=>{
                            return (
                                <Fragment key={index}>
                                <TodoItem item={item} index={index} handleDelete={this.deleteList.bind(this)}/>
                                {/*<li key={index} onClick={this.deleteList.bind(this,index)} dangerouslySetInnerHTML={{__html:item}}></li>*/}
                                </Fragment>
                            )
                    })
                }
            </ul>
            </Fragment>
        )
    }
}
export default  ToDoList;