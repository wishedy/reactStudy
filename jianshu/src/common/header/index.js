import React,{Component,Fragment} from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,AaIcon,WriteIcon,InputWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,Spin} from './style';
import {actionCreators} from './store';
import {connect} from 'react-redux';
class Header extends Component{
    constructor(props){
        super(props);
        const _this = this;
        _this.getListArea = _this.getListArea.bind(_this);
    }
    render() {
        const _this = this;
        const {focused,cancelFocus,setFocus,list}  = _this.props;
        return (
            <Fragment>
                <HeaderWrapper>
                    <Logo/>
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        <NavItem className="right login">登录</NavItem>
                        <NavItem className="right changeFormat">
                            <AaIcon></AaIcon>
                        </NavItem>
                        <InputWrapper>
                            <NavSearch className={focused?"focused":""} onFocus={()=>{
                                setFocus(list)
                            }} onBlur={cancelFocus}></NavSearch>
                            <i className={[`icon ${focused?'focusIcon':''}`]}></i>
                            {_this.getListArea()}
                        </InputWrapper>
                    </Nav>
                    <Addition>
                        <Button className="writting">
                            <WriteIcon></WriteIcon>
                            写文章</Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </HeaderWrapper>
            </Fragment>
        );
    }
    getListArea(){
        const _this  = this;
        const {list,focused,page,handleEnter,handleLeave,mouseIn,handlePageChange,totalPage}  = _this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for(let num = (page-1)*10;num<page*10;num++){
                pageList.push(<SearchInfoItem key={`${newList[num]}${num}`}>{newList[num]}</SearchInfoItem>);
            }
        }
        console.log(focused,mouseIn);
        if(focused||mouseIn){
            return (
                <SearchInfo onMouseEnter={handleEnter}  onMouseLeave={handleLeave}>
                    <SearchInfoTitle>热门搜索
                        <SearchInfoSwitch onClick={()=>{handlePageChange(page,totalPage,_this.spinIcon)}}>
                            <Spin ref={(icon)=>{_this.spinIcon=icon;}}></Spin>换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {pageList}
                    </div>
                </SearchInfo>
            );
        }else{
            return null
        }
    }
}
const mapStatesToProps = (state)=>{
    return {
        focused:state.getIn(["header","focused"]),//state.get('header').get("focused")
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn'])
    }
};
const mapDispatchToProps = (dispatch)=>{
  return {
      cancelFocus(){
          const action = actionCreators.getBlurAction();
          console.log('取消聚焦');
          dispatch(action);
      },
      setFocus(list){
          const action = actionCreators.getFocusAction();
          const getListAction = actionCreators.getList();
          console.log('执行');
          (list.size===0)&&dispatch(getListAction);
          dispatch(action);
      },
      handlePageChange(page,totalPage,spinIcon){
          let pageNum = 0;
          let originalAngel = (spinIcon.style.transform).replace(/[^0-9]/ig,"");
          if(originalAngel){
              originalAngel = parseInt(originalAngel,10);
          }else{
              originalAngel = 0;
          }
          const angelNum = originalAngel+360;
          spinIcon.style.transform = 'rotate('+angelNum+'deg)';
          if(page<totalPage){
              pageNum = page+1;
          }else{
              pageNum = 1;
          }
          const action = actionCreators.getChangePageAction(pageNum);
          dispatch(action);
      },
      handleEnter(){
        const action = actionCreators.getMouseEnterAction();
        dispatch(action);
      },
      handleLeave(){
          const action = actionCreators.getMouseLeaveAction();
          dispatch(action);
      }
  }
};
export default connect(mapStatesToProps,mapDispatchToProps)(Header);