import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton, Colors} from 'react-native-paper';

const NavigationTab = props => {
  return <IconButton mode="text" icon={props.icon} {...props} />;
};

const NavigationTabs = props => {
  const styles = StyleSheet.create({
    nav: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#039BE5',
      justifyContent: 'center',
    },
    tab: {
      marginHorizontal: 20,
    },
  });

  return (
    <View style={styles.nav} {...props}>
      <NavigationTab icon="home" style={styles.tab} color="#fff" size={35} />
      <NavigationTab icon="account" style={styles.tab} color="#fff" size={35} />
      <NavigationTab
        icon="map-marker"
        style={styles.tab}
        color="#fff"
        size={35}
      />
      <NavigationTab icon="help" style={styles.tab} color="#fff" size={35} />
    </View>
  );
};

export default NavigationTabs;
