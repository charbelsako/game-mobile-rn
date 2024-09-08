import { View, Text } from 'react-native';

export default function PrimaryButtons(props) {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
}
