
import React  from "react";
export default class classTest{
    constructor(props) {
        super(props);
    
        this.state = {
            count : 1
        };
    
        this.delta = this.delta.bind(this);
    }

    delta(){
        this.setState({
            count : this.state.count++
        });
    }

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                </div>
        );
    }
}
