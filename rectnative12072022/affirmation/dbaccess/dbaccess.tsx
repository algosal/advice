import axios from "axios";

async function callAffirmation() {
    //    return await axios.get(`https://api.goprogram.ai/inspiration`)
    return await axios.get(`https://api.adviceslip.com/advice`)
    .then(res => {
      const advice = res.data.slip.advice;
       // console.log(res.data);
        return advice; 
    }).catch((error)=>{console.log(error)});
    
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
