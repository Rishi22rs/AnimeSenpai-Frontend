import { useTheme } from '@react-navigation/native';
import React from 'react'
import { FlatList, Text, TouchableOpacity,StyleSheet, View, Dimensions } from 'react-native'
import TopBar from '../Components/TopBar'
import {ThemePalette,  selectedTheme } from '../Theme/ThemePalette';

const dimension=Dimensions.get("window")

const EpisodeBtn=({uniqueKey,episodeLink,navigation,colors})=>{
    return(
        <TouchableOpacity key={uniqueKey} onPress={()=>navigation.navigate("AnimePlayer",{episodeLink})}>
            <Text style={[styles.epBtn,{backgroundColor:colors.epBtn.background,}]}>{uniqueKey+1}</Text>
        </TouchableOpacity>
    )
}

const SeeAllEp=({route,navigation})=>{

    const {colors}=useTheme()

    return(
        <View style={[styles.container,{backgroundColor:colors.background,}]}>
        <TopBar title="Episodes List"/>
        <View style={{alignItems:'center'}}>
            <FlatList 
                data={route.params.eps}
                renderItem={({item,index})=>
                    <EpisodeBtn uniqueKey={index} episodeLink={item} navigation={navigation} colors={colors}/>
                }
                keyExtractor={(item,index)=>index}
                numColumns={5}
            />
        </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        height:dimension.height
    },
    epBtn:{
        margin:10,
        padding:10,
        borderRadius:15,
        width:40,
        height:38,
        textAlign:'center'
    },
})

export default SeeAllEp