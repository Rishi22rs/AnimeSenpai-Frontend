import React, { useState } from "react"
import {Text,View,Dimensions,StyleSheet, TouchableOpacity} from 'react-native'
import {getData, selectedTheme, ThemePalette} from '../Theme/ThemePalette';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import { EventRegister } from 'react-native-event-listeners'
import { useTheme } from "@react-navigation/native";

const dimension=Dimensions.get("window")

const TopBar=({title="Anime Senpai"})=>{

    const [isDark,setIsDark]=useState(false)
    const {colors}=useTheme()

    let title1=title.split(' ')[0]
    let title2=title.split(' ')[1]

    return(
        <View style={[styles.myStatusbar,{backgroundColor:colors.background}]}>
            <View style={styles.titleContainer}>{title==="Slice of Life"?<><Text style={[styles.titleColorOrange,styles.title]}>Slice</Text><Text style={[styles.titleColorGrey,styles.title]}>OfLife</Text></>:
                <><Text style={[{color:colors["titleColor"]["orange"]},styles.title]}>{title1}</Text><Text style={[{color:colors["titleColor"]["grey"]},styles.title]}>{title2}</Text></>}
            </View>
            <TouchableOpacity onPress={async()=>{
                setIsDark(val=>!val)
                EventRegister.emit('changeThemeEvent', isDark)
            }}>
            <Icon style={{borderColor:"white"}} name="theme-light-dark" size={25} color={colors["titleColor"]["orange"]}/>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    myStatusbar:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        width:dimension.width,
        padding:15,
        paddingRight:25,
    },
    title:{
        fontSize:18,
        fontWeight:"600"
    },
    titleContainer:{
        display:"flex",
        flexDirection:'row'
    },
})

export default TopBar
