import { View, Text, StyleSheet, Alert } from 'react-native';
import { useState, useEffect, useMemo } from 'react';
import React from 'react';
import Title from '../components/Title';
import Number from '../components/Number';
import PrimaryButton from '../components/PrimaryButton';
import { Ionicons } from '@expo/vector-icons';

let minBoundary = 1;
let maxBoundary = 100;

// eslint-disable-next-line react/prop-types
export default function GameScreen({ userNumber, onGameOver }) {
  const generateRandomBetween = (min, max, exclude) => {
    if (min === max) {
      return;
    }
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  };

  let initialGuess;
  useMemo(() => {
    console.log('initial guess');
    initialGuess = generateRandomBetween(1, 100, userNumber);
  }, [userNumber]);
  const [guess, setGuess] = useState(initialGuess);

  useEffect(() => {
    if (guess == userNumber) {
      onGameOver();
    }
  }, [guess, userNumber, onGameOver]);

  const nextGuess = direction => {
    if (
      (direction === 'lower' && guess < userNumber) ||
      (direction === 'higher' && guess > userNumber)
    ) {
      Alert.alert('Stop lying 🤥');
      return;
    }
    if (direction === 'lower') {
      maxBoundary = guess;
    } else {
      minBoundary = guess + 1;
    }
    const randomNumber = generateRandomBetween(minBoundary, maxBoundary, guess);
    setGuess(randomNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <Number>{guess}</Number>

      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuess.bind(this, 'higher')}>
            <Ionicons name="add" color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={nextGuess.bind(this, 'lower')}>
            <Ionicons name="remove" color="white" />
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 24,
  },
});
