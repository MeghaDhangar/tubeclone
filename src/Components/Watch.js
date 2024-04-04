import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';
import { API_KEY } from '../Constants/YouTube'
import Avatar from 'react-avatar';
import avatar from '../images/profile.jpg'
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { PiDotsThreeVertical } from "react-icons/pi";
import { LuSendHorizonal } from "react-icons/lu";
import LiveChat from '../Components/LiveChat'
import { useDispatch } from 'react-redux';
import { setMessage } from '../Utils/chatSlice';
function Watch() {
    const [input, setInput] = useState("")
    const [singleVedio, setSingleVedio] = useState("");
    const [searchParams] = useSearchParams();
    const vedioId = searchParams.get('v');
    const dispatch = useDispatch();

    const getSingleVedio = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vedioId}&key=${API_KEY}`);
            console.log(res)
            setSingleVedio(res?.data?.items[0])
        } catch (error) {
            console.log(error)

        }
    }

    const sendMessage = () => {
       dispatch(setMessage({ name:"Megha Dhangar", message:input
       }));
       setInput("")
    }

    useEffect(() => {
        getSingleVedio();
    }, []);

    console.log(singleVedio);
    return (
        <div className=' flex ml-5 w-[100%] mt-2'>
            <div className='flex w-[90%]'>
                <div>
                    <iframe width="750"
                        height="400"
                        src={`https://www.youtube.com/embed/${vedioId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                    <h1 className='font-bold'>{singleVedio?.snippet?.title}</h1>

                    <div className='flex justify-between items-center'>
                        <div className='flex items-center mt-2 '>
                            <div className='flex items-center'>
                                <Avatar src={avatar} size="35" round={true} />
                                <h1 className='font-bold ml-2'>{singleVedio?.snippet?.channelTitle}</h1>
                            </div>
                            <button className='px-4 py-1 ml-5 font-medium bg-black text-white rounded-full'>Subscribed</button>
                        </div>

                        <div className='flex mt-2 items-center w-[49%] justify-between'>
                            <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-1.5 rounded-full'>
                                <AiOutlineLike className='mr-5' size={22} />
                                <AiOutlineDislike size={22} />
                            </div>

                            <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-1.5 rounded-full'>
                                <PiShareFatLight size={22} />
                                <p>Share</p>
                            </div>

                            <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-1.5 rounded-full'>
                                <GoDownload size={22} />
                                <p>Download</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='w-[100%]  ml-5 border border-gray-100 rounded-mg h-fit shadow-md px-4 '>
                    <div className='flex justify-between items-center'>
                        <h1>Top Chat</h1>
                        <PiDotsThreeVertical />
                    </div>
                    <div className='overflow-y-auto h-[28rem] flex flex-col-reverse'>
                        <LiveChat />
                    </div>
                    <div className=' flex items-center justify-between border -t p-2'>
                        <div className='flex items-center w-[90%]'>
                            <div>
                                <Avatar src={avatar} size="35" round={true} />
                            </div>
                            <input value={input} onChange={(e) => setInput(e.target.value)} className='border-b border-gray-300 outline-none ml-2' type='text' placeholder='Send Message' />
                            <div className='bg-gray-200 cursor-pointer p-2 rounded-full' >
                                <LuSendHorizonal onClick={sendMessage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watch
