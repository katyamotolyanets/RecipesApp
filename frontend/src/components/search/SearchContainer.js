import {useEffect, useMemo, useState} from "react";

import "../../App.scss"
import firstImage from "../../assets/1.jpg";
import secondImage from "../../assets/2.jpg";
import thirdImage from "../../assets/3.jpg";
import fourthImage from "../../assets/4.jpg";
import fifthImage from "../../assets/5.jpg";
import sixthImage from "../../assets/6.jpg";
import seventhImage from "../../assets/7.jpg";
import {Search} from "./Search";

const images = [firstImage,
    secondImage,
    thirdImage,
    fourthImage,
    fifthImage,
    sixthImage,
    seventhImage]

export const SearchContainer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex < images.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setCurrentIndex(0);
            }
            return currentIndex
        }, 5000)

        return () => clearInterval(intervalId);
    })

    return (
        <div className="search-container">
            <img src={images[currentIndex]}/>
            <div className="search">
                <Search/>
            </div>
        </div>
    )
}