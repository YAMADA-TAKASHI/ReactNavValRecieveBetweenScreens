import React from "react";
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GLOBALS from './Globals';

//About
class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}} >
        <Text>About</Text>
        <Text>{this.props.navigation.state.params.User.name}</Text>
        <Text>{GLOBALS.COLOR.ORANGE}</Text>
      </View>
    );
  }
}

//Home
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
        <Button
          title='Link to About'
          onPress={() => this.props.navigation.navigate('About', {User:{name: 'hoge', age: 33}})}
        />
        <Text>{GLOBALS.COLOR.ORANGE}</Text>
      </View>
    );
  }
}

//RootStack
const Stack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    About: {
      screen: AboutScreen,
    }
  },
  {
      defaultNavigationOptions: {
          headerStyle: {
              backgroundColor: '#0091EA',
          },
          headerTintColor: '#FFFFFF',
          title: 'Home',
      },
  },
  {
    initialRouteName: 'Home',
  }
);
const RootStack = createAppContainer(Stack);

//App
export default class App extends React.Component {

  //マウント後なのでホーム画面は書き換わらない
  componentDidMount() {
    GLOBALS.COLOR.ORANGE = "#FFFFFF";
  }

  //両画面変わる
  componentWillMount() {
    GLOBALS.COLOR.ORANGE = "#FFFFFF";
  }

  render() {
    return (
      <RootStack />
    )
  }
}
