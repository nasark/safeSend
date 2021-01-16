/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Dashboard Screen</Text>
        </View>
    );
  }

}
export default Dashboard;