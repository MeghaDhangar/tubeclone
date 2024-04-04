import React, { useEffect, useState } from 'react'
// import thumb from '../images/thumbnail.jpg'
import avatar from '../images/profile.jpg'
import Avatar from 'react-avatar';
import axios from 'axios';
import { API_KEY } from '../Constants/YouTube';
function VedioCard({item}) {
    const [ytIcon,setYtIcon]=useState("")
    const getYoutubeChannelName= async()=>{
    try {
         const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%20%2C%20contentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
       
         setYtIcon(res.data.items[0].snippet.thumbnails.high.url)
    } catch (error) {
        console.log(error)
    }
    }

    useEffect(()=>{
        getYoutubeChannelName()
    },[])
    return (
        <div className='w-94 cursor-pointer my-2'>
            <img className='rounded-xl w-full' src={item.snippet.thumbnails.medium.url} alt='youtubethumbnail' />
            <div>
                <div className='flex mt-2' >
                    <Avatar src={ytIcon} size="35" round={true}/>

                    <div className='ml=6'>
                        <h2 className='font-bold ml-3'>{item.snippet.title}</h2>
                        <p className='text-sm  ml-3 text-gray-500'>{item.snippet.channelTitle}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default VedioCard
