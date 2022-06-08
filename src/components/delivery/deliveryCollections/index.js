import React from 'react'
import Slider from 'react-slick'
import './deliveryCollections.css'
import nextArrow from "../../common/carousel/nextArrow";
import prevArrow from "../../common/carousel/prevArrow";
import DeliveryItem from "./deliveryItem";

const deliveryItems = [
    {
        id:1,
        title:"Pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id:2,
        title:"Home Style",
        cover:"https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png"
    },
    {
        id:4,
        title:"Sandwich",
        cover:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
    },
    {
        id:5,
        title:"Biryani",
        cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
        id:6,
        title:"Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id:7,
        title:"Fries",
        cover:"https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png"
    },
    {
        id:3,
        title:"Pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
]

const settings = {
    infinite: false,
    slidesToScroll:1,
    slidesToShow:4,
    nextArrow: <nextArrow />,
    prevArrow: <prevArrow />
}

const DeliveryCollections = () => {
    return (
        <div className="delivery-collection">
            <div className="max-width">
                <div className="collection-title">Eat what makes you happy</div>
                <Slider {...settings}>
                    {deliveryItems.map((item)=> {
                        return <DeliveryItem item={item} />
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default DeliveryCollections
