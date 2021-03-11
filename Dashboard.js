/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import {db, default as firebase} from './firebase';
const { Block, Card } = require('galio-framework');
const { width } = Dimensions.get('screen');

/*TO DO: use https://www.npmjs.com/package/react-native-chart-kit to display statistics in graph format
we can track values for total successful deliveries and failed deliveries and then display them in charts
i.e. successful deliveries vs. time (weekly?) and failed deliveries vs. time (weekly?) - COMPLETED*/

class Dashboard extends React.Component {
  state = {
    success: null,
    fail: null
  };

  componentDidMount() {
    db.ref('/dashboard/success')
      .once('value')
      .then(snapshot => {
        const success = snapshot.val();
        this.setState({ success });
      });

    db.ref('/dashboard/fail')
      .once('value')
      .then(snapshot => {
        const fail = snapshot.val();
        this.setState({ fail });
      });
  }

  render() {
    //render nothing until data is fetched from db
    if (!this.state.success || !this.state.fail){
      return <View/>
    }

    return (
      <ScrollView contentContainerStyle={styles.cards} backgroundColor="white">
        <Block flex space="between">
          <Card
              flex
              borderless
              shadowColor={'black'}
              style={styles.card}
              title={'     Successful Deliveries per Month'}
            >
            <LineChart
              data={{
                labels: ['January', 'February', 'March', 'April'],
                datasets: [
                  {
                    data: [
                      this.state.success.jan,
                      this.state.success.feb,
                      this.state.success.mar,
                      this.state.success.apr,
                    ]
                  }
                ]
              }}
              width={width - 16 * 2}
              height={220}
              yAxisInterval={1}
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(30, 235, 19, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: '3',
                  strokeWidth: '2',
                  stroke: '#1eeb13'
                }
              }}
              style={{
                marginVertical: 0,
                borderRadius: 16
              }}
            />
          </Card>
          <Card
              flex
              borderless
              shadowColor={'black'}
              style={styles.card}
              title={'   Unsuccessful Deliveries per Month'}
            >
            <LineChart
              data={{
                labels: ['January', 'February', 'March', 'April'],
                datasets: [
                  {
                    data: [
                      this.state.fail.jan,
                      this.state.fail.feb,
                      this.state.fail.mar,
                      this.state.fail.apr,
                    ]
                  }
                ]
              }}
              width={width - 16 * 2}
              height={220}
              yAxisInterval={1}
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(224, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: '3',
                  strokeWidth: '2',
                  stroke: '#e00000'
                }
              }}
              style={{
                marginVertical: 0,
                borderRadius: 16
              }}
            />
          </Card>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    width,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    backgroundColor: 'white',
    width: width - 16 * 2,
    marginVertical: 16 * 0.875,
    elevation: 16 / 2,
  },
});
export default Dashboard;
