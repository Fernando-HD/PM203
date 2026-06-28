import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Switch,
  Button,
  Alert,
  Platform,
} from "react-native";


if (Platform.OS === "web") {
  Alert.alert = (titulo, mensaje) => {
    window.alert(`${titulo}\n\n${mensaje}`);
  };
}

export default function Screen() {
  const [nombre, setNombre] = useState("");
  const [carrera, setCarrera] = useState("");
  const [semestre, setSemestre] = useState("");

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const enviarRegistro = () => {
    if (
      nombre.trim() === "" ||
      carrera.trim() === "" ||
      semestre.trim() === ""
    ) {
      Alert.alert(
        "Campos vacíos",
        "Debe llenar todos los campos."
      );
      return;
    }

    if (!/^[0-9]+$/.test(semestre)) {
      Alert.alert(
        "Semestre incorrecto",
        "El semestre debe ser únicamente numérico."
      );
      return;
    }

    Alert.alert(
      "Registro enviado",
      `Nombre: ${nombre}
Carrera: ${carrera}
Semestre: ${semestre}
Taller: ${taller ? "Sí" : "No"}
Constancia: ${constancia ? "Sí" : "No"}
Deportes: ${deportes ? "Sí" : "No"}`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.titulo}>
          Registro de Evento Universitario
        </Text>

        <Text style={styles.label}>Nombre completo</Text>

        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre"
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.label}>Carrera</Text>

        <TextInput
          style={styles.input}
          placeholder="Ingrese su carrera"
          value={carrera}
          onChangeText={setCarrera}
        />

        <Text style={styles.label}>Semestre</Text>

        <TextInput
          style={styles.input}
          placeholder="Ingrese su semestre"
          keyboardType="numeric"
          value={semestre}
          onChangeText={setSemestre}
        />

        <Text style={styles.label}>Opciones </Text>

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>
            ¿Asistirá al taller?
          </Text>

          <Switch
            value={taller}
            onValueChange={setTaller}
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>
            ¿Requiere constancia?
          </Text>

          <Switch
            value={constancia}
            onValueChange={setConstancia}
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>
            ¿Participará en actividades deportivas?
          </Text>

          <Switch
            value={deportes}
            onValueChange={setDeportes}
          />
        </View>

        <View style={styles.boton}>
          <Button
            title="Enviar Registro"
            onPress={enviarRegistro}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef3f8",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1d4ed8",
    marginBottom: 25,
  },

  label: {
    fontSize: 17,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 5,
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cfcfcf",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },

  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginTop: 20,
  },

  switchText: {
    fontSize: 16,
    flex: 1,
    paddingRight: 10,
  },

  boton: {
    marginTop: 35,
  },
});