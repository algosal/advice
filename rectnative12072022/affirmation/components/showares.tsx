import { wrap } from "module";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import callAffirmation from "../dbaccess/dbaccess";
import {callDictionary} from "../dbaccess/dbaccess"; 

export default function MyAffirmation() {

    const [affy, setAffy] = useState("");
    const [inspi,setInspi] = useState(""); 
    const [text, onChangeText] = useState("Word");
    
    async function makingAffy() {
        setAffy(await callAffirmation());
        let wordFromDictionaryMeanings= await callDictionary(text);
        if(wordFromDictionaryMeanings!="None"){
        let meaningsArrayLength = wordFromDictionaryMeanings.meanings.length;
        let meaningsArray = wordFromDictionaryMeanings.meanings; 
        let stateVar ="Meanings of " + wordFromDictionaryMeanings.word + " are:\n\n0. ";
        let conti ="";
       //console.log(meaningsArrayLength)

        for(let i = 0;i<meaningsArrayLength; i++){
           
           // console.log(meaningsArray[i].definitions[0].definition);
             conti = "\n" + (i + 1) + ". ";
             if(i == meaningsArrayLength-1){
                conti = ""; 
             }
        
            stateVar = stateVar + meaningsArray[i].definitions[0].definition + conti;
            //setInspi(meaningsArray[i].definitions[0].definition);
        }
            setInspi(stateVar);
    }
    else{
        setInspi("Not Found"); 
    }
        
    }


    return (
        <View style={[styles.container, {alignItems: 'flex-start', }]}>
            <View style={[{top:-150, height:120,}]}>
              <Text style={{color:"gold", fontSize:18, fontWeight:"bold", paddingLeft:10,  }}>Affirmation Advice</Text>
            <Text style={styles.orange}>{affy}</Text>
            </View>
           
            <View style = {{padding:10, width:'100%', top: -150, height:125,}}>
              <Text style={{fontSize:20, fontWeight:"bold", color:"gold", }}>Dictionary</Text>
              <Text> </Text>
            <TextInput
        style={[styles.input,{width:'100%',}]}
        onChangeText={onChangeText}
        value={text}/>
        </View>

            <View style = {{padding:10, width:'100%', top: -150}}>
            <Text style={[styles.gold, {height:200, paddingLeft: 10, width:'95%', }]}>{inspi}</Text>
            </View>
           
            
            <View style = {{padding:10, width:'100%', top: -150}}> 
            <TouchableOpacity
        style={styles.btn}
        onPress={makingAffy}>
        <Text style={{ fontWeight:"bold", fontSize:15, color:"maroon"}}>Press Here for Salman's Advice</Text>
      </TouchableOpacity>
            </View>
        </View>
    );


    
};

const styles = StyleSheet.create({
    container: {
      marginTop: 0,
      width: 350,
      height: '50%',
      left: 10,
      right:10,
      padding:10,
    },
    gold: {
      color: 'gold',
      fontWeight: 'bold',
      fontSize: 14,
    },
    orange: {
      flexWrap: "wrap", 
      color: 'orange',
      width: 300,
      paddingLeft: 15,
    },
    btn:{
        position: 'absolute',
        width: 300,
        height: 40, 
        backgroundColor: 'gold', 
        borderRadius: 50,
        alignItems: "center",
        textAlignVertical: "center",
        paddingVertical:10,
        left: 10,      
    },
    input: {
        height: 40,
        width: '100%', 
        margin: 0,
        borderWidth: 1,
        borderColor:"green",
        padding: 10,
        color:"gold",
        flex:2,
      },
  });
  

