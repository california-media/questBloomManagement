import { blogArticles } from "@/data/blogs";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Navigation } from "swiper/modules";
import VariableProximity from "@/utlis/VariableProximity";
export default function Blogs() {
  const containerRef = useRef(null);
  return (
    <div className="section-blog style-3 sw-layout-1 tf-spacing-17 pb_90 pt_90">
      <div className="tf-container">
        <div className="wrap pb_90">
          <div className="heading-section d-flex justify-content-between flex-wrap-md gap_12 align-items-end mb_60">
            <div className="left">
              <h1 className="heading-title split-text effect-right">
                 <div ref={containerRef} style={{ position: "relative" }}>
                      <VariableProximity
                        label="Popular UAE Free Zones"
                        className="variable-proximity"
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff="linear"
                      />
                    </div>
              </h1>
              <p
                className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
                data-wow-delay="0s"
              >
              Our Business Setup Experts ensures that your UAE Free Zone firm is successfully registered and that all UAE rules are followed. <br/> Examine the advantages of the most popular UAE Free Zone and allow us to create the appropriate company setup strategy for you to save your time and money.
              </p>
            </div>
            {/* <div className="wrap-sw-button d-flex gap_16">
              <div className="sw-button style-default v2 has-bg nav-prev-layout-1 snbp5">
                <i className="icon-caret-left" />
              </div>
              <div className="sw-button style-default v2 has-bg nav-next-layout-1 snbn5">
                <i className="icon-caret-right" />
              </div>
            </div> */}
          </div>
          {/* <Swiper
            className="swiper swiper-container wow animate__fadeInLeft animate__animated"
            data-wow-delay="0s"
            spaceBetween={15}
            breakpoints={{
              0: { slidesPerView: 1 },
              575: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            modules={[Navigation]}
            navigation={{
              prevEl: ".snbp5",
              nextEl: ".snbn5",
            }}
          > */}
          <div className="row">
            {blogArticles.map((article) => (
              // <SwiperSlide className="swiper-slide" key={article.id}>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                  <div className="blog-article-item hover-image">
                    <Link to={`/${article.link}`} className="article-thumb mb_15" style={{height: "300px", overflow: "hidden"}}>
                      <img
                        className="lazyload"
                        data-src={article.imageSrc}
                        alt="blog"
                        src={article.imageSrc}
                        width={article.width}
                        height={article.height}
                      />
                    </Link>
                    <div className="article-content">
                      <ul className="blog-article-meta d-flex align-items-center">
                        <li className="meta-item text-body-1">
                          <Link to={`/${article.link}`} className="link-black fw-bold">
                           <span className="fw-medium me-2">Starting from</span> <span className="fs-2">{article.startingFromPrice}* AED</span>{article.title=="Sharjah Media City" && "/month"}
                          </Link>
                        </li>
                        {/* <li className="meta-item date text-body-1">
                          {article.date}
                        </li> */}
                      </ul>
                      <h5 className="title letter-spacing-2">
                        <Link to={`/${article.link}`} className="link">
                          {article.title}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              // </SwiperSlide>
            ))}
            </div>
          {/* </Swiper> */}
        </div>
      </div>
    </div>
  );
}
