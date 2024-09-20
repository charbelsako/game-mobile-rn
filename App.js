import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameOver from './screens/GameOver';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Colors from './util/color';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setNumber] = useState(undefined);
  const [isGameOver, setIsGameOver] = useState(false);
  const pickNumberHandler = n => {
    setNumber(n);
  };

  const [fontsLoaded] = useFonts({
    Primary: require('./assets/fonts/OpenSans-Regular.ttf'),
    PrimaryBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) return <AppLoading />;

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  const gameOverHandler = () => {
    console.log('Game Over');
    setIsGameOver(true);
  };

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (isGameOver) {
    screen = <GameOver />;
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary800, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require('./assets/background.png')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.root}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.24,
  },
});
