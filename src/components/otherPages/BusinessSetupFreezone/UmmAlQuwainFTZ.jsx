import MetaComponent from "@/components/common/MetaComponent";
import OdometerComponent from "@/components/common/OdometerComponent";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { counterItems2, counterItems4 } from "@/data/facts";
import { testimonials } from "@/data/testimonials";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import EffectiveSolutions from "../EffectiveSolutions";
import { sharjahAirportFreezone, ummAlQuwainFTZ } from "@/data/sliderData";
import { Autoplay } from "swiper/modules";
import VariableProximity from "@/utlis/VariableProximity";
import { ummAlQuwainPackage } from "@/data/priceDetails/ummAlQuwainPackage";
import "./listStyle.css"

const metadata = {
  title: "Umm Al Quwain Free Trade Zone",
  description: "Umm Al Quwain Free Trade Zone",
};
const UmmAlQuwainFTZ = () => {
  const containerRef = useRef(null);
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="wrap-page-header">
        <Header1 />

        <div className="section-process style-1 tf-spacing-5 pb-0">
          <div className="tf-container">
            <div className="wrap border-0 pb-0">
              <div className="row">
                <div className="col-xl-6">
                  <div className="content">
                    <div className="heading">
                      <h1 className="title split-text effect-right  mb-5">
                        <div ref={containerRef} style={{ position: "relative" }}>
                          <VariableProximity
                            label="Umm Al Quwain FTZ (UAQ FTZ)"
                            className="variable-proximity"
                            fromFontVariationSettings="'wght' 400, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={containerRef}
                            radius={100}
                            falloff="linear"
                          />
                        </div>
                      </h1>
                      <div className="description">
                        <p
                          className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                          data-wow-delay="0s"
                        >
                          UAQ FTZ provides a business-friendly environment, with simplified business registration processes, 100% foreign ownership, and zero corporate and personal income taxes. The free zone also offers access to world-class infrastructure, including modern office buildings, logistics facilities, and easy access to major highways.
                        </p>
                        {/* <p
                          className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                          data-wow-delay="0s"
                        >
                          UAQ FTZ provides a business-friendly environment, with
                          simplified business registration processes, 100%
                          foreign ownership, and zero corporate and personal
                          income taxes. The free zone also offers access to
                          world-class infrastructure, including modern office
                          buildings, logistics facilities, and easy access to
                          major highways.
                        </p> */}
                      </div>
                      <div className="text-display-2 text_white mb_20 split-text effect-scale">
                        <span
                          className="fw-bold"
                          style={{
                            color: "#797631",
                            fontSize: 50,
                            lineHeight: "50px",
                          }}
                        >
                          Packages starts
                        </span>
                        <div
                          className="d-sm-flex align-items-center mt-4"
                          style={{ gap: "10px" }}
                        >
                          <div className="me-4">
                            <span
                              style={{
                                fontSize: 25,
                                lineHeight: "30px",
                                display: "block",
                                color: "#000",
                              }}
                            >
                              From Just
                            </span>
                            <span
                              style={{
                                fontSize: 40,
                                lineHeight: "45px",
                                display: "block",
                                fontWeight: 900,
                                letterSpacing: 5,
                                color: "#797631",
                              }}
                            >
                              AED
                            </span>
                          </div>

                          <span
                            style={{
                              fontSize: 90,
                              lineHeight: 1,
                              position: "relative",
                              display: "inline-block",
                              fontWeight: 700,
                              color: "#797631",
                            }}
                          >
                            5,500
                            <span
                              style={{
                                fontSize: 30,
                                position: "absolute",
                                top: 0,
                                right: -10,
                              }}
                            >
                              *
                            </span>
                          </span>

                          {/* <span
                            style={{
                              fontSize: 18,
                              lineHeight: 1,
                              alignSelf: "flex-end",
                              marginBottom: 20,
                              color: "#000",
                              fontWeight:"bold",
                              flexWrap:"wrap"
                            }}
                          >
                           (10% DISCOUNT FOR 1 & 2 YRS)
                          </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div
                    className="shape-img-bg shape-border style-2 scroll-tranform"
                    data-distance="6%"
                  >
                    <img
                      alt=""
                      className="img-custom-anim-left wow"
                      src="/images/qb/uaq1.webp"
                      width={802}
                      height={535}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="tf-container">
        <div className="wrap">
          <div className="row align-items-end">
            <div className="pt_90">
              <div className="box-service style-1">
                <div className="img-style effect-item effect-left effect-2">
                  <img
                    className="lazyload"
                    data-src="/images/qb/ummalquwainFTZ2.jpg"
                    alt="service"
                    src="/images/qb/ummalquwainFTZ2.jpg"
                    width={657}
                    height={534}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_25 effect-item effect-right effect-2">
                    <h3 className="text_dark fw-6">
                      <div ref={containerRef} style={{ position: "relative" }}>
                        <VariableProximity
                          label="UAQ FTZ"
                          className="variable-proximity"
                          fromFontVariationSettings="'wght' 400, 'opsz' 9"
                          toFontVariationSettings="'wght' 1000, 'opsz' 40"
                          containerRef={containerRef}
                          radius={100}
                          falloff="linear"
                        />
                      </div>
                    </h3>
                  </div>
                  <p className="text-body-1 text_mono-gray-7 mt_20 mb-4">
                    UAQ FTZ is a strategic location for businesses operating in
                    manufacturing, trading, and other industries, offering
                    access to major global markets. The free zone also provides
                    industry-specific benefits, including a dedicated business
                    center and support for startups.
                  </p>
                  <p className="text-body-1 text_mono-gray-7 mt_20 mb-4">
                    Partnering with Quest Management can help entrepreneurs and
                    investors take advantage of the numerous benefits of setting
                    up a business in UAQ FTZ. Quest Management can provide a
                    range of services including company registration, licensing,
                    visa processing, and ongoing business support to help ensure
                    a successful business setup in the UAE.
                  </p>

                  <Link
                    to={`/contact-us`}
                    className="tf-btn height-2 btn-dark effect-item effect-right effect-5"
                  >
                    <span>Contact Us</span>
                    <span className="bg-effect" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="heading-section text-center mt_60">
        <div className="heading-tag d-flex gap_12 mx-auto mb_20 text_mono-dark-8 fw-5">
          <div className="icon">
            <i className="icon-user-question-02" />
          </div>
          <p className="text-body-3 fw-5">Choose From Amazing Packages</p>
        </div>
        <h2 className="title text_mono-dark-9 fw-5 split-text split-lines-rotation-x mb-5">
          Discover the Best Packages for{" "}
          <span className="text-gradient">Your Business</span> in Umm Al Quwain
          {/* <span className="text-gradient">unlock</span> your <br />
              brand’s full potential */}
        </h2>
      </div>


      <div className="section sw-layout-1 tf-spacing-13 py-0">


        <div className="tf-container">
          {ummAlQuwainPackage.map((item) => (
            <div className="case-studies-item style-1 hover-image hover-border border-element h-full w-100 mb-4">
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
              <div className="content flex-1" style={{ maxWidth: "100%" }}>
              
                                
{item?.packages?.map((packageDetails, index) => {
                    return (
               <>
                  <div className="top d-flex align-items-center justify-content-between mb_31">
  
                    <div
                      className="d-sm-flex align-items-center mt-4 flex-wrap"
                      style={{ gap: "10px" }}
                    >
                      <div className="me-4">
                        <span
                          style={{
                            fontSize: 15,
                            lineHeight: "15px",
                            display: "block",
                            color: "#000",
                          }}
                        >
                          From Just
                        </span>
                        <span
                          style={{
                            fontSize: 25,
                            lineHeight: "25px",
                            display: "block",
                            fontWeight: 900,
                            letterSpacing: 5,
                            color: "#797631",
                          }}
                        >
                          AED
                        </span>
                      </div>
  
                      <span
                        style={{
                          fontSize: 45,
                          lineHeight: 1,
                          position: "relative",
                          display: "inline-block",
                          fontWeight: 700,
                          color: "#797631",
                        }}
                      >
                        {packageDetails.newPrice}
                        <span
                          style={{
                            fontSize: 15,
                            position: "absolute",
                            top: 0,
                            right: -10,
                          }}
                        >
                          *
                        </span>
                      </span>
  
                      <span
                        style={{
                          fontSize: 16,
                          lineHeight: 1,
                          alignSelf: "flex-end",
                          marginBottom: 20,
                          color: "#000",
                        }}
                      >
                        (Special Offer!)
                      </span>
                    </div>
  
  
  
                    <a
                      href={`/contact-us`}
                      className="tf-btn"
                      target="_blank"
                    >
                      <span className="icon-arrow-top-right" />
                      <span className="bg-effect" />
                    </a>
                  </div>
                  <div className="heading">
                    <h4 className="mb_15 title">
                      <div className="link" style={{ color: "#797631" }}>
                        {item.title}
                      </div>
                    </h4>
                    <p className="text_mono-gray-7 text-body-2 mb-5">
                      {item.description}
                    </p>
                  </div>
                  <div className="d-lg-flex gap-4 packagePricing">
  
                    <div key={index} className="light-border mb-4 flex-1">
                      <div className="mb-5">
                        <div className=" text_white split-text effect-scale mb-3">
                          <span
                            className="fw-bold"
                            style={{
                              color: "#797631",
                              fontSize: 20,
                              lineHeight: "20px",
                            }}
                          >
                            {packageDetails.heading}
                          </span>
                          {/* <div
                                className="d-sm-flex align-items-center mt-4 flex-wrap"
                                style={{ gap: "10px" }}
                              >
                                <div className="me-4">
                                  <span
                                    style={{
                                      fontSize: 15,
                                      lineHeight: "15px",
                                      display: "block",
                                      color: "#000",
                                    }}
                                  >
                                    From Just
                                  </span>
                                  <span
                                    style={{
                                      fontSize: 25,
                                      lineHeight: "25px",
                                      display: "block",
                                      fontWeight: 900,
                                      letterSpacing: 5,
                                      color: "#797631",
                                    }}
                                  >
                                    AED
                                  </span>
                                </div>
  
                                <span
                                  style={{
                                    fontSize: 30,
                                    lineHeight: 1,
                                    position: "relative",
                                    display: "inline-block",
                                    fontFamily: "Arial",
                                    fontWeight: 500,
                                    color: "#000",
                                    textDecoration: "line-through",
                                  }}
                                >
                                  {packageDetails.oldPrice}
                                  <span
                                    style={{
                                      position: "absolute",
                                      left: 0,
                                      right: 0,
                                      top: "50%",
                                      height: 2,
                                      backgroundColor: "#000",
                                      transform: "translateY(-50%)",
                                      pointerEvents: "none",
                                    }}
                                  />
                                </span>
                                <span
                                  style={{
                                    fontSize: 45,
                                    lineHeight: 1,
                                    position: "relative",
                                    display: "inline-block",
                                    fontWeight: 700,
                                    color: "#797631",
                                  }}
                                >
                                  {packageDetails.newPrice}
                                  <span
                                    style={{
                                      fontSize: 15,
                                      position: "absolute",
                                      top: 0,
                                      right: -10,
                                    }}
                                  >
                                    *
                                  </span>
                                </span>
  
                                <span
                                  style={{
                                    fontSize: 16,
                                    lineHeight: 1,
                                    alignSelf: "flex-end",
                                    marginBottom: 20,
                                    color: "#000",
                                  }}
                                >
                                  (Special Offer!)
                                </span>
                              </div> */}
                        </div>
  
                        <div>
                          <ul className="list effect-item effect-right effect-3 mt-0">
                            {packageDetails.featuresInclude.map(
                              (feature, index) => {
                                return (
                                  <li
                                    className="text-body-1 text_black d-flex align-items-center mb-2"
                                    key={index}
                                  >
                                    <i className="icon-check-cycle-line me-3" />
                                    {feature}
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
  
                  </div>
               </>
 );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>


      <EffectiveSolutions />
      {/* <div className="section-testimonial style-5 tf-spacing-16 pb-0 pt_90">
        <div className="heading-section text-center mb_63">
          <h3 className="text_white split-text effect-right">
            <div ref={containerRef} style={{ position: "relative" }}>
              <VariableProximity
                label="Why Should You Choose to Setup Your Business in UAQFTZ"
                className="variable-proximity"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </div>
          </h3>
        </div>
        <Swiper
          className="swiper sw-layout mb-0"
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          initialSlide={1}
          centeredSlides
          spaceBetween={15}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            575: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 1.3,
              spaceBetween: 72,
            },
            1200: {
              slidesPerView: 1.98,
              spaceBetween: 72,
            },
          }}
        >
          {ummAlQuwainFTZ.map((testimonial, index) => (
            <SwiperSlide
              className="swiper-slide"
              key={`${testimonial.id}-${index}`}
              style={{ paddingTop: 50 }}
            >
              <div className="testimonial style-4">
                <div className="img-style-slider mb_40">
                  <div style={{ borderRadius: 35, width: "auto", overflow: "hidden" }}>
                    <img
                      className="lazyload"
                      data-src={testimonial.imageSrc}
                      alt="testimonial"
                      src={testimonial.imageSrc}
                      width={908}
                      height={652}
                      style={{ borderRadius: 35 }}
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="d-flex flex-column">
                    <h2 className="text_white mb-3">{testimonial.heading}</h2>
                    <div className="left">
                      <p className="text-body-2 text_white mb_12">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="bot">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="wrap-counter styel-1">
                  {counterItems2.map((item, index) => (
                    <div key={index} className="counter-item style-1">
                      <div className="counter-number">
                        <h2 className="odometer text_mono-dark-9">
                          <OdometerComponent max={item.value} />
                        </h2>
                        <span className="sub text_mono-dark-9">
                          {item.unit}
                        </span>
                      </div>
                      <p
                        className="text-body-2 text_mono-gray-7"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div style={{ background: "#797631" }}>
        <div className="heading-section text-center mb_20">
          <h3 className="text_white split-text effect-right">
            <div ref={containerRef} style={{ position: "relative", paddingTop: "20px" }}>
              <VariableProximity
                label="Benefits to set up business in Hamriyah Free Zone"
                className="variable-proximity"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </div>
          </h3>
        </div>
        <Swiper
          className="swiper sw-layout mb-0"
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          initialSlide={1}
          centeredSlides
          spaceBetween={15}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            575: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3.1,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3.2,
              spaceBetween: 72,
            },
            1200: {
              slidesPerView: 3.8,
              spaceBetween: 72,
            },
          }}
        >
          {ummAlQuwainFTZ.map((testimonial, index) => (
            <SwiperSlide
              className="swiper-slide"
              key={`${testimonial.id}-${index}`}
            >
              <div className="testimonial style-4">
                <div className="img-style-slider mb_20">
                  <div
                    style={{
                      borderRadius: 35,
                      width: "auto",
                      overflow: "hidden",
                      height: 200
                    }}
                  >
                    <img
                      className="lazyload"
                      data-src={testimonial.imageSrc}
                      alt="testimonial"
                      src={testimonial.imageSrc}
                      width={908}
                      // height={652}
                      height={200}
                      style={{ borderRadius: 35 }}
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="d-flex flex-column">
                    <h6 className="text_white mb-3 fw-bold" style={{ fontSize: "20px" }}>{testimonial.heading}</h6>
                    <div className="left">
                      <p className="text-body-2 text_white mb_12">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Footer1 />
    </>
  );
};

export default UmmAlQuwainFTZ;
