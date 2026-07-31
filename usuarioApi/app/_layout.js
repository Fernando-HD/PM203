import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',  
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#1F2937',  
        },
        headerShadowVisible: false,  
        headerBackTitle: 'Volver',
      }}
    >
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} 
      />
      
      <Stack.Screen 
        name="detalle" 
        options={{ 
          title: "Detalle del Usuario",
        }} 
      />
      
      <Stack.Screen 
        name="actualizar" 
        options={{ 
          title: "Actualizar Usuario",
        }} 
      />
    </Stack>
  );
}