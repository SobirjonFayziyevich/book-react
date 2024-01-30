import React from "react";


export function Advertisements() {
    return (
        <div className="ads_restaurant_frame">
            <video
                className={"ads_video"}
                autoPlay={true}
                loop
                muted
                playsInline
                data-video-media=""
            >
              <source
                  data-src="https://www.pexels.com/video/woman-bookshop-faceless-stack-4864929/"
                  type="video/mp4"
                  src="https://www.pexels.com/video/woman-bookshop-faceless-stack-4864929/"
              />
            </video>
        </div>
    );
}