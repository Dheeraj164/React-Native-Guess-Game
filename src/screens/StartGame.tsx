import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/Card";
import Button from "../components/Button";
import { addNume } from "../controller/screenController";
import Title from "../components/Title";

type screenProps = {
  changeScreen: () => any;
};
const StartGame = ({ changeScreen }: screenProps) => {
  const [guessNumber, setGuessNumber] = useState<string>("");
  const [guesses, setGuesses] = useState<number[]>([]);
  useEffect(() => {
    // setGuesses([...guesses, getGuesses()]);
  }, []);

  // console.log(guesses);
  return (
    <View>
      <Title>Guess The Number</Title>
      <Card>
        <View>
          <Text className="text-center font-bold text-yellow-500 mt-4 text-lg">
            Enter the Number between 0 - 99
          </Text>
        </View>
        <View className="text-white p-2 items-center ">
          <View className="border-b border-b-orange-500 w-[20%]">
            <TextInput
              className="text-2xl text-center font-bold text-white"
              maxLength={2}
              onChangeText={setGuessNumber}
              value={guessNumber}
            />
          </View>
        </View>
        <View className="flex items-center justify-center flex-row w-full mt-3 mb-2">
          <View className="flex-1">
            <Button onPress={() => addNume(guessNumber, changeScreen)}>
              Enter
            </Button>
          </View>
          <View className="flex-1">
            <Button
              onPress={() => {
                setGuessNumber("");
              }}>
              Cancel
            </Button>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGame;
