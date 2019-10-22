import React,{Component,Fragment} from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Input,Button,List  } from 'antd';
import store from '../store/index';

import {getInitList,getInputChangeAction,getAddTodoListAction,getDeleteTodoItemAction} from '../store/actionCreators';
class Todolist extends Component{
    constructor(props){
        super(props);
        const _this = this;
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.handleStoreChange = _this.handleStoreChange.bind(_this);
        _this.addTodoList = _this.addTodoList.bind(_this);
        _this.state = store.getState();
        store.subscribe(_this.handleStoreChange);
    }
    componentDidMount(){
        const action = getInitList();
        console.log(action);
        store.dispatch(action);
    }
    render(){
        const _this = this;
        return (
            <Fragment>
                <div style={{'margin':'10px'}}>
                    <Input placeholder="todo info" style={{'width':'300px','marginRight':'10px'}} value={_this.state.inputVal} onChange={_this.handleInputChange}/>
                    <Button type="primary" onClick={_this.addTodoList}>提交</Button>

                </div>
                <List
                    style={{'margin':'10px','width':'300px'}}
                    bordered
                    dataSource={_this.state.list}
                    renderItem={(item,index) => (
                        <List.Item onClick={_this.deleteTodoItem.bind(_this,index)}>
                            {item}
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }
    addTodoList(){
        const action = getAddTodoListAction();
        store.dispatch(action);
    }
    deleteTodoItem(index){
        const action = getDeleteTodoItemAction(index);
        store.dispatch(action);
    }
    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action)
    }
    handleStoreChange(){
        console.log('store change');
        const _this = this;
        _this.setState(store.getState());
    }
}
export default Todolist;