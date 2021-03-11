/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
const { Icon } = require('galio-framework');
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Access from './Access.js';
import Dashboard from './Dashboard.js';
import Details from './Details.js';
import {db, default as firebase} from './firebase';


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

class Tabs extends React.Component {
  render(){
    return (
      <Tab.Navigator
        initialRouteName="Access"
        activeColor="white"
        shifting="true"
        barStyle={{ backgroundColor: 'black' }}
        //style={{ backgroundColor: 'black' }}
      >
        <Tab.Screen
          name="Access"
          component={Access}
          options={{
            tabBarLabel: 'Access History',
            tabBarIcon: ({ color }) => (
              <Icon name="clockcircle" family="antdesign" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({ color }) => (
              <Icon name="linechart" family="antdesign" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default function Main(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
          <Stack.Screen name="Details" component={Details} />
			  </Stack.Navigator>
      </NavigationContainer>
    );
}
