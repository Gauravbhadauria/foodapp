import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');
const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    height: 60,
    width: width,
    elevation: 5,
    backgroundColor: '#fff',
    paddingLeft: 15,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'purple',
  },
});
