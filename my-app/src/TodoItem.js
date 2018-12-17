import React,{Component,Fragment} from 'react';
import PropTypes from 'prop-types';
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
        const {item,test}  = this.props;
        return (
            <Fragment>
                <li  dangerouslySetInnerHTML={{__html:item+'-'+test}} onClick={this.handleClick}></li>
            </Fragment>
        )
    }
}
//PropTypes.string这时候如果某个对应的值没有传递，不做任何校验
//PropTypes.string.isRequired与上文相反
TodoItem.proppTypes = {
    test:PropTypes.string.isRequired,
    index:PropTypes.number,
    item:PropTypes.string,
    handleDelete:PropTypes.func
};
//props默认值
TodoItem.defaultProps = {
    test:'hello word'
};
//PropTypes具体使用文档https://reactjs.org/docs/typechecking-with-proptypes.html
export default  TodoItem;