import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} from "react-native";

// const {  } = React;

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#48BBEC"
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: "center",
    color: "#fff"
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    color: "white"
  },
  buttonText: {
    fontSize: 18,
    color: "#111",
    alignSelf: "center"
  },
  button: {
    height: 45,
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  }
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isLoading: false,
      error: false
    };
  }

  handleChange(e) {
    this.setState({
      username: e.nativeEvent.text
    });
  }

  handleSubmit(e) {
    //update our indicatorIOS spinner
    console.log(`handleSubmit activated ${this.state.username}`);
    this.setState({
      isLoading: true
    });

    //fetch data from github
    //reroute to next passing github info
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Testing the Router </Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange.bind(this)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white"
        >
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

// const Main = () => {
//   return (
//     <View style={styles.container}>
//       <Text> Testing the Router </Text>
//     </View>
//   );
// };

export default Main;
