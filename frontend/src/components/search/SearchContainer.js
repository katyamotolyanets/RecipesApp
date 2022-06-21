import React from "react"
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

const delay = 10000;

export function SearchContainer() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {images.map((backgroundColor, index) => (
                    <img
                        className="slide"
                        key={index}
                        src={backgroundColor}
                    ></img>
                ))}
            </div>
            <Search/>
        </div>
    );
}