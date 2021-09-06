import { useTheme } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View,Image,Text,StyleSheet, ScrollView, Dimensions, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import * as api from '../APIs/apiCalls'
import ActivityLoader from '../Components/ActivityLoader'
import TopBar from '../Components/TopBar'
import { Icon } from 'react-native-elements'

const dimension=Dimensions.get("window")

const EpisodeBtn=({uniqueKey,episodeLink,navigation,colors})=>{
    return(
        <TouchableOpacity key={uniqueKey} onPress={()=>navigation.navigate("AnimePlayer",{episodeLink})}>
            <Text style={[styles.epBtn,{ backgroundColor:colors.epBtn.background,
        color:colors.epBtn.color,}]}>{uniqueKey+1}</Text>
        </TouchableOpacity>
    )
}

const AnimeDetail=({route,navigation})=>{
    const {colors}=useTheme()

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
                <TouchableOpacity activeOpacity={1} style={{zIndex:99}} onPress={() => navigation.goBack()}>
                    <Icon
                        raised={colors.carouselCardText.title==='white'?true:false}
                        reverse={colors.carouselCardText.title==='white'?false:true}
                        name='arrow-back'
                        type='material'
                        color={"black"}
                    />
                </TouchableOpacity>
            </ImageBackground>
            <ScrollView style={styles.container}>
                <View style={{height:380}}></View>
                <View style={[styles.detail,{backgroundColor:colors.background,}]}>
                <Text style={[styles.title,{color:colors.animeCard['title'],}]}>{animeData.name}</Text>
                <Text style={[styles.subTitle,{color:colors.animeCard['title'],}]}>{animeData.Type}</Text>
                <Text style={{marginBottom:15,color:colors.animedetail.detail}}>{animeData["Other name"]}</Text>
                <View style={styles.genreContainer}>
                {animeData.Genre.map((x,key)=><TouchableOpacity onPress={()=>navigation.navigate("GenreAnimeList",{genre:x.trim()})}><Text style={[styles.genre,{backgroundColor:colors.genreBackgroundInDetail,color:colors.genreTextColor}]} key={key}>{x.trim()}</Text></TouchableOpacity>)}
                </View>
                <View style={styles.epContainer}>
                <View style={{display:'flex',justifyContent:'space-between',width:dimension.width-50}}>
                    <Text style={{fontWeight:"700",color:colors.animeCard['title']}}>Episodes</Text>
                    <Text style={[styles.seeAll,{color:colors["titleColor"]["orange"],color:colors["titleColor"]["orange"],}]} onPress={()=>navigation.navigate("SeeAllEp",{eps:animeData.episodes})}>See all</Text>
                </View>
                <FlatList 
                    data={animeData.episodes.reverse()}
                    renderItem={({item,index})=>
                        <EpisodeBtn colors={colors} uniqueKey={index} episodeLink={item} navigation={navigation}/>
                    }
                    keyExtractor={(item,index)=>index}
                    horizontal={true}
                />
                </View>
                <Text style={[styles.summaryText,{color:colors.animedetail.detail,}]}>{animeData["Plot Summary"]}</Text></View>
            </ScrollView></>:<><TopBar/><View style={{backgroundColor:colors.background,height:dimension.height}}><ActivityLoader/></View></>}
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
        marginBottom:5
    },
    subTitle:{
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
        padding:5,
        borderRadius:15,
        margin:3,
    },
    epBtn:{
        margin:10,
        padding:10,
        borderRadius:15,
        width:40,
        height:38,
        textAlign:'center'
    },
    summaryText:{
        fontSize:15
    },
    seeAll:{
        textAlign: 'right', 
        marginTop:-17
    },
})

export default AnimeDetail