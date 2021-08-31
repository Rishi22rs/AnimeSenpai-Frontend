import React from 'react';
import { View,Text,Image,StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import ThemePalette from '../Theme/ThemePalette';

const dimension=Dimensions.get("window")

const AnimeCard=({title,banner,detail,animeLink,navigation})=>{
    return(
        <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={()=>navigation.navigate("AnimeDetail",{animeLink})}>
            <Image source={{uri:banner}} style={styles.cardImg}/>
            <Text numberOfLines={2} style={styles.animeTitle}>{title}</Text>
            <Text style={styles.subText}>{detail}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    animeTitle:{
        color:ThemePalette["light"]["animeCard"]["title"], 
        fontSize:18,
        fontWeight:"700",
        width:dimension.width/2.5,
        marginTop:5
    },
    container:{
        padding:0,
        marginLeft:20,
        marginTop:10  
    },
    cardImg:{
        height:200,
        width:dimension.width/2.5,
        borderRadius:15
    },
    heading:{
        marginBottom:10,
    },
    subText:{
        color:ThemePalette["light"]["animeCard"]["subText"],
        fontWeight:"600",
        marginLeft:2,
        width:dimension.width/2.5,
    }
})

export default AnimeCard