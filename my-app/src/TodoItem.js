import React,{Component} from 'react';
import PropTypes from  'prop-types';
class TodoItem extends Component{
    constructor(props){
        //当组件的props或者state发生改变的时候，render函数就会重新执行
        //当父组件的render函数执行的时候，前提是这个渲染和子组件有关系，子组建的render函数也会执行一次
        super(props);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    render(){
        console.log('我是子组件的render函数');
        const _this = this;
        return <li key={_this.props.index} onClick={this.handleItemDelete}>{_this.props.content}-{_this.props.index}</li>
    }
    shouldComponentUpdate(nextProps,nextState){
        return ((this.props.content+"")!==(nextProps.content+""));
    }
    handleItemDelete(){
        const _this =this;
        const {itemDelete,index}  = _this.props;
        itemDelete(index);
    }
}
TodoItem.propTypes={
    content:PropTypes.string.isRequired,
    itemDelete:PropTypes.func,
    index:PropTypes.number
};
TodoItem.defaultProps = {
    test:"hello world"
};
export default TodoItem;