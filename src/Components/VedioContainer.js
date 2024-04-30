import React, { useEffect, useState } from 'react'
import axios from 'axios';
import VedioCard from '../Components/VedioCard'
import { API_KEY, YOUTUBE_VIDEO_API } from '../Constants/YouTube';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setHomeVideo } from '../Utils/appSlice';

function VedioContainer() {
  const { video, category } = useSelector((storee) => storee.app);
  const dispatch = useDispatch();


  const fetchingYoutubeVedio = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  }

  const fetchVideoBycategory = async (category) => {
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`)
      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error)
    }

  }
  

  useEffect(() => {
    if(category==="All"){
      fetchingYoutubeVedio();
    }else{
      fetchVideoBycategory();
    }
  }, [category]);

  return (
    <div className='grid grid-cols-4 gap-4'>

      {
        video.map((item) => {
          return (
            <Link to={`/watch?v=${typeof item.id=== 'object'? item.id.videoId : item.id}`} key={typeof item.id=== 'object'? item.id.videoId : item.id} >
              <VedioCard item={item} />
            </Link>

          )
        })
      }
    </div>
  )
}

export default VedioContainer
