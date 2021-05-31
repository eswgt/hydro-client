import React from 'react';

import { Card } from 'react-native-elements';

import {titleCase} from 'title-case';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const format = (entity) => titleCase(
    entity.split('_').join(' '),
);

const Metric = ({name, status, unit}) => {
    return (
      <Card containerStyle={styles.metricView} >
        <Text style={styles.metricText}>{format(name)}</Text>
        <Text style={styles.statusText}>{status}</Text>
        {unit && <Text style={styles.unitText}>{`(${unit})`}</Text>}
      </Card>
    )
}

// TODO(davonprewitt): Make UI more palletable.
const themeColor = "#e8e8e8";
const textColor = "#000000";
const styles = StyleSheet.create({
    // Views
    metricView: {
      height: 120,
      width: 240,
      shadowColor: themeColor,
      // borderColor: themeColor,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      
      elevation: 5,
      borderRadius: 10,
      marginBottom: 8,
      // backgroundColor: themeColor,
    },
    // Texts
    metricText: {
      color: textColor,
      textAlign: 'left',
      fontSize: 14,
    },
    statusText: {
        color: textColor,
        textAlign: 'left',
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 4
    },
      unitText: {
        color: textColor,
        textAlign: 'left',
        fontSize: 12,
        marginTop: 5,
        marginLeft: 4,
      },
  });

export default Metric;