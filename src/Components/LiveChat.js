import React, { useEffect } from 'react'
import ChatMsg from '../Components/ChatMsg'
import { useDispatch, useSelector } from 'react-redux'
import { setMessage } from '../Utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../Utils/helper';
function LiveChat() {
    const message = useSelector((storee) => storee.chat.message)
    const dispatch = useDispatch();


    // useEffect(()=>{
    // const timer= setInterval(()=>{
    //     dispatch(setMessage({name:generateRandomName(), message:generateRandomMessage(16)}))
    // },1000)
    // return(()=>{
    //     clearInterval(timer);
    // })
    // },[]) 
    return (
        <div>
            <div className='px-4 py-1'>
                {
                    message.map((item,idx) => {
                        return (
                            <ChatMsg key={idx} item={item} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default LiveChat
