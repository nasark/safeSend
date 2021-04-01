/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, StyleSheet, ScrollView, Pressable, Text } from 'react-native';
import {db, default as firebase} from './firebase';
const { Block, Card } = require('galio-framework');
import notifee, {AndroidImportance} from '@notifee/react-native';
const { width } = Dimensions.get('screen');

//push notif handler
async function onDisplayNotification() {
  const channelId = await notifee.createChannel({
    id: 'access',
    name: 'Access Channel',
    importance: AndroidImportance.HIGH,
  });

  // display a notification
  await notifee.displayNotification({
    title: 'Safe Accessed!',
    body: 'A carrier tried accessing the vault.',
    android: {
      channelId,
      importance: AndroidImportance.HIGH,
      largeIcon: require('./assets/notif.png'), //Icon made by "https://www.flaticon.com/authors/prosymbols"
    },
  });
}

class Access extends React.Component {
  state = {
    items: [],
    notifFlag: false,
  };

  componentDidMount() {
    //subscribe so data is updated as soon as arduino updates db
    db.ref('/access').on('value', snapshot => {
      const data = snapshot.val();
      const items = Object.values(data);
      this.setState({ items });
      //send push notif
      if (this.state.notifFlag){
        onDisplayNotification();
      }
      this.setState({ notifFlag: true});
    });
  }

  componentWillUnmount(){
    //unsubscribe
    db.ref('/access').off('value');
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
