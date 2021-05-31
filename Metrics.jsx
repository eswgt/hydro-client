import React, {Component} from 'react';

import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Metric from './Metric';


class Metrics extends Component {
  state = {
    count: 0,
    // TODO(davonprewitt): Populate from GCP Pub/Sub subscriber. 
    metrics: [
        {
            name: "water_level:m",
            status: 1.2,
        },
        {
            name: "pH",
            status: 5.9,
        }
    ],
  };

  constructor(props) {
    super(props);
    // TODO(davonprewitt): Perform subscription and callback to receive and reformat metrics.
  }

  _notify(title, message) {
    Alert.alert(
      title,
      message,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  }

  render() {
    const metrics = this.state.metrics.map((item, _) => {
      const [name, unit] = item.name.split(':'); 
      return (
        <Metric
          name={name}
          status={item.status}
          unit={unit}
        />
      );
    });

    return (
      <View style={styles.screenView}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Status</Text>
        </View>
        <ScrollView style={styles.scrollView}>{metrics}</ScrollView>
      </View>
    );
  }
}

// TODO(davonprewitt): Make UI more palletable.
const styles = StyleSheet.create({
  // Views
  screenView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scrollView: {
    // marginHorizontal: ,
    // alignItems: 'center',
    height: '100%',
  },
  titleView: {
    marginTop: 75,
    marginBottom: 25,
    marginLeft: 35,
    justifyContent: 'flex-start',
    flex: 0,
    color: '#fff',
  },
  // Texts
  titleText: {
    textAlign: 'left',
    fontSize: 36,
    fontWeight: 'bold',
    marginRight: 220,
    color : "#000",
  },
});

export default Metrics;