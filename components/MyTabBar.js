import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather'
import Meet from '../screens/Meet';
import MainScreen from '../screens/MainScreen';

const Tab = createBottomTabNavigator();

const MyTabBar = () => {
  return (
    <NavigationContainer  >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'メール') {
              iconName = focused
                ? 'mail'
                : 'mail';
            } else if (route.name === 'Meet') {
              iconName = focused ? 'video' : 'video';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,

        })}
      >
        <Tab.Screen name="メール" component={MainScreen} />
        <Tab.Screen name="Meet" component={Meet} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabBar;