import React from "react";
import { View, Text, StyleSheet } from "react-native";
import palette from "../styles/palette";
import commonStyle from "../styles/commonStyle";

interface NotFoundProps {}

export const NotFoundScreen: React.FC<NotFoundProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={[commonStyle.h1, { fontSize: 80 }]}>404</Text>
    </View>
  );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.darkBlue,
  },
});
