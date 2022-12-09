import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyAffirmation from './components/showares';

export default function App() {
  return (
    <View style={[styles.container, {flexDirection: "column",} ]}>
     <StatusBar/>
     <View style={{flex: 1, top:0, alignItems:"flex-start",}}>
      <Text style={{fontWeight:'bold', fontSize:20, padding:20, color:"gold", top:0,}}>Salman's Advice and Dictionary</Text>
      </View>
      <View style ={{flex:2, alignItems:"flex-start", top:0}}><MyAffirmation/></View> 
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'maroon',
    paddingTop:0,
  },
});
