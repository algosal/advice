import axios from "axios";
import { stringify } from "querystring";

async function callAffirmation() {
    //    return await axios.get(`https://api.goprogram.ai/inspiration`)     
    //return await axios.get(`https://api.adviceslip.com/advice`)
    return await axios.get(`https://salmansaeed.us/affirmations/affirmations.php`)
    .then(res => {
        const affi = res.data.affirmation;
        stringify(affi); 
        //console.log(affi);
        return affi;  
    }).catch((error)=>{console.log(error)});

   /* const config = {
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
        }
      };
    return await axios.get(`https://favqs.com/api/qotd`, config)
    .then(res => {
        //const advice = res.data.slip.advice;
        const advice = res.data.quote.body;
        console.log(res);
        return advice; 
    }).catch((error)=>{console.log(error)});
    */
}

export async function callInspiration() {
    //    return await axios.get(`https://api.adviceslip.com/advice`)
        return await axios.get(`https://api.goprogram.ai/inspiration`)
        .then(inspi => {
          //const advice = res.data.slip.advice;
           // console.log(inspi.data);
            return inspi.data.quote;       // advice; 
        }).catch((error)=>{console.log(error)});
        
    }
    

    export async function callDictionary(word : string) {
        //    return await axios.get(`https://api.adviceslip.com/advice`)
            return await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/`+ word)
            .then(inspi => {
              //const advice = res.data.slip.advice;
   //           var meaningsArrayLength = inspi.data[0].meanings.length;
              var meaningsArray = inspi.data[0]; 
                // for(let i = 0;i<meaningsArrayLength; i++)
                //console.log(meaningsArray[i].definitions[0].definition);
                //console.log(meaningsArray);
                return meaningsArray; 
            }).catch((error)=>{alert("No Word Found: " + word); return "None" });
            
        }
        
        
export default callAffirmation;
