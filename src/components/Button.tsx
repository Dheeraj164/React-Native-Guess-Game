import React, { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
type buttonProps = {
  children: ReactNode;
  onPress: () => any | void | undefined;
};
const Button = ({ children, onPress }: buttonProps) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#c2410c" }}
        className="px-4 py-2 m-2 rounded-full bg-orange-700"
        style={styles.button}>
        <Text className="text-center text-white">{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    overflow: "hidden",
    borderRadius: 28,
  },
});
