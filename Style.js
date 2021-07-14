import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:1000,
        resizeMode:'cover',
        justifyContent:"center"
    },
    container:{
        width:"100%",
        height:Dimensions.get("window").height,
      },
    button:{
        backgroundColor:"#fff",
        width:200,
        height:40,
        marginLeft:35,
        marginTop:25,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
    },
    buttonText:{
        fontSize:16,
        fontWeight:'bold'
    },
    homeText:{
        fontSIze:100,
        fontWeight:'bold',
        color:'white',
        width:"70%",
        marginLeft:25
    },
    searchButton:{
        backgroundColor:"#fff",
        width:Dimensions.get("window").width - 20,
        height:60,
        borderRadius:30,
        marginTop:8,
        marginHorizontal:10 ,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        position:'absolute',
        top:50,
        zIndex:100
    },
    searchButtonText:{
        fontSize:16,
        fontWeight:'bold'
    },
})

export default styles;

