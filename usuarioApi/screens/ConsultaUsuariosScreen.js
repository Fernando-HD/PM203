import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet, ActivityIndicator} from 'react-native';

export default function ConsultaUsuariosScreen() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  const obtenerUsuarios = async() => {
    try {
      setCargando(true);
      const respuesta = await fetch('http://192.168.1.48:5001/v1/usuarios/',); 
      const datos = await respuesta.json();
      console.log("Respuesta API: ", datos);
      setUsuarios(datos.usuarios || []);
    } catch(error) {
      console.log("Error API: ", error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const renderTarjeta = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nombre}>{item.nombre}</Text>
      <View style={styles.linea}></View>
      <Text style={styles.info}>Edad: {item.edad} años</Text>
    </View>
  );

  if (cargando) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#2563EB" />
        <Text style={styles.mensaje}>Cargando usuarios...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Lista de Usuarios </Text>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        renderItem={renderTarjeta}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
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
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  linea: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 10,
  },
  info: {
    fontSize: 16,
    color: '#4B5563',
  },
  id: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 5,
  },
  mensaje: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6B7280',
    marginTop: 20,
  },
});