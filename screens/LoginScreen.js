import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export class LoginScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <View style={{flex: 2}}></View>
        <ImageBackground
          source={require('../pics/Background.png')}
          style={{
            height: '101%',
            width: '101%',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '300',
                color: 'white',
                marginTop: 150,
              }}>
              Guia App
            </Text>

            <ImageBackground
              source={require('../pics/Bg.png')}
              style={{width: 325, height: 55}}>
              <TextInput
                placeholder="Correo electrónico"
                placeholderTextColor="white"
                style={{color: 'white', paddingLeft: 20}}
              />
            </ImageBackground>

            <ImageBackground
              source={require('../pics/Bg.png')}
              style={{width: 325, height: 55}}>
              <TextInput
                placeholder="Contraseña"
                placeholderTextColor="white"
                style={{color: 'white', paddingLeft: 20}}
              />
            </ImageBackground>

            <TouchableOpacity
              style={{
                width: 325,
                height: 55,
                backgroundColor: '#EB4A41',
                borderRadius: 50,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white'}}>Ingresar</Text>
              </View>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <Text style={{paddingLeft: 30, color: '#EB4A41'}}>
                Crear una cuenta
              </Text>
              <Text style={{paddingRight: 30, color: '#EB4A41'}}>
                Necesitas ayuda
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 0.5,
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 10,
            }}>
            <Image
              source={require('../pics/facebook1.png')}
              style={{height: 41, width: 146.35, marginRight: 5}}
            />

            <Image
              source={require('../pics/google.png')}
              style={{height: 41, width: 146.35, marginLeft: 5}}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default LoginScreen;
