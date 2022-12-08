//This file is for Objects


   import { stringify } from 'querystring';
import react from 'react'; 
   import { useState } from "react";
   export default function Datas(){

    let [xpoint,setXpoint] = useState(10);

    let [ypoint,setYpoint] = useState(20); 
        
    let [z,setZ] = useState(10);
/*
    function onlyHooks(){
    
        
    }

  */
 
    function summingObj(){
        
            let sum = {
                lpoint:10,
                mpoint:20,
            };
    
        let ourObjectSum = Object.create(sum);
        let total= ourObjectSum.lpoint + ourObjectSum.mpoint;

  //      let total = sum.lpoint + sum.mpoint;
        setZ(total);
        console.log("our total of the object is = ");
        console.log(z); 
        alert(z);
        z=z+1;

    }
    
    
    return(
        <div>
 
    <button className="button" onClick={summingObj}>Object result</button>

</div>
    );

}