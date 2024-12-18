import React from "react";

function OurApp2() {
  return (
    <section className="blog-box odd-blog">
      <div className="blog-img-content">
        <div className="title-head text-left">
          <span className="text-black">Mindbodyonline Franchise </span>
          <span>Management Software Development</span>
          <h2 className="text-black">Mind Body Online</h2>
          <p className="text-black">
            Connecting the world to wellness- Mindbodyonline
          </p>
          <div className="btn-group-box">
            <button data-dialog="modal-2" className="btn common-btn lazyloaded">
              discover more
              <svg
                id="arrow-img"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <g id="Group_1221" data-name="Group 1221">
                  <path
                    id="Path_36"
                    data-name="Path 36"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <path
                    id="Path_37"
                    data-name="Path 37"
                    d="M5,12H19"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    id="Path_38"
                    data-name="Path 38"
                    d="M15,16l4-4"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    id="Path_39"
                    data-name="Path 39"
                    d="M15,8l4,4"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="blog-img-box">
        <figure>
          <img
            className="lazyload"
            alt="blog"
            data-src="https://devtechnosys.com/images-2023/home/blog-img-2.webp"
          />
        </figure>
        <div className="blog-mob-box green-shadow">
          <figure>
            <img
              className="lazyload"
              alt="mob"
              data-src="https://devtechnosys.com/images-2023/home/mob-2.webp"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default OurApp2;
