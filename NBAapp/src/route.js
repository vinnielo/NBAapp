import React from 'react';
import {Platform} from  'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'


import { 
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';


// SCREENS

import SignIn from './components/auth';
import News from './components/news';
import Article from "./components/news/article"
import Games from './components/games'
import GamesArticle from "./components/games/article"

import Logo from "./utils/logo"

const headerConf= {
    headerLayoutPreset: "center",
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: "#001338",
        },
        headerTintColor: 'white',
        headerTitle: Logo
    }
}
Ionicons.loadFont()

const NewsStack = createStackNavigator({
    News: News,
    Article: Article
}, headerConf)

const GamesStack = createStackNavigator({
    Games: Games,
    Article: GamesArticle
}, headerConf)

const AppStack = createBottomTabNavigator({
    News: NewsStack,
    Games: GamesStack
},{
    tabBarOptions:{
        activeTintColor: "#fff",
        showLabel: false,
        activeBackgroundColor: "#00194B",
        inactiveBackgroundColor: "#001338",
        style:{
            backgroundColor: "blue"
        }
    },
    initialRouteName: "News",
    defaultNavigationOptions:({navigation})=>({
        tabBarIcon:({focused, horizontal, tintColor})=>{
           const {routeName}= navigation.state;
            let iconName;
            routeName === 'News' ? iconName = 'ios-basketball' : iconName = 'ios-tv'
           return <Ionicons name={iconName} size={25} color={tintColor}/>
       }
   })
});

const AuthStack = createStackNavigator({
    SignIn:SignIn
}, 
{
    headerMode: 'none'
})

export const RootNavigator = () =>{
    return createAppContainer(createSwitchNavigator({
        App:AppStack,
        Auth:AuthStack
    }, 
    {
        initialRouteName: 'Auth'
    }))
}
