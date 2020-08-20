
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

  showGames = (list) => (
    list.games ?
      list.games.map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={()=> this.props.navigation.navigate('Article',{
            ...item
          })}
        >
          <View style={styles.gameContainer}>

              <View style={styles.gameBox}>
                <Text>Hello</Text>
              </View>
              
              <View style={styles.gameBox}>
                <Text>Hello</Text>
              </View>

              <View style={styles.gameBox}>
                <Text>Hello</Text>
              </View>

          </View>
        </TouchableOpacity>
      ))
    :null
  )

  render(){
    
    return (
      <ScrollView style={{backgroundColor: '#f0f0f0'}}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          flexWrap: 'nowrap'
        }}>
          {this.showGames(this.props.Games)}
        </View>
      </ScrollView>
    );
}

  }
  

const styles = StyleSheet.create({
  gameContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
    shadowColor: '#dddddd',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 2
  },
  gameBox: {
    width: '33.3%',
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function mapStateToProps(state) {
  console.log(state);
  return {
    Games: state.Games,
  }
}

export default connect(mapStateToProps)(GamesComponent);