import React,{Component,Fragment} from 'react';
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log(this.props.index);
        const {index}  = this.props.index;
        this.props.handleDelete(index);
    }
    render(){
        const {item}  = this.props;
        return (
            <Fragment>
                <li  dangerouslySetInnerHTML={{__html:item}} onClick={this.handleClick}></li>
            </Fragment>
        )
    }
}
export default  TodoItem;