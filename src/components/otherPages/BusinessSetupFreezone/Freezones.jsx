import MetaComponent from "@/components/common/MetaComponent";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { blogArticles2 } from "@/data/blogs";
import { freezones } from "@/data/freezones";
import VariableProximity from "@/utlis/VariableProximity";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
const metadata = {
  title: "Free Zones",
  description: "Free Zones",
};
const Freezones = () => {
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
                         <div ref={containerRef} style={{ position: "relative" }}>
                      <VariableProximity
                        label="Discover the Best Free Zone Packages for Your Business in Dubai"
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
                        Unlock the full potential of your business with the perfect Free Zone package. Whether you’re a startup or an established company, we offer tailored solutions in the UAE’s top Free Zones. Enjoy 100% foreign ownership, tax benefits, and world-class infrastructure. 
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
                              fontSize: 16,
                              lineHeight: 1,
                              alignSelf: "flex-end",
                              marginBottom: 20,
                              color: "#000",
                            }}
                          >
                            JLT Resident Package
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
                      src="/images/qb/freezones2.webp"
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

     <div className="tf-container pt_50">
         <div className="row">
           <div className="text-center pb_50">
             <h2 className="title text_mono-dark-9 fw-5 split-text split-lines-rotation-x">
               Choose your{" "}
                <span className="text-gradient">Free zone</span>
              </h2>
           </div>
              {freezones.map((item) => (
                <div className="col-md-3 col-sm-2 col-12 mb-5" key={item.id}>
                  <div className="blog-article-item style-1 hover-image-3">
                    <Link
                      to={`/${item.link}`}
                      className="article-thumb mb_30"
                      style={{height:300}}
                    >
                      <img
                        className="lazyload"
                        data-src={item.imageSrc}
                        alt="blog"
                        src={item.imageSrc}
                        width={item.width}
                        height={item.height}
                      />
                      <img
                        className="lazyload"
                        data-src={item.imageSrc}
                        alt="blog"
                        src={item.imageSrc}
                        width={item.width}
                        height={item.height}
                        style={{borderRadius:20}}
                      />
                      {/* <div className="tag text-body-3 text_white d-flex flex-column">
                        <h6 className="text_white">{article.day}</h6>
                        <span>{article.month}</span>
                      </div> */}
                    </Link>




                    
                    <div className="article-content mb_25">
                      <h6 className="title fw-5 letter-spacing-2 mb_8">
                        <Link to={`/${item.link}`} className="link">
                          {item.title}
                        </Link>
                      </h6>
                      {/* <p className="text-body-1 text_mono-gray-5">
                        {article.description}
                      </p> */}
                    </div>
                    {/* <Link
                      to={`/single-post/${article.id}`}
                      className="btn_link text-body-1 link-black"
                    >
                      Read it
                    </Link> */}
                  </div>
                </div>
              ))}
         </div>
     </div>

      <Footer1 />
    </>
  );
};

export default Freezones;
