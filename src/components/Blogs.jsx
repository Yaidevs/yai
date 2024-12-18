import React from "react";

function Blogs() {
  return (
    <section className="blog-home space-comm lazyload">
      <div className="container lazyload">
        <div className="title-head text-center">
          <small className="orange-tag">
            Our Sneak Peak into the Tech-World!
          </small>
          <h2>
            Get Exciting Updates About Latest Technologies, Development Tips,
            &amp; Trending Solutions Via Our Blogs
          </h2>
          <a
            href="https://devtechnosys.com/insights/"
            className="common-btn purple-btn lazyloaded btn-space"
          >
            View all blogs
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
          </a>
        </div>
        <div className="blog-box-in row lazyload">
          <div className="col-md-4 lazyload">
            <figure className="lazyload">
              <img
                className="lazyload"
                data-src="https://devtechnosys.com/images/2024/blog/blog1.webp"
                alt="How to Create Order Management Software in 2024"
                width={370}
                height={181}
              />
            </figure>
            <figcaption className="lazyload">
              <h4 className="lazyload">
                <a
                  className="lazyload"
                  href="https://devtechnosys.com/insights/create-order-management-software/"
                >
                  How to Create Order Management Software in 2024
                </a>
              </h4>
              <p className="lazyload">
                Are you wondering how to boost your business efficiency and
                customer satisfaction? Well creating robust order management
                software...
              </p>
              <a
                href="https://devtechnosys.com/insights/create-order-management-software/"
                className="btn-link-arrow lazyload"
              >
                View More
                <img
                  className="lazyload"
                  data-src="https://devtechnosys.com/images/2021-new/arrow-btn.svg"
                  alt="Dev Technosys"
                  width={30}
                  height={30}
                />
              </a>
            </figcaption>
          </div>
          <div className="col-md-4 lazyload">
            <figure className="lazyload">
              <img
                className="lazyload"
                data-src="https://devtechnosys.com/images/2024/blog/blog2.png"
                alt="How To Develop An App Like Wechat?"
                width={370}
                height={181}
              />
            </figure>
            <figcaption className="lazyload">
              <h4 className="lazyload">
                <a
                  href="https://devtechnosys.com/insights/develop-an-app-like-wechat/"
                  className="lazyload"
                >
                  How To Develop An App Like Wechat?
                </a>
              </h4>
              <p className="lazyload">
                Want to develop an app like WeChat, your all-in-one app? You
                have reached the right place. Just imagine a future in which
                your...
              </p>
              <a
                href="https://devtechnosys.com/insights/develop-an-app-like-wechat/"
                className="btn-link-arrow lazyload"
              >
                View More
                <img
                  className="lazyload"
                  data-src="https://devtechnosys.com/images/2021-new/arrow-btn.svg"
                  alt="Dev Technosys"
                  width={30}
                  height={30}
                />
              </a>
            </figcaption>
          </div>
          <div className="col-md-4 lazyload">
            <figure className="lazyload">
              <img
                className="lazyload"
                data-src="https://devtechnosys.com/images/2024/blog/blog3.png"
                alt="Top Soap2Day Alternatives"
                width={370}
                height={181}
              />
            </figure>
            <figcaption className="lazyload">
              <h4 className="lazyload">
                <a
                  href="https://devtechnosys.com/insights/soap2day-alternatives/"
                  className="lazyload"
                >
                  Top Soap2Day Alternatives
                </a>
              </h4>
              <p className="lazyload">
                Soap2day was a popular streaming platform for many Online
                viewers who intended to watch a lot of superb movies at once...
              </p>
              <a
                href="https://devtechnosys.com/insights/soap2day-alternatives/"
                className="btn-link-arrow lazyload"
              >
                View More
                <img
                  className="lazyload"
                  data-src="https://devtechnosys.com/images/2021-new/arrow-btn.svg"
                  alt="Dev Technosys"
                  width={30}
                  height={30}
                />
              </a>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
