import React,{Component,Fragment} from  'react';
import TodoItem from './TodoItem';
class TodoList extends Component{
    constructor(props){
        super(props);//继承父类的传值
        //定义自己的数据
        this.state = {
            inputValue:'',
            list:[]
        };
        this.changeInputValue = this.changeInputValue.bind(this);
        this.addList = this.addList.bind(this);
        this.removeItem = this.removeItem.bind(this);

    }
    changeInputValue(e){
        let _this = this;
        console.log(e.target.value);
        let val = e.target.value;
        _this.setState(()=>({
            inputValue: val
        }));
       /* _this.setState({
            inputValue: val
        });*/
    }
    addList(){
        let _this = this;
        if(_this.state.inputValue){
            _this.setState(()=>({
                list:[..._this.state.list,_this.state.inputValue],
                inputValue:''
            }));
            /*_this.setState({
                list:[..._this.state.list,_this.state.inputValue],
                inputValue:''
            });*/
        }else{
            //没有数据输入
        }
    }
    removeItem(index){
        let _this = this;
        const list = [..._this.state.list];
        list.splice(index,1);
       /* _this.setState({
           list:list
        });*/
       _this.setState(()=>({
           list:list
       }));
        console.log('删除'+index);

    }
    getTodoItem(){
        let _this = this;
        return _this.state.list.map((item,index)=>{
            return (
                <Fragment key={index}>
                    {/*<li key={index} onClick={_this.removeItem.bind(_this,index)} >
                                        {index+'-'+item}
                                    </li>*/}
                    <TodoItem textContent={item} index={index}  removeItem={_this.removeItem}/>
                </Fragment>
            )
        })
    }
    render() {
        let _this = this;
        return (
            <div className='toDoList'>
                {/*这是一个注释*/}
                <label htmlFor="inputBar">请输入内容</label>
                <input type="text" value={_this.state.inputValue} id="inputBar" onChange={_this.changeInputValue}/>
                <button onClick={this.addList}>提交</button>
                <div>{_this.state.inputValue}</div>
                <div className='listContainer'>
                    <ul className='list'>
                        {
                          _this.getTodoItem()
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default TodoList;
