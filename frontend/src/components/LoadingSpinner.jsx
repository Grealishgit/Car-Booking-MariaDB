import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="animate-spin rounded-full h-16 w-16 border-2 border-b-blue-500 border-l-blue-500 border-t-blue-500" />
            <p className='mt-4 text-blue-500 font-semibold text-lg'>Loading....</p>
        </div>
    )
}

export default LoadingSpinner