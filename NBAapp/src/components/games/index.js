
import React, { Component } from 'react';
import {

  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { getGames } from '../../store/actions/games_actions'
import Moment from 'moment';

class  GamesComponent extends Component {

  componentDidMount() {
    this.props.dispatch(getGames());
  }

  render(){
    
    return (

        <View>
          <Text>game Page</Text>
        </View>
        
        
    );
}

  }
  

const styles = StyleSheet.create({
  scrollView: {
   
    top: 50
  },
 
});

function mapStateToProps(state) {
  console.log(state);
  return {
    Games: state.Games,
  }
}

export default connect(mapStateToProps)(GamesComponent);