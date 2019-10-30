import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
import aaPic from '../../statics/Aa.png';
import writePic from '../../statics/write.png';
import maxPic from '../../statics/max.png';
import maxWhitePic from '../../statics/maxWhitePic.png';
import spin from '../../statics/spin.png';
export const HeaderWrapper = styled.div`
height:58px;
border-bottom:1px solid #f0f0f0;
`;
export const Logo = styled.a.attrs({
    href:"/"
})`
    height:56px;
    position:absolute;
    top:0;
    left:0;
    width:100px;
    display:block;
    background:url(${logoPic}) no-repeat center center/contain;
`;
export const Nav = styled.div`
width:920px;
height:100%;
margin:0 auto;
box-sizing:border-box;
`;

export const NavItem = styled.div`
line-height:56px;
padding:0 15px;
color:#333;
&.left{
 float:left;
}
&.right{
 float:right;
 color:#969696;
 &.login{
 padding-right: 0;
 margin-right: 15px;
 }
 &.changeFormat{
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
 }
}
&.active{
    color:#ea6f5a;
}`;
export const InputWrapper = styled.div`
  float:left;
  margin-top:9px;
  box-sizing:border-box;
  margin-left:20px;
  position: relative;
  .icon{
    background: url(${maxPic}) no-repeat center center;
    background-size:18px 18px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px!important;
    line-height: normal!important;
    padding: 0!important;
    color: #969696!important;
    text-align: center;
    border-radius: 50%;
    &.focusIcon{
      background: #969696 url(${maxWhitePic}) no-repeat center center;
      border-radius: 50%;
      background-size:18px 18px;
    }
  }
`;
export const SearchInfo = styled.section`
position:absolute;
top:56px;
background: #fff;
left:0;
width:240px;
padding:0 20px;
min-height:100px;
height:auto;
box-shadow: 0 0 8px rgba(0,0,0,.2);
`;
export const SearchInfoTitle = styled.div`
 margin-top:20px;
 margin-bottom:15px;
 line-height:15px;
 font-size:15px;
 color:#969696;
  
`;
export const Spin = styled.i`
display: inline-block;
background:url(${spin}) no-repeat center center/contain;
width:12px;
height:12px;
margin-right:2px;
float: left;
transition: all .6s ease-in;
transform-origin: center center;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  cursor: pointer;

`;
export const SearchInfoItem = styled.a`
display:block;
line-height:20px;
padding: 0 5px;
font-size: 12px;
border: 1px solid #ddd;
color:#787878;
border-radius: 2px;
float:left;
cursor: pointer;
margin-right:10px;
margin-bottom:10px;
&:hover{
 color:#333;
}
`;
export const NavSearch = styled.input.attrs({
    placeholder:"搜索"
})`
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    box-sizing: border-box;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    color: #666;
    transition: all 800ms ease;
    &:focus{
    outline: none;
    }
    &.focused{
      width: 240px;
      transition: all 800ms ease;
    }
&::placeholder{
 color:#999;
}
`;
export const AaIcon = styled.i`
background:url(${aaPic}) no-repeat center center/contain;
width:24px;
height:25px;
display:inline-block;
`;
export const WriteIcon = styled.i`
background:url(${writePic}) no-repeat center center/contain;
width:19px;
height:20px;
display:inline-block;
`;
export  const Addition = styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`;
export const Button = styled.div`
float:right;
margin-top:9px;
line-height:38px;
border-radius:19px;
border:1px solid #ec6149;
margin-right:20px;
padding:0 20px;
&.reg{
color:#ec6149;
}
&.writting{
 color:#fff;
 background:#ec6149;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
}
`;