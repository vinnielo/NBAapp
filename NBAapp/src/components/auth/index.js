import React, {Component} from 'react';

import {StyleSheet, View, Text, Button} from 'react-native';

export default class AuthComponent extends Component {

//   handleClick (){
//   return this.props.navigation.navigate("App")
// }
handleClick = () => {
  this.props.navigation.navigate('App')
}

  render() {
    return (
      <View>
        <Text>Auth Page</Text>
        <Button
          onPress={this.handleClick}
          title="Try"
          
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   button: {
//     flex: 1,
//   },
// });
