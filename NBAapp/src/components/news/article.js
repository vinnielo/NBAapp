import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
export default class  ArticleComponent extends Component {
  render(){
  return (
      <View>
        <Text>hello i am the article</Text>
      </View>
  );
}
  }
const styles = StyleSheet.create({
  scrollView: {
    top: 50
  },
});