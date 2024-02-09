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
                  data-src="https://player.vimeo.com/external/438117132.sd.mp4?s=30748f70df28ca47a8a37dd9e4709cf5bbeae33f&profile_id=164&oauth2_token_id=57447761"
                  type="video/mp4"
                  src="https://player.vimeo.com/external/438117132.sd.mp4?s=30748f70df28ca47a8a37dd9e4709cf5bbeae33f&profile_id=164&oauth2_token_id=57447761"
              />
            </video>
        </div>
    );
}