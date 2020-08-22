import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  Button
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default class  GameArticleComponent extends Component {

  state = {
    loading: false,
    isAuth: false
  }

  render(){
    const params = this.props.navigation.state.params;

    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    } else {
      return (
        <ScrollView style={{backgroundColo: '#F0F0F0'}}>
          {
            this.state.isAuth ?
              <Text>Video</Text>
            :
              <View style={styles.notAuth}>
                <Icon name="md-sad" size={80} color="#d5d5d5" />
                
                <Text style={styles.notAuthText}>
                  Sorry, you must be logged in to see this content.
                </Text>

                <Button
                  title="Login / Register"
                  onPress={() => this.props.navigation.navigate('Auth')}
                />
              </View>
          }
        </ScrollView>
      )
    }
}
  }
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  notAuth: {
    flex: 1,
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notAuthText: {
    fontFamily: 'Roboto-Bold'
  }
});