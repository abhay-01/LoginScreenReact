import { View, Text } from "react-native"; // import the View and Text components from the react-native library
import React from "react"; // import the React library


const Header = (props) => {

    return (

        <View style = {{marginLeft:20}}>
            <Text style = {{fontSize: 30, fontWeight: "bold"}}>
                {props.name}
                
            </Text>
        </View>

    )
}

export default Header; // export the Header component so that it can be used in other files