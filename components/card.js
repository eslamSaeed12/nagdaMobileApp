import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';

const CardComponent = props => {
  const styles = StyleSheet.create({
    card: {
      borderRadius: 6,
      backgroundColor: '#eee',
      shadowRadius: 9,
      shadowColor: '#0000',
      shadowOffset: {
        height: 6,
        width: 0,
      },
      shadowOpacity: 0.26,
      elevation: 3,
      marginVertical: 10,
    },
  });
  return (
    <Card style={styles.card}>
      <Card.Title title={props.title} subtitle={props.subtitle} />
      <Card.Content>
        <Paragraph>{props.content}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default CardComponent;
