import { View, Text, StyleSheet } from 'react-native';
import Colors from '../util/color';

export default function Number({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontFamily: 'PrimaryBold',
    fontSize: 36,
  },
});
