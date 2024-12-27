import React from "react";
import "./SocialMediaSection.css";

const SocialMediaSection = () => {
  return (
    <div className="container" id="social-media-section">
      <h2 className="my-2 media-title">Connect with us</h2>
      <div className="row g-3">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-90">
            <div className="card-header fb text-white  text-center">
            <i className="fab fa-facebook-f me-2"></i>Facebook
            </div>
            <div className="card-body p-1 rounded">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmyumc%2Fposts%2Fpfbid02DycXSV9ZHzoEUcwWKhW3sN7LkajEov3n9fDBYihsHaQAQxVYqbihbHzsr5yxT5sDl&show_text=true&width=500"
                width="100%"
                height="400"
                className="facebook-section"
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-90">
            <div className="card-header text-white tw text-center">
            <i className="fab fa-twitter me-2"></i>Twitter
            </div>
            <div className="card-body p-1 mx-auto">
              <a
                className="twitter-timeline"
                href="https://twitter.com/my_umcofficial?ref_src=twsrc%5Etfw"
                data-width="340"
                data-height="400"
              >
                Tweets by @my_umcofficial
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-90">
            <div className="card-header text-white you text-center ">
            <i className="fab fa-youtube me-2"></i>YouTube
            </div>
            <div className="card-body p-1">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/tC_XQ-9PArU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
