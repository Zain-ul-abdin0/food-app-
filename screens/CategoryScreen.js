import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Icons from 'react-native-vector-icons/Ionicons';
import Albeito from '../components/Albeito';

export class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: 'Churrascos Maricela',
          restaurant: 'Restaurante | Antojitos',
          image: require('../pics/pic1.png'),
        },
        {
          id: 2,
          name: 'Pizza Al dsf Maricela',
          restaurant: 'Restaurante | Pizza',
          image: require('../pics/pic2.png'),
        },
        {
          id: 3,
          name: 'Tortillas de Harina y',
          restaurant: 'Restaurante | Tortillas',
          image: require('../pics/pic3.png'),
        },
        {
          id: 4,
          name: 'Antojitos San Lucas',
          restaurant: 'Restaurante | Comida típica',
          image: require('../pics/pic4.png'),
        },
      ],
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F0F3F6'}}>
        <ImageBackground
          source={require('../pics/palce.png')}
          style={{
            height: 160,
            width: 375,
          }}>
          <View
            style={{
              flex: 0.5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Icons
              name="ios-arrow-back"
              size={40}
              color="#4980F9"
              style={{marginLeft: 20, marginTop: 5}}
            />
            <Icon
              name="search"
              size={28}
              color="white"
              style={{marginRight: 30, marginTop: 5}}
            />
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
              Comid
            </Text>
          </View>
        </ImageBackground>
        <Text
          style={{
            padding: 10,
            color: '#AEAEAE',
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          15 negocios
        </Text>

        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.inputBox}
                onPress={() => {
                  this.clickEventListener(item);
                }}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <ImageBackground
                      source={item.image}
                      style={{
                        height: 98,
                        width: 98,
                        alignSelf: 'center',
                        marginLeft: 15,
                      }}
                    />

                    <View style={{flex: 1}}>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                        }}>
                        <Text style={{fontWeight: 'bold', marginTop: 20}}>
                          {item.name}
                        </Text>
                        <Icons
                          name="ios-bookmark"
                          size={40}
                          color="#6D7278"
                          style={{marginLeft: 20, marginTop: 5, marginTop: 10}}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: 12,
                          color: 'grey',
                          marginLeft: 15,
                          marginBottom: 20,
                        }}>
                        {item.restaurant}
                      </Text>

                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                        }}>
                        <Icons
                          name="ios-heart"
                          size={25}
                          color="#EB4A41"
                          style={{marginLeft: 20, marginTop: 5}}
                        />
                        <Text style={{color: '#6D7278', padding: 7}}>3</Text>

                        <View
                          style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            flexDirection: 'row',
                            paddingRight: 10,
                          }}>
                          <Albeito />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

export default CategoryScreen;

const styles = StyleSheet.create({
  inputBox: {
    bottom: 10,
    height: 130,
    width: 343,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    alignSelf: 'center',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 2,
    marginTop: 10,
  },
});
