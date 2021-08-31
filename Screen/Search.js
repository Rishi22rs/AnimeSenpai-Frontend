import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import * as api from '../APIs/apiCalls'

const Search=()=>{
    
    const [animeData,setAnimeData]=useState()

    useEffect(()=>{
        api.getAnimeDataGet("recentRelease").then(res=>{
            setAnimeData(res)
        })
    },[])

    return (
        <View>
            <Text>Search Screen</Text>
        </View>
    )
}

const styles=StyleSheet.create({
   
})

export default Search