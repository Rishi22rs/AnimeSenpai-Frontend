import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import * as api from '../APIs/apiCalls'
import { WebView } from 'react-native-webview';
import ActivityLoader from '../Components/ActivityLoader';

const AnimePlayer=({route})=>{

    const [link,setLink]=useState()
    useEffect(()=>{
        api.getAnimeDataPost({episodeLink:route.params.episodeLink},"webPlayEpisode").then(res=>{
            setLink(res)
        })
    },[])

    return (
        <>
            {link?<WebView source={{ uri: link.episodeUrl}} />:
            <ActivityLoader/>}
        </>
    )
}

export default AnimePlayer