import React, { useState } from 'react';
import { SafeAreaView, View, Text, Pressable, StyleSheet, Platform, Alert, Modal } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function DetalleUsuarioScreen() {
  const { id, nombre, edad } = useLocalSearchParams();
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [eliminando, setEliminando] = useState(false);

  const API_URL = Platform.OS === 'web'
    ? 'http://localhost:5001/v1/usuarios/'
    : 'http://192.168.1.48:5001/v1/usuarios/';

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const eliminarUsuario = async () => {
    try {
      setEliminando(true);
      const respuesta = await fetch(`${API_URL}${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Basic ' + btoa('admin:1234'),
        },
      });
      const datos = await respuesta.json();
      console.log('Respuesta DELETE:', datos);
      setModalVisible(false);
      mostrarMensaje('Éxito', 'Usuario eliminado correctamente');
      router.back();
    } catch (error) {
      console.log('Error al eliminar:', error);
      mostrarMensaje('Error', 'No se pudo eliminar el usuario');
    } finally {
      setEliminando(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Detalles del Usuario</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.valor}>{nombre}</Text>
        <View style={styles.linea}></View>
        <Text style={styles.label}>Edad</Text>
        <Text style={styles.valor}>{edad} años</Text>
      </View>

      <Pressable
        style={styles.botonActualizar}
        onPress={() => router.push({
          pathname: '/actualizar',  
          params: { id, nombre, edad }
        })}
      >
        <Text style={styles.textoBoton}>Actualizar</Text>
      </Pressable>

      <Pressable
        style={styles.botonEliminar}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textoBoton}>Eliminar</Text>
      </Pressable>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalFondo}>
          <View style={styles.modalContenido}>
            <Text style={styles.modalTitulo}>Confirmar eliminación</Text>
            <Text style={styles.modalMensaje}>
              ¿Estás seguro de que deseas eliminar al usuario {nombre}?
            </Text>

            <View style={styles.modalBotones}>
              <Pressable
                style={styles.botonCancelar}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textoCancelar}>Cancelar</Text>
              </Pressable>

              <Pressable
                style={styles.botonConfirmar}
                onPress={eliminarUsuario}
                disabled={eliminando}
              >
                <Text style={styles.textoBoton}>
                  {eliminando ? 'Eliminando...' : 'Sí, eliminar'}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  label: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 4,
  },
  valor: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  linea: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 15,
  },
  botonActualizar: {
    backgroundColor: '#F5C518',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 40,
    marginBottom: 15,
  },
  botonEliminar: {
    backgroundColor: '#DC2626',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 40,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalFondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContenido: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    width: '85%',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  modalTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DC2626',
    marginBottom: 12,
  },
  modalMensaje: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 22,
  },
  modalBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  botonCancelar: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  textoCancelar: {
    color: '#4B5563',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botonConfirmar: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: '#DC2626',
  },
});