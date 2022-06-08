import React from 'react'
import Slider from "react-slick";
import './topBrands.css'
import nextArrow from "../../common/carousel/nextArrow";
import prevArrow from "../../common/carousel/prevArrow";

const topBrandList= [
    {
        id:1,
        time:"35 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1576840166.png"
    },
    {
        id:2,
        time:"50 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625165221.png"
    },
    {
        id:3,
        time:"42 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/7e336c2517d560f80ea4a4ef63a77fc1_1620130033.png"
    },
    {
        id:4,
        time:"20 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/19dc01b37dd2b8b9dfc8bbf4ac904a4f_1642318119.png"
    },
    {
        id:5,
        time:"27 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188442.png"
    },
    {
        id:6,
        time:"10 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png"
    },
    {
        id:7,
        time:"49 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/591906debc1e0abd7faaea69f249f368_1617984305.png"
    }
]

const settings = {
    infinite: false,
    slidesToScroll:1,
    slidesToShow:6,
    nextArrow: <nextArrow />,
    prevArrow: <prevArrow />
}

const TopBrands = () => {
    return (
        <div className="top-brands max-width">
            <div className="collection-title">
                Top Brands for you
            </div>
            <Slider {...settings}>
                {topBrandList.map((brand)=> {
                    return <div>
                        <div className="top-brands-cover">
                            <img src={brand.cover}  className="top-brands-image" alt={brand.time}/>
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    )
}
export default TopBrands
