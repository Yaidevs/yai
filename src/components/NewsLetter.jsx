import React from "react";

function NewsLetter() {
  return (
    <div className="news-letter-box lazyload">
      <div className="container lazyload">
        <div className="news-letter-box-in text-center lazyload">
          <article className="lazyload">
            <div className="title-head text-center">
              <small className="text-white">Newsletter</small>
              <h2 className="text-white">Subscribe Our Newsletter</h2>
              <p className="text-white">
                Be the first one to stay updated on the latest industry trends,
                news, new product features, and events. Subscribe to our
                Newsletter and receive updates straight to your inbox.
              </p>
            </div>
            <form
              method="post"
              action
              id="news-form"
              encType="multipart/form-data"
              className="lazyload"
            >
              <div className="news-letter-input d-flex lazyload">
                <div className="form-group lazyload">
                  <input
                    type="text"
                    name="email-news"
                    id="email-news"
                    className="form-control lazyload"
                    placeholder="Enter your email"
                  />
                  <div
                    className="display-error lazyload"
                    id="emailNewsError"
                    style={{ display: "none", color: "red" }}
                  />
                  <div
                    className="display-success lazyload"
                    style={{ display: "none", color: "green" }}
                  >
                    <p className="lazyload">Thanks for subscribing us!</p>
                  </div>
                </div>
                <button id="newsSubmit" type="submit" className="lazyload btn">
                  Subscribe now
                </button>
              </div>
            </form>
          </article>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
