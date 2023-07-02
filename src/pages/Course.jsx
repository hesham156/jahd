import React, { useState } from 'react'
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Course = () => {
    const params = useParams('courseid')
    const [nexpage,setnext] = useState('')
    // axios
    // .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${params.courseid}&maxResults=188&resultsPerPage=100&key=AIzaSyDJY3B-IFsVTtgeUC1MZVqCnsvbATqfSPc`)
    // .then((res)=>{
    //     console.log(res.data)
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })
    const more = ()=>{
        axios
        .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${params.courseid}&maxResults=188&pageToken=${nexpage}&key=AIzaSyDJY3B-IFsVTtgeUC1MZVqCnsvbATqfSPc`)
        .then((res)=>{
            console.log(res.data)
            setnext(res.data.nextPageToken?res.data.nextPageToken:res.data.prevPageToken)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
         <YouTubePlaylist
        apiKey="AIzaSyDJY3B-IFsVTtgeUC1MZVqCnsvbATqfSPc"
        playlistId={params?.courseid}
        uniqueName="THIS_PLAYLIST_INSTANCE_NAME"
        
      />
      <button onClick={()=>{more()}}>more</button>
    </div>
  )
}

export default Course