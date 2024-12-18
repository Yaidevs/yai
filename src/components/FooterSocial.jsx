import React from "react";

function FooterSocial() {
  return (
    <div className="footer-social">
      <div className="container">
        <div className="footer-social-in d-flex">
          <div className="footer-social-icon">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/devtechnosys/"
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    className="lazyload"
                    data-src="https://devtechnosys.com/images-2023/common/facebook.svg"
                    alt="Dev Technosys"
                    width={21}
                    height={21}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://bit.ly/clicktosubscribenow"
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    className="lazyload"
                    data-src="https://devtechnosys.com/images-2023/common/youtube.svg"
                    alt="Dev Technosys"
                    width={24}
                    height={19}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/devtechnosys?lang=en"
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    className="lazyload"
                    data-src="https://devtechnosys.com/images-2023/common/twitter.svg"
                    alt="Dev Technosys"
                    width={24}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/devtechnosys/"
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    className="lazyload"
                    data-src="https://devtechnosys.com/images-2023/common/instagram.svg"
                    alt="Dev Technosys"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://in.pinterest.com/devtechnosys/_created/"
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    className="lazyload"
                    data-src="https://devtechnosys.com/images-2023/common/pinterest.svg"
                    alt="Dev Technosys"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/3057818/"
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    className="lazyload"
                    data-src="https://devtechnosys.com/images-2023/common/linkedin.svg"
                    alt="Dev Technosys"
                    width={21}
                    height={21}
                  />
                </a>
              </li>
            </ul>
            <a
              href="//www.dmca.com/Protection/Status.aspx?ID=4727914d-7c19-457d-bef6-b66cdc573de5"
              title="DMCA.com Protection Status"
              target="_blank"
              className="dmca-badge lazyload"
              rel="nofollow"
            >
              <img
                className="lazyload"
                src="images/_dmca_premi_badge_4.png"
                width={135}
                height={28}
                alt="DMCA.com Protection Status"
              />
            </a>
          </div>
          <div className="rating-star lazyload">
            <span className="rating-tag">
              <img
                className="lazyload"
                data-src="https://devtechnosys.com/images-2023/common/start-rating-w.svg"
                alt="Dev Technosys"
                width={13}
                height={13}
              />
              4.9 / 5.0
            </span>
            <span>
              {" "}
              by 800+ customers for 1000+ Web and Mobile App Development
              Projects.{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSocial;
