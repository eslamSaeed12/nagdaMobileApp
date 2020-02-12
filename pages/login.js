import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {linking} from '../actions/actions';
import {connect} from 'react-redux';
const Login = props => {
  function testRedux() {
    props.linking('login');
  }
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
      <Button mode="outlined" onPress={() => testRedux()}>
        <Text>توصيل</Text>
      </Button>
    </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
