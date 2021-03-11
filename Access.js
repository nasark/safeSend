/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, StyleSheet, ScrollView, Pressable, Text } from 'react-native';
import {db, default as firebase} from './firebase';
const { Block, Card } = require('galio-framework');

const { width } = Dimensions.get('screen');
// configured by backend
/*
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
    title: 'package-name3',
    caption: 'Last updated:\n9d ago',
    location: 'Unavailable',
    status: false,
  },
];*/


class Access extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    db.ref('/access').on('value', snapshot => {
      const data = snapshot.val();
      const items = Object.values(data);
      this.setState({ items });
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.cards} backgroundColor="white">
        {this.state.items && this.state.items.map(card => (
          <Block flex space="between" key={`card-${card.id}`}>
            <Pressable onPress={() => navigation.navigate('Details', card)}>
              <Card
                flex
                borderless
                shadowColor={'black'}
                style={styles.card}
                title={card.title}
                caption={card.caption.replace('\\n', '\n')}
                location={card.location}
                locationColor={card.status ? 'green' : 'red'}
              />
            </Pressable>
          </Block>
        ))}
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
