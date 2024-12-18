import React from "react";

function OurApp4() {
  return (
    <section className="blog-box odd-blog">
      <div className="blog-img-content">
        <div className="title-head text-left">
          <span className="text-black">ViralStyle </span>
          <span> Multi-Vendor Marketplace with Apparel Design Tool</span>
          <h2 className="text-black">Viral Style</h2>
          <p className="text-black">
            Viralstyle is a Multivendor web and mobile marketplace based on the
            Laravel framework. It allows users to sell, purchase, and design
            products. The web and mobile apps let users upload, develop, and
            sell the product over the marketplace. Also, the users get a
            commission per sale. The system is designed with an adaptive PayPal
            processing system for real-time payments. Although the system is
            split between seller and admin, manufacturing occurs at the admin
            end.
          </p>
          <div className="btn-group-box">    
            <button data-dialog="modal-4" className="btn common-btn lazyloaded">
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
            data-src="https://devtechnosys.com/images-2023/home/blog-img-4.webp"
          />
        </figure>
        <div className="blog-mob-box green-shadow">
          <figure>
            <img
              className="lazyload"
              alt="mob"
              data-src="https://devtechnosys.com/images-2023/home/mob-4.webp"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default OurApp4;
