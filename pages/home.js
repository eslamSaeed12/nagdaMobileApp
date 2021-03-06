import React, {Component, Fragment} from 'react';
import {Headline, Paragraph, Button, Text} from 'react-native-paper';
import {View, StyleSheet, Image} from 'react-native';
import Container from '../components/container';
import Logo from '../assets/images/Logo.png';
import {connect} from 'react-redux';
class Home extends Component {
  styles = StyleSheet.create({
    homeView: {
      flex: 1,
      backgroundColor: '#fff',
    },
    Container: {
      paddingVertical: 15,
    },
    imgView: {
      marginTop: 0,
    },

    img: {
      width: 150,
      height: 150,
      alignSelf: 'center',
      marginLeft: 30,
    },

    contentView: {
      marginTop: 40,
    },
    headLine: {
      textAlign: 'center',
      textTransform: 'uppercase',
      color: '#4B4B4B',
      fontFamily: 'Cairo-Bold',
    },
    Paragraph: {
      textAlign: 'center',
      marginTop: 5,
      color: '#4B4B4B',
    },
    footer: {
      paddingVertical: 20,
    },
    primaryBtn: {
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
      alignSelf: 'center',
      paddingHorizontal: 10,
    },
    link: {
      textDecorationLine: 'underline',
      color: '#039BE5',
      textAlign: 'center',
      fontFamily: 'Cairo-Bold',
    },
  });
  navigation = this.props.navigation;

  Authenticated() {
    if (this.props.Authenticated) {
      return (
        <Button
          onPress={() => this.navigation.navigate('map')}
          mode="contained"
          style={this.styles.primaryBtn}>
          تسجيل خروج
        </Button>
      );
    }
    return (
      <Fragment>
        <Button
          onPress={() => this.navigation.navigate('login')}
          mode="contained"
          style={this.styles.primaryBtn}>
          تسجيل دخول
        </Button>
        <Button
          onPress={() => this.navigation.navigate('signUP')}
          mode="contained"
          style={StyleSheet.compose(this.styles.primaryBtn, {
            marginTop: 20,
          })}>
          حساب جديد
        </Button>
      </Fragment>
    );
  }

  render() {
    return (
      <View style={this.styles.homeView}>
        <Container style={this.styles.Container}>
          <View style={this.styles.imgView}>
            <Image source={Logo} style={this.styles.img} />
          </View>
          <View style={this.styles.contentView}>
            <Headline
              style={StyleSheet.compose(
                this.styles.arabicHeadeLine,
                this.styles.headLine,
              )}>
              نجدة
            </Headline>
            <Headline style={this.styles.headLine}>nagda</Headline>
            <Paragraph style={this.styles.Paragraph}>
              حدد اقرب نقطة شرطة من موقعك الحالي بكل سهوله
            </Paragraph>
          </View>
          <View style={this.styles.footer}>{this.Authenticated()}</View>
          <View>
            <Text style={this.styles.Paragraph}>
              للمزيد من المعلومات قم بزياره موقعنا
            </Text>
            <Button type="text" onPress={() => console.log('tes')}>
              www.nagda.com
            </Button>
          </View>
        </Container>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {...state};
};
export default connect(mapStateToProps)(Home);
// navigation.goBack() the last page
// navigation.popToTop() go to the first page
// to get the route params from the props [route.params]
// you can add initialParams in the screen
// setOptions({}) configure screen state
