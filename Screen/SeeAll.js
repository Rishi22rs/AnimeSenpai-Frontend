import React from 'react'
import {View,FlatList,StyleSheet, Dimensions,Text, SafeAreaView} from 'react-native'
import AnimeCard from '../Components/AnimeCard'
import {ThemePalette,  selectedTheme } from '../Theme/ThemePalette';
import TopBar from '../Components/TopBar';
import { useTheme } from '@react-navigation/native';

const dimension=Dimensions.get("window")

const SeeAll=({route,navigation})=>{
    const {colors}=useTheme()
    return(
        <SafeAreaView style={[styles.container,{backgroundColor:colors["background"],}]}>
            <TopBar title={route.params.title}/>
            <View style={{marginLeft:5,height:dimension.height-80}}>
            <FlatList
                data={route.params.data}
                renderItem={({item})=><AnimeCard title={item.name} banner={item.banner} detail={item.releaseDate} animeLink={item.animeEpLink} navigation={navigation} episodeLink={route.params.episodeLink}/>
            }
            numColumns={2}
            />
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        height:dimension.height,
    },
})

export default SeeAll