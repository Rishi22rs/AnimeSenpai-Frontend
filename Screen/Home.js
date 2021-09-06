import React, { useEffect, useState,useRef } from 'react'
import { View,Text,StyleSheet, ScrollView, SafeAreaView, Dimensions,ActivityIndicator, FlatList } from 'react-native'
import * as api from '../APIs/apiCalls'
import {ThemePalette,  selectedTheme } from '../Theme/ThemePalette';
import Carousel from 'react-native-snap-carousel';
import CarouselCard from '../Components/CarouselCard';
import AnimeCard from '../Components/AnimeCard';
import TopBar from '../Components/TopBar';
import ActivityLoader from '../Components/ActivityLoader'
import { useTheme } from '@react-navigation/native';


const dimension=Dimensions.get("window")

const Home=({navigation})=>{
    
    const { colors } = useTheme();

    const [animeData,setAnimeData]=useState()
    const [newSeason,setNewSeason]=useState()
    const [movies,setMovies]=useState()
    const [popular,setPopular]=useState()

    const [isLoading,setIsLoading]=useState(0)

    const carouselRef=useRef()

    useEffect(()=>{
        api.getAnimeDataGet("recentRelease").then(res=>{
            setAnimeData(res)
            setIsLoading(prev=>prev+1)
        })
        api.getAnimeDataGet("newSeason").then(res=>{
            setNewSeason(res)
            setIsLoading(prev=>prev+1)
        })
        api.getAnimeDataGet("movies").then(res=>{
            setMovies(res)
            setIsLoading(prev=>prev+1)
        })
        api.getAnimeDataGet("popular").then(res=>{
            setPopular(res)
            setIsLoading(prev=>prev+1)
        })
    },[])

    return (
        <SafeAreaView style={[styles.container,{backgroundColor:colors.background}]}>
            <TopBar/>
            <ScrollView>
            {animeData&&<Text onPress={()=>navigation.navigate("SeeAll",{data:animeData,episodeLink:true})} style={[styles.seeAll,{color:colors["titleColor"]["orange"]}]}>See all</Text>}
                <Carousel
                    loop={true}
                    ref={carouselRef}
                    layout={'stack'}
                    autoplay={true}
                    data={animeData}
                    renderItem={({item,index})=>{return <CarouselCard title={item.name} banner={item.banner} detail={item.releaseDate} animeLink={item.animeEpLink} navigation={navigation}/>}}
                    sliderWidth={dimension.width}
                    itemWidth={dimension.width}
                />                
                <View>
                    {popular&&<View style={styles.sectionTitleContainer}>
                        <Text style={[styles.sectionTitle,{color:colors["animeCard"]["title"]}]}>Popular</Text>
                        <Text onPress={()=>navigation.navigate("SeeAll",{data:popular,title:"Popular",episodeLink:false})} style={[styles.seeAll,{marginTop:2,color:colors["titleColor"]["orange"]}]}>See all</Text>
                    </View>}
                    <FlatList
                        data={popular}
                        renderItem={({item})=><AnimeCard title={item.name} banner={item.banner} detail={item.releaseDate} animeLink={item.animeEpLink} navigation={navigation}/>
                    }
                    horizontal={true}
                    />
                </View>
                <View>
                    {newSeason&&<View style={styles.sectionTitleContainer}>
                        <Text style={[styles.sectionTitle,{color:colors["animeCard"]["title"], }]}>New Season</Text>
                        <Text onPress={()=>navigation.navigate("SeeAll",{data:newSeason,title:"New Season",episodeLink:false})} style={[styles.seeAll,{marginTop:2,color:colors["titleColor"]["orange"]}]}>See all</Text>
                    </View>}
                    <FlatList
                        data={newSeason}
                        renderItem={({item})=><AnimeCard title={item.name} banner={item.banner} detail={item.releaseDate} animeLink={item.animeEpLink} navigation={navigation}/>
                    }
                    horizontal={true}
                    />
                </View>
                <View>
                    {movies&&<View style={styles.sectionTitleContainer}>
                        <Text style={[styles.sectionTitle,{color:colors["animeCard"]["title"]}]}>Movies</Text>
                        <Text onPress={()=>navigation.navigate("SeeAll",{data:movies,title:"Movies",episodeLink:false})} style={[styles.seeAll,{marginTop:2,color:colors["titleColor"]["orange"]}]}>See all</Text>
                    </View>}
                    <FlatList
                        data={movies}
                        renderItem={({item})=><AnimeCard title={item.name} banner={item.banner} detail={item.releaseDate} animeLink={item.animeEpLink} navigation={navigation}/>
                    }
                    horizontal={true}
                    />
                </View>
                {isLoading<4&&<ActivityLoader/>}
                <View style={{height:70}}></View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        height:dimension.height,
    },
    seeAll:{
        textAlign: 'right', 
        alignSelf: 'stretch',
        paddingRight:40,
        marginBottom:10,
    },
    sectionTitle:{
        fontSize:18,
        fontWeight:"800",
    },
    sectionTitleContainer:{
        display:"flex",
        flexDirection:"row",
        marginBottom:0,
        paddingLeft:20,
        marginTop:15,
        justifyContent:'space-between'
    }
})

export default Home