import React, { useEffect, useState } from 'react'
import axios from 'axios';
import VedioCard from '../Components/VedioCard'
import {YOUTUBE_VIDEO_API} from '../Constants/YouTube';
import { Link } from 'react-router-dom';
function VedioContainer() {
 
  const [video,setVideo] = useState([])
  const fetchingYoutubeVedio= async()=>{
     try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      setVideo(res?.data?.items);
     } catch (error) {
        console.log(error);
     }
     
  }
  useEffect(()=>{
    fetchingYoutubeVedio();
  },[]);

  return (
    <div className='grid grid-cols-4 gap-4'>

      {
        video.map((item)=>{
          return(
            <Link  to={`/watch?v=${item.id}`} key={item.id} >
              <VedioCard item={item} />
            </Link>
          
          )
        })
      }
    </div>
  )
}

export default VedioContainer
