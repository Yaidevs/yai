import React from "react";
import aboutbanner from "../assets/images/about-banner.webp";
import missionvisionimg from "../assets/images/mission-vision-img.png";
import "./about.css";
import Blogs from "../components/Blogs";
import GetFreeQuote from "../components/GetFreeQuote";
import Honour from "../components/Honour";
import OurOffices from "../components/OurOffices";

function About() {
  return (
    <div className="inner-warper">
      {/* Banner section */}
      <section className="about-us-main-banner-sec lazyload">
        <div className="about-us-main-banner-content lazyload">
          <img alt="Dev Technosys" className="lazyload" src={aboutbanner} />
          <div className="container lazyload">
            <div className="main-heading-box lazyload">
              <h1 className="lazyload">
                Experience the True Technology at Dev Technosys
              </h1>
              <p className="lazyload">
                High - end IT solution from and by the world's greatest
                technical mindset
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About profile section  */}
      <section className="about-profile-sec lazyload">
        <div className="container lazyload">
          <div className="about-info-block lazyload">
            <ul className="lazyload">
              <li className="lazyload">
                <figure className="lazyload">
                  <img
                    alt="Dev Technosys"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/map-icon.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <p className="lazyload">Office Location</p>
                  <h4 className="lazyload">5+</h4>
                </figcaption>
              </li>
              <li className="lazyload">
                <figure className="lazyload">
                  <img
                    alt="Dev Technosys"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/team-icon.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <p className="lazyload">Team Members</p>
                  <h4 className="lazyload">150+</h4>
                </figcaption>
              </li>
              <li className="lazyload">
                <figure>
                  <img
                    alt="Dev Technosys"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/business-icon.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <p className="lazyload">Year in business</p>
                  <h4 className="lazyload">14+</h4>
                </figcaption>
              </li>
              <li className="lazyload">
                <figure className="lazyload">
                  <img
                    alt="Dev Technosys"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/client-icon.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <p className="lazyload">Clients</p>
                  <h4 className="lazyload">600+</h4>
                </figcaption>
              </li>
              <li className="lazyload">
                <figure className="lazyload">
                  <img
                    alt="Dev Technosys"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/rocket-icon.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <p className="lazyload">App deliver</p>
                  <h4 className="lazyload">950+</h4>
                </figcaption>
              </li>
            </ul>
          </div>
          <div className="about-info-content lazyload">
            <h5 className="lazyload">CORPORATE PROFILE</h5>
            <h4 className="lazyload">
              Does more then ever platform to achieve goal stages
            </h4>
            <p className="lazyload">
              Dev Technosys is an ISO 9001:2015 certified Web/Mobile App
              Development Company, commenced in year 2010. In our 12+ years of
              experience we have continually delivered modern technology
              solutions that have strengthen enterprise’s technical
              infrastructure and helped them lead in their business domain. At
              Dev Technosys we deploy a vast talent pool of skilful and
              experienced Web developers of strong command on contemporary
              languages and frameworks such as PHP, JavaScript, .Net, Open
              Source, etc.
            </p>
            <p className="lazyload">
              Also, we are acknowledged as one of the leading web/mobile app
              development company, We render advance development services such
              as iOS/android app development, IoT development, wearable app
              development, web development designing, and software product
              development etc.
            </p>
            <p className="lazyload">
              At Dev Technosys, we believe in the uniqueness of your idea and
              industry specific requirements of your enterprise, thus to
              perfectly meet your needs we engineer highly customise our
              projects to make them feature-rich, robust, visually stunning and
              highly responsive and interactive on backend and front end.
            </p>
            <p className="lazyload">
              Till date we have successfully rendered 1500+ projects. Over the
              years we have earned the repo as a ‘tech savvy’, ‘quality
              trendsetter’ developers of industry, our work and technical
              breadth has helped us earn recognition from prestigious
              organisations such as NASSCOM, GoodFirms etc. Dev Technosys is a
              team of 120+ experts across globe with great experience of their
              fields, determined to serve projects that surpass client
              imagination. The dynamic of the company is to constantly innovate,
              preserve the uniqueness of your enterprise, improve the products
              and services, and serve for customer satisfaction.
            </p>
          </div>
        </div>
      </section>
      {/* Mission - Vision Section */}
      <section className="about-mission-vision-sec lazyload">
        <div className="about-mission-vision-block lazyload">
          <div className="container lazyload">
            <div className="row lazyload">
              <div className="col-md-6 lazyload">
                <div className="about-mission-vision-content main-heading-box lazyload">
                  <h4 className="lazyload">OUR VISION &amp; MISSION</h4>
                  <h3 className="lazyload">We help to achieve mutual goals</h3>
                  <p className="lazyload">
                    Started out with one motto in our minds, Dev Technosys is an
                    end-to-end IT Solution provider company established on the
                    maxim of helping enterprise with advance technology to
                    resolve modern challenges faced by them. We are a one-door
                    solution web and app development solution provider company
                    that is set out on a mission to help out Startups, SME’s,
                    big corporate houses in their quest to be a leader in their
                    business domain. Our solutions are perennial, advance and
                    intelligently engineered to elevate your business value, we
                    are visionary builders of modern day technology that set
                    trends and revolutionise the standards of web development.
                    We are sort out team of experts, deeply dedicated catering
                    solutions that are well aligned with your enterprise
                    futuristic needs with our high technical whereabouts.
                  </p>
                </div>
              </div>
              <div className="col-md-5 ml-auto lazyload">
                <div className="about-mission-vision-img lazyload">
                  <figure className="lazyload">
                    <img
                      width={445}
                      height={481}
                      alt="Dev Technosys"
                      className="lazyload"
                      src={missionvisionimg}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Incomparable section */}
      <section className="section-padding incomparable-sec lazyload">
        <div className="container lazyload">
          <div className="main-heading-box main-heading-box-inner lazyload">
            <h2 className="lazyload">
              We Are Incomparable, Given Our Knowledge Expertise And Solutions
            </h2>
          </div>
          <div className="row lazyload">
            <div className="col-md-4 box-style-1 lazyload">
              <article className="lazyload">
                <figure className="lazyload">
                  <img
                    width={50}
                    height={52}
                    alt="Dev Technosys"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/inc-1.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <h3 className="lazyload">In-house Team</h3>
                  <p className="lazyload">
                    Excellent team of intelligent and experienced developers and
                    designers at your disposal, trained to meet challenges with
                    out-of-the box solutions.
                  </p>
                </figcaption>
              </article>
            </div>
            <div className="col-md-4 box-style-1 lazyload">
              <article className="lazyload">
                <figure className="lazyload">
                  <img
                    width={50}
                    height={51}
                    alt="Dev Technosys"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/inc-2.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <h3 className="lazyload">Technology Stack</h3>
                  <p className="lazyload">
                    We are well aligned team with extensive knowledge of
                    technology and latest development trends, technology is
                    vital for us to thrive.
                  </p>
                </figcaption>
              </article>
            </div>
            <div className="col-md-4 box-style-1 lazyload">
              <article className="lazyload">
                <figure className="lazyload">
                  <img
                    width={50}
                    height={49}
                    alt="Dev Technosys"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/inc-3.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <h3 className="lazyload">User-focused Process</h3>
                  <p className="lazyload">
                    Agility is all about bringing ease to our clients, we have
                    formulated our development process to make things as easy
                    for our clients as they can be.
                  </p>
                </figcaption>
              </article>
            </div>
            <div className="col-md-4 box-style-1 lazyload">
              <article className="lazyload">
                <figure className="lazyload">
                  <img
                    width={50}
                    height={49}
                    alt="Dev Technosys"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/inc-4.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <h3 className="lazyload">Smooth Communication</h3>
                  <p className="lazyload">
                    Now connect anytime with our project managers, and get a
                    detailed information on your projects progress, we are
                    prepared for last minute changes.
                  </p>
                </figcaption>
              </article>
            </div>
            <div className="col-md-4 box-style-1 lazyload">
              <article className="lazyload">
                <figure className="lazyload">
                  <img
                    width={50}
                    height={49}
                    alt="Dev Technosys"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/inc-5.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <h3 className="lazyload">High-quality Code</h3>
                  <p className="lazyload">
                    Strong command over latest development platforms and
                    frameworks, now unleash high-end security, agility and high
                    functionality.
                  </p>
                </figcaption>
              </article>
            </div>
            <div className="col-md-4 box-style-1 lazyload">
              <article className="lazyload">
                <figure className="lazyload">
                  <img
                    width={50}
                    height={49}
                    alt="Dev Technosys"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/inc-6.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <h3 className="lazyload">Transparency</h3>
                  <p className="lazyload">
                    Quality, Time, Cost and Value – our 4 pillars that help us
                    ensure transparency in our development work and maintain
                    long term relations with our esteemed clients.
                  </p>
                </figcaption>
              </article>
            </div>
            <div className="col-md-4 box-style-1 lazyload">
              <article className="lazyload">
                <figure className="lazyload">
                  <img
                    width={50}
                    height={50}
                    alt="Dev Technosys"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/inc-7.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <h3 className="lazyload">Full-flexibility</h3>
                  <p className="lazyload">
                    Our development process is uniquely made to serve and fit
                    the requirements of Startups, SME’s and big corporates, that
                    help us flexibly revitalise your apps and websites.
                  </p>
                </figcaption>
              </article>
            </div>
            <div className="col-md-4 box-style-1 lazyload">
              <article className="lazyload">
                <figure className="lazyload">
                  <img
                    width={50}
                    height={55}
                    alt="Dev Technosys"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/inc-8.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <h3 className="lazyload">Can-do Attitude </h3>
                  <p className="lazyload">
                    We look challenges as opportunities, we retaliate with
                    robust solutions and extensive knowledge of development and
                    attain victory.
                  </p>
                </figcaption>
              </article>
            </div>
            <div className="col-md-4 box-style-1 lazyload">
              <article className="lazyload">
                <figure className="lazyload">
                  <img
                    width={50}
                    height={50}
                    alt="Dev Technosys"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/inc-9.svg"
                  />
                </figure>
                <figcaption>
                  <h3 className="lazyload">12+ years of experience</h3>
                  <p className="lazyload">
                    Impeccable work record of 12+ years and a legacy of world
                    class development, our portfolio tells the tale of your
                    wonderful journey.
                  </p>
                </figcaption>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* Work section */}
      <section className="our-work-sec paddBot20 lazyload">
        <div className="container lazyload">
          <div className="main-heading-box main-heading-box-inner lazyload">
            <h2>What devtechnosys does for you</h2>
            <p>
              We design, we invent, we advent, we code, we engineer, we share
              your load in your journey of becoming a leader. We have an advance
              understanding of developing websites, applications, portals,
              products etc that completes your enterprise.
            </p>
          </div>
          <div className="row box-style-block lazyload">
            <div className="col-md-5 box-style-left lazyload">
              <article className="lazyload">
                <h4 className="lazyload">WHAT YOU NEED</h4>
                <ul className="lazyload">
                  <li className="lazyload">Consultation on project</li>
                  <li className="lazyload">Workload division</li>
                  <li className="lazyload">
                    Some to chalkup your idea &amp; needs
                  </li>
                  <li className="lazyload">Brilliant developers</li>
                  <li className="lazyload">Fund consultation</li>
                </ul>
              </article>
            </div>
            <div className="col-md-2 box-style-center lazyload">
              <article className="lazyload">
                <ul className="lazyload">
                  <li className="lazyload">Product development</li>
                  <li className="lazyload">Business strategic alliance</li>
                  <li className="lazyload">
                    Flawless &amp; ground breaking design
                  </li>
                  <li className="lazyload">Dedicated development</li>
                  <li className="lazyload">High end solution</li>
                </ul>
              </article>
            </div>
            <div className="col-md-5 box-style-right ml-auto lazyload">
              <article className="lazyload">
                <h4 className="lazyload">WHAT DT DO</h4>
                <ul className="lazyload">
                  <li className="lazyload">Draw technical conclusion</li>
                  <li className="lazyload">Keeps you moving</li>
                  <li className="lazyload">Brainstorming</li>
                  <li className="lazyload">Develop great app &amp; website</li>
                  <li className="lazyload">Keep inspiration churning</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>
      <Blogs />
      <GetFreeQuote />
      <Honour />
      <OurOffices />
    </div>
  );
}

export default About;
