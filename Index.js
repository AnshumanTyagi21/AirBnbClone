import React from "react";
import {View, Text, ImageBackground, TouchableOpacity} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import styles from "./Style";

const HomeScreen = () => {
    return(
        <View style = {styles.container}>
          
          <TouchableOpacity 
           style = {styles.searchButton}
           onPress = {() =>
            console.log('Search Button was Pressed')
            }>
              <Fontisto name="search" size={25} color={"#f15454"}/>
              <Text style = {styles.searchButtonText}> Where Are You Going? </Text>
           </TouchableOpacity>

          <ImageBackground 
          style={styles.image}
          source={require('../../assets/HomeImage.jpg')}
          >
           
           <Text style={{fontSize:200, color:"white"}}> Go </Text> 
           <Text style={{fontSize:200, color:"white"}}> Near </Text>
           <TouchableOpacity 
           style = {styles.button}
           onPress = {() =>
            console.log('Button Pressed')
            }>
             <Text style = {styles.buttonText}> Explore Nearby Stays </Text>
           </TouchableOpacity>

          </ImageBackground>
        </View>
    )
}

export default HomeScreen;