import React from "react";
import { Text, View } from "react-native";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className="bg-[#870446] rounded-lg shadow-2xl ">{children}</View>
  );
};

export default Card;
