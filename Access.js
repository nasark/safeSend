/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { Block, Card } = require('galio-framework');

const { width } = Dimensions.get('screen');
// configured by backend
const cards = [
  {
    id: 1,
    title: 'package-name1',
    caption: 'Last updated:\n15 minutes ago',
    location: 'On the way',
    status: true,
  },
  {
    id: 2,
    title: 'package-name2',
    caption: 'Last updated:\n2d ago',
    location: 'Delivered',
    status: true,
  },
  {
    id: 3,
    title: 'package-name3',
    caption: 'Last updated:\n7d ago\nTap for more details',
    location: 'Package missing',
    status: false,
  },
  {
    id: 4,
    title: 'poggers',
    caption: 'Last updated:\n9d ago',
    location: 'idk',
    status: false,
  },
];

/*componentDidMount(){
  backend calls for payload
} */

class Access extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.cards} backgroundColor="white">
        <Block flex space="between">
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          {cards && cards.map((card, id) => (
              <Card
                key={`card-${id}`}
                flex
                borderless
                shadowColor={'black'}
                style={styles.card}
                title={card.title}
                caption={card.caption}
                location={card.location}
                locationColor={card.status ? 'green' : 'red'}
              >
              </Card>
          ))}
          </TouchableOpacity>
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

export default Access;
