import { IncomingMessage } from 'http';
import React, {Component} from 'react' ; 
import ReactDOM from 'react-dom';

/*
 type lastNameMsg={
value:string
 }


 type myCount= { 
   counts : 0
 }


export default class Sal extends React.Component<unknown,any>  {
   constructor(props:any) {
     super(props);
     this.state = {
       value: "Salman",
       count: 0,
      };
      this.cChanges = this.cChanges.bind(this);
 
   }

  //bindTest = (eve:any) => {count: eve.target.value}}; 
   bindTest=()=> {
      //this.setState({count : '2'});
      //this.parseInt(this.state.x)  = parseInt(this.state.count) + 1; 
      //this.setState({count : x});
      
      const newCount = this.state.count+1;
       this.setState({count: newCount});
                
      return 0; 
}; 


render(){
   
   
   return (
      <div>
         <button onClick={this.bindTest}> hi + {parseInt(this.state.count) }</button>
         <button> {this.state.value}</button>
    
      </div>
     );
   }
   //const Greeting = props: => <h1>{props.greeting}</h1>;
}

const Greeting = ({ greeting }:any ) => <h1>{greeting}</h1>;



// let x = new Sal('');
// x.callAlert1();

*/
interface IProps {
   count:number;
   incMent : number; 
}

interface IState {
   countChanged:number
   
}

export default class Player extends React.Component<IProps, IState> {
  // ------------------------------------------^
  constructor(props: IProps) {
    super(props);
    this.state = {countChanged: 0};
    this.cChanges = this.cChanges.bind(this);
   // this.cReset = this.cReset.bind(this);

  }


  cChanges(e:any):any{

   const min = 1;
   const max = 100;
   const rand = min + Math.random() * (max - min);
      this.setState({countChanged:rand}); 

            alert("The original props value passed was " + this.props.count);
          
            console.log(rand);
   }


   cReset=()=>{
      this.setState({countChanged:0}); 
   }

  render() {
    return(
      <div>
        <button
          //ref={playPause => this.playPause = playPause}
          //title={this.state.playOrPause} ;// in this line I get an error
           // in this line I get an error
        onClick={this.cChanges} ><h1>The count Has Changed + {this.state.countChanged}</h1>
                  </button>


                  <button onClick={this.cReset}> Reset </button>

      </div>
    );
  }
}