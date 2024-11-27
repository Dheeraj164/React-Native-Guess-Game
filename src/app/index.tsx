import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGame from "../screens/StartGame";

import { Gamestate, GuessGame } from "../model/game_model";
import GameScreen from "../screens/GameScreen";
import GameOver from "../screens/GameOver";
import { useEffect, useState } from "react";

export let game: GuessGame = new GuessGame();

export default function Index() {
  const [gameState, setGameState] = useState<Gamestate>(Gamestate.init);

  function updategameState() {
    setGameState(game.gameState);
  }

  useEffect(() => {
    updategameState();
    updateScreen();
  }, [gameState]);

  const [Screen, setScreen] = useState<React.JSX.Element>(
    <StartGame changeScreen={updategameState} />
  );
  const updateScreen = () => {
    switch (gameState) {
      case Gamestate.init:
        setScreen(<StartGame changeScreen={updategameState} />);
        break;
      case Gamestate.playing:
        setScreen(<GameScreen changeScreen={updategameState} />);
        break;
      case Gamestate.over:
        setScreen(<GameOver changeScreen={updategameState} />);
        break;
      default:
        setScreen(<StartGame changeScreen={updategameState} />);
    }
  };

  return (
    <LinearGradient className="flex-1" colors={["#4e0329", "#ddb52f"]}>
      <ImageBackground
        className="flex-1"
        imageStyle={styles.bg}
        source={require("../assets/backgroud.jpg")}>
        <View className="p-4 m-4">{Screen}</View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  bg: {
    opacity: 0.15,
  },
});
