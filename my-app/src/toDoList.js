import  React,{Component,Fragment} from 'react';
class ToDoList extends Component{
    constructor(props){
        super(props);
         this.setVal = this.setVal.bind(this);
         this.addList = this.addList.bind(this);
         this.deleteList = this.deleteList.bind(this);
        this.state = {
            inputVal:"",
            listData:[]
        }
    }
    setVal(e){
        console.log(e.target);
        let t = this;
        t.setState({
            inputVal: e.target.value
        });
    }
    addList(){
        let t = this;
        let list =  [...t.state.listData,t.state.inputVal];
        t.setState({
            listData:list
        });
        t.setState({
            inputVal: ''
        });
    }
    deleteList(i){
        let t = this;
        let list = [...t.state.listData];
        list.splice(i,1);
        this.setState({
            listData:list
        });
    }
    render(){
        return (
            <Fragment>
                <div>
                    <input type="text" value={this.state.inputVal} onChange={this.setVal}/>
                    <button onClick={this.addList}>提交</button>
                </div>
            <ul>
                {
                    this.state.listData.map((item,index)=>{
                            return (
                                <li key={index} onClick={this.deleteList(index)}>{item}</li>
                            )
                    })
                }
            </ul>
            </Fragment>
        )
    }
}
export default  ToDoList;