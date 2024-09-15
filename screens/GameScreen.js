import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import React from 'react';
import Title from '../components/Title';
import Number from '../components/Number';

export default function GameScreen({ userNumber }) {
  const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  };

  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [guess, setGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <Number>{guess}</Number>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 24,
  },
});
