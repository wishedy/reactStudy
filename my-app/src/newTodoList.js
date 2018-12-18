import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List,Alert} from 'antd';
import store from './store';
class Todolist extends  Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        store.subscribe(this.handleStoreChange);//监听store的state值

    }
    render(){
        return (
            <div style={{marginTop:10}}>
                <section style={{marginLeft:'auto',marginRight:'auto',width:400}}>
                    <div>
                        <Input placeholder="ToDoList" style={{width:300,marginRight:10}} value={this.state.inputValue} onChange={this.handleInputChange}/>
                        <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                    </div>
                    <div>
                        <List
                            style={{width:300,marginTop:20}}
                            bordered
                            dataSource={this.state.list}
                            renderItem={item => (<List.Item>{item}</List.Item>)}
                        />
                    </div>
                </section>
                <Alert
                    style={{'display':this.state.errorText?'block':'none'}}
                    message="Error Text"
                    description="请输入添加的内容"
                    type="error"
                    onClose={this.closeDialog}
                />
            </div>
        )
    }
    handleInputChange(e){
        const action = {
          type:"change_input_value",
          value:e.target.value
        };
        store.dispatch(action);
        console.log(e.target.value);
    }
    handleStoreChange(e){
        console.log('store.changed');
        this.setState(
                store.getState()
        )
    }
    handleBtnClick(){
        let t = this;
        if(t.state.inputValue.length){
            const action = {
                type:"add_todo_item",
                value:t.state.inputValue
            };
            store.dispatch(action);
        }else{
            const action = {
                type:"show_error_text",
                value:true
            };
            store.dispatch(action);
        }

    }
    closeDialog(){
        const action = {
            type:"hide_error_text",
            value:false
        };
        store.dispatch(action);
    }
}
export default  Todolist;