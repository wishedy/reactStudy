import React,{Component} from 'react';
class Test extends Component{
    render(){
        const {content} = this.props;
        return (
            <div>{content}</div>
        )
    }
}
export default Test;
