import React,{Component,Fragment} from 'react';
import {ListItem,ListInfo,ListHandelWrapper} from '../style';
import {connect} from 'react-redux';
class List extends Component{
    render(){
        const _this = this;
        const {articleList} = _this.props;
        const list  = articleList.toJS();
        console.log(list);
        return (
            <Fragment>
                {(list).map((item)=>{
                  return (
                      <ListItem key={item.id}>
                          <ListInfo>
                              <h1 className="title">{item.title}</h1>
                              <p className="content">{item.content}</p>
                              <ListHandelWrapper>
                                  <span className="authorName">{item.author}</span>
                                  <span className="reviewNum">
                                <i className="icon"></i>
                                685
                            </span>
                                  <span className="collectNum">
                                <i className="icon"></i>
                                68
                            </span>
                              </ListHandelWrapper>
                          </ListInfo>
                          <img src={item.imageUrl} alt="" className="listLogo"/>
                      </ListItem>
                  )
                })}
            </Fragment>
        )
    }
}
const mapStatesToProps = (state)=>{
    return {
        articleList:state.getIn(["home","articleList"])
    }
};
const mapDispatchToProps = (dispatch)=>{
    return {

    }
};
export default connect(mapStatesToProps,mapDispatchToProps)(List);