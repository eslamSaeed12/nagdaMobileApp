import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import BottomNavigation from '../components/bottom.navigation';
import {connect} from 'react-redux';
import Container from '../components/container';

class MapPage extends Component {
  styles = StyleSheet.create({
    mainView: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
    },
    mapView: {
      flex: 1,
    },
  });
  render() {
    return (
      <View style={this.styles.mainView}>
        <View style={this.styles.mapView}></View>
        <BottomNavigation />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, null)(MapPage);
