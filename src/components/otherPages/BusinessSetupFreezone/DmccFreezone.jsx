import MetaComponent from "@/components/common/MetaComponent";
import OdometerComponent from "@/components/common/OdometerComponent";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { counterItems2, counterItems4 } from "@/data/facts";
import { dmccFreezone } from "@/data/sliderData";
import { testimonials } from "@/data/testimonials";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import EffectiveSolutions from "../EffectiveSolutions";
import VariableProximity from "@/utlis/VariableProximity";

const metadata = {
  title: "DMCC Freezone",
  description: "DMCC Freezone",
};
const DmccFreezone = () => {
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
                      <h1 className="title split-text effect-right mb-5">
                        <div
                          ref={containerRef}
                          style={{ position: "relative" }}
                        >
                          <VariableProximity
                            label="Dubai Multi Commodities Center (DMCC)"
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
                          DMCC was established in 2002 to enhance commodity
                          trade flows in Dubai. DMCC is the preferred
                          destination for trading of global commodities like
                          Gold, Diamond, etc.DMCC provides a business-friendly
                          environment, with streamlined business registration
                          processes, simplified import/export procedures, and
                          100% foreign ownership. The free zone also offers
                          access to world-class infrastructure, including modern
                          office buildings, logistics facilities, and a
                          dedicated commodities exchange. DMCC is a strategic
                          location for businesses operating in commodities trade
                          and related industries, offering access to major
                          global markets. The free zone also provides
                          industry-specific benefits, including the DMCC Free
                          Zone member portal which offers a range of services
                          and support for members.
                        </p>
                      </div>
                      <div className="text-display-2 text_white mb_49 split-text effect-scale">
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
                            29,205
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

                          <span
                            style={{
                              fontSize: 16,
                              lineHeight: 1,
                              alignSelf: "flex-end",
                              marginBottom: 20,
                              color: "#000",
                            }}
                          >
                            JLT Resident Package
                          </span>
                        </div>
                        {/* <div
                className="d-sm-flex align-items-center mt-4"
                style={{ gap: "10px" }}
              >
                <div className="me-4">
                  <span
                    style={{
                      fontSize: 25,
                      lineHeight: "30px",
                      display: "block",
                      color:"#000"
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
                    fontWeight:700,
                    color:"#797631"
                  }}
                >
                  7,000
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

                <span
                  style={{
                    fontSize: 16,
                    lineHeight: 1,
                    alignSelf: "flex-end",
                    marginBottom: 20,
                    color:"#000"
                  }}
                >
                General Trading License
                </span>
              </div> */}
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
                      src="/images/qb/dmcc.jpg"
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
 <div className="tf-container-2 pt_90">
        <div className="heading-section text-center mb_58">
          <div className="heading-tag d-flex gap_12 mx-auto mb_20 text_mono-dark-8 fw-5">
            <div className="icon">
              <i className="icon-user-question-02" />
            </div>
            <p className="text-body-3 fw-5">Choose From Amazing Packages</p>
          </div>
          <h2 className="title text_mono-dark-9 fw-5 split-text split-lines-rotation-x">
            Discover the Best Packages for{" "}
            <span className="text-gradient">Your Business</span> in Dubai
            {/* <span className="text-gradient">unlock</span> your <br />
              brand’s full potential */}
          </h2>
        </div>
        <ul
          className="nav nav-tabs-wrap style-2 overflow-x-auto mb_48"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="service-1"
              data-bs-toggle="tab"
              data-bs-target="#service-1-pane"
              type="button"
              role="tab"
              aria-controls="service-1-pane"
              aria-selected="true"
            >
              <span className="text-body-1 text_mono-gray-5 text_primary">
                AED 43,780*
              </span>
              <span className="fw-5 h6">Jump Start Package </span>
              <span className="line" />
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="service-2"
              data-bs-toggle="tab"
              data-bs-target="#service-2-pane"
              type="button"
              role="tab"
              aria-controls="service-2-pane"
              aria-selected="false"
            >
              <span className="text-body-1 text_mono-gray-5">AED 35,484*</span>
              <span className="fw-5 h6">Basic Biz Package</span>
              <span className="line" />
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="service-3"
              data-bs-toggle="tab"
              data-bs-target="#service-3-pane"
              type="button"
              role="tab"
              aria-controls="service-3-pane"
              aria-selected="false"
            >
              <span className="text-body-1 text_mono-gray-5">AED 29,205*</span>
              <span className="fw-5 h6">JLT Resident Package</span>
              <span className="line" />
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="service-4"
              data-bs-toggle="tab"
              data-bs-target="#service-4-pane"
              type="button"
              role="tab"
              aria-controls="service-4-pane"
              aria-selected="false"
            >
              <span className="text-body-1 text_mono-gray-5">AED 32,851*</span>
              <span className="fw-5 h6">Crypto Centre Package</span>
              <span className="line" />
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="service-5"
              data-bs-toggle="tab"
              data-bs-target="#service-5-pane"
              type="button"
              role="tab"
              aria-controls="service-5-pane"
              aria-selected="false"
            >
              <span className="text-body-1 text_mono-gray-5">AED 30,951*</span>
              <span className="fw-5 h6">Gaming Centre Package</span>
              <span className="line" />
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="service-6"
              data-bs-toggle="tab"
              data-bs-target="#service-6-pane"
              type="button"
              role="tab"
              aria-controls="service-6-pane"
              aria-selected="false"
            >
              <span className="text-body-1 text_mono-gray-5">AED 34,082*</span>
              <span className="fw-5 h6">AI Centre Package</span>
              <span className="line" />
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="service-7"
              data-bs-toggle="tab"
              data-bs-target="#service-7-pane"
              type="button"
              role="tab"
              aria-controls="service-7-pane"
              aria-selected="false"
            >
              <span className="text-body-1 text_mono-gray-5">AED 10,345*</span>
              <span className="fw-5 h6">Nook Package</span>
              <span className="line" />
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="service-8"
              data-bs-toggle="tab"
              data-bs-target="#service-8-pane"
              type="button"
              role="tab"
              aria-controls="service-8-pane"
              aria-selected="false"
            >
              <span className="text-body-1 text_mono-gray-5">AED 1,925*</span>
              <span className="fw-5 h6">AstroLabs Package</span>
              <span className="line" />
            </button>
          </li>
        </ul>
        <div
          className="tab-content flat-animate-tab effect-content-slide"
          id="myTabContent"
        >
          <div
            className="tab-pane show active"
            id="service-1-pane"
            role="tabpanel"
            aria-labelledby="service-1"
            tabIndex={0}
          >
            <div className="box-service style-2">
              <div className="img-style effect-item effect-left">
                <img
                  className="lazyload"
                  data-src="/images/qb/shakeHands.jpg"
                  alt="service"
                  src="/images/qb/shakeHands.jpg"
                  width={651}
                  height={691}
                />
              </div>
              <div className="content">
                <div className="heading effect-item effect-right">
                  {/* <h6 className="text_primary fw-5 mb_12 number">01</h6>
                    <h4 className="fw-5 mb_14 mb_24 title">Govt. Approvals</h4> */}
                  <p className="text-body-1 text_mono-gray-7 mb-4">
                    Ideal for start-ups and SMEs, Jump Start Package provides
                    additional benefits, including a 24% discount on company
                    setup fees, complimentary access to co-working spaces and
                    one UAE residency visa included as standard.
                  </p>
                </div>
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
                      1. License with standard Flexi Desk
                    </span>
                    <div
                      className="d-sm-flex align-items-center mt-4"
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
                          fontWeight: 700,
                          color: "#000",
                           textDecoration: "line-through",
                        }}
                        className="line-through"
                      >
                        57,481
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
                        43,780
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
                  </div>
         
                  <div>
                    <ul className="list effect-item effect-right effect-3 mt-0">
                      <li className="text-body-1 text_black">
                        <i className="icon-check-cycle-line" />
                        DMCC company licence
                      </li>
                      <li className="text-body-1 text_black">
                        <i className="icon-check-cycle-line" />
                        Standard flexi desk (eligible for three UAE residency
                        visas)
                      </li>
                      <li className="text-body-1 text_black">
                        <i className="icon-check-cycle-line" />
                        One UAE residency visa included in package price
                      </li>
                      <li className="text-body-1 text_black">
                        <i className="icon-check-cycle-line" />
                        Complimentary true copy of the resolution
                      </li>
                    </ul>
                  </div>
                </div>
        

                <div className=" text_white split-text effect-scale mb-3">
                  <span
                    className="fw-bold"
                    style={{
                      color: "#797631",
                      fontSize: 20,
                      lineHeight: "20px",
                    }}
                  >
                    2. License with co-working space
                  </span>
                  <div
                    className="d-sm-flex align-items-center mt-4"
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
                        fontWeight: 700,
                        color: "#000",
                        textDecoration: "line-through",
                      }}
                    >
                      65,146
                    </span>
                    <span
                      style={{
                        fontSize: 45,
                        lineHeight: 1,
                        position: "relative",
                        display: "inline-block",
                        fontWeight: 700,
                        color: "#797631",
                        // textDecoration:"line-through"
                      }}
                    >
                      49,941
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
                </div>
                {/* <h6 className="fw-5 mb_14">Included in Fee:</h6> */}
                <div>
                  <ul className="list effect-item effect-right effect-3 mt-0">
                    <li className="text-body-1 text_black">
                      <i className="icon-check-cycle-line" />
                      DMCC company licence
                    </li>
                    <li className="text-body-1 text_black">
                      <i className="icon-check-cycle-line" />
                      Co-working space (eligible for three UAE residency visas)
                    </li>
                    <li className="text-body-1 text_black">
                      <i className="icon-check-cycle-line" />
                      One UAE residency visa included in package price
                    </li>
                    <li className="text-body-1 text_black">
                      <i className="icon-check-cycle-line" />
                      Complimentary true copy of the resolution
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane show"
            id="service-2-pane"
            role="tabpanel"
            aria-labelledby="service-2"
            tabIndex={0}
          >
            <div className="box-service style-2">
              <div className="img-style effect-item effect-left">
                <img
                  className="lazyload"
                  data-src="/images/qb/companySetup.jpg"
                  alt="service"
                  src="/images/qb/companySetup.jpg"
                  width={651}
                  height={691}
                />
              </div>
              <div className="content">
                {/* <div className="heading mb_28 effect-item effect-right">
                  <h6 className="text_primary fw-5 mb_12 number">02</h6>
                  <h4 className="fw-5 mb_14 mb_24 title">Company Setup</h4>
                  <p className="text-body-1 text_mono-gray-7">
                    Starting trade name approval through to final business
                    license acquisition process.
                  </p>
                </div>
                <ul className="list effect-item effect-right effect-3 mb_56">
                  <li className="text-body-1 text_black">
                    <i className="icon-check-cycle-line" />
                    Apply for trade name approval
                  </li>
                  <li className="text-body-1 text_black">
                    <i className="icon-check-cycle-line" />
                    Secure initial approval and MOA typing
                  </li>
                  <li className="text-body-1 text_black">
                    <i className="icon-check-cycle-line" /> Obtain Ejari for
                    office lease
                  </li>
                  <li className="text-body-1 text_black">
                    <i className="icon-check-cycle-line" /> Get official company
                    license
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
          <div
            className="tab-pane show"
            id="service-3-pane"
            role="tabpanel"
            aria-labelledby="service-3"
            tabIndex={0}
          >
            <div className="box-service style-2">
              <div className="img-style effect-item effect-left">
                <img
                  className="lazyload"
                  data-src="/images/qb/visaAndId.jpg"
                  alt="service"
                  src="/images/qb/visaAndId.jpg"
                  width={651}
                  height={691}
                />
              </div>
              <div className="content">
                {/* <div className="heading mb_28 effect-item effect-right">
                  <h6 className="text_primary fw-5 mb_12 number">03</h6>
                  <h4 className="fw-5 mb_14 mb_24 title">Visa & ID Process</h4>
                  <p className="text-body-1 text_mono-gray-7">
                    Handling visa application steps and acquiring Emirates ID
                    for legal residency.
                  </p>
                </div>
                <ul className="list effect-item effect-right effect-3 mb_56">
                  <li className="text-body-1 text_black">
                    <i className="icon-check-cycle-line" /> Submit visa
                    application documents
                  </li>
                  <li className="text-body-1 text_black">
                    <i className="icon-check-cycle-line" />
                    Complete medical and biometrics
                  </li>
                  <li className="text-body-1 text_black">
                    <i className="icon-check-cycle-line" />
                    Receive entry permit and stamping
                  </li>
                  <li className="text-body-1 text_black">
                    <i className="icon-check-cycle-line" />
                    Apply for Emirates ID issuance
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
          <div
            className="tab-pane show"
            id="service-4-pane"
            role="tabpanel"
            aria-labelledby="service-4"
            tabIndex={0}
          >
            <div className="box-service style-2">
              <div className="img-style effect-item effect-left">
                <img
                  className="lazyload"
                  data-src="/images/qb/bankAccount.jpg"
                  alt="service"
                  src="/images/qb/bankAccount.jpg"
                  width={651}
                  height={691}
                />
              </div>
              <div className="content">
                {/* <div className="heading mb_28 effect-item effect-right">
                  <h6 className="text_primary fw-5 mb_12 number">04</h6>
                  <h4 className="fw-5 mb_14 mb_24 title">Bank Account Setup</h4>
                  <p className="text-body-1 text_mono-gray-7">
                    Coordinating with banker to open a company bank account
                    efficiently.
                  </p>
                </div>
                <ul className="list effect-item effect-right effect-3 mb_56">
                  <li className="text-body-1 text_black">
                    <i className="icon-check-cycle-line" />
                    Schedule meeting with banker
                  </li>
                  <li className="text-body-1 text_black">
                    <i className="icon-check-cycle-line" />
                    Submit required company documents
                  </li>
                  <li className="text-body-1 text_black">
                    <i className="icon-check-cycle-line" />
                    Choose account type and services
                  </li>
                  <li className="text-body-1 text_black">
                    <i className="icon-check-cycle-line" />
                    Complete KYC and verification
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tf-container">
        <div className="wrap">
          <div className="row align-items-end">
            <div className="pt_90">
              <div className="box-service style-1">
                <div className="img-style effect-item effect-left effect-2">
                  <img
                    className="lazyload"
                    data-src="/images/qb/dmcc2.jpg"
                    alt="service"
                    src="/images/qb/dmcc2.jpg"
                    width={657}
                    height={534}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_25 effect-item effect-right effect-2">
                    <h3 className="text_dark fw-6">
                      <div ref={containerRef} style={{ position: "relative" }}>
                        <VariableProximity
                          label="DMCC"
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
                    Dubai Multi Commodities Center (DMCC) is a free zone in
                    Dubai dedicated to commodities trade and enterprise. DMCC
                    offers a range of benefits to entrepreneurs and investors
                    looking forward to establish their businesses in the region.
                    Partnering with Quest Management Business Setup Services LLC
                    can help entrepreneurs and investors take advantage of the
                    numerous benefits of setting up a business in DMCC. Quest
                    Management can provide a range of services including company
                    registration, licensing, visa processing, and ongoing
                    business support to help ensure a successful business setup
                    in the UAE.
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
      </div>

      <EffectiveSolutions />

     
      <div className="section-testimonial style-5 tf-spacing-16 pb-0 pt_90">
        <div className="heading-section text-center mb_63">
          <h3 className="text_white split-text effect-right">
            <div ref={containerRef} style={{ position: "relative" }}>
              <VariableProximity
                label="Benefits to set up business in DMCC Free Zone"
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
          {dmccFreezone.map((testimonial, index) => (
            <SwiperSlide
              className="swiper-slide"
              key={`${testimonial.id}-${index}`}
              style={{ paddingTop: 50 }}
            >
              <div className="testimonial style-4">
                <div className="img-style-slider mb_40">
                  <div
                    style={{
                      borderRadius: 35,
                      width: "auto",
                      overflow: "hidden",
                    }}
                  >
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
      </div>

      <Footer1 />
    </>
  );
};

export default DmccFreezone;
