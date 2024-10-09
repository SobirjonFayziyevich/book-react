import React from "react";


export function Advertisements() {
    return (
        <div className="ads_bookvideo_frame">
            <video
                className={"ads_video"}
                autoPlay={true}
                loop
                muted
                playsInline
                data-video-media=""
            >
              <source
                  data-src="https://videos.pexels.com/video-files/1580500/1580500-hd_1280_720_30fps.mp4"
                  type="video/mp4"
                  src="https://videos.pexels.com/video-files/1580500/1580500-hd_1280_720_30fps.mp4"
              />
            </video>
        </div>
    );
}