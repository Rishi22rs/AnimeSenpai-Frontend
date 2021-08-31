import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet, Button } from 'react-native'
import * as api from '../APIs/apiCalls'

const AnimePlayer=({navigation})=>{
    
    const [animeData,setAnimeData]=useState()

    // useEffect(()=>{
    //     api.getAnimeDataGet("recentRelease").then(res=>{
    //         setAnimeData(res)
    //     })
    // },[])

    return (
        <View>
            <Text>AnimePlayer Screen</Text>
            <Button title="Home" onPress={()=>navigation.navigate("Home")}/>
        </View>
    )
}

const styles=StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
})

export default AnimePlayer