import React, { useEffect, useState,useRef } from 'react'
import { View,Text,StyleSheet, ScrollView, SafeAreaView, Dimensions,ActivityIndicator, FlatList } from 'react-native'
import * as api from '../APIs/apiCalls'
import ThemePalette from '../Theme/ThemePalette';
import Carousel from 'react-native-snap-carousel';
import CarouselCard from '../Components/CarouselCard';
import AnimeCard from '../Components/AnimeCard';
import TopBar from '../Components/TopBar';
import ActivityLoader from '../Components/ActivityLoader'


const dimension=Dimensions.get("window")

const Home=({navigation})=>{
    
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
        <SafeAreaView style={styles.container}>
            <TopBar/>
            <ScrollView>
            {animeData&&<Text onPress={()=>navigation.navigate("SeeAll",{data:animeData})} style={styles.seeAll}>See all</Text>}
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
                        <Text style={styles.sectionTitle}>Popular</Text>
                        <Text onPress={()=>navigation.navigate("SeeAll",{data:popular,title:"Popular"})} style={[styles.seeAll,{marginTop:2}]}>See all</Text>
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
                        <Text style={styles.sectionTitle}>New Season</Text>
                        <Text onPress={()=>navigation.navigate("SeeAll",{data:newSeason,title:"New Season"})} style={[styles.seeAll,{marginTop:2}]}>See all</Text>
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
                        <Text style={styles.sectionTitle}>Movies</Text>
                        <Text onPress={()=>navigation.navigate("SeeAll",{data:movies,title:"Movies"})} style={[styles.seeAll,{marginTop:2}]}>See all</Text>
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
        backgroundColor:ThemePalette["light"]["background"],
        height:dimension.height,
        height:dimension.height
    },
    titleColorOrange:{
        color:ThemePalette["light"]["titleColor"]["orange"]
    },
    titleColorGrey:{
        color:ThemePalette["light"]["titleColor"]["grey"]
    },
    carouselTitle:{
        color:ThemePalette["light"]["carouselCardText"]["title"]
    },
    seeAll:{
        textAlign: 'right', 
        alignSelf: 'stretch',
        paddingRight:40,
        marginBottom:10,
        color:ThemePalette["light"]["titleColor"]["orange"]
    },
    sectionTitle:{
        color:ThemePalette["light"]["animeCard"]["title"], 
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