
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import HomeScreen from "../screens/HomeScreen";
import TaskScreen from "../screens/TaskScreen";

/**
 * AppRoutes : Este componente define a estrutura de navegação do aplicativo.
 * Ele configura um stack navigator com duas telas: Home e Task.
 * Cada tela tem estilos de cabeçalho personalizados para uma aparência consistente.
 */
const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return(
       <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} 
             options={{
                title: 'Home',
                headerStyle: {
                backgroundColor: '#6200ee',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
  }}
            />
            <Stack.Screen name="Task" component={TaskScreen} 
             options={{
                title: 'Tasks',
                headerStyle: {
                backgroundColor: '#6200ee',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
    },
  }}
            />
        </Stack.Navigator>
       </NavigationContainer>
    )
}