import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {Headline, Text, TextInput, Badge, Button} from 'react-native-paper';
import Container from '../components/container';
import ProfileImage from '../assets/images/undraw_profile_6l1l.png';
class Profile extends React.Component {
  styles = StyleSheet.create({
    mainView: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 40,
      paddingBottom: 20,
    },
    Container: {},
    Headline: {
      textAlign: 'center',
      fontFamily: 'Cairo-Bold',
    },
    input: {
      marginHorizontal: 30,
      marginVertical: 20,
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
    label: {
      marginHorizontal: 30,
    },
    img: {
      width: 'auto',
      height: 250,
    },
    badge: {
      alignSelf: 'center',
      backgroundColor: '#039BE5',
    },
    badgeLabel: {
      textAlign: 'center',
      marginBottom: 10,
      fontFamily: 'Cairo-Bold',
    },
    btn: {
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
      marginLeft: 30,
      alignSelf: 'flex-start',
    },
    contents: {
      paddingVertical: 10,
    },
    check: {
      position: 'absolute',
      top: 65,
      right: 45,
      elevation: 333,
    },
  });
  render() {
    return (
      <ScrollView>
        <View style={this.styles.mainView}>
          <Container>
            <Headline style={this.styles.Headline}>الصفحة الشخصيه</Headline>
            <Image source={ProfileImage} style={this.styles.img} />
            <View style={this.styles.form}>
              <Text style={this.styles.badgeLabel}>الاستخدام اليومي</Text>
              <Badge style={this.styles.badge} size={40}>
                3
              </Badge>
            </View>
            <View style={this.styles.form}>
              <Text style={this.styles.label}>اسم المستخدم</Text>
              <TextInput
                mode="flat"
                value="username"
                style={this.styles.input}
              />
            </View>
            <View style={this.styles.form}>
              <Text style={this.styles.label}>البريد الالكتروني</Text>
              <TextInput
                mode="flat"
                value="email.example@gmail.com"
                style={this.styles.input}
              />
            </View>
            <View style={this.styles.form}>
              <Text style={this.styles.label}>الرقم السري</Text>
              <TextInput
                mode="flat"
                value="*********"
                style={this.styles.input}
              />
            </View>
            <View style={this.styles.contents}>
              <Button mode="contained" style={this.styles.btn}>
                تحديث البيانات
              </Button>
            </View>
            <View style={this.styles.contents}>
              <Text style={this.styles.Headline}>
                للتواصل معنا قم بزياره موقعنا
              </Text>
              <Button type="text" onPress={() => console.log('tes')}>
                www.nagda.com
              </Button>
            </View>
          </Container>
        </View>
      </ScrollView>
    );
  }
}

export default Profile;
