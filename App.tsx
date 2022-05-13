/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  FlatList,
  Button,
  PushNotificationIOS
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { RootState, store } from './src/app/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TunnelScreen from './TunnelScreen';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
var names = [];


function HomeScreen() {

  // const [list, setList] = useState([]);
  
  // useEffect( () => {
  //   axios.get('').then(resp => {

  //     const response = resp.data;
  //     setList(response);
  //     console.log(response);
  //     const name = response.map(a => a.name);
  //     console.log(name);
  //   });
  // },[]);
  

  // const Item = ({name, id, status, position}) => {
  //   const navigation = useNavigation();
  //   return(
  //     <View style={styles.item}>
  //     <TouchableOpacity
  //     onPress={() => navigation.navigate('Details', {
  //       id: {},
  //       status: {},
  //       position: {}
  //     })}
  //     >
  //       <Text style={styles.name}>{}</Text>
  //       <Text style={styles.subinfo}>{}</Text>
  //       <Text style={styles.subinfo}>{}</Text>
  //     </TouchableOpacity>
  //   </View>
  //   )
  // };

  // const renderItem = ({ item }) => (
  //   <Item name={item.name} id={item.id} status={item.status} position={item.position}/>
  // );

  return (
    <SafeAreaView>
        <StatusBar/>
          <View>
            <Section title="">
            </Section>
            {/* <FlatList
              data={list}
              renderItem={renderItem}
              keyExtractor={item => item.number}
            /> */}
          </View>
    </SafeAreaView>
  );
}

function DetailsScreen({navigation, route}) {
  const infos = route.params;
  
  return (
    <View>
      <Text style={styles.title}>Informations</Text>
      {/* <Text style={styles.detailSubInfo}>{infos.position.position}</Text>
      <Text style={styles.detailSubInfo}>{infos.status.status}</Text>
      <Text style={styles.detailSubInfo}>{}</Text> */}
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Tunnel" component={TunnelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
    paddingBottom: 10,
    paddingTop: 20,
    backgroundColor: '#206091'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff'
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#e3e3e3',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  name: {
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
    marginTop: 14,
    fontWeight: "600"
  },
  subinfo: {
    fontSize: 12,
  },
  detailSubInfo: {
    fontSize: 16,
    marginBottom: 6,
    marginLeft: 8
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  }
});

export default App;
