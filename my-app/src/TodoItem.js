import React,{Component} from 'react';
class TodoItem extends  Component{
    constructor(props){
        super(props);
        let _this = this;
        _this.deleteItem = _this.deleteItem.bind(_this);

    }
    render() {
        let _this = this;
        const {textContent}  = _this.props ;
        return (
            <li onClick={_this.deleteItem}>{textContent}</li>
        )
    }
    deleteItem(){
        let _this = this;
        const {index} = _this.props;
        _this.props.removeItem(index);
    }
}
export default  TodoItem;
