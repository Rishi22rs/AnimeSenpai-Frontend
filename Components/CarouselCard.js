import React from 'react';
import { View,Text,ImageBackground,StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {ThemePalette, selectedTheme } from '../Theme/ThemePalette';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@react-navigation/native';

const dimension=Dimensions.get("window")

const CarouselCard=({title,banner,detail,animeLink,navigation})=>{
    const {colors}=useTheme()
    return(
        <TouchableOpacity onPress={()=>navigation.navigate("AnimePlayer",{episodeLink:animeLink})} activeOpacity={1}>
        <View style={{alignItems:"center"}}>
            <ImageBackground source={{uri:banner}} style={styles.carouselCard} imageStyle={{ borderRadius: 15}}>
                <LinearGradient style={styles.bottomGradient} colors={['transparent','transparent','black']}>
                    <Text style={[styles.carouselTitle,{color:colors["carouselCardText"]["title"], }]}>{title}</Text>
                    <Text style={[styles.carouselDetail,{color:colors["carouselCardText"]["title"]}]}>{detail}</Text>
                </LinearGradient>
            </ImageBackground>
        </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    carouselCard:{
        height:200,
        width:dimension.width-75,
    },
    carouselTitle:{
        top:190,
        padding:20,
        fontWeight:"700",
        fontSize:20
    },
    carouselDetail:{
        top:155,
        padding:20,
    },
    bottomGradient:{
        height:300,
        bottom:100,
        borderRadius:15
    }
})

export default CarouselCard