import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export class BusinessDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: 'Breakfast',
          position: 'CEO',
          image: require('../pics/pic.png'),
        },
        {
          id: 2,
          name: 'Lunch',
          position: 'Creative designer',
          image: require('../pics/picc.png'),
        },
        {
          id: 3,
          name: 'Breakfast',
          position: 'CEO',
          image: require('../pics/pic.png'),
        },
        {
          id: 4,
          name: 'Lunch',
          position: 'Creative designer',
          image: require('../pics/picc.png'),
        },
      ],
    };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={{color: '#454545', margin: 20, fontWeight: 'bold'}}>
          {' '}
          Descripción{' '}
        </Text>

        <Text style={{paddingLeft: 20, color: '#767984'}}>
          Feel at home wherever you choose to live with Blueground. You’ll love
          this sophisticated Midtown furnished one-bedroom apartment with its
          modern decor, fully equipped kitchen, and cheery living room with
          great balcony views… read more
        </Text>

        <Text style={{color: '#454545', margin: 20, fontWeight: 'bold'}}>
          {' '}
          Featured Items{' '}
        </Text>

        <FlatList
          data={this.state.data}
          horizontal={true}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{height: 122, width: 198, marginHorizontal: 5}}
                onPress={() => {
                  this.clickEventListener(item);
                }}>
                <Image
                  style={{height: 122, width: 198, marginLeft: 10}}
                  source={item.image}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

export default BusinessDetailScreen;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 25,
    fontWeight: '500',
    color: '#30B349',
    paddingTop: 10,
  },
  inputCarrier: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  login: {
    color: '#30B349',
    fontSize: 18,
    paddingTop: 10,
  },
  inputBox: {
    bottom: 10,
    height: 50,
    width: 315,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    alignSelf: 'center',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  forget: {
    color: '#30B349',
  },
  btn: {
    width: 315,
    height: 48,
    marginBottom: 30,
    backgroundColor: '#30B349',
    borderRadius: 20,
    shadowColor: '#30B349',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#E6E6E6',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    marginVertical: 1,
    backgroundColor: 'white',
    width: 120,
    height: 100,
    marginHorizontal: 1,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage: {
    height: 50,
    width: 50,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#008080',
    fontWeight: 'bold',
  },
  position: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  followButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  icon: {
    height: 20,
    width: 20,
  },
});
