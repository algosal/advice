import React from 'react';
              

export default class MyCar extends React.Component<unknown, any> {    
   
    constructor(props:any) { 
        super(props); 
        this.state = {      
            car:"Benz"   
        };
    }    

    updateData=(eve: any)=>{
        const newCount = this.state.count+1;
       // const inputfield = eve.target.value;
        this.setState({count: newCount});
        // {this.setState({car:"Bently"})};  
    }

   liveUpdateData=(eve:any)=>{
        this.setState({car: eve.target.value});         
    }




    
   render=():JSX.Element=>{    
        return (      
            <div>
            <div>  
            <input type="text" value={this.state.car} onChange={this.liveUpdateData}/>
              
                <br></br>
                <div><p>You Are Writing {this.state.car} </p></div>
              </div>
            <div>
              <button onClick={this.updateData}>click me</button>     
            </div>    </div>
        );  
    } 
    
    }

