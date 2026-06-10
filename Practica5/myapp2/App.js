/*Zona 1: importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';

/*Zona 2: zona de los componentes visuales (main)*/
export default function App() {
  return (
    <View style={styles.container}>

      <Text>---Componentes Nativos---</Text>
      <Image source={require('./assets/wave.png')}/>
      <Text>Hola mundo React Native</Text>

      <Text>---Componente Propio Simple---</Text>
      <Saludo></Saludo>

      <Text>---Componentes Propio Compuesto---</Text>
      <Saludo2></Saludo2>

      <StatusBar style="auto" />
    </View>
  );
}

/*Zona 3: estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


