import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../util/color';
import Title from '../components/Title';

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState(0);

  const onChangeNumber = input => {
    setEnteredNumber(input);
  };

  const resetInput = () => {
    setEnteredNumber('');
  };

  const confirmInput = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Number should be of type number between 0 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInput }]
      );
      return;
    }
    onPickNumber(enteredNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my number</Title>
      <View style={styles.inputContainer}>
        <Text style={styles.instructionText}>Enter a number</Text>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize={false}
          value={enteredNumber}
          onChangeText={onChangeNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInput}>Start</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    borderWidth: 2,
    borderColor: 'black',
    alignContent: 'center',
  },
  inputContainer: {
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 10,
    marginTop: 36,
    elevation: 8,
    backgroundColor: Colors.primary700,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    fontFamily: 'Primary',
    color: Colors.primary500,
  },
});
