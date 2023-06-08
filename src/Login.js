import {View, Text, TouchableOpacity, TextInput, StyleSheet} from "react-native";   
import React, {useState} from "react"; // import the React and useState hooks from the react library
import {firebase} from '../config'; // import the firebase configuration file
import {useNavigation} from "@react-navigation/native"; // import the useNavigation hook from the react-navigation/native library



const Login = () =>{

    const navigation = useNavigation(); // create a navigation object
    const [email,setEmail] = useState(''); // create a state variable called email and initialize it to an empty string
    const [password,setPassword] = useState(''); // create a state variable called password and initialize it to an empty string


    loginUser = async(email,password) => {
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password);
        }catch(error){
            alert(error.message);
        }
    }

    return (

        <View style = {styles.container}>
            <Text style = {{fontSize: 30,fontWeight: "bold",}}>
                Login Screen
            </Text>

        <View>  
            <TextInput 
            style = {styles.TextInput}
            placeholder="Email"
            onChangeText = {(email) => setEmail(email)}
            autoCapitalize = "none"
            autoCorrect = {false}
            
            />

        <TextInput 
        style = {styles.TextInput}
        placeholder="Password"
        onChangeText = {(password) => setPassword(password)}
        autoCapitalize = "none"
        autoCorrect = {false}
        secureTextEntry = {true}
        
        />

        </View>

        <TouchableOpacity

              onPress={() => loginUser(email,password)}
              style = {styles.button}
        >
            <Text style = {{fontSize: 30, fontWeight: "bold"}}>
                Login
            </Text>

        </TouchableOpacity>

        <TouchableOpacity

              onPress={() => navigation.navigate("Registration")}
              style = {{marginTop: 20}}
        >
            <Text style = {{fontSize: 20, fontWeight: "bold"}}>
                Don't have an account? Register here
            </Text>

        </TouchableOpacity>

        </View>
    );


}

export default Login;


styles = StyleSheet.create({
    container: {    
        flex: 1,
        alignItems: "center",
        marginTop: 100
    },
    TextInput:{
        paddingTop: 20,
        paddingBottom: 10,
        width:400,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        marginBottom: 10,
        textAlign: "center"
       },
    button:{

        marginTop: 40,
        height: 50,
        width: 200,
        borderRadius: 40,
        backgroundColor: "#87CEEB",
        alignItems: "center",
        elevation: 20,
        justifyContent: "center"
    },
   
    
})