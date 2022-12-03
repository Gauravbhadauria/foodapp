import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Add = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add Item</Text>
      </View>
      <TextInput placeholder="Enter Item Name" style={styles.inputStyle} />
      <TextInput placeholder="Enter Item Price" style={styles.inputStyle} />
      <TextInput
        placeholder="Enter Item Discount Price"
        style={styles.inputStyle}
      />
      <TextInput
        placeholder="Enter Item Description"
        style={styles.inputStyle}
      />
      <TextInput placeholder="Enter Item Image URL" style={styles.inputStyle} />
      <Text style={{alignSelf: 'center', marginTop: 20}}>OR</Text>
      <TouchableOpacity style={styles.pickBtn}>
        <Text>Pick Image From Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.uploadBtn}>
        <Text style={{color:'#Fff'}}>Upload Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Add;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    elevation: 5,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
  },
  inputStyle: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
    alignSelf: 'center',
  },
  pickBtn: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  uploadBtn: {
    backgroundColor: '#5246f2',
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
