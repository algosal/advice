import { stringify } from "querystring";
import { useState } from "react";

export default function Addingtwo(){

  let [num5 ,addnum3]= useState(0);
  let [num6 , addnum4] = useState(0);
 let  [sum ,  addSum] = useState(0); 
 
 
 
 function addding(){
    // add two numbers

    
     let total  = num5 + num6;

  
 addSum(total) ; 
 
console.log("This is only addd function");
    // display the sum
    console.log('The sum of ' + num5 + ' and ' + num6 + ' is: ' + stringify({sum}));

    

  }




    return(
      
     
      <div>
        <br></br>
        <br></br>

<input className="input" type="number"
          value={num5}
         onChange={e => addnum3(+e.currentTarget.value)}
          placeholder="0"
          />

  <h1> + </h1>


  <input className="input" type="number"
          value={num6}
          onChange={e1 => addnum4(+e1.currentTarget.value)}
          placeholder="0"
          /> 
  

<div>
<br></br>
  <h1> "The total sum value is "+  {sum} </h1>
  <button className="button" onClick={addding}>Press for result</button>
  </div>
  </div>


 ); 
}