import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {
  Button,
  TextInput,
  Headline,
  Paragraph,
  RadioButton,
  FAB,
  Text,
} from 'react-native-paper';
import {linking} from '../actions/actions';
import {connect} from 'react-redux';
import Container from '../components/container';
import Logo from '../assets/images/Logo.png';
const SignUP = props => {
  const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      backgroundColor: '#fff',
      paddingVertical: 40,
    },
    Container: {},
    logoView: {
      // paddingVertical: 40,
    },
    logo: {
      width: 150,
      height: 150,
      alignSelf: 'center',
      marginLeft: 30,
    },
    content: {
      paddingVertical: 20,
    },
    header: {
      textAlign: 'center',
      fontFamily: 'Cairo-Bold',
    },
    form: {
      paddingVertical: 10,
    },
    inputs: {
      marginHorizontal: 30,
      marginTop: 10,
      borderRadius: 9,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.25,
      shadowRadius: 9,
      elevation: 3,
    },
    socialLogin: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    Paragraph: {
      textAlign: 'center',
    },
    view: {
      paddingVertical: 20,
    },
    fab: {
      color: '#fff',
      backgroundColor: '#039BE5',
      marginHorizontal: 5,
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
      paddingHorizontal: 50,
      marginTop: 20,
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingLeft: 30,
    },
  });

  const [checked, setChecked] = useState(false);

  return (
    <ScrollView>
      <View style={styles.mainView}>
        <Container style={styles.Container}>
          <View style={styles.logoView}>
            <Image source={Logo} style={styles.logo} />
          </View>
          <View style={styles.content}>
            <Headline style={styles.header}>تسجيل جديد</Headline>
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.inputs}
              label="اسم المستخدم"
              mode="flat"
              placeholder="لا يقل عن 6 حروف ولا يحتوي علي رموز"
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.inputs}
              label="البريد الالكتروني"
              mode="flat"
            />
          </View>
          <View style={styles.form}>
            <TextInput
              placeholder="لا يقل عن 8 حروف ولا يزيد عن 14"
              style={styles.inputs}
              label="الرقم السري"
              mode="flat"
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.inputs}
              label="كرر الرقم السري"
              type="flat"
            />
          </View>

          <View style={styles.form}>
            <Button mode="contained" style={styles.primaryBtn}>
              تسجيل
            </Button>
          </View>
          <View style={styles.view}>
            <Paragraph style={styles.Paragraph}>
              يمكنك ان شاء حساب عن طريق
            </Paragraph>
            <View style={StyleSheet.compose(styles.socialLogin, styles.view)}>
              <FAB icon="facebook" style={styles.fab} />
              <FAB icon="google" style={styles.fab} />
            </View>
          </View>
        </Container>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    linking: payload => dispatch(linking(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUP);
