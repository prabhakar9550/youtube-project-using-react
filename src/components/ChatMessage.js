import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
         <img 
            className='h-10'
            alt="user"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMCnKVdb6r65QZHqRYFJ8Bo_LK2_RmQH1quU0kEoKJEqxkHgJP53wS6tFUqAZD-0CY2GU&usqp=CAU"
            />
            <span className='font-bold px-2'>{name}</span>
            <span >{message}</span>
    </div>
  )
}

export default ChatMessage