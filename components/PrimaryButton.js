import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function PrimaryButtons(props) {
  const pressHandler = () => {
    // console.log('press');
  };

  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: '#640233' }}
        style={({ pressed }) =>
          pressed ? [styles.container, styles.pressed] : styles.container
        }
      >
        <Text style={styles.text}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  container: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
