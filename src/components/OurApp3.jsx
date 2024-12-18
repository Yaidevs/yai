import React from "react";

function OurApp3() {
  return (
    <section className="blog-box">
      <div className="blog-img-box">
        <figure>
          <img
            className="lazyload"
            alt="blog"
            data-src="https://devtechnosys.com/images-2023/home/blog-img-3.webp"
          />
        </figure>
        <div className="blog-mob-box yallow-shadow">
          <figure>
            <img
              className="lazyload"
              alt="mob"
              data-src="https://devtechnosys.com/images-2023/home/mob-3.webp"
            />
          </figure>
        </div>
      </div>
      <div className="blog-img-content">
        <div 
        className="title-head text-left">
          <span className="text-black">Safe Car Wash Car</span>
          <span>Wash Application</span>
          <h2 className="text-black">Safe Car Wash</h2>
          <p className="text-black">
            In hand car wash system, system mismanagement and bondage is taking
            place. But with only anecdotal evidence and a partial understanding
            of the problem, law enforcement needs the public’s support to map
            this issue.
          </p>
          <div className="btn-group-box">
            <button data-dialog="modal-3" className="btn common-btn lazyloaded">
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
    </section>
  );
}

export default OurApp3;
