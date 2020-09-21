import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import palette from "../styles/palette";
import commonStyle from "../styles/commonStyle";
import { AuthContext } from "../AuthContext";
interface SigninScreenProps {}

export const SigninScreen: React.FC<SigninScreenProps> = ({}) => {
  const { dispatch } = React.useContext(AuthContext);
  const [email, setEmail] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <Text style={commonStyle.h1}>Login</Text>
        <TextInput
          defaultValue={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.field}
          placeholder="email"
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          style={styles.field}
          placeholder="password"
        ></TextInput>
        <View style={{ marginTop: 5 }}>
          <Button
            title="Submit"
            onPress={() =>
              dispatch!({
                type: "SIGN_IN",
                email,
                password: "bar",
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: palette.lightBlue,
  },
  formWrapper: {
    backgroundColor: palette.darkBlue,
    padding: 30,
    borderRadius: 5,
  },
  field: {
    backgroundColor: "#fff",
    height: 40,
    width: 200,
    marginVertical: 5,
    paddingHorizontal: 5,
  },
});
