import React from 'react'

const CustomLoader = ({ loading = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center gap-4 overflow-x-hidden w-full h-full max-w-screen-sm mx-auto">
            <div className="flex flex-col items-center gap-4">
              {/* <div className="relative h-fit"> */}
                <div className="flex items-center justify-center animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500">
                    <div className=" inset-0 animate-pulse rounded-ful h-4 w-4 bg-gradient-to-r from-[#f1bb65] to-[#f2884a] opacity-30"></div>
                </div>
              {/* </div> */}
              <p className="text-gray-900 text-lg font-medium">{loading}</p>
            </div>
          </div>
  )
}

export default CustomLoader
