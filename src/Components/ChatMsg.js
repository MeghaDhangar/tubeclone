import React from 'react'
import Avatar from 'react-avatar'
import avatar from '../images/profile.jpg'

function ChatMsg({item}) {
  return (
    <div className='flex items-center'>
     <div>
     <Avatar src={avatar} size="30" round={true} />
     </div>
     <div className='flex items-center'>
        <h1 className='ml-2 font-bold text-sm'>{item.name}</h1>
        <p className='ml-2 py-2 text-sm'>{item.message}</p>
     </div>
    </div>
  )
}

export default ChatMsg
