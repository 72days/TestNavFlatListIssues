import React, {useMemo} from 'react';
import {Button, FlatList, SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

type ScreenProps = {
  Home: undefined;
  FlatList: undefined;
};

const Stack = createNativeStackNavigator<ScreenProps>();

function HomeScreen({navigation}: NativeStackScreenProps<ScreenProps>) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to FlatList"
        onPress={() => navigation.navigate('FlatList')}
      />
    </View>
  );
}

function FlatListScreen() {
  const data = useMemo(() => {
    return [
      {id: '1', title: 'First Item'},
      {id: '2', title: 'Second Item'},
      {id: '3', title: 'Third Item'},
      {id: '4', title: 'Fourth Item'},
      {id: '5', title: 'Fifth Item'},
      {id: '6', title: 'Sixth Item'},
      {id: '7', title: 'Seventh Item'},
      {id: '8', title: 'Eighth Item'},
      {id: '9', title: 'Ninth Item'},
      {id: '10', title: 'Tenth Item'},
    ];
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}) => <Text>{item.title}</Text>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FlatList" component={FlatListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
