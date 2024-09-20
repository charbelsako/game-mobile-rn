import { Text, StyleSheet } from 'react-native';
import Colors from '../util/color';

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'PrimaryBold',
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
    borderColor: Colors.accent500,
    borderWidth: 1,
  },
});

export default Title;
