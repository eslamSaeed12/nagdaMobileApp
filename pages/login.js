import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
const Login = props => {
  useEffect(() => {
    console.log(props.route);
  }, []);
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Text>مرحبا في صفحه التسجيل</Text>
      <Button
        mode="contained"
        onPress={() =>
          props.navigation.navigate('home', {authenticated: true})
        }>
        <Text>عوده للسابق</Text>
      </Button>
    </View>
  );
};

export default Login;
