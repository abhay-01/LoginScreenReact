import { View,Text,TouchableOpacity,TextInput,StyleSheet} from "react-native";
import React,{useState} from "react";   
import {firebase} from '../config'; 


const Registration = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');

    registerUser = async(email,password,firstName,lastName) => {
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(() => {
            firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp: true,
                url: 'https://loginscreen-b5b95.firebaseapp.com',
            })

            .then(() => {
                alert('Verification email sent')
            }).catch((error) => {
                alert(error.message)
            })
            .then(() => {
                firebase.firestore.collection('users')
                .doc(firebase.auth().currentUser.uid)
                .set({
                    firstName,
                    lastName,
                    email,
            })
        })

        .catch((error) => {
            alert(error.message)
        })

    })
    .catch((error => {
        alert(error.message)
    }))
}

     return(

        <View style = {styles.container}>
            <Text style = {{fontWeight: "bold", fontSize: 30}}>
                Register here!!
            </Text>

            <View style = {{marginTop:40}}>
                <TextInput
                    style = {styles.TextIn}
                    placeholder = "First Name"
                    onChangeText = {(firstName) => setFirstName(firstName)}
                    autoCapitalize = "none"
                    autoCorrect = {false}/>

                <TextInput
                    style = {styles.TextIn}
                    placeholder = "Last Name"
                    onChangeText = {(lastName) => setLastName(lastName)}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    />

                <TextInput
                    style = {styles.TextIn}
                    placeholder = "Email"
                    onChangeText = {(email) => setEmail(email)}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    keyboardType = "email-address"/>

                <TextInput
                    style = {styles.TextIn}
                    placeholder = "Password"
                    onChangeText = {(password) => setPassword(password)}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    secureTextEntry = {true}/>
                


            </View>

            <TouchableOpacity
                onPress = {() => registerUser(email,password,firstName,lastName)}
                style = {styles.button}
                >

                    <Text style = {{ fontSize: 30, fontWeight: "bold"}}>
                        Register
                    </Text>
            </TouchableOpacity>

        </View>

     )
     }
    

        
export default Registration;


styles = StyleSheet.create({
    container: {    
        flex: 1,
        alignItems: "center",
        marginTop: 100
    },
    TextIn: {
        paddingTop: 20,
        paddingBottom: 10,
        width: 400,
        fontSize: 18,
        borderBottomWidth: 1,
        textAlign: "center",
        borderBottomColor: "#000",
        marginBottom: 10

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
    }
})