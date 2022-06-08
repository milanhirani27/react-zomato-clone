import React from 'react'
import './diningOut.css';
import Collection from "../common/collection";
import {diningOut} from "../../data/diningOut";
import Filters from "../common/filters";
import ExploreScetion from "../common/exploreScetion";

const collectionList = [
    {
        id: 1,
        title:"Gujarati Thali",
        cover:"https://b.zmtcdn.com/data/collections/633e9a523bc441acf1dc13a7899b1c90_1618312187.jpg",
        places: "12 places"
    },
    {
        id: 2,
        title:"Best Pizza Places in Town",
        cover:"https://b.zmtcdn.com/data/collections/178b0ddc2dcb90698f3e25bdaf12142d_1618469439.jpg",
        places: "21 places"
    },
    {
        id: 3,
        title:"Sweet Tooth",
        cover:"https://b.zmtcdn.com/data/collections/cf3ee1808f7c9233819dbcf20a8ca077_1647261043.jpg",
        places: "07 places"
    },
    {
        id: 4,
        title:"Brilliant Biryanis",
        cover:"https://b.zmtcdn.com/data/collections/121c28675e83cd77ae12f5904580f241_1647261090.jpg",
        places: "14 places"
    },
    {
        id: 5,
        title:"Great Chinese",
        cover:"https://b.zmtcdn.com/data/collections/cb9a936204bd7b02307a6cf911f95a7c_1647261342.jpg",
        places: "11 places"
    },
    {
        id: 6,
        title:"Meat Cravings",
        cover:"https://b.zmtcdn.com/data/collections/bb455325350e11bff99e88ef68b3f89d_1614940676.jpg",
        places: "08 places"
    },
    {
        id: 7,
        title:"Flavours of Punjab",
        cover:"https://b.zmtcdn.com/data/collections/1320e72d96d40332858aa836dd43a43d_1618470736.jpg",
        places: "06 places"
    },
]

const diningFilters = [
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

const diningList = diningOut

const DiningOut = () => {
    return (
        <div>
            <Collection list={collectionList}/>
            <div className="max-width">
                <Filters filterList={diningFilters}/>
            </div>
            <ExploreScetion list={diningList} collectionName={"Dine-Out Restaurants in Vadodara"}/>
        </div>
    )
}
export default DiningOut
