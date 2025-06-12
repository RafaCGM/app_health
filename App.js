import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/Login';
import DesktopScreen from './src/screens/Desktop';
import CalculoIMCScreen from './src/screens/CalculoIMC';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    //RECOMENDAÇÃO
    //Comentar toda a <NavigationContainer> com ctrl + ;
    //e descomentar os que estão em baixo

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Login'>
    //     <Stack.Screen name='Login' component={LoginScreen} />
    //     <Stack.Screen name='Desktop' component={DesktopScreen} />
    //     <Stack.Screen name='CalculoIMC' component={CalculoIMCScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <LoginScreen />
    // <DesktopScreen />
    <CalculoIMCScreen />

  );
}
