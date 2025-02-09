import React from "react";
import "./ClassCompoents.css"
class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count:0,
        }
        this.onAdd=this.onAdd.bind(this);
        this.onMinus=this.onMinus.bind(this);
    }
    onAdd(){
        const n=this.state.count+1;
        this.setState({count:n});
        console.log(this.state.count);
    }
    onMinus(){
        const n=this.state.count-1;
        this.setState({count:n});

    }
    
    componentDidUpdate(){
        console.log("we re in Update state","component Did mount")
    }
    render(){
        const {count}=this.state;
        return(
            <div className="countingArea">
                <button onClick={this.onAdd} className="add">+</button>
                <p className="countFigure">{count}</p>
                <button onClick={this.onMinus} className="minus">-</button>
            </div>
        )
    }
}
export default Counter;