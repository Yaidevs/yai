import React, { useState, useEffect } from "react";

function ServiceSection() {
  const [activeTab, setActiveTab] = useState("tab1");

  // Function to handle tab switching
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const tabs = document.querySelectorAll(".tabs li");
    tabs.forEach((tab) => {
      const rel = tab.getAttribute("rel");
      tab.classList.toggle("active", rel === activeTab);
    });

    const tabContents = document.querySelectorAll(".tab_content");
    tabContents.forEach((content) => {
      content.style.display = content.id === activeTab ? "block" : "none";
    });
  }, [activeTab]);

  return (
    <section className="what-brewing space-comm paddTop0">
      <div className="container">
        <div className="title-head text-left">
          <small>SERVICES</small>
          <h2>Business-Oriented Mobile App &amp; Web Development Services</h2>
          <p>
            Discover growth-driven business opportunities with our comprehensive
            services.
          </p>
        </div>
        <div className="what-brewing-content">
          {/* Tabs */}
          <ul className="tabs">
            <li
              className={activeTab === "tab1" ? "active" : ""}
              rel="tab1"
              onClick={() => handleTabClick("tab1")}
            >
              <div className="tab-l">
                <figure>
                  <img
                    alt="Mobile App Development"
                    src="https://devtechnosys.com/images-2023/home/home-service-icn_1.svg"
                  />
                </figure>
                <h3>Mobile App Development</h3>
              </div>
              <div className="tab-r">
                <span>01</span>
                <img
                  alt="arrow"
                  src="https://devtechnosys.com/images-2023/home/arrow-tab.svg"
                />
              </div>
            </li>
            <li
              className={activeTab === "tab2" ? "active" : ""}
              rel="tab2"
              onClick={() => handleTabClick("tab2")}
            >
              <div className="tab-l">
                <figure>
                  <img
                    alt="Website Development"
                    src="https://devtechnosys.com/images-2023/home/home-service-icn_2.svg"
                  />
                </figure>
                <h3>Website Development</h3>
              </div>
              <div className="tab-r">
                <span>02</span>
                <img
                  alt="arrow"
                  src="https://devtechnosys.com/images-2023/home/arrow-tab.svg"
                />
              </div>
            </li>
            <li
              className={activeTab === "tab3" ? "active" : ""}
              rel="tab3"
              onClick={() => handleTabClick("tab3")}
            >
              <div className="tab-l">
                <figure>
                  <img
                    alt="On-Demand App Development"
                    src="https://devtechnosys.com/images-2023/home/home-service-icn_3.svg"
                  />
                </figure>
                <h3>On-demand App Development</h3>
              </div>
              <div className="tab-r">
                <span>03</span>
                <img
                  alt="arrow"
                  src="https://devtechnosys.com/images-2023/home/arrow-tab.svg"
                />
              </div>
            </li>
            <li
              className={activeTab === "tab4" ? "active" : ""}
              rel="tab4"
              onClick={() => handleTabClick("tab4")}
            >
              <div className="tab-l">
                <figure>
                  <img
                    alt="Software Development"
                    src="https://devtechnosys.com/images-2023/home/home-service-icn_4.svg"
                  />
                </figure>
                <h3>Software Development</h3>
              </div>
              <div className="tab-r">
                <span>04</span>
                <img
                  alt="arrow"
                  src="https://devtechnosys.com/images-2023/home/arrow-tab.svg"
                />
              </div>
            </li>
            <li
              className={activeTab === "tab5" ? "active" : ""}
              rel="tab5"
              onClick={() => handleTabClick("tab5")}
            >
              <div className="tab-l">
                <figure>
                  <img
                    alt="Hire Dedicated Developers"
                    src="https://devtechnosys.com/images-2023/home/home-service-icn_5.svg"
                  />
                </figure>
                <h3>Hire Dedicated Developers</h3>
              </div>
              <div className="tab-r">
                <span>05</span>
                <img
                  alt="arrow"
                  src="https://devtechnosys.com/images-2023/home/arrow-tab.svg"
                />
              </div>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="tab_container">
            <div id="tab1" className="tab_content">
              <div className="tab_content-inner">
                <h3>Mobile App Development </h3>
                <h4>Elevating Business Experiences, One App At A Time</h4>
                <p>
                  Want to develop a business app that can take your business to
                  the next level? Seek mobile app development services from Dev
                  Technosys. With a team of dedicated developers for hire, we
                  can completely transform your business success. Get highly
                  interactive and fully-functional mobile apps!
                </p>
                <div className="btn-group-box">
                  <a
                    href="https://devtechnosys.com/mobile-app-development.php"
                    className="common-btn lazyloaded"
                  >
                    Know More
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
                <ul className="validate-list">
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="Industrial Knowledge"
                        data-src="https://devtechnosys.com/images-2023/home/service1-1.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>Industrial Knowledge</h3>
                    </figcaption>
                  </li>
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="Cost-effective Solutions"
                        data-src="https://devtechnosys.com/images-2023/home/service1-2.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>Cost-effective Solutions</h3>
                    </figcaption>
                  </li>
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="Technical Expertise"
                        data-src="https://devtechnosys.com/images-2023/home/service1-3.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>Technical Expertise</h3>
                    </figcaption>
                  </li>
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="Updated Mobile App"
                        data-src="https://devtechnosys.com/images-2023/home/service1-4.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>Updated Mobile Apps</h3>
                    </figcaption>
                  </li>
                </ul>
              </div>
            </div>
            <div id="tab2" className="tab_content">
              <div className="tab_content-inner">
                <h3>Website Development </h3>
                <h4>Crafting Digital Destinations, Building Online Success</h4>
                <p>
                  Unlock your business potential with the top website
                  development services by Dev Technosys. We create engaging and
                  user-centric business websites, marking a lasting impression.
                  From website design to development, we've got you covered.
                  Ensure a strong digital presence in today's competitive
                  landscape.
                </p>
                <div className="btn-group-box">
                  <a
                    href="https://devtechnosys.com/custom-web-development.php"
                    className="common-btn lazyloaded"
                  >
                    Know More
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
                <ul className="validate-list">
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="Industrial Knowledge"
                        data-src="https://devtechnosys.com/images-2023/home/service2-1.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>Industrial Knowledge</h3>
                    </figcaption>
                  </li>
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="Reasonable Services"
                        data-src="https://devtechnosys.com/images-2023/home/service2-2.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>Reasonable Services</h3>
                    </figcaption>
                  </li>
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="Technical Expertise"
                        data-src="https://devtechnosys.com/images-2023/home/service2-3.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>Technical Expertise</h3>
                    </figcaption>
                  </li>
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="User-friendly Websites"
                        data-src="https://devtechnosys.com/images-2023/home/service2-4.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>User-friendly Websites</h3>
                    </figcaption>
                  </li>
                </ul>
              </div>
            </div>
            <div id="tab3" className="tab_content">
              <div className="tab_content-inner">
                <h3>On-demand App Development</h3>
                <h4>Empowering Businesses with On-Demand App Services</h4>
                <p>
                  Turn your business app idea into reality with our exclusive
                  on-demand app development services. Dev Technosys team ensures
                  a smooth development from concept to deployment, bringing your
                  business app vision to life.
                </p>
                <div className="btn-group-box">
                  <a
                    href="https://devtechnosys.com/industry-on-demand.php"
                    className="common-btn lazyloaded"
                  >
                    Know More
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
                <ul className="validate-list">
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="Customized Soultions"
                        data-src="https://devtechnosys.com/images-2023/home/service3-1.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>Customized Solutions</h3>
                    </figcaption>
                  </li>
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="Affordable Services"
                        data-src="https://devtechnosys.com/images-2023/home/service3-2.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>Affordable Services</h3>
                    </figcaption>
                  </li>
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="Timely Project Delivery"
                        data-src="https://devtechnosys.com/images-2023/home/service3-3.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>Timely Project Delivery</h3>
                    </figcaption>
                  </li>
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="Dedicated Professionals"
                        data-src="https://devtechnosys.com/images-2023/home/service3-4.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>Dedicated Professionals</h3>
                    </figcaption>
                  </li>
                </ul>
              </div>
            </div>
            <div id="tab4" className="tab_content">
              <div className="tab_content-inner">
                <h3>Software Development</h3>
                <h4>Shaping Tomorrow with Innovative Software Solutions</h4>
                <p>
                  Get ready to experience tailored business excellence with our
                  future-proof software development services. Our team of
                  dedicated developers crafts cutting-edge software driving
                  efficiency and innovation. Partner with Dev Technosys to
                  elevate your operations and stay ahead in this evolving
                  landscape.
                </p>
                <div className="btn-group-box">
                  <a
                    href="https://devtechnosys.com/custom-software-development.php"
                    className="common-btn lazyloaded"
                  >
                    Know More
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
                <ul className="validate-list">
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="Upgraded Software"
                        data-src="https://devtechnosys.com/images-2023/home/service4-1.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>Upgraded Software</h3>
                    </figcaption>
                  </li>
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="Cost-effective Soultions"
                        data-src="https://devtechnosys.com/images-2023/home/service4-2.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>Cost-effective Solutions</h3>
                    </figcaption>
                  </li>
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="Dedicated Professionals"
                        data-src="https://devtechnosys.com/images-2023/home/service4-3.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>Dedicated Professionals</h3>
                    </figcaption>
                  </li>
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="On-time Delivery"
                        data-src="https://devtechnosys.com/images-2023/home/service4-4.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>On-time Delivery</h3>
                    </figcaption>
                  </li>
                </ul>
              </div>
            </div>
            <div id="tab5" className="tab_content">
              <div className="tab_content-inner">
                <h3>Hire Dedicated Developers</h3>
                <h4>
                  Avail Professional Assistance Today for A Better Tomorrow
                </h4>
                <p>
                  Do you want to hire dedicated developers within the desired
                  budget? Choose from the flexible hiring models of Dev
                  Technosys. We value every business time and money, offering a
                  professional team of experts for a specific project. Contact
                  us to experience affordable mobile app &amp; website
                  development solutions.
                </p>
                <div className="btn-group-box">
                  <a
                    href="https://devtechnosys.com/hire-developers.php"
                    className="common-btn lazyloaded"
                  >
                    Know More
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
                <ul className="validate-list">
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="Flexible Hiring Model"
                        data-src="https://devtechnosys.com/images-2023/home/service5-1.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>Flexible Hiring Model</h3>
                    </figcaption>
                  </li>
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="Reasonable Pricing"
                        data-src="https://devtechnosys.com/images-2023/home/service5-2.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>Reasonable Pricing </h3>
                    </figcaption>
                  </li>
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="Technical Expertise"
                        data-src="https://devtechnosys.com/images-2023/home/service5-3.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>Technical Expertise</h3>
                    </figcaption>
                  </li>
                  <li>
                    <figure>
                      <img
                        className="lazyload"
                        alt="Proven Outcomes"
                        data-src="https://devtechnosys.com/images-2023/home/service5-4.svg"
                      />
                    </figure>
                    <figcaption>
                      <h3>Proven Outcomes</h3>
                    </figcaption>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
