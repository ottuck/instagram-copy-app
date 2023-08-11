import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home'
import Search from './src/screens/Search'
import Activity from './src/screens/Activity'
import Profile from './src/screens/Profile'
import { NavigationContainer } from '@react-navigation/native';
import Status from './src/screens/Status'
import FriendProfile from './src/screens/FriendProfile'
import EditProfile from './src/screens/EditProfile'
import { Ionicons } from '@expo/vector-icons';


const App = () => {
  const Stack = createNativeStackNavigator();
  const Tap = createBottomTabNavigator();

  const BottomTapScreen = () => {
    return (
      <Tap.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 70,
          },
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'

            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline'

            } else if (route.name === 'Activity') {
              iconName = focused ? 'ios-heart' : 'ios-heart-outline'

            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person-outline'
            }
            return <Ionicons name={iconName} size={24} color={'black'} />
          }

        })}
      >
        <Tap.Screen name='Home' component={Home} />
        <Tap.Screen name='Search' component={Search} />
        <Tap.Screen name='Activity' component={Activity} />
        <Tap.Screen name='Profile' component={Profile} />
      </Tap.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Bottom' component={BottomTapScreen} />
        <Stack.Screen name='Status' component={Status} />
        <Stack.Screen name='FriendProfile' component={FriendProfile} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App

