import React from "react";
class LifeCycle extends React.Component{
    constructor(props){
        super(props)
        this.state={
            dogs:[],

        }
    }
    componentDidMount(){
        console.log("we are in CompoenentDidMount");
        this.state.dogs=["Pom","Tom"];
        console.log(this.state.dogs)
    }
    render(){
        return(
            <>
            <p>Lets see all the dogs</p>
            {this.state.dogs.map((i)=>(
                <p>{i}</p>
            ))}
            
            </>
        )
    }
}
export default LifeCycle;