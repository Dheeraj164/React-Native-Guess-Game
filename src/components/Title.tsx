import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

const Title = ({
  children,
  textStyle,
  viewStyle,
}: {
  children: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewStyle>;
}) => {
  return (
    <View
      style={viewStyle}
      className="border-white rounded-md border-4 p-2 m-3">
      <Text
        style={textStyle}
        className="font-bold text-center text-white text-xl">
        {children}
      </Text>
    </View>
  );
};

export default Title;
