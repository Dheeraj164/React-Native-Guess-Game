import React from "react";
import { Text, View } from "react-native";

const GuessBox = ({ guess }: { guess: number }) => {
  return (
    <View className="bg-orange-500 p-2 m-3 items-center rounded-lg  ">
      <Text className="font-bold text-xl">{guess}</Text>
    </View>
  );
};

export default GuessBox;
