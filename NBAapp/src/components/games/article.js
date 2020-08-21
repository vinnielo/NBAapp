import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
export default class  GameArticleComponent extends Component {
  render(){
  return (
      <View>
        <Text>I am the game article component, hello</Text>
      </View>
  );
}
  }
const styles = StyleSheet.create({
  scrollView: {
    top: 50
  },
});