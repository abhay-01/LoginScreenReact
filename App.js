import { NavigationContainer } from "@react-navigation/native"; // import the NativeScreenNavigationContainer component from the react-native-screens library
import { createStackNavigator } from "@react-navigation/stack"; // import the createStackNavigator component from the react-native-screens library
import React, {useState,useEffect} from "react"; // import the React and useState hooks from the react library
import {firebase} from './config'; // import the firebase configuration file

import Login from "./src/Login"; // import the Login component
import Registration from "./src/Registration"; // import the Registration component
import Dashboard from "./src/Dashboard"; // import the Dashboard component
import Header from "./components/Header"; // import the Header component

const Stack = createStackNavigator(); // create a StackNavigator object


function App () {

  const[initialize, setInitialize] = useState(true);
  const[user, setUser] = useState();


  //Handle user state changes

  function onAuthStateChanged(user){
    setUser(user);

    if(initialize) setInitialize(false);
}

useEffect(() => {
  const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);  
}, []);

if(initialize) return null;

if(!user){

  return(

    <Stack.Navigator>
      <Stack.Screen name = "Login" 
      component = {Login} 
      options = {{
        headerTitle: () => <Header name = "Login Screen"  />,
        headerStyle: {
          height: 120,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          backgroundColor: "#87CEEB",
          shadowColor: "#000",
          elevation: 20
        } 
      }}
        />

    <Stack.Screen name = "Registration" 
      component = {Registration}  
      options = {{
        headerTitle: () => <Header name = "Registration Screen"  />,
        headerStyle: {
          height: 120,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          backgroundColor: "#87CEEB",
          shadowColor: "#000",
          elevation: 20
        } 
      }}
        />
    </Stack.Navigator>
  );
}

return (

  <Stack.Navigator>

      <Stack.Screen name = "Dashboard" 
      component = {Dashboard} 
      options = {{
        headerTitle: () => <Header name = "Dashboard Screen"  />,
        headerStyle: {
          height: 120,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          backgroundColor: "#87CEEB",
          shadowColor: "#000",
          elevation: 20
        } 
      }}
        />

  </Stack.Navigator>
);

}

export default () => {
  return (
    <NavigationContainer> 
      <App />
    </NavigationContainer>
  )
}


