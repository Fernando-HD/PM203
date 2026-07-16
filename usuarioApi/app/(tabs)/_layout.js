import {Tabs} from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout(){
    return(

        <Tabs>
            <Tabs.Screen name="index" options={{title:"Inicio", href:null,}} />

            <Tabs.Screen name="alta" options={{ title: "Formulario",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                        name="document-text-outline"
                        size={22}
                        color={color}
                    />
                ),
            }}
            />

            <Tabs.Screen name="consulta" options={{ title: "Listado usuarios",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                        name="list-outline"
                        size={22}
                        color={color}
                    />
                ),
            }}
            />

        </Tabs>
    );
}