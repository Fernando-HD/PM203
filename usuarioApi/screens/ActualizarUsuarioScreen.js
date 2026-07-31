import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Pressable, StyleSheet, Platform, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ActualizarUsuarioScreen() {
  const { id, nombre: nombreInicial, edad: edadInicial } = useLocalSearchParams();
  const router = useRouter();

  const [nombre, setNombre] = useState(nombreInicial || '');
  const [edad, setEdad] = useState(edadInicial?.toString() || '');
  const [guardando, setGuardando] = useState(false);


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

  const actualizarUsuario = async () => {
    if (nombre.trim() === '' || edad.trim() === '') {
      mostrarMensaje('Campos vacíos', 'Todos los campos son obligatorios');
      return;
    }

    try {
      setGuardando(true);
      const respuesta = await fetch(`${API_URL}${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('admin:1234'),
        },
        body: JSON.stringify({ nombre: nombre, edad: parseInt(edad) }),
      });
      const datos = await respuesta.json();
      console.log('Respuesta PUT:', datos);
      mostrarMensaje('Éxito', 'Usuario actualizado correctamente');
      router.dismiss(2);
    } catch (error) {
      console.log('Error al actualizar:', error);
      mostrarMensaje('Error', 'No se pudo actualizar el usuario');
    } finally {
      setGuardando(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Actualizar Usuario</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Nombre del usuario"
        />

        <Text style={styles.label}>Edad</Text>
        <TextInput
          style={styles.input}
          value={edad}
          onChangeText={setEdad}
          placeholder="Edad del usuario"
          keyboardType="numeric"
        />
      </View>

      <Pressable
        style={styles.botonGuardar}
        onPress={actualizarUsuario}
        disabled={guardando}
      >
        <Text style={styles.textoBoton}>
          {guardando ? 'Guardando...' : 'Guardar cambios'}
        </Text>
      </Pressable>
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
    marginBottom: 6,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 18,
    backgroundColor: '#F9FAFB',
    fontSize: 16,
  },
  botonGuardar: {
    backgroundColor: '#F5C518',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});