import React,{Component} from 'react';
import {TopicWrapper,TopicItem} from '../style';
import {connect} from 'react-redux';
class Topic extends Component{
    render(){
        const _this = this;
        const {topicList}  = _this.props;
        const list = topicList.toJS();
        return (
            <TopicWrapper>
                {list.map((item)=>{
                   return (
                       <TopicItem key={item.id}>
                           <img src={item.imageUrl} alt=""/>
                           {item.title}
                       </TopicItem>
                   )
                })}
            </TopicWrapper>
        )
    }
}
const mapStatesToProps = (state)=>{
    return {
        topicList:state.getIn(["home","topicList"])
    }
};
const mapDispatchToProps = (dispatch)=>{
    return {

    }
};
export default connect(mapStatesToProps,mapDispatchToProps)(Topic);