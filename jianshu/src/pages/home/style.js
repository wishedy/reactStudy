import styled from 'styled-components';
import chat from '../../statics/chat.png';
import love from '../../statics/love.png';
export const HomeWrapper = styled.div`
width:960px;
margin:0 auto;
height:300px;
`;
export  const HomeLeft = styled.div`
float:left;
margin-left:15px;
padding-top:30px;
width:625px;
.banner-img{
width:625px;
height:270px;
}
`;
export const TopicWrapper = styled.div`
padding:20px 0 10px 0;
margin-left:-18px;
display: block;
min-height:50px;
height:auto;
`;
export const ListItem = styled.section`
  padding: 15px 0 20px 0;
  margin-bottom: 15px;
  min-height:100px;
  height:auto;
  &:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
  .listLogo{
  width: 150px;
  height:100px;
  float: right;
  border-radius: 4px;
  }
`;
export const ListInfo = styled.section`
float: left;
width: 458px;
.title{
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
}
.content{
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
}
`;
export const ListHandelWrapper  = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    height:20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color:#b4b4b4;
    span{
      display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    }
    .icon{
    width: 12px;
    height:12px;
    margin-right: 2px;
    display: inline-block;
    }
    .authorName{
        margin-right: 10px;
    }
    .reviewNum{
       margin-right: 10px;
       .icon{
        background: url(${chat}) no-repeat center center/contain;
       }
    }
    .collectNum{
      .icon{
        background: url(${love}) no-repeat center center/contain;
       }
    }
`;
export const TopicItem = styled.span`
    float:left;
    background: #f7f7f7;
    height:32px;
    line-height:32px;
    border:1px solid #dcdcdc;
    color:#333;
    border-radius: 4px;
    padding-right:10px;
    margin-left:18px;
    font-size:14px;
    margin-bottom:18px;
    img{
        width:32px;
        height:32px;
        display: block;
        float: left;
        margin-right:10px;
    }
`;
export const RecommendWrapper = styled.div`
margin:30px 0;
width:280px;
`;
export  const RecommendItem = styled.div`
width:280px;
height:50px;
background: url(${(props)=>{return props.imageUrl}}) no-repeat center center/contain;
min-height: 50px;
margin-bottom: 6px;
border-radius: 4px;
`;
export  const HomeRight = styled.div`
float:right;
width:240px;
`;