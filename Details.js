/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';

/* More in depth details need to be retrieved and displayed i.e. barcode status
    if time permits, we can also add a map view and shipping details via API here later*/

//TO DO: text formatting

function Details({route}) {
    const { id, title, caption, location, status } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>
            <Text>Card id:{id}</Text>
            <Text>Title:{title}</Text>
            <Text>Caption:{caption}</Text>
            <Text>ETA:{location}</Text>
            <Text>barcode match?:{status ? 'True' : 'False'}</Text>
        </View>
    );
}

export default Details;
