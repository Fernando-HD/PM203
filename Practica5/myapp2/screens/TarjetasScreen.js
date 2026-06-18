/* Zona 1: Importanciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Perfil } from '../components/Perfil';

/* Zona 2: Main - Hogar de los componentes */
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>
      <Perfil
        estiloExt={styles.tarjetaRoja}
        nombre="FER HD"
        carrera="Ing. Sistemas"
        materia="Programacion movil"
        cuatri="9"
      />

      <Perfil
        estiloExt={styles.tarjetaVerde}
        nombre="Fernando HD"
        carrera="Ing.Sistemas"
        materia="Programacion movil"
        cuatri="9"
      />

      <Perfil
        estiloExt={styles.tarjetaRoja}
        nombre="Fernando HD"
        carrera="Ing.Sistemas"
        materia="Programacion movil"
        cuatri="9"
      />

      <StatusBar style="auto" />
    </View>
  );
}

/* Zona 3: Estilos y Posicionamiento  */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  tarjetaRoja: { backgroundColor: '#FF6868' },
  tarjetaVerde: { backgroundColor: '#6BCB77' }
});