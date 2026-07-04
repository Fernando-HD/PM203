import React, { useEffect } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text
} from 'react-native';

export default function SplashScreen({ navigation }) {

  useEffect(() => {

    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  return (

    <View style={styles.container}>

      <Image
        source={require('../assets/ciudad1.jpg')}
        style={styles.imagen}
        resizeMode="contain"
      />

      <View style={styles.overlay}>
        <Text style={styles.title}>
          Registro de Libros
        </Text>
      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },

  imagen: {
    width: 220,
    height: 220,
    marginBottom: 30
  },

  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
    borderRadius: 15
  },

  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  }

});