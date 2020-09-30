import React from "react";
import { View, Text, StyleSheet, Button, Platform, Image } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import palette from "../styles/palette";
import * as ImagePicker from 'expo-image-picker'

function urlToBlob(url: string) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onerror = reject;
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        resolve(xhr.response);
      }
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob'; // convert type
    xhr.send();
  })
}

const ModalContents = () => (
  <View>
    <Text>
      Consectetur sit dolore ut mollit. Veniam dolore nostrud enim do. Id
      commodo dolor dolor sunt qui. Pariatur non cupidatat magna laboris officia
      nulla ex incididunt. Deserunt proident cupidatat nostrud dolor enim
      exercitation non labore exercitation qui voluptate. Eu consectetur sit
      adipisicing labore tempor aliquip. Qui consequat occaecat amet do cillum
      eiusmod non dolor dolore id cupidatat adipisicing. Pariatur cupidatat
      reprehenderit cillum occaecat proident qui laborum eu mollit. Amet tempor
      dolor nisi enim proident proident eu mollit officia eiusmod. Consectetur
      anim nulla ad consequat quis. Veniam nulla ad deserunt proident. Sunt sit
      consectetur eu aliqua veniam officia magna excepteur voluptate. Quis velit
      incididunt enim magna ex eu pariatur irure reprehenderit anim.
    </Text>
  </View>
);

/* I also tried swapping out the fetch implementation for the approach here:
   https://github.com/expo/expo/issues/2402#issuecomment-443726662
   The result was the same
*/
// const getBlob = async (uri: string) => {
//   try {
//     const blob = await new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest()
//       xhr.onload = function () {
//         resolve(xhr.response)
//       }
//       xhr.onerror = function (e) {
//         console.log(e)
//         reject(new TypeError(`XHR failed ${JSON.stringify(e)}`))
//       }
//       xhr.responseType = 'blob'
//       xhr.open('GET', uri, true)
//       xhr.send(null)
//     })

//     alert(`🎩 blob: ${JSON.stringify(blob)}`)
//   } catch (error) {
//     alert(`💩 ${error.message}`)
//   }
// }

const getBlob = async (uri: string) => {
  try {
    const blob = await urlToBlob(uri)

    alert(`🎩 blob: ${JSON.stringify(blob)}`)
  } catch (error) {
    alert(`💩 ${error.message}`)
  }
}

export const CaseDetailsScreen: React.FC<StackScreenProps<
  RootStackParamList,
  "CaseDetails"
>> = ({ route, navigation }) => {
  React.useEffect(() => {
    const checkPermissions = async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync()
        if (status !== 'granted') {
          alert('You need to allow camera roll permissions')
        }
      }
    }

    checkPermissions()
  }, [])

  const [uri, setUri] = React.useState<string>()

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.cancelled) {
      setUri(result.uri)
    }
  }

  const { id } = route.params!;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Case ${id}`}</Text>
      <View style={styles.button}>
        <Button title="Select Photo" onPress={pickImage}></Button>
        {uri && <>
          <Image source={{ uri }} style={{ width: 200, height: 200, borderRadius: 50 }} />
          <Button title="Get Blob" onPress={() => getBlob(uri)} />
        </>

        }
        <Button
          title="Open Modal"
          onPress={() => navigation.navigate("Modal")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.lightBlue,
  },
  text: {
    fontSize: 30,
    color: "#fff",
    paddingBottom: 10,
  },
  button: {
    width: 200,
  },
});
