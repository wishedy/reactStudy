import React,{Component,Fragment} from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import './toggle.css';
class Toggle extends Component{
    constructor(props){
        super(props);
        this.state = {
            show:true
        };
        this.handleToggle = this.handleToggle.bind(this);

    }
    render(){
        const _this = this;
        return (
            <Fragment>
                <CSSTransition
                    in={_this.state.show}
                    timeout={1000}
                    classNames='fade'
                    unmountOnExit
                    appear={true}
                    onEntered={(el)=>{console.log(el);}}
                >
                    <div>animate</div>
                </CSSTransition>
                <div className={_this.state.show?'show':'hide'}>hello，i'm div</div>
                <button onClick={_this.handleToggle}>toggle</button>
            </Fragment>
        )
    }

    handleToggle(){
        const _this = this;
        _this.setState({
            show:!_this.state.show
        },()=>{
            console.log(_this.state.show);
        })
    }
}
export default Toggle;
