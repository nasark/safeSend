/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';

/*TO DO: use https://www.npmjs.com/package/react-native-chart-kit to display statistics in graph format
we can track values for total successful deliveries and failed deliveries and then display them in charts
i.e. successful deliveries vs. time (weekly?) and failed deliveries vs. time (weekly?)*/

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