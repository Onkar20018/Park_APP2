import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/navigation/AuthStack';
export default function App() {
  
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
   
  );
}
 