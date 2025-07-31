import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { caseStudies } from "@/data/caseStudies";
import { homepageServices } from "@/data/homepageServices";
import VariableProximity from "@/utlis/VariableProximity";

export default function Services() {
  const containerRef = useRef(null);
  return (
    <div className="section sw-layout-1 tf-spacing-13 py-0">
      <div className="tf-container">
        <div className="heading-section d-flex justify-content-between flex-wrap-md gap_12 align-items-end mb_60">
          <div className="left">
            <h2 className="heading-title split-text effect-right">
              <div ref={containerRef} style={{ position: "relative" }}>
                <VariableProximity
                  label="Smart Business Services, Built Around You"
                  className="variable-proximity"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={100}
                  falloff="linear"
                />
              </div>
            </h2>
            <p
              className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
              data-wow-delay="0s"
            >
              From company formation to banking and compliance — our expert-led
              services are tailored to fuel your success and simplify your
              journey in Dubai.
            </p>
          </div>
          <div className="wrap-sw-button d-flex gap_16">
            <div className="sw-button style-default v2 has-bg nav-prev-layout-1 snbp6">
              <i className="icon-caret-left" />
            </div>
            <div className="sw-button style-default v2 has-bg nav-next-layout-1 snbn6">
              <i className="icon-caret-right" />
            </div>
          </div>
        </div>
      </div>
      <div className="tf-container slider-layout-right w-xl">
        <Swiper
          className="swiper"
          spaceBetween={15}
          breakpoints={{
            0: { slidesPerView: 1 },
            575: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.1,
            },
            992: {
              slidesPerView: 1.4,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 2.2,
              spaceBetween: 24,
            },
          }}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".snbp6",
            nextEl: ".snbn6",
          }}
        >
          {homepageServices.map((item) => (
            <SwiperSlide className="swiper-slide" key={item.id}>
              <div className="case-studies-item style-1 hover-image hover-border border-element h-full">
                <Link to={`/${item.link}`} className="img-style">
                  <img
                    className="lazyload"
                    data-src={item.image}
                    alt="case-studies"
                    src={item.image}
                    width={382}
                    height={502}
                  />
                </Link>
                <div className="content">
                  <div className="top d-flex align-items-center justify-content-end mb_31">
                    {/* <div className="brand">
                      <img
                        alt="brand"
                        src={item.brandSrc}
                        width={item.brandWidth}
                        height={item.brandHeight}
                      />
                    </div> */}
                    <a
                      href={`/${item.link}`}
                      className="tf-btn"
                      target="_blank"
                    >
                      <span className="icon-arrow-top-right" />
                      <span className="bg-effect" />
                    </a>
                  </div>
                  <div className="heading mb_65">
                    <h4 className="mb_15 title">
                      <Link to={`/${item.link}`} className="link">
                        {item.title}
                      </Link>
                    </h4>
                    <p className="text_mono-gray-7 text-body-2">
                      {item.description}
                    </p>
                  </div>
                  {/* <div className="group-number">
                    {item.stats.map((stat, index) => (
                      <div className="wrap-number" key={index}>
                        <h3 className="number fw-5">{stat.value}</h3>
                        <p className="font2 text-body-1 lh-20">{stat.label}</p>
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
