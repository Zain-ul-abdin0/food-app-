import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'

export class Albeito extends Component {
    render() {
        return (
            <TouchableOpacity style={{width:78,height:18,backgroundColor:'#EB4A41',borderRadius:20}}>
<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
 <Text style={{color:'white',fontSize:12,fontWeight:'bold',}}>Abierto</Text>
 </View>
</TouchableOpacity>
        )
    }
}

export default Albeito
