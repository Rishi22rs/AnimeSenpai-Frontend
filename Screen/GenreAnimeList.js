import React, { useEffect, useState } from 'react'
import {View,FlatList,StyleSheet, Dimensions,Text, SafeAreaView} from 'react-native'
import AnimeCard from '../Components/AnimeCard'
import {ThemePalette,  selectedTheme } from '../Theme/ThemePalette';
import TopBar from '../Components/TopBar';
import * as api from '../APIs/apiCalls'
import ActivityLoader from '../Components/ActivityLoader';
import { useTheme } from '@react-navigation/native';

const dimension=Dimensions.get("window")

const GenreAnimeList=({route,navigation})=>{
    const [data,setData]=useState()

    const {colors}=useTheme()

    useEffect(()=>{
        api.getAnimeDataPost({genre:route.params.genre.toLowerCase().replace(' ','-').replace(' ','-')},'genre').then(res=>{
            setData(res)
        })
    },[])

    return(
        <SafeAreaView style={[styles.container,{backgroundColor:colors["background"],}]}>
            <TopBar title={route.params.genre}/>
            <View style={{marginLeft:5}}>
           {data?<FlatList
                data={data}
                renderItem={({item})=><AnimeCard title={item.name} banner={item.banner} detail={item.releaseDate} animeLink={item.animeEpLink} navigation={navigation} episodeLink={route.params.episodeLink}/>
            }
            numColumns={2}
            />:<ActivityLoader/>}
            </View>
            <View style={{height:10}}></View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        height:dimension.height,
    },
})

export default GenreAnimeList