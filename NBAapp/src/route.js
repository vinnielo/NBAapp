import React from 'react';
import {Platform} from  'react-native';


import { 
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';


// SCREENS

import SignIn from './components/auth';
import News from './components/news';
import Games from './components/games'

const AppStack = createBottomTabNavigator({
    News: News,
    Games:Games
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
