import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="video mt-5 mb-5">
        <iframe width="560" height="315" src={videoSrcURL} title={videoTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
)

export default Video