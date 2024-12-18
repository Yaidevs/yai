import React from "react";

function OurOffices() {
  return (
    <section className="our-offices space-comm paddTop0">
      <div className="container">
        <div className="title-head text-left">
          <small>Locations</small>
          <h2>Our Offices</h2>
        </div>
        <div className="row office-location-box lazyload">
          <div className="col-md-3 lazyload">
            <article className="lazyload">
              <figure className="lazyload">
                <img
                  className="lazyload"
                  data-src="https://devtechnosys.com/images-2023/common/flag-1.png"
                  alt="Dev Technosys"
                  width
                  height
                />
              </figure>
              <figcaption className="lazyload">
                <h4 className="lazyload">United States of America</h4>
                <p className="lazyload">
                  Dev Technosys LLC
                  <br />
                  5668 e 61st street ste 2000 #360 commerce, california 90040,
                  USA
                </p>
                <a className="lazyload" href="tel:+1 415-992-5493">
                  +1 415-992-5493
                </a>
              </figcaption>
            </article>
          </div>
          <div className="col-md-3 lazyload">
            <article className="lazyload">
              <figure className="lazyload">
                <img
                  className="lazyload"
                  data-src="https://devtechnosys.com/images-2023/common/flag-2.png"
                  alt="Dev Technosys"
                  width
                  height
                />
              </figure>
              <figcaption className="lazyload">
                <h4 className="lazyload">United Kingdom</h4>
                <p className="lazyload">
                  60 st martins lane, covent garden wc2n 4js, London
                </p>
                <a className="lazyload" href="tel:+44 20 8638 7669">
                  +44 20 8638 7669
                </a>
              </figcaption>
            </article>
          </div>
          <div className="col-md-3 lazyload">
            <article className="lazyload">
              <figure className="lazyload">
                <img
                  className="lazyload"
                  data-src="https://devtechnosys.com/images-2023/common/flag-3.png"
                  alt="Dev Technosys"
                  width
                  height
                />
              </figure>
              <figcaption className="lazyload">
                <h4 className="lazyload">United Arab Emirates</h4>
                <p className="lazyload">
                  DIP 1 - C.E.O Building - Office 613 <br /> Dubai, 500001
                </p>
                <a className="lazyload" href="tel:+1 415-992-5493">
                  +1 415-992-5493
                </a>
              </figcaption>
            </article>
          </div>
          <div className="col-md-3 lazyload">
            <article className="lazyload">
              <figure className="lazyload">
                <img
                  className="lazyload"
                  data-src="https://devtechnosys.com/images-2023/common/flag-4.png"
                  alt="Dev Technosys"
                  width
                  height
                />
              </figure>
              <figcaption className="lazyload">
                <h4 className="lazyload">New Zealand</h4>
                <p className="lazyload">
                  188 Quay Street Auckland, <br />
                  AUK 1010
                </p>
                <a className="lazyload" href="tel:+1 415-992-5493">
                  +1 415-992-5493
                </a>
              </figcaption>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurOffices;
