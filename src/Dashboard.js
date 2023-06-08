import { View,Text, StyleSheet,SafeAreaView, TouchableOpacity} from "react-native";
import React, {useState,useEffect} from "react";
import {firebase} from '../config';

const Dashboard = () => {

    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists){
                setName(snapshot.data())
            }

            else {
                console.log('User does not exist')
            }
        })
        }, [])

        return (
            <SafeAreaView style = {styles.container}>
                    <Text style = {{fontSize: 30, fontWeight: "bold"}}>
                        Hello, {firstName}
                    </Text>
                <TouchableOpacity

                    onPress={() => {firebase.auth().signOut()}}
                    style = {styles.button}
                >
                    <Text style = {{ fontSize: 30, fontWeight: "bold"}}>
                        Sign out
                    </Text>

                </TouchableOpacity>
            </SafeAreaView>
        )
}

export default Dashboard;

styles = StyleSheet.create({
    container: {    
        flex: 1,
        alignItems: "center",
        marginTop: 100
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