import React,{Component} from 'react';
import store from '../reactReduxStore/index';
import {connect} from 'react-redux';
class TodoList extends Component{
    constructor(props){
        super(props);
        const _this = this;
        _this.state = store.getState();
    }
    render(){
        const _this = this;
        return (
            <div>
                <div>
                    <input type="text" placeholder='请输入内容' value={_this.props.inputVal} onChange={_this.props.changeInputValue}/>
                    <button>提交</button>
                </div>
                <ul>
                   <li>item</li>
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        inputVal:state.inputVal
    }
};
const mapDispatchToProps = (dispatch)=>{
  return {
      handleInputChange(e){
          const _this = this;
          console.log(e.target.value);
      }
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);