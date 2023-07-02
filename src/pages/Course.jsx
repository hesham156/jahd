import React, { useEffect, useState } from 'react'
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../component/card/Card';
import getPlaylistData from '@codesweetly/react-youtube-playlist/src/getPlaylistData';

const Course = () => {
    const params = useParams('courseid')
    const [nexpage,setnext] = useState('')
    const [videoPlayer,setVideoPlayer] = useState('')
    const [videos,setVideos] = useState('')
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${params.courseid}&maxResults=188&key=AIzaSyDJY3B-IFsVTtgeUC1MZVqCnsvbATqfSPc`);
    //       console.log(response.data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);
    // getPlaylistData("AIzaSyDJY3B-IFsVTtgeUC1MZVqCnsvbATqfSPc",params?.courseid).then((n)=>{
    //   console.log(n)
    // })
  // console.log(id)
useEffect(()=>{
     axios
  .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${params.courseid}&maxResults=188&resultsPerPage=100&key=AIzaSyDJY3B-IFsVTtgeUC1MZVqCnsvbATqfSPc`)
  .then((res)=>{
      setnext(res.data.nextPageToken?res.data.nextPageToken:res.data.prevPageToken)
      setVideoPlayer(res.data.items[0].snippet.resourceId.videoId)
      setVideos(res.data.items)
      console.log(videos,videoPlayer);
  })
  .catch((err)=>{
      console.log(err);
  })
  console.log(videos,videoPlayer);

},[])
   
    // const more = ()=>{
    //     axios
    //     .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${params.courseid}&maxResults=188&pageToken=${nexpage}&key=AIzaSyDJY3B-IFsVTtgeUC1MZVqCnsvbATqfSPc`)
    //     .then((res)=>{
    //         console.log(res.data)
    //         setnext(res.data.nextPageToken?res.data.nextPageToken:res.data.prevPageToken)
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }
  return (
    <div className=''>
      <div className='container '>
        <div className='d-flex justify-content-center flex-row-reverse w-100'>
    {/* <div className='videoPlayer w-75 m-2'>
      <iframe className="w-100 videoplayer fslightboxs fslightbox-opacity-1" src={"https://www.youtube.com/embed/FYRypqj4Epw?v="+videoPlayer} frameBorder="0" allowFullScreen="" ></iframe>
     
    </div>
    <div className='platList w-25 m-2'> */}
      {/* {videos?.map((vid)=>{
          return(
            <>
               <Card course={vid} key={vid.id}/>
            </>
          )
      })} */}
    <YouTubePlaylist
        apiKey="AIzaSyAA5l1Q4Nqmki9oT9srTJbL-ZxFC0jYgy4"
        playlistId={params?.courseid}
        uniqueName="THIS_PLAYLIST_INSTANCE_NAME"
        
      />
            {/* <button onClick={()=>{more()}}>more</button>

    </div> */}
    </div>
    </div>
    </div>
  )
}

export default Course