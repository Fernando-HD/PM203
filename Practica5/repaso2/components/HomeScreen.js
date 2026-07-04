import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Pressable,
  FlatList,
  Alert,
  ActivityIndicator
} from 'react-native';

export default function HomeScreen() {

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");

  const [loading, setLoading] = useState(false);

  const [libros, setLibros] = useState([]);

  const agregarLibro = () => {

    if (
      titulo.trim() === "" ||
      autor.trim() === "" ||
      genero.trim() === ""
    ) {

      Alert.alert(
        "Campos vacíos",
        "Completa todos los campos"
      );

      return;
    }

    setLoading(true);

    setTimeout(() => {

      const nuevoLibro = {

        id: Date.now().toString(),
        titulo,
        autor,
        genero

      };

      setLibros([...libros, nuevoLibro]);

      setTitulo("");
      setAutor("");
      setGenero("");

      setLoading(false);

      Alert.alert(
        "Correcto",
        "Libro agregado correctamente"
      );

    }, 4000);

  };

  return (

    <ImageBackground
      source={require('../assets/fondo.jpg')}
      style={styles.background}
      resizeMode="cover"
    >

      <View style={styles.container}>

        <Text style={styles.titulo}>
          Registro de Libros Leídos
        </Text>

        <TextInput
          placeholder="Título del libro"
          style={styles.input}
          value={titulo}
          onChangeText={setTitulo}
        />

        <TextInput
          placeholder="Autor"
          style={styles.input}
          value={autor}
          onChangeText={setAutor}
        />

        <TextInput
          placeholder="Género"
          style={styles.input}
          value={genero}
          onChangeText={setGenero}
        />

        <Pressable
          style={styles.boton}
          onPress={agregarLibro}
        >

          <Text style={styles.textoBoton}>
            Agregar Libro
          </Text>

        </Pressable>

        {

          loading &&
          <ActivityIndicator
            size="large"
            color="red"
          />

        }

        <FlatList

          data={libros}

          keyExtractor={(item) => item.id}

          renderItem={({ item }) => (

            <View style={styles.card}>

              <Text style={styles.libro}>
                {item.titulo}
              </Text>

              <Text>
                Autor: {item.autor}
              </Text>

              <Text>
                Género: {item.genero}
              </Text>

            </View>

          )}

        />

      </View>

    </ImageBackground>

  );

}

const styles = StyleSheet.create({

  background: {
    flex: 1
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255,255,255,.75)'
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 45,
    marginBottom: 20
  },

  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16

  },

  boton: {
    backgroundColor: "#1976D2",
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20

  },

  textoBoton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18

  },

  card: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 12,
    borderRadius: 10

  },

  libro: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5
  }

});