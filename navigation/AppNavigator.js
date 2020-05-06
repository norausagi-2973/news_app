import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesome} from '@expo/vector-icons';
/* screens */
import JapanScreen from '../screens/JapanScreen';
import UsScreen from '../screens/UsScreen';
import UkScreen from '../screens/UkScreen';
import KrScreen from '../screens/KrScreen';
import ArticleScreen from '../screens/ArticleScreen';
import ClipScreen from '../screens/ClipScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const JapaneseStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="日本"
        component={JapanScreen}
      />
      <Stack.Screen name="Article" component={ArticleScreen}/>
    </Stack.Navigator>
  );
};

const UsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="US"
        component={UsScreen}
      />
    <Stack.Screen name="Article" component={ArticleScreen}/>
    </Stack.Navigator>
  );
};

const UkStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UK"
        component={UkScreen}
      />
      <Stack.Screen name="Article" component={ArticleScreen}/>
    </Stack.Navigator>
  );
};

const KrStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="한국"
        component={KrScreen}
      />
      <Stack.Screen name="Article" component={ArticleScreen}/>
    </Stack.Navigator>
  );
};

const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="お気に入り" component={ClipScreen} />
    </Stack.Navigator>
  );
};

const screenOption = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let iconName;
    switch (route.name) {
      case '日本':
        iconName = 'newspaper-o';
        break;
      case 'US':
        iconName = 'newspaper-o';
        break;
      case 'UK':
        iconName = 'newspaper-o';
        break;
      case '한국':
        iconName = 'newspaper-o';
        break;
      case 'お気に入り':
        iconName = 'bookmark';
        break;
    }
    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});

export default AppNavigaotor = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="日本" component={JapaneseStack}/>
        <Tab.Screen name="US" component={UsStack}/>
        <Tab.Screen name="UK" component={UkStack}/>
        <Tab.Screen name="한국" component={KrStack}/>
        <Tab.Screen name="お気に入り" component={ClipStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
