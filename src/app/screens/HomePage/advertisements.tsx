import React from "react";


export function Advertisements() {
    return (
        <div className="ads_book_frame">
            <video
                className={"ads_video"}
                autoPlay={true}
                loop
                muted
                playsInline
                data-video-media=""
            >
              <source
                  data-src="https://www.vecteezy.com/video/21964297-man-reading-a-book-in-his-peaceful-home-enjoying-his-free-time-the-carefree-man-resting-on-the-sofa-at-home-reads-a-book-and-does-not-neglect-to-read-in-his-spare-time"
                  type="video/mp4"
                  src="https://www.vecteezy.com/video/21964297-man-reading-a-book-in-his-peaceful-home-enjoying-his-free-time-the-carefree-man-resting-on-the-sofa-at-home-reads-a-book-and-does-not-neglect-to-read-in-his-spare-time"
              />
            </video>
        </div>
    );
}