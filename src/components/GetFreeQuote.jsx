import React from "react";
import img1 from '../assets/images/color-cta-girl.webp'

function GetFreeQuote() {
  return (
    <section className="cta-color space-comm">
      <div className="container">
        <div className="cta-color-box">
          <div className="cta-color-l">
            <div className="title-head text-left">
              <h2 className="text-white">
                Harness the Power of Technologies to Drive Business Growth in No
                Time!
              </h2>
              <p className="text-white">
                Hire dedicated developers &amp; shape your business journey with
                our top-rated website &amp; mobile app development services.
              </p>
              <div className="btn-group-box">
                <a
                  href="https://devtechnosys.com/request-a-quote.php"
                  className="common-btn white-btn lazyloaded"
                >
                  Get A Free Quote
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
            </div>
          </div>
          <div className="cta-color-r">
            <figure>
              <img alt="CTA" src={img1} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetFreeQuote;
