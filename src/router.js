import React from 'react';
import { StackNavigator, DrawerNavigator, NavigationActions } from 'react-navigation';

//GENERAL
import LandingScreen from './screen/LandingScreen'; //Welcome page
import DefaultScreen from './screen/DefaultScreen'; //Default page waiting for event activation

//GENERAL
import ArtworkScreen from './screen/ArtworkScreen'; //Welcome page

export const Routes = StackNavigator({
  Landing: {screen: LandingScreen},
  Default: {screen: DefaultScreen},
  Artwork: {screen: ArtworkScreen}
},{
  headerMode: 'none',
});

export const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Routes' })],
});
