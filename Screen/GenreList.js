import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Dimensions, StyleSheet, View,Text, FlatList, TouchableOpacity } from 'react-native'
import { colors } from 'react-native-elements';
import TopBar from '../Components/TopBar'
import {ThemePalette,  selectedTheme } from '../Theme/ThemePalette';

const dimension=Dimensions.get("window") 

const GenreContainer=({data,navigation,colors})=>{
    return(
        <TouchableOpacity activeOpacity={0.7} style={[styles.genreStyleContainer,{backgroundColor:data.color}]} onPress={()=>navigation.navigate("GenreAnimeList",{genre:data.genre})}>
            <Text style={[styles.genreStyle,{color:colors.carouselCardText.title,}]}>{data.genre}</Text>
        </TouchableOpacity>
    )
}

const GenreList=({navigation})=>{

    const list=[{color:"#15C0E8",genre:"Action"},
        {color:"#07558A",genre:"Adventure"},
        {color:"#64174D",genre:"Cars"},
        {color:"#64174D",genre:"Comedy"},
        {color:"#16B483",genre:"Crime"},
        {color:"#19BDBA",genre:"Dementia"},
        {color:"#104F55",genre:"Demons"},
        {color:"#1F255E",genre:"Drama"},
        {color:"#70C8BC",genre:"Dub"},
        {color:"#E1B6B4",genre:"Ecchi"},
        {color:"#B99031",genre:"Family"},
        {color:"#B99031",genre:"Fantasy"},
        {color:"#F6D0A4",genre:"Game"},
        {color:"#CF57A2",genre:"Harem"},
        {color:"#CF57A2",genre:"Hentai"},
        {color:"#F89122",genre:"Historical"},
        {color:"#FFC426",genre:"Horror"},
        {color:"#92524A",genre:"Josei"},
        {color:"#FFFE0B",genre:"Kids"},
        {color:"#BDE2FA",genre:"Magic"},
        {color:"#C58230",genre:"Martial Arts"},
        {color:"#AD705C",genre:"Mecha"},
        {color:"#7B2418",genre:"Military"},
        {color:"#B50AFC",genre:"Music"},
        {color:"#3A381D",genre:"Mystery"},
        {color:"#791718",genre:"Parody"},
        {color:"#FEDD02",genre:"Police"},
        {color:"#F7BBA6",genre:"Psychological"},
        {color:"#CE2027",genre:"Romance"},
        {color:"#EC2B28",genre:"Samurai"},
        {color:"#66339B",genre:"School"},
        {color:"#403E2A",genre:"Sci-Fi"},
        {color:"#AF1F58",genre:"Seinen"},
        {color:"#50002F",genre:"Shoujo"},
        {color:"#FF6700",genre:"Shoujo Ai"},
        {color:"#FC027D",genre:"Shounen"},
        {color:"#81419B",genre:"Shounen Ai"},
        {color:"#A09EA6",genre:"Slice of Life"},
        {color:"#D5B04D",genre:"Space"},
        {color:"#115CAE",genre:"Sports"},
        {color:"#175F0C",genre:"Super Power"},
        {color:"#EC2B28",genre:"Supernatural"},
        {color:"#000000",genre:"Thriller"},
        {color:"#460D55",genre:"Vampire"},
        {color:"#EC2B28",genre:"Yaoi"},
        {color:"#7C2E86",genre:"Yuri"}]

    const {colors}=useTheme()
    return(
        <View style={[styles.container,{backgroundColor:colors.background}]}>
            <TopBar title="Genre List"/>
            <View style={{height:dimension.height-113}}>
                <FlatList
                    data={list}
                    renderItem={({item})=><GenreContainer data={item} navigation={navigation} colors={colors}/>}
                    keyExtractor={({item})=>item}
                    numColumns={2}
                />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        height:dimension.height,
    },
    genreStyle:{
        padding:20,
        textAlign:'center',
        fontSize:15,
        fontWeight:"600"
    },
    genreStyleContainer:{
        width:dimension.width/2-30,
        margin:15,
        borderRadius:15
    }
})

export default GenreList