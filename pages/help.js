import React from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {Headline, Text, Button} from 'react-native-paper';
import Container from '../components/container';
import Card from '../components/card';
import FaqImage from '../assets/images/faq.png';
const HelpPage = props => {
  const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      backgroundColor: '#fff',
      fontFamily: 'Cairo-Bold',
      paddingTop: 40,
      paddingBottom: 20,
    },
    Headline: {
      textAlign: 'center',
    },
    contents: {
      paddingVertical: 20,
    },
    img: {
      height: 200,
      width: 256,
      alignSelf: 'center',
    },
  });

  return (
    <ScrollView>
      <View style={styles.mainView}>
        <Container>
          <Headline style={styles.Headline}>اسئلة مكرره</Headline>
          <Image source={FaqImage} style={styles.img} />
          <View style={styles.contents}>
            <Card title="تجربه سؤال الان" content="لوريم انبسم تجربه نصيه " />
            <Card title="تجربه سؤال الان" content="لوريم انبسم تجربه نصيه " />
            <Card title="تجربه سؤال الان" content="لوريم انبسم تجربه نصيه " />
            <Card title="تجربه سؤال الان" content="لوريم انبسم تجربه نصيه " />
            <Card title="تجربه سؤال الان" content="لوريم انبسم تجربه نصيه " />
            <Card title="تجربه سؤال الان" content="لوريم انبسم تجربه نصيه " />
          </View>
          <View style={styles.contents}>
            <Text style={styles.Headline}>للتواصل معنا قم بزياره موقعنا</Text>
            <Button type="text" onPress={() => console.log('tes')}>
              www.nagda.com
            </Button>
          </View>
        </Container>
      </View>
    </ScrollView>
  );
};

export default HelpPage;
