/* Zona 1: Importanciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/* Zona 2: Main - Hogar de los componentes */
export default function ImageBackgroundScreen() {
  return (
    <View style={styles.container}>

      <Text>Aquí va la práctica de Ines</Text>

      <StatusBar style="auto" />

    </View>
  );
}

/* Zona 3: Estilos y Posicionamiento  */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});