/* Zona 1: Importanciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';

/* Zona 2: Main - Hogar de los componentes */
export default function App() {
  return (
    <View style={styles.container}>
   <Perfil
     estiloExt={styles.tarjetaRoja}
     nombre="FER HD"
     carrera="Ing. Sistemas"
     materia="Programacion movil"
     cuatri="9"
    
    ></Perfil>

      <Perfil 
      estiloExt={styles.tarjetaVerde}
      nombre="Fernando HD" 
      carrera="Ing.Sistemas"
      materia="Programacion movil" 
      cuatri="9">
      </Perfil>

      <Perfil 
      estiloExt={styles.tarjetaRoja}
      nombre="Fernando HD" 
      carrera="Ing.Sistemas"
      materia="Programacion movil" 
      cuatri="9">
      </Perfil>

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

  tarjetaRoja:{backgroundColor:'#FF6868'},
  tarjetaVerde:{backgroundColor:'#6BCB77'}
  
  
  
});

