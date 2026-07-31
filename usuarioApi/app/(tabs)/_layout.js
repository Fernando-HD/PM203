import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },

        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#1F2937',  
        },
        headerShadowVisible: false,  
      }}
    >
      <Tabs.Screen
        name="consulta"
        options={{
          title: "Consulta",
          headerTitle: "Lista de Usuarios",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="alta"
        options={{
          title: "Alta",
          headerTitle: "Registrar Usuario",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-add" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}