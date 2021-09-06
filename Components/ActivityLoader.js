import { useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator,Text } from 'react-native'
import {getData, selectedTheme, ThemePalette } from '../Theme/ThemePalette'

const ActivityLoader=()=>{
    const { colors } = useTheme();
    return(
        <><ActivityIndicator size="large" color={colors["titleColor"]["orange"]}/>
        <Text style={{textAlign:'center',color:colors["titleColor"]["orange"]}}>Loading... dattebayo!!!</Text></>
    )
}

export default ActivityLoader