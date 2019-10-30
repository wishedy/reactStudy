import React,{Component} from 'react';
import {RecommendWrapper,RecommendItem} from '../style';
import {connect} from 'react-redux';
class Recommend extends Component{
    render(){
        const _this = this;
        const {recommendList}  = _this.props;
        const list = recommendList.toJS();
        return (
            <RecommendWrapper>
                {(list).map((item)=>{
                    return (
                        <RecommendItem key={item.id} imageUrl={item.imageUrl}></RecommendItem>
                    )
                })}
            </RecommendWrapper>
        )
    }
}
const mapStatesToProps = (state)=>{
    return {
        recommendList:state.getIn(["home","recommendList"])
    }
};
const mapDispatchToProps = (dispatch)=>{
    return {

    }
};
export default connect(mapStatesToProps,mapDispatchToProps)(Recommend);