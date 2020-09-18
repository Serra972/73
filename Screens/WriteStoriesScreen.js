import React from 'react'; 
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView,KeyboardAvoidingView,ToastAndroid} from 'react-native'; 
import AppHeader from '../Screens/AppHeader'
import db from '../config.js'
import firebase from 'firebase';

export default class WriteStoriesScreen extends React.Component{

    constructor(){
        super()
        this.state={
            storyTitle:"",
            author:"",
            story:"",
        }
    }



    submitStory= async ()=>{
  
        db.collection("Stories").add({
          'storyTitle':this.state.storyTitle,
          'author':this.state.author,
          'story':this.state.story,
        
        })
        ToastAndroid.show("Congratulations ! You have submitted your story !", ToastAndroid.SHORT);
       }

    render(){
        return(
            <View style={{height:1300}}>
        
            <AppHeader/>

            <KeyboardAvoidingView style={styles.container}
            behaviour='padding'enabled
    ></KeyboardAvoidingView>


             <TextInput style={{
                 borderWidth:4,
                 borderRadius:10,
                 height:50,
                 width:1300,
                 margin:30
             }}
             onChangeText={(text)=>{
                this.setState({storyTitle:text})
                             }}
                value={this.state.storyTitle}
                
            placeholder = "Story Title"
            />

             <TextInput style={{
                 borderWidth:4,
                 borderRadius:10,
                 height:50,
                 width:1300,
                 margin:30
             }}
             onChangeText={(text)=>{
this.setState({author:text})
             }}
value={this.state.author}

            placeholder = "Author"
            />


            <TextInput style={styles.textInput}
            placeholder = "WriteStory here"

            onChangeText={(text)=>{
                this.setState({story:text})
                             }}
                value={this.state.story}
                
            />


            <TouchableOpacity style={styles.button}
            onPress={this.submitStory}
            

            >
            <Text>Submit</Text>
            </TouchableOpacity>
    
        </View>
        )
    }
}


const styles=StyleSheet.create({
  textInput:{
       borderWidth:4,
       borderRadius:10,
       height:200,
       width:1300,
       marginLeft:30,
       marginRight:30
  },
  button:{
   backgroundColor:"#00FF00",
   borderWidth:2,
   fontWeight:'bold',
   borderRadius:10,
   marginTop:30,
   alignItems:"center",
   justifyContent:"center",
   width:100,
   height:45,
   marginLeft:650
  }
})