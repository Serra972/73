import React from 'react'; 
import { StyleSheet, Text, View ,TextInput,Image,FlatList} from 'react-native'; 

import AppHeader from '../Screens/AppHeader'
import { SearchBar } from 'react-native-elements';


export default class ReadStoriesScreen extends React.Component{
constructor(){
    super()
    this.state={
        search:'',
        allStories:[],
    }
}

retriveStories =async()=>{
const storyRefer = await db.collection('allStories').get()
Stories_Refer_Firestore_Docs.docs.map((doc)=>{
         this.setState({
             allStories:[...this.state.allStories,doc.data()]
         })
         
});
}

componentDidMount=async()=>{
    this.retriveStories()
    
}

    render(){
        const renderItem = ({ allStories }) => (
            <View style={styles.item}>
           <Text style={styles.title}>{"title:"+this.state.allStories[0].storyTitle}</Text>
            <Text style={styles.title}>{"author:"+this.state.allStories[0].author}</Text>
            </View>
       );
        return(
            <View style={{backgroundColor:"pink",height:700}}>
            <AppHeader/>
            <SearchBar 
         onChangeText={(text)=>{
             this.setState({
                 search:text
             })
         }}   
         value={this.state.search}
            />
           <FlatList
           data={this.state.allStories}

           renderItem={renderItem}
           />


            </View>

        )
    }
}

const styls = StyleSheet.create({
     textInput:{
      borderWidth:4,
      borderRadius:2,
      width:450,
      height:50,
      marginTop:20,
      marginLeft:450
    },

    text:{
         fontSize:22,
         textAlign:"center",
         marginTop:180,
    },
     
   logo:{
       marginLeft:1100,
       marginTop:-100,
       width:100,
       height:100,
       borderWidth:1,
      borderRadius:100,
   },
   logo1:{
       marginLeft:200,
       marginTop:-470,
       width:100,
       height:100,
       borderWidth:1,
      borderRadius:100,
   }
})