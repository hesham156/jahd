import React from 'react'
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";
import { useParams } from 'react-router-dom';

const Course = () => {
    const params = useParams('courseid')
  return (
    <div>
         <YouTubePlaylist
        apiKey="AIzaSyDJY3B-IFsVTtgeUC1MZVqCnsvbATqfSPc"
        playlistId={params?.courseid}
        uniqueName="THIS_PLAYLIST_INSTANCE_NAME"
        
      />
    </div>
  )
}

export default Course