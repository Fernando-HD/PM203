/* Zona 1: Importanciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import React, { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';
import TextinputScreen from './TextInputScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ModalScreen from './ModalScreen';

/* Zona 2: Main - Hogar de los componentes */
export default function MenuScreen() {
     const [screen, setScreen] = useState('menu');

     switch(screen){
        case 'tarjetas':
            return <TarjetasScreen />;
        case 'safeArea':
            return <SafeAreaScreen />;

        case 'pressable':
            return <PressableScreen />;

        case 'textinput':
            return <TextinputScreen />;

        case 'flatList':
            return <FlatListScreen />;

        case 'imageBackgrounds':
            return <ImageBackgroundScreen />;

        case 'activityindicator':
            return <ActivityIndicatorScreen />;

        case 'modal':
            return <ModalScreen />;


        case 'menu':
        default:
             return (
                <View style={styles.container}>

                    <Text>Menu de Prácticas: </Text>

                    <Button
                      onPress={() => setScreen('tarjetas')}
                      title="Práctica: Tarjetas"
                    />

                    <Button
                      onPress={() => setScreen('safeArea')}
                      title="Práctica: SafeAreaView"
                    />

                    <Button
                     onPress={() => setScreen('pressable')}
                     title="Práctica: Pressable"
                    />

                    <Button
                     onPress={() => setScreen('textinput')}
                     title="Práctica: Textinput"
                    />

                    <Button
                     onPress={() => setScreen('flatList')}
                     title="Práctica: FlatList"
                    />

                    <Button
                     onPress={() => setScreen('imageBackgrounds')}
                     title="Práctica: ImageBackgrounds"
                    />

                    <Button
                     onPress={() => setScreen('activityindicator')}
                     title="Práctica: Activityindicator"
                    />

                    <Button
                     onPress={() => setScreen('modal')}
                     title="Práctica: Modal"
                    />

                    <StatusBar style="auto" />

                </View>
            );
    }
}

/* Zona 3: Estilos y Posicionamiento  */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },



});