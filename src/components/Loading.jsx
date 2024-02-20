import React from 'react'

const Loading = () => {
    return (
        <div className="absolute-div absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className='flex space-x-2 justify-center items-center bg-transparent dark:invert'>
                <span className='sr-only'>Loading...</span>
                <div className='h-4 w-4 bg-gray-800 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                <div className='h-4 w-4 bg-gray-800 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                <div className='h-4 w-4 bg-gray-800 rounded-full animate-bounce'></div>
            </div>
        </div>
    )
}

export default Loading