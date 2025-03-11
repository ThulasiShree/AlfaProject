import React from 'react'
import AwardsVideo from "../../public/videos/AwardsVideo.mp4"

const Awards = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">

            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={AwardsVideo}
                autoPlay
                loop
                muted
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-40"></div>


            <div className='relative h-full flex flex-col items-center justify-center gap-30'>
                <h2 className='text-white text-5xl text-center'>Awards & Recognitions</h2>
                <div className="relative grid grid-cols-5 grid-rows-2 gap-10 place-items-center">
                    <div className="p-4"><img src="../../public/images/award1.svg" alt="" /></div>
                    <div className="p-4"><img src="../../public/images/award2.svg" alt="" /></div>
                    <div className="p-4"><img src="../../public/images/award3.svg" alt="" /></div>
                    <div className="p-4"><img src="../../public/images/award4.svg" alt="" /></div>
                    <div className="p-4"><img src="../../public/images/award5.svg" alt="" /></div>
                    <div className="p-4"><img src="../../public/images/award6.svg" alt="" /></div>
                    <div className="p-4"><img src="../../public/images/award7.svg" alt="" /></div>
                    <div className="p-4"><img src="../../public/images/award8.svg" alt="" /></div>
                    <div className="p-4"><img src="../../public/images/award9.svg" alt="" /></div>
                    <div className="p-4"><img src="../../public/images/award10.svg" alt="" /></div>
                </div>
            </div>

        </div>
    )
}

export default Awards