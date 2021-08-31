import React from 'react'
import { ActivityIndicator,Text } from 'react-native'
import ThemePalette from '../Theme/ThemePalette'

const ActivityLoader=()=>{
    return(
        <><ActivityIndicator size="large" color={ThemePalette["light"]["titleColor"]["orange"]}/>
        <Text style={{textAlign:'center',color:ThemePalette["light"]["titleColor"]["orange"]}}>Loading... dattebayo!!!</Text></>
    )
}

export default ActivityLoader