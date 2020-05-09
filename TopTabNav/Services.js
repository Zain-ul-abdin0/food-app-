import React, {Component} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';

export class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          Horario: 'Churrascos',
          Entrega: 'Bajo pedido',
          Cobertura: 'Casco urbano de San Lucas Sacatepéquez',
        },
        {
          id: 2,
          Horario: 'Carne asada',
          Entrega: 'Bajo pedido',
          Cobertura: 'Casco urbano de San Lucas Sacatepéquez',
        },
        {
          id: 3,
          Horario: 'Tablazos',
          Entrega: 'Bajo pedido',
          Cobertura: 'Casco urbano de San Lucas Sacatepéquez',
        },
        {
          id: 4,
          Horario: 'Atol de elote',
          Entrega: 'Bajo pedido',
          Cobertura: 'Casco urbano de San Lucas Sacatepéquez',
        },
        {
          id: 5,
          Horario: 'Tostadas',
          Entrega: 'Bajo pedido',
          Cobertura: 'Casco urbano de San Lucas Sacatepéquez',
        },
        {
          id: 6,
          Horario: 'Rellenitos',
          Entrega: 'Bajo pedido',
          Cobertura: 'Casco urbano de San Lucas Sacatepéquez',
        },
        {
          id: 7,
          Horario: 'Chuchitos',
          Entrega: 'Bajo pedido',
          Cobertura: 'Casco urbano de San Lucas Sacatepéquez',
        },
        {
          id: 8,
          Horario: 'Pupusas',
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
            flex: 0.7,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            backgroundColor: 'white',
          }}>
          <Image
            source={require('../pics/food.png')}
            style={{width: 35, height: 35, marginLeft: 20}}
          />
          <Image
            source={require('../pics/restaurant.png')}
            style={{width: 35, height: 35}}
          />
          <Image
            source={require('../pics/basket.png')}
            style={{width: 35, height: 35, marginRight: 20}}
          />
        </View>

        <View
          style={{
            flex: 0.4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            backgroundColor: 'white',
          }}>
          <Text style={{color: '#454545', fontSize: 12, paddingLeft: 15}}>
            A domicilio
          </Text>

          <Text style={{color: '#454545', fontSize: 12}}>En Restaurante</Text>

          <Text style={{color: '#454545', fontSize: 12, paddingRight: 10}}>
            Para llevar
          </Text>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              height: 18,
              width: 86,
              backgroundColor: '#6D7278',
              borderRadius: 5,
              marginLeft: 10,
              marginTop: 20,
            }}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
                restaurante
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 18,
              width: 86,
              backgroundColor: '#6D7278',
              borderRadius: 5,
              marginLeft: 10,
              marginTop: 20,
            }}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
                comida típica
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 18,
              width: 86,
              backgroundColor: '#6D7278',
              borderRadius: 5,
              marginLeft: 10,
              marginTop: 20,
            }}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
                antojitos
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{marginLeft: 20, marginTop: 20}}>
          <Text
            style={{
              marginTop: 3,
              fontWeight: 'bold',
              color: '#454545',
              marginBottom: 10,
            }}>
            Servicios
          </Text>
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
                <View style={{marginTop: 3, marginLeft: 20}}>
                  <Text style={{color: 'grey'}}>-{item.Horario}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

export default Services;
