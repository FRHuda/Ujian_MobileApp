import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import Profile from './Profile';

export default createBottomTabNavigator(
    {
        HomePage: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: <Icon name="home" size={24} />
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: <Icon name="user" size={24} />
            }
        }
    },
    {
        initialRouteName: 'HomePage',
        headerMode: 'none',
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'grey',
            activeBackgroundColor: 'grey',
        }
    }
)