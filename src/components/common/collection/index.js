import React from 'react'
import Slider from "react-slick";
import './collection.css'
import nextArrow from "../carousel/nextArrow";
import prevArrow from "../carousel/prevArrow";

const settings = {
    infinite: false,
    slidesToScroll:1,
    slidesToShow:4,
    nextArrow: <nextArrow />,
    prevArrow: <prevArrow />
}

const Collection = ({list}) => {
    return (
        <div className="collection-wrapper">
            <div className="max-width collection">
                <div className="collection-title">Collection</div>
                <div className="collection-subtitle-raw">
                    <div className="collection-subtitle-text">
                        Explore curated lists of top restaurants, cafes, pubs, and bars in Vadodara, based on trends
                    </div>
                    <div className="collection-location">
                        <div>All collection in Vadodara</div>
                        <i className="fi fi-rr-caret-right absolute-center"></i>
                    </div>
                </div>
                <Slider {...settings}>
                    {list.map((item) =>(
                      <div>
                          <div className="collection-cover">
                            <img src={item.cover} className="collection-image" alt={item.title} />
                             <div className="gradient-bg"></div>
                              <div className="collection-card-title">{item.title}</div>
                              <div className="collection-card-subtitle">
                                  <div>{item.places}</div>
                                  <i className="fi fi-rr-caret-right absolute-center"></i>
                              </div>
                          </div>
                      </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
export default Collection
