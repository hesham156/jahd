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
    const [videos,setVideos] = useState([])
    var [vId,setvId] = useState(0)

    const fetchData = async () => { await axios
      .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${params.courseid}&maxResults=50&pageToken=${nexpage?nexpage:''}&key=AIzaSyAA5l1Q4Nqmki9oT9srTJbL-ZxFC0jYgy4`)
      .then((res)=>{
          setnext(res.data.nextPageToken?res.data.nextPageToken:res.data.prevPageToken)
          setVideoPlayer(res.data.items[0].snippet.resourceId.videoId);
          res.data.items.length!==0&&videos.length!==res.data.pageInfo.totalResults?setVideos(videos.concat(res.data.items)):setVideos(videos)
          // setVideos(res.data.items.length!==0&&videos.length!==res.data.pageInfo.totalResults?videos.concat(res.data.items):res.data.items,videos)
          console.log(videos.length,res.data.pageInfo.totalResults)
      })
      .catch((err)=>{
          return err;
      })}
useEffect(()=>{
  
fetchData()

},[])
console.log(vId)
// const next= (id)=>{
//   setvId(id+1);
//   setVideoPlayer(videos[id].snippet.resourceId.videoId)
// }
// const prev= (id)=>{
//   setvId(id-1);
//   setVideoPlayer(videos[id].snippet.resourceId.videoId)

// }
    // const more = ()=>{
    //     axios
    //     .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${params.courseid}&maxResults=188&pageToken=${nexpage}&key=AIzaSyAA5l1Q4Nqmki9oT9srTJbL-ZxFC0jYgy4`)
    //     .then((res)=>{
    //         setnext(res.data.nextPageToken?res.data.nextPageToken:res.data.prevPageToken)
    //     })
    //     .catch((err)=>{
    //         return err;
    //     })
    // }
    const select = (id)=>{

    }
  return (
    <div className=''>
      <div className='container '>
        <div className='d-flex justify-content-center flex-row-reverse w-100'>
    <div className='videoPlayer w-75 m-2'>
      <iframe className="w-100 videoplayer fslightboxs fslightbox-opacity-1" src={"https://www.youtube.com/embed/"+videoPlayer} frameBorder="0" allowFullScreen="" ></iframe>
     <button >Next</button>
     <button >prev</button>

    </div>
    <div className='platList w-25 m-2'>
      {videos?.map((vid,index)=>{
           
          return(
            <div onClick={()=>{setVideoPlayer(vid.snippet.resourceId.videoId)}} className={(vid.snippet.resourceId.videoId===videoPlayer?"active":'' )+ ' vidCard'} key={vid?.id}>
               <div>
              <p>{vid.snippet.title}</p>

              </div>
               <div>
               <img src={vid.snippet.thumbnails.default.url}/>
               </div>
            </div >
          )
        
      })}
    {/* <YouTubePlaylist
        apiKey="AIzaSyAA5l1Q4Nqmki9oT9srTJbL-ZxFC0jYgy4"
        playlistId={params?.courseid}
        uniqueName="THIS_PLAYLIST_INSTANCE_NAME"
        
      /> */}
            <button onClick={()=>{fetchData()}}>more</button>

    </div>
    </div>
    </div>
    </div>
  )
}

export default Course



















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