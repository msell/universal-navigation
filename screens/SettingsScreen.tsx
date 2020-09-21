import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { AuthContext } from "../AuthContext";

export const SettingsScreen: React.FC = () => {
  const { dispatch } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <View style={styles.signout}>
        <Button
          title="Sign Out"
          onPress={() => dispatch!({ type: "REQUEST_SIGN_OUT" })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signout: {
    marginTop: 30,
    width: 100,
  },
});
