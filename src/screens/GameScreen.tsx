import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import Card from "../components/Card";
import Button from "../components/Button";
import {
  checkNumber,
  randomNumberGenerate,
} from "../controller/screenController";
import { GuesType } from "../model/game_model";
import { game } from "../app";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/Title";
import Guess_Box from "../components/GuessBox";
import GuessBox from "../components/GuessBox";

type screenProps = {
  changeScreen: () => any;
};

const GameScreen = ({ changeScreen }: screenProps) => {
  const [guess, setGuess] = useState<number>(0);
  const [guesses, setGuesses] = useState<number[]>([]);

  useEffect(() => {
    setGuess(randomNumberGenerate(1, 100, game.guessNumber!));
  }, []);

  useEffect(() => {
    let arr = game.numberofGuess;
    setGuesses(game.numberofGuess);
    console.log(guesses);
  }, [guess]);
  let os: string = Platform.OS;
  return (
    <View>
      <Title>Game Screen on {os}</Title>
      <View>
        <Card>
          <View className="flex items-center p-3 mt-2">
            <View>
              <Text className="text-center text-2xl text-yellow-500">
                Guess Number
              </Text>
              <Text className="text-center text-2xl text-yellow-500">
                {guess}
              </Text>
            </View>

            <View className="flex items-center justify-center flex-row w-full mt-3 mb-2">
              <View className="flex-1">
                <Button
                  onPress={() => {
                    checkNumber(GuesType.Lesser, guess, setGuess, changeScreen);
                  }}>
                  <Ionicons name="remove" size={24} color="rgb(234 179 8)" />
                </Button>
              </View>
              <View className="flex-1">
                <Button
                  onPress={() => {
                    checkNumber(
                      GuesType.Greater,
                      guess,
                      setGuess,
                      changeScreen
                    );
                  }}>
                  <Ionicons name="add" size={24} color="rgb(234 179 8)" />
                </Button>
              </View>
            </View>
          </View>
        </Card>
      </View>
      <View>
        <FlatList
          data={guesses}
          renderItem={(items) => <GuessBox guess={items.item} />}
        />
        {/* {guesses.map((guess) => (
        <GuessBox key={guess}>{guess}</GuessBox>
        ))} */}
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({});
