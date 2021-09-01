import React from 'react'
import { FlatList, Text, TouchableOpacity,StyleSheet, View, Dimensions } from 'react-native'
import TopBar from '../Components/TopBar'
import ThemePalette, { selectedTheme } from '../Theme/ThemePalette'

const dimension=Dimensions.get("window")

const EpisodeBtn=({uniqueKey,episodeLink,navigation})=>{
    return(
        <TouchableOpacity key={uniqueKey} onPress={()=>navigation.navigate("AnimePlayer",{episodeLink})}>
            <Text style={styles.epBtn}>{uniqueKey+1}</Text>
        </TouchableOpacity>
    )
}

const SeeAllEp=({route,navigation})=>{

    return(
        <View style={styles.container}>
        <TopBar title="Episodes List"/>
        <View style={{alignItems:'center'}}>
            <FlatList 
                data={route.params.eps}
                renderItem={({item,index})=>
                    <EpisodeBtn uniqueKey={index} episodeLink={item} navigation={navigation}/>
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
        backgroundColor:ThemePalette[selectedTheme].background,
        height:dimension.height
    },
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