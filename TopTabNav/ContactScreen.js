import React, {Component} from 'react';
import {Text, View, Image, FlatList} from 'react-native';

export class ContactScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          Horario: '08:00 - 20:00 horas',
          Entrega: 'Bajo pedido',
          Cobertura: 'Casco urbano de San Lucas Sacatepéquez',
        },
      ],
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            flex: 0.3,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            backgroundColor: 'white',
          }}>
          <Image
            source={require('../pics/telephone.png')}
            style={{width: 35, height: 35, marginLeft: 20}}
          />
          <Image
            source={require('../pics/whatsapp1.png')}
            style={{width: 35, height: 35}}
          />
          <Image
            source={require('../pics/instagram.png')}
            style={{width: 35, height: 35}}
          />
          <Image
            source={require('../pics/facebook.png')}
            style={{width: 35, height: 35, marginRight: 20}}
          />
        </View>
        <FlatList
          data={this.state.data}
          horizontal={false}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <View style={{flex: 1}}>
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{
                      marginTop: 10,
                      fontWeight: 'bold',
                      color: '#454545',
                    }}>
                    Horario
                  </Text>
                  <Text style={{color: 'grey'}}>{item.Horario}</Text>
                </View>

                <View style={{marginTop: 10, marginLeft: 20}}>
                  <Text style={{fontWeight: 'bold', color: '#454545'}}>
                    Entrega
                  </Text>
                  <Text style={{color: 'grey'}}>{item.Entrega}</Text>
                </View>

                <View style={{marginTop: 10, marginLeft: 20}}>
                  <Text style={{fontWeight: 'bold', color: '#454545'}}>
                    Cobertura
                  </Text>
                  <Text style={{color: 'grey'}}>{item.Cobertura}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

export default ContactScreen;
