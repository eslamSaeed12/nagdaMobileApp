import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Headline, Button} from 'react-native-paper';
import Container from '../components/container';
import CancelImage from '../assets/images/undraw_cancel_u1it.png';
const ErrorMaximumCalls = props => {
  const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 40,
      paddingBottom: 20,
      justifyContent: 'center',
    },
    img: {
      width: 'auto',
      height: 300,
    },
    btn: {
      alignSelf: 'center',
      marginTop: 20,
      backgroundColor: '#039BE5',
      borderRadius: 6,
      fontFamily: 'Cairo-Bold',
      color: '#fff',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.26,
      shadowRadius: 6,
      elevation: 4,
    },
    topHeader: {
      textAlign: 'center',
      fontFamily: 'Cairo-Bold',
      fontSize: 30,
      elevation: 10,
      paddingVertical: 20,
    },
    Headline: {
      textAlign: 'center',
      fontFamily: 'Cairo-Bold',
      elevation: 10,
    },
  });
  return (
    <View style={styles.mainView}>
      <Headline style={styles.topHeader}>خطأ</Headline>
      <View>
        <Image source={CancelImage} style={styles.img} />
        <Headline style={styles.Headline}>تخطيت الحد الاقصي الشهري</Headline>
        <Button
          onPress={() => props.navigation.navigate('home')}
          mode="contained"
          style={styles.btn}>
          الرئيسية
        </Button>
      </View>
    </View>
  );
};

export default ErrorMaximumCalls;
