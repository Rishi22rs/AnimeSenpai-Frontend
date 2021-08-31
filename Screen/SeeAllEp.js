import React from 'react'
import { FlatList, Text, TouchableOpacity,StyleSheet, View } from 'react-native'
import TopBar from '../Components/TopBar'
import ThemePalette, { selectedTheme } from '../Theme/ThemePalette'

const EpisodeBtn=({uniqueKey,episodeLink})=>{
    return(
        <TouchableOpacity key={uniqueKey}>
            <Text style={styles.epBtn}>{uniqueKey+1}</Text>
        </TouchableOpacity>
    )
}

const SeeAllEp=({route})=>{
    
    return(
        <>
        <TopBar title="Episodes List"/>
        <View style={{alignItems:'center'}}>
            <FlatList 
                data={route.params.eps}
                renderItem={({item,index})=>
                    <EpisodeBtn uniqueKey={index} episodeLink={item}/>
                }
                keyExtractor={(item,index)=>index}
                numColumns={5}
            />
        </View>
        </>
    )
}

const styles=StyleSheet.create({
    epBtn:{
        backgroundColor:ThemePalette[selectedTheme].epBtn.background,
        color:ThemePalette[selectedTheme].epBtn.color,
        margin:10,
        padding:10,
        borderRadius:15,
        width:40,
        height:38,
        textAlign:'center'
    },
})

export default SeeAllEp