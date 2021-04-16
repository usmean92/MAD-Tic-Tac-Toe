import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonGrid}>
        <View style={styles.buttonRow}>
          <View style={styles.buttonCover}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'orange',
                },
                styles.button,
              ]}
              onPress={() => Alert.alert('Button Pressed!')}>
 {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}            </Pressable>
          </View>
          <View style={styles.buttonCover}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'orange',
                },
                styles.button,
              ]}
              onPress={() => Alert.alert('Button Pressed!')}>
              <Text style={styles.buttonText}></Text>
            </Pressable>
          </View>
          <View style={styles.buttonCover}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'orange',
                },
                styles.button,
              ]}
              onPress={() => Alert.alert('Button Pressed!')}>
              {({ pressed }) => (
                <Text style={styles.text}>
                  {pressed ? 'Pressed!' : 'Press Me'}
                </Text>
              )}{' '}
            </Pressable>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <View style={styles.buttonCover}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'orange',
                },
                styles.button,
              ]}
              onPress={() => Alert.alert('Button Pressed!')}>
              <Text style={styles.buttonText}></Text>
            </Pressable>
          </View>
          <View style={styles.buttonCover}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'orange',
                },
                styles.button,
              ]}
              onPress={() => Alert.alert('Button Pressed!')}>
              {({ pressed }) => (
                <Text style={styles.text}>
                  {pressed ? 'Pressed!' : 'Press Me'}
                </Text>
              )}{' '}
            </Pressable>
          </View>
          <View style={styles.buttonCover}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'orange',
                },
                styles.button,
              ]}
              onPress={() => Alert.alert('Button Pressed!')}>
              <Text style={styles.buttonText}></Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <View style={styles.buttonCover}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'orange',
                },
                styles.button,
              ]}
              onPress={() => Alert.alert('Button Pressed!')}>
              <Text style={styles.buttonText}></Text>
            </Pressable>
          </View>
          <View style={styles.buttonCover}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'orange',
                },
                styles.button,
              ]}
              onPress={() => Alert.alert('Button Pressed!')}>
              <Text style={styles.buttonText}></Text>
            </Pressable>
          </View>
          <View style={styles.buttonCover}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'orange',
                },
                styles.button,
              ]}
              onPress={() => Alert.alert('Button Pressed!')}>
              <Text style={styles.buttonText}></Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  button: {
    height: 50,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 5,
  },
  text: {
    color: "black",
  },
});
