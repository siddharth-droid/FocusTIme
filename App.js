import React, { useState } from 'react';
import { Text, View, StyleSheet,Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';


export default function App() {


  const [focusSubject, setFocusSuject] = useState('gardenungasd');

  return (
    <View style={styles.container}>
      {focusSubject ?
       <Timer focusSubject = {focusSubject} onTimerEnd={()=>{
         setFocusSuject(null);
       }}
       /> : 
      <Focus addSubject={setFocusSuject} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.O==='ios'?
    spacing.md:spacing.lg,
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});
