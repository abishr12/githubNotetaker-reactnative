/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import Main from "./Application/Components/Main";
import { NavigatorIOS } from "react-native";

// class Main extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text> Testing the Router </Text>
//       </View>
//     );
//   }
// }

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default class App extends Component<Props> {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{ component: Main, title: "Github Note Taker" }}
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#F5FCFF"
        }}
      />
    );

    // <View style={styles.container}>
    //   <Text> Testing the Router </Text>
    // </View>
  }
}
