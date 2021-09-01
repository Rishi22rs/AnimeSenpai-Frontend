import React from 'react'
import {View,FlatList,StyleSheet, Dimensions,Text, SafeAreaView} from 'react-native'
import AnimeCard from '../Components/AnimeCard'
import ThemePalette from '../Theme/ThemePalette';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopBar from '../Components/TopBar';

const dimension=Dimensions.get("window")

const SeeAll=({route,navigation})=>{
    return(
        <SafeAreaView style={styles.container}>
            <TopBar title={route.params.title}/>
            <FlatList
                data={route.params.data}
                renderItem={({item})=><AnimeCard title={item.name} banner={item.banner} detail={item.releaseDate} navigation={navigation}/>
            }
            numColumns={2}
            />
            <View style={{height:10}}></View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:ThemePalette["light"]["background"],
        height:dimension.height,
        marginLeft:5
    },
})

export default SeeAll