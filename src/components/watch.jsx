import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router'
const Watch = () => { 
    let params  = useParams()
    // useEffect(() => {
    //    axios({
    //        method:"get",
    //        url:`http://127.0.0.1:5000/api/playvideo?filename=${params.id}`
    //    }).then((data)=>{
    //        console.log(data)
    //        setVideourl(data.data)
    //    })
    // }, [params]) 
    return (
        <>
            <div className="video-container">
            <video autoPlay poster = "/images/play-button.png" controls style={{height:'550px'}}>
                <source src={`http://127.0.0.1:5000/api/playvideo?filename=${params.id}`}/>
                {/* <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"/> */}
                
            </video>
            <p className="ml-2">{params.id}</p>
            </div>
        </>
    )
}

export default Watch
