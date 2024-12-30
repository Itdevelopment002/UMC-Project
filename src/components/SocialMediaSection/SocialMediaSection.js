import "./SocialMediaSection.css";
import React, { useEffect } from "react";

const SocialMedia = () => {
  useEffect(() => {
    const adjustFacebookWidth = () => {
      const fbPage = document.querySelector(".fb-page");
      if (fbPage) {
        fbPage.setAttribute("data-width", fbPage.parentElement.offsetWidth);
        if (window.FB) {
          window.FB.XFBML.parse();
        }
      }
    };

    // Initial adjustment
    adjustFacebookWidth();

    // Adjust on window resize
    window.addEventListener("resize", adjustFacebookWidth);
    return () => window.removeEventListener("resize", adjustFacebookWidth);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-around">
        <div className="col-md-4 col-sm-6 media-plugin">
          <div className="card-header fb text-white text-center">
            <i className="fab fa-facebook-f me-2"></i>Facebook
          </div>
          <div>
            <div
              className="fb-page"
              data-href="https://www.facebook.com/myumc/"
              data-tabs="timeline"
              data-width=""
              data-height="400"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            ></div>
          </div>
        </div>

        {/* Twitter Section */}
        <div className="col-md-4 col-sm-6 media-plugin">
          <div className="card-header text-white tw text-center">
            <i className="fab fa-twitter me-2"></i>Twitter
          </div>
          <div>
            <div className="twitter-timeline twitter-timeline-rendered">
              <iframe
                id="twitter-widget-0"
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allowFullScreen="true"
                title="Twitter Timeline"
                src="https://syndication.twitter.com/srv/timeline-profile/screen-name/my_umcofficial"
                style={{
                  width: "100%",
                  height: "400px",
                  display: "block",
                  flexGrow: 1,
                }}
              ></iframe>
            </div>
          </div>
        </div>

        {/* YouTube Section */}
        <div className="col-md-4 col-sm-6 media-plugin">
          <div className="card-header text-white you text-center">
            <i className="fab fa-youtube me-2"></i>YouTube
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/playlist?list=UUPZN5zAMeNHt3hTfdCO4n8A"
              width="100%"
              height="400"
              title="YouTube Playlist"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
