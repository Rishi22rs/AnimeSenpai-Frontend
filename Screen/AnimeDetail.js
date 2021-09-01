import React, { useEffect, useState } from 'react'
import { View,Image,Text,StyleSheet, ScrollView, Dimensions, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import * as api from '../APIs/apiCalls'
import ActivityLoader from '../Components/ActivityLoader'
import ThemePalette,{selectedTheme} from '../Theme/ThemePalette'

const dimension=Dimensions.get("window")

const EpisodeBtn=({uniqueKey,episodeLink,navigation})=>{
    return(
        <TouchableOpacity key={uniqueKey} onPress={()=>navigation.navigate("AnimePlayer",{episodeLink})}>
            <Text style={styles.epBtn}>{uniqueKey+1}</Text>
        </TouchableOpacity>
    )
}

const AnimeDetail=({route,navigation})=>{

    const [animeData,setAnimeData]=useState()

    useEffect(()=>{
        api.getAnimeDataPost({animeLink:route.params.animeLink},"animeDetail").then(res=>{
            res.Genre=res.Genre.split(',')
            setAnimeData(res)
        })
    },[])

    return(
        <View>
            {animeData?<>  
            <ImageBackground source={{uri:animeData.banner}} style={styles.banner}>
            </ImageBackground>
            <ScrollView style={styles.container}>
                <View style={{height:380}}></View>
                <View style={styles.detail}>
                <Text style={styles.title}>{animeData.name}</Text>
                <Text style={styles.subTitle}>{animeData.Type}</Text>
                <Text style={{marginBottom:15}}>{animeData["Other name"]}</Text>
                <View style={styles.genreContainer}>
                {animeData.Genre.map((x,key)=><Text style={styles.genre} key={key}>{x}</Text>)}
                </View>
                <View style={styles.epContainer}>
                <View style={{display:'flex',justifyContent:'space-between',width:dimension.width-50}}>
                    <Text style={{fontWeight:"700",color:ThemePalette[selectedTheme].animeCard['title']}}>Episodes</Text>
                    <Text style={[styles.seeAll]} onPress={()=>navigation.navigate("SeeAllEp",{eps:animeData.episodes})}>See all</Text>
                </View>
                <FlatList 
                    data={animeData.episodes}
                    renderItem={({item,index})=>
                        <EpisodeBtn uniqueKey={index} episodeLink={item} navigation={navigation}/>
                    }
                    keyExtractor={(item,index)=>index}
                    horizontal={true}
                />
                </View>
                <Text style={styles.summaryText}>{animeData["Plot Summary"]}</Text></View>
            </ScrollView></>:<View style={{marginTop:20}}><ActivityLoader/></View>}
        </View>
    )
}

const styles=StyleSheet.create({
    banner:{
        height:400,
        width:dimension.width,
        position:'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom:0
    },
    detail:{
        backgroundColor:ThemePalette["light"].background,
        padding:20,
        borderRadius:30,
        alignItems:'center',
        height:dimension.height
    },
    epContainer:{
        height:80
    },
    title:{
        fontSize:22,
        fontWeight:"900",
        color:ThemePalette[selectedTheme].animeCard['title'],
        marginBottom:5
    },
    subTitle:{
        color:ThemePalette[selectedTheme].animeCard['title'],
        fontSize:15,
        marginBottom:10
    },
    genreContainer:{
        display:"flex",
        flexDirection:'row',
        marginBottom:3,
        flexWrap: "wrap",
        justifyContent:"center",
        marginBottom:10
    },
    genre:{
        backgroundColor:ThemePalette[selectedTheme].genreBackgroundInDetail,
        padding:5,
        borderRadius:15,
        margin:3,
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
    summaryText:{
        color:ThemePalette[selectedTheme].animeCard['title'],
        fontSize:15
    },
    seeAll:{
        textAlign: 'right', 
        color:ThemePalette["light"]["titleColor"]["orange"],
        marginTop:-17
    },
})

export default AnimeDetail