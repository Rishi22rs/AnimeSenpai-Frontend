import React from 'react';
import { View,Text,ImageBackground,StyleSheet, Dimensions } from 'react-native';
import ThemePalette from '../Theme/ThemePalette';
import LinearGradient from 'react-native-linear-gradient';

const dimension=Dimensions.get("window")

const CarouselCard=({title,banner,detail,animeLink,navigation})=>{
    return(
        <View style={{alignItems:"center"}}>
            <ImageBackground source={{uri:banner}} style={styles.carouselCard} imageStyle={{ borderRadius: 15}}>
                <LinearGradient style={styles.bottomGradient} colors={['transparent','transparent','black']}>
                    <Text style={styles.carouselTitle}>{title}</Text>
                    <Text style={styles.carouselDetail}>{detail}</Text>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

const styles=StyleSheet.create({
    carouselCard:{
        height:200,
        width:dimension.width-75,
    },
    carouselTitle:{
        color:ThemePalette["light"]["carouselCardText"]["title"], 
        top:190,
        padding:20,
        fontWeight:"700",
        fontSize:20
    },
    carouselDetail:{
        top:155,
        padding:20,
        color:ThemePalette["light"]["carouselCardText"]["title"]
    },
    bottomGradient:{
        height:300,
        bottom:100,
        borderRadius:15
    }
})

export default CarouselCard