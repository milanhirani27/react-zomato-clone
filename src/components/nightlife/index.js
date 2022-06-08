import React from 'react'
import './nightlife.css';
import Collection from "../common/collection";
import Filters from "../common/filters";
import ExploreScetion from "../common/exploreScetion";
import {diningOut} from "../../data/diningOut";

const nightFilters = [
    {
        id:1,
        icon: <i className="fi fi-rr-setting-sliders absolute-center"></i>,
        title: "Filters"
    },
    {
        id:2,
        title: "Rating: 4.0+"
    },
    {
        id:3,
        title: "Safe and Hygienic"
    },
    {
        id:4,
        title: "Pure Veg"
    },
    {
        id:5,
        title: "Delivery Time",
        icon: <i className="fi fi-rr-apps-sort absolute-center"></i>
    },
    {
        id:6,
        title: "Great Offers"
    },

]

const collectionList = [
    {
        id:4,
        title:"Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        places: "17 places"
    },
    {
        id: 5,
        title:"Great Chinese",
        cover:"https://b.zmtcdn.com/data/collections/cb9a936204bd7b02307a6cf911f95a7c_1647261342.jpg",
        places: "24 places"
    },
    {
        id: 6,
        title:"Meat Cravings",
        cover:"https://b.zmtcdn.com/data/collections/bb455325350e11bff99e88ef68b3f89d_1614940676.jpg",
        places: "16 places"
    },
    {
        id: 1,
        title:"Best Pizza Places in Town",
        cover:"https://b.zmtcdn.com/data/collections/178b0ddc2dcb90698f3e25bdaf12142d_1618469439.jpg",
        places: "21 places"
    },

    {
        id:2,
        title:"Sandwich",
        cover:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
        places: "08 places"
    },
    {
        id:3,
        title:"Biryani",
        cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
        places: "11 places"
    },
]

const nightList = diningOut

const Nightlife = () => {
    return (
        <div>
            <Collection list={collectionList} />
            <div className="max-width">
                <Filters filterList={nightFilters} />
                <ExploreScetion list={nightList} collectionName={"Nightlife Restaurants in Vadodara"}/>
            </div>
        </div>
    )
}
export default Nightlife
