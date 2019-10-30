import React,{Component} from 'react';
import {HomeWrapper,HomeLeft,HomeRight} from "./style";
import Topic  from './components/Topic';
import Recommend  from './components/Recommend';
import List  from './components/List';
import Writer  from './components/Writer';

class Home extends Component{
  render(){
      return (
          <HomeWrapper>
              <HomeLeft>
                  <img src="http://b-ssl.duitang.com/uploads/blog/201404/13/20140413085901_GsSdw.jpeg" className="banner-img" alt=""/>
                  <Topic></Topic>
                  <List></List>
              </HomeLeft>
              <HomeRight>
                  <Recommend></Recommend>
                  <Writer></Writer>
              </HomeRight>
          </HomeWrapper>
      )
  }
}
export default Home;