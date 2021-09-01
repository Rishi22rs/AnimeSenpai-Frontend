import React from "react"
import {Text,View,Dimensions,StyleSheet} from 'react-native'
import ThemePalette from '../Theme/ThemePalette';
import Icon from 'react-native-vector-icons/FontAwesome';

const dimension=Dimensions.get("window")

const TopBar=({title="Anime Senpai"})=>{

    let title1=title.split(' ')[0]
    let title2=title.split(' ')[1]

    return(
        <View style={styles.myStatusbar}>
            <View style={styles.titleContainer}>
                <Text style={[styles.titleColorOrange,styles.title]}>{title1}</Text><Text style={[styles.titleColorGrey,styles.title]}>{title2}</Text>
            </View>
            <Icon name="bell-o" size={20} color={ThemePalette["light"]["titleColor"]["grey"]}/>
        </View>
    )
}

const styles=StyleSheet.create({
    myStatusbar:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        width:dimension.width,
        padding:20,
        paddingRight:25,
        backgroundColor:ThemePalette["light"].background,
    },
    title:{
        fontSize:18,
        fontWeight:"600"
    },
    titleContainer:{
        display:"flex",
        flexDirection:'row'
    },
    titleColorOrange:{
        color:ThemePalette["light"]["titleColor"]["orange"]
    },
    titleColorGrey:{
        color:ThemePalette["light"]["titleColor"]["grey"]
    },
})

export default TopBar
