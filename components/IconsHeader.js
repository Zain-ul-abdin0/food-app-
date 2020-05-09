import React, { Component } from 'react'
import { Text, View,ImageBackground,Image } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import Font from 'react-native-vector-icons/Fontisto'

import Icons from 'react-native-vector-icons/Ionicons'
import Albeito from './Albeito'
export class IconsHeader extends Component {
    render() {
        return (
            <View style={{backgroundColor:'red',flex:0.5}}>
  <ImageBackground source={require('../pics/Contact.png')} 
          style={{
   height:290,width:375}}
           >
<View style={{flex:0.5,flexDirection:'row',flexGrow:0.3}}>

<Icons name="ios-arrow-back" size={30} color='white' style={{marginLeft:20,marginTop:5}} />
<View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',marginTop:10}}>

<Icon name="share" size={20} color='white' 
     style={{marginTop:5, marginRight:20, transform: [{rotateY: '180deg'}]}}
 />
<Icon name="heart" size={20} color='white' style={{marginTop:5,marginRight:20,}}
  />
<Icons name="ios-bookmark" size={25} color='white' style={{marginRight:30,marginTop:5}}
  />
  </View>
</View>
<View style={{flex:1,alignItems:'center'}}>
<Text style={{fontSize:30,color:'white',paddingLeft:20}}>Antojitos San Lucas Sacatepéquez</Text>
<View style={{width:'95%',borderWidth:0.5,borderColor:'grey',marginTop:15,alignContent:'center'}}>

</View>



<View style={{flex:0.5,flexDirection:'row',marginTop:10,padding:10}}>
<Albeito/>
<Text style={{color:'white',paddingLeft:20}}>Restaurante | Comida Típica</Text> 
<View style={{height:50 ,marginLeft:20 ,width:1,borderLeftWidth:1 ,borderLeftColor:'grey',bottom:10 }}>

</View>

<View style={{flex:1,marginLeft:20,bottom:10}}>
<Icon name="heart" size={20} color='white' style={{marginTop:5,marginRight:20,}}
  />
<Text style={{color:'white'}}>16</Text> 
</View>
</View>


</View>

         </ImageBackground>       
               </View>
        )
    }
}

export default IconsHeader
