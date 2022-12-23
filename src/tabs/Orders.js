import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import Header from '../screens/common/Header';
import {FlatList} from 'react-native-gesture-handler';
const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getAllOrders();
  }, []);
  const getAllOrders = async () => {
    firestore()
      .collection('orders')
      .get()
      .then(querySnapshot => {
        console.log('Total orders: ', querySnapshot.size);
        let tempData = [];
        querySnapshot.forEach(documentSnapshot => {
          console.log(
            'User ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );
          tempData.push({
            orderId: documentSnapshot.id,
            data: documentSnapshot.data().data,
          });
        });
        console.log(JSON.stringify(tempData));
        setOrders(tempData);
      });
  };
  return (
    <View style={styles.container}>
      <Header title={'All Orders'} />
      <FlatList
        data={orders}
        keyExtractor={({item, index}) => index}
        renderItem={({item, index}) => {
          console.log('item' + item);
          return (
            <View style={styles.orderItem}>
              <FlatList
                data={item.data.items}
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
