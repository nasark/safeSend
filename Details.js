/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, Dimensions, ScrollView, View } from 'react-native';
const { Block, Card } = require('galio-framework');
const { width } = Dimensions.get('screen');

/* More in depth details need to be retrieved and displayed i.e. barcode status
    if time permits, we can also add a map view and shipping details via API here later*/

//TO DO: text formatting

function Details({route}) {
    const { id, title, caption, location, status } = route.params;
    return (
        <ScrollView contentContainerStyle={styles.cards} backgroundColor="white">
            <View
              style={styles.card}
            >
                <Text style={styles.title}>Package: {title}</Text>
            </View>
            <View
              style={styles.card}
            >
                <Text style={styles.title}>{caption.replace('\n', ' ')}</Text>
            </View>
            <View
              style={styles.card}
            >
                <Text style={styles.title}>Status: {location}</Text>
            </View>
            <View
              style={styles.card}
            >
                <Text style={styles.title}>{status ? 'Access was granted' : 'Access was denied'}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cards: {
      width,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
      backgroundColor: 'white',
      width: width - 16 * 2,
      height: 50,
      marginVertical: 16 * 0.875,
      elevation: 16 / 2,
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    normal: {
        fontSize: 18,
    },
    granted: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'green',
    },
    denied: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'red',
    },
  });

export default Details;
