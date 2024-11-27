import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { game } from "../app";
import Button from "../components/Button";
import { restartGame } from "../controller/screenController";

type screenProps = {
  changeScreen: () => any;
};

const GameOver = ({ changeScreen }: screenProps) => {
  return (
    <View>
      <Title>Game Over!</Title>
      <View className="items-center">
        <Image
          className="w-[400px] h-[400px] overflow-hidden rounded-full p-2"
          style={styles.image}
          source={require("../assets/game_over.jpg")}
          height={30}
          width={30}
        />
      </View>
      <View className="my-3">
        <Text className="text-center text-xl text-white ">
          System Won in{" "}
          <Text className="font-bold text-black">
            {game.numberofGuess.length}
          </Text>{" "}
          while guessing{" "}
          <Text className="font-bold text-blue-500">{game.guessNumber}</Text>
        </Text>
      </View>
      <Button onPress={() => restartGame(changeScreen)}>Restart Game</Button>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  image: {
    // overflow: "hidden",
    // width: 150,
    // height: 150,
  },
});
