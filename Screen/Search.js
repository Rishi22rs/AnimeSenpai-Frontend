import React, { useEffect, useRef, useState } from 'react'
import { View,Text,StyleSheet, Dimensions, FlatList } from 'react-native'
import * as api from '../APIs/apiCalls'
import { SearchBar } from 'react-native-elements';
import TopBar from '../Components/TopBar';
import ThemePalette, { selectedTheme } from '../Theme/ThemePalette';
import AnimeCard from '../Components/AnimeCard';
import ActivityLoader from '../Components/ActivityLoader';


const dimension=Dimensions.get("window")

const Search=({navigation,route})=>{
    
    const [keyword,setKeyword]=useState()
    const [animeList,setAnimeList]=useState()
    const searchRef=useRef()
    const [isLoading,setIsLoading]=useState(false)

    useEffect(()=>{
        searchRef.current.focus()
    })

    const searchAnime=()=>{
        setIsLoading(true)
        api.getAnimeDataPost({keyword},"searchAnime").then(res=>{
            setAnimeList(res)
            setIsLoading(false)
        })
    }

    return (
        <View style={styles.container}>
            <TopBar/>
            <SearchBar
                placeholder="Start searching..."
                onChangeText={e=>setKeyword(e)} 
                value={keyword}
                lightTheme={true}
                containerStyle={[styles.containerStyle,styles.searchHeight]}
                inputContainerStyle={[styles.containerStyle,styles.searchHeight]}
                ref={searchRef}
                onSubmitEditing={searchAnime}
            />
            <View style={styles.searchContainer}>
            {animeList?<><FlatList
            style={{height:dimension.height-170}}
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
        backgroundColor:ThemePalette[selectedTheme].background,
        height:dimension.height
    },
    containerStyle:{
        backgroundColor:ThemePalette[selectedTheme].background,
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