/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
const { Block, Icon, NavBar, Button } = require('galio-framework');
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Access from './Access.js';
import Dashboard from './Dashboard.js';

const Tab = createMaterialBottomTabNavigator();

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
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
      </NavigationContainer>
    );
  }

}
export default Main;

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