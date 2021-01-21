/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
const { Block, Icon, NavBar, Button } = require('galio-framework');
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Access from './Access.js';
import Dashboard from './Dashboard.js';
import Details from './Details.js';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
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

/*
<Block safe flex>
  <NavBar
    title={(
      <Text
        style={{
          color:'white',
          fontWeight:'bold',
          fontSize:26,
      }}>
        <Image
          source={require('./assets/logo.png')}
          style={{
            height:40,
            width:40,
          }}
        />
        SafeSend
      </Text>
    )}
    style={{backgroundColor:'black'}}
  />
</Block>*/