import React from 'react'
import { Button, View, Text, StyleSheet } from "react-native";
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../types'

interface CaseDashboardScreenProps {

}
type Props = CaseDashboardScreenProps & StackScreenProps<RootStackParamList, "CaseDashboard">

export const CaseDashboardScreen: React.FC<Props> = ({
  navigation
}) => {
  return (
    <View style={styles.container}>
      <Text>Case Dashboard Screen</Text>
      <Button
        title="Case Details"
        onPress={() => navigation.navigate('Case')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
});
