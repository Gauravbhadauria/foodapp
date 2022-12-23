import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../common/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
const Orders = () => {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    getOrders();
  }, []);
  const getOrders = async () => {
    const userId = await AsyncStorage.getItem('USERID');
    console.log(userId)
    const user = await firestore().collection('users').doc(userId).get();
    console.log(JSON.stringify(user._data.orders));
    setOrderList(user._data.orders);
  };

  return (
    <View style={styles.container}>
      <Header title={'My Orders'} />
      <FlatList
        data={orderList}
        keyExtractor={({item, index}) => index}
        renderItem={({item, index}) => {
          return (
            <View style={styles.orderItem}>
              <FlatList
                data={item.items}
                renderItem={({item, index}) => {
                  return (
                    <View style={styles.itemView}>
                      <Image
                        source={{uri: item.data.imageUrl}}
                        style={styles.itemImage}
                      />
                      <View>
                        <Text style={styles.nameText}>{item.data.name}</Text>
                        <Text style={styles.nameText}>
                          {'Price: ' +
                            item.data.discountPrice +
                            ', Qty: ' +
                            item.data.qty}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Orders;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orderItem: {
    width: '90%',

    borderRadius: 10,
    elevation: 5,
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  itemView: {
    margin: 10,
    width: '100%',
    flexDirection: 'row',
  },
  nameText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: 20,
    marginTop: 5,
  },
});
