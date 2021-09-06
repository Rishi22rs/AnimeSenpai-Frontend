import React, { useEffect, useRef, useState } from 'react'
import { View,Text,StyleSheet, Dimensions, FlatList } from 'react-native'
import * as api from '../APIs/apiCalls'
import { SearchBar } from 'react-native-elements';
import TopBar from '../Components/TopBar';
import {ThemePalette,  selectedTheme } from '../Theme/ThemePalette';
import AnimeCard from '../Components/AnimeCard';
import ActivityLoader from '../Components/ActivityLoader';
import { useTheme } from '@react-navigation/native';


const dimension=Dimensions.get("window")

const Search=({navigation,route})=>{
    
    const [keyword,setKeyword]=useState()
    const [animeList,setAnimeList]=useState()
    const searchRef=useRef()
    const [isLoading,setIsLoading]=useState(false)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            searchRef.current.focus()
        });
    
        return unsubscribe;
      }, [navigation]);

    const searchAnime=()=>{
        setIsLoading(true)
        setAnimeList(undefined)
        api.getAnimeDataPost({keyword},"searchAnime").then(res=>{
            setAnimeList(res)
            setIsLoading(false)
        })
    }

    const {colors}=useTheme()

    return (
        <View style={[styles.container,{backgroundColor:colors.background,}]}>
            <TopBar/>
            <SearchBar
                placeholder="Start searching..."
                onChangeText={e=>setKeyword(e)} 
                value={keyword}
                lightTheme={true}
                containerStyle={[styles.containerStyle,styles.searchHeight,{backgroundColor:colors.background,}]}
                inputContainerStyle={[styles.containerStyle,styles.searchHeight,{backgroundColor:colors.background}]}
                ref={searchRef}
                onSubmitEditing={searchAnime}
            />
            <View style={styles.searchContainer}>
            {animeList?<><FlatList
            style={{height:dimension.height-165}}
                data={animeList}
                renderItem={({item})=><AnimeCard title={item.name} banner={item.banner} detail={item.releaseDate} animeLink={item.animeLink} navigation={navigation}/>
            }
            numColumns={2}
            />
            </>:isLoading&&<ActivityLoader/>}
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        height:dimension.height
    },
    containerStyle:{
        borderBottomWidth:0.5,
        borderBottomColor:'#dbdbdb',
        borderTopWidth: 0,
    },
    searchHeight:{
        height:30
    },
    searchContainer:{
        marginTop:20,
    }
})

export default Search