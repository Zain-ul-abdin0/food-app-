import React, { Component } from 'react'
import { Text, View ,Image,StyleSheet,TextInput,FlatList,TouchableOpacity} from 'react-native'
import MyTabs from '../screens/Tab';

 import TabNavigator from './Navigation'
  
export class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [
            {id:1, name: "Breakfast",   position:"CEO",               image:require('../pics/breakfast.png')},
            {id:2, name: "Lunch",  position:"Creative designer", image:require('../pics/lunch.png')} ,
            {id:3, name: "Dinner", position:"Front-end dev",     image:require('../pics/dinner.png')},
            {id:4, name: "Coffee and Tea", position:"Backend-end dev",   image:require('../pics/coffee-cup.png')},
            {id:5, name: "Nightlife",   position:"Creative designer", image:require('../pics/martini.png')},
            {id:6, name: "John Doe",   position:"Manager",           image:require('../pics/breakfast.png')},
           ]
        };
      }
    render() {
        return (
            <View style={{flex:1}}>
            
           <Image  source={require('../screens/slider.png')} style={{width:'100%',height:300, resizeMode:'stretch'}} />
           <View style={styles.inputBox}> 
             <View style={styles.inputCarrier}>
     <Image style={{width:20,height:20}}  source={require('../pics/search.png')} />
               <View style={{flex:1,paddingLeft:2}}>
                 <TextInput placeholder="What are you looking for Selvin ?"/>
               </View>
            </View>
         </View>
   

         <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={3}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
             <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Image style={styles.userImage} source={item.image}/>
                <Text style={{color:'grey',fontWeight:'bold'}}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )
          }}/>



  </View>
        )
    }
}

const styles = StyleSheet.create({
  
    welcome:{
        fontSize:25,
        fontWeight:'500',
        color:'#30B349',
        paddingTop:10
    },
    inputCarrier:{
       flex:1,justifyContent:'center',paddingLeft:10,flexDirection:'row',alignItems:'center'
    },

    login:{
        color:'#30B349',
        fontSize:18,
        paddingTop:10
    },
    inputBox:{
        bottom:10,
        height:50,width:315,backgroundColor:'white',borderRadius:5,
         shadowColor: '#000',
         alignSelf:'center',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5

    },
    forget:{
      color:'#30B349'
    },
    btn:{
      width:315,
      height:48,
      marginBottom:30,
      backgroundColor:'#30B349',
      borderRadius:20,
      shadowColor: '#30B349',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 5
    },
    container:{
        flex:1,
        marginTop:20,
      },
      list: {
        paddingHorizontal: 5,
        backgroundColor:"#E6E6E6",
      },
      listContainer:{
       alignItems:'center'
      },
      /******** card **************/
      card:{
        shadowColor: '#00000021',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    
        marginVertical: 1,
        backgroundColor:"white",
 width:120,
 height:100,
        marginHorizontal: 1,
      },
      cardFooter: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems:"center", 
        justifyContent:"center"
      },
      cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
      },
      cardHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
      },
      userImage:{
        height: 50,
        width: 50,
         alignSelf:'center',
         resizeMode:'contain'
       },
      name:{
        fontSize:18,
        flex:1,
        alignSelf:'center',
        color:"#008080",
        fontWeight:'bold'
      },
      position:{
        fontSize:14,
        flex:1,
        alignSelf:'center',
        color:"#696969"
      },
      followButton: {
        marginTop:10,
        height:35,
        width:100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
        backgroundColor: "#00BFFF",
      },
      followButtonText:{
        color: "#FFFFFF",
        fontSize:20,
      },
      icon:{
        height: 20,
        width: 20, 
      }
})

export default Demo
