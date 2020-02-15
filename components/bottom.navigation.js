import React, {Fragment} from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton, Colors} from 'react-native-paper';
import {connect} from 'react-redux';

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

  const isAuthenticated = () => {
    if (props.Authenticated) {
      return (
        <Fragment>
          <NavigationTab
            icon="account"
            style={styles.tab}
            color="#fff"
            size={35}
            href="profile"
            onPress={() => props.fly('profile')}
          />
          <NavigationTab
            icon="map-marker"
            style={styles.tab}
            color="#fff"
            size={35}
            href="map"
            onPress={() => props.fly('map')}
          />
        </Fragment>
      );
    }
    return false;
  };
  return (
    <View style={styles.nav} {...props}>
      <NavigationTab
        icon="home"
        style={styles.tab}
        color="#fff"
        size={35}
        onPress={() => props.fly('home')}
      />
      {isAuthenticated()}
      <NavigationTab
        icon="help"
        style={styles.tab}
        color="#fff"
        size={35}
        href="helf"
        onPress={() => props.fly('help')}
      />
    </View>
  );
};
const mapStateToProps = state => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps)(NavigationTabs);
