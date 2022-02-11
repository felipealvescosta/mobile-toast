import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button } from 'react-native';
import Toast from 'react-native-toast-message';


export default function App() {
  
  const toastConfig = {
    alertToast: ({ text1 }) => (
      <View style={{ height: 120, width: '100%', backgroundColor: 'tomato', justifyContent: 'center' }}>
        <Text style={{ top: 20, fontSize:20, color: '#fff', textAlign: 'center'}}>{text1}</Text>
      </View>
    )
  };

  const infoToast = () => {
    Toast.show({
      type: 'alertToast',
      text1: 'Fala galera!',
      topOffset: 0,
    });
  }


  return (

    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <Text style={styles.text}>Mobile Toast Example</Text>
      <Button
        onPress={infoToast}
        title='Click'
      />
      <Toast config={toastConfig} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#000',
  },
  text: {
    fontSize: 30,
    color: '#fff',
  }
});
